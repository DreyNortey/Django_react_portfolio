import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // Normally would send to API/backend
    toast({
      title: "Success!",
      description: "You've been subscribed to the newsletter!",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-zinc-800 pt-12 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#home" className="text-white font-bold text-xl inline-block mb-4">
              <span className="text-primary">&lt;</span>John
              <span className="text-green-500">Doe</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-gray-400 mb-4">
              IT Support professional transitioning to Cloud Computing with a passion for automation and infrastructure as code.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="Medium"
              >
                <FaMedium className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#certifications" className="text-gray-400 hover:text-white transition-colors duration-300">Certifications</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new blog posts and projects.
            </p>
            <form className="flex" onSubmit={handleSubscribe}>
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="w-full rounded-r-none bg-zinc-900 border-gray-700 focus:border-primary focus:border-r-0" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="rounded-l-none px-4"
              >
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
