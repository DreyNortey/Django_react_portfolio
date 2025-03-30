import { useEffect } from 'react';

export default function DjangoApp() {
  useEffect(() => {
    // Add a small delay to ensure the component is fully mounted before redirecting
    const timer = setTimeout(() => {
      // Redirect to the Django application
      window.location.href = '/django/';
    }, 100);
    
    // Clear the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Redirecting to Andrews Nortey's Portfolio</h1>
        <p className="mb-4">You are being redirected to the Django-powered portfolio application.</p>
        <p>If you are not redirected automatically, <a href="/django/" className="text-blue-600 font-medium hover:underline">click here</a>.</p>
      </div>
    </div>
  );
}