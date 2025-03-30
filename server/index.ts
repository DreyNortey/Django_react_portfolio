import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { createProxyMiddleware } from 'http-proxy-middleware';
import { spawn } from 'child_process';

// Start Django server as a child process
// Add --settings parameter to ensure correct settings are loaded
const djangoServer = spawn('python', ['manage.py', 'runserver', '0.0.0.0:8000', '--noreload'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  detached: false,
  env: { ...process.env, DJANGO_SETTINGS_MODULE: 'portfolio.settings' }
});

// Log Django server output
djangoServer.stdout.on('data', (data) => {
  console.log(`Django: ${data}`);
});
djangoServer.stderr.on('data', (data) => {
  console.error(`Django error: ${data}`);
});

// Handle Django server exit
djangoServer.on('close', (code) => {
  console.log(`Django server exited with code ${code}`);
});

// Handle process exit - clean up Django server
process.on('exit', () => {
  console.log('Killing Django server...');
  if (djangoServer && !djangoServer.killed) {
    djangoServer.kill();
  }
});

// Handle SIGINT and SIGTERM
process.on('SIGINT', () => process.exit());
process.on('SIGTERM', () => process.exit());

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Admin proxy with proper redirect handling
const djangoAdminProxy = createProxyMiddleware({
  target: 'http://localhost:8000',
  changeOrigin: true,
  pathRewrite: (path) => {
    // Replace '/django-admin' with '/admin'
    const newPath = path.replace(/^\/django-admin/, '/admin');
    console.log(`Admin proxy: ${path} -> ${newPath}`);
    return newPath;
  },
  // Handle redirects to keep them within our proxy path
  onProxyRes: (proxyRes, req, res) => {
    // If we get a redirect response from Django
    if (proxyRes.headers.location) {
      const location = proxyRes.headers.location;
      // If Django redirects to an admin URL, rewrite it to our django-admin prefix
      if (location.includes('/admin')) {
        proxyRes.headers.location = location.replace(/\/admin/, '/django-admin');
        console.log(`Rewriting redirect: ${location} -> ${proxyRes.headers.location}`);
      }
    }
  },
});

// Apply the admin proxy middleware
app.use('/django-admin', djangoAdminProxy);

// Proxy static and media routes to Django server
app.use('/static', createProxyMiddleware({
  target: 'http://localhost:8000',
  changeOrigin: true,
}));

app.use('/media', createProxyMiddleware({
  target: 'http://localhost:8000',
  changeOrigin: true,
}));

// Proxy Django routes to Django server
app.use('/django', createProxyMiddleware({
  target: 'http://localhost:8000',
  changeOrigin: true,
  pathRewrite: {
    '^/django': '',
  },
}));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
