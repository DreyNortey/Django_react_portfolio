import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
  consent: z.boolean().refine((val) => val === true)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // You would normally save this to a database or send an email
      // For now, we'll just log it and return success
      console.log("Contact form submission:", validatedData);
      
      return res.status(200).json({ 
        success: true,
        message: "Message received. Thank you for contacting us!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors
        });
      }
      
      return res.status(500).json({ 
        success: false,
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Download resume endpoint
  app.get("/api/resume", (req: Request, res: Response) => {
    // In a real implementation, you would serve a real PDF file
    // For now, we'll just return a success message
    return res.status(200).json({
      success: true,
      message: "Resume download endpoint",
      downloadUrl: "/path/to/resume.pdf"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
