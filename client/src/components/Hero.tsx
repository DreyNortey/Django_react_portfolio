import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import { motion } from "framer-motion";

interface TypewriterProps {
  phrases: string[];
}

const TypeWriter = ({ phrases }: TypewriterProps) => {
  const typingElementRef = useRef<HTMLSpanElement>(null);
  const phrasesRef = useRef<string[]>(phrases);
  const currentPhraseIndexRef = useRef<number>(0);
  const currentCharIndexRef = useRef<number>(0);
  const isDeletingRef = useRef<boolean>(false);

  useEffect(() => {
    let typingSpeed = 100;
    
    const typeEffect = () => {
      const currentPhrase = phrasesRef.current[currentPhraseIndexRef.current];
      
      if (!typingElementRef.current) return;
      
      if (isDeletingRef.current) {
        typingElementRef.current.textContent = currentPhrase.substring(0, currentCharIndexRef.current - 1);
        currentCharIndexRef.current--;
        typingSpeed = 50;
      } else {
        typingElementRef.current.textContent = currentPhrase.substring(0, currentCharIndexRef.current + 1);
        currentCharIndexRef.current++;
        typingSpeed = 150;
      }
      
      if (!isDeletingRef.current && currentCharIndexRef.current === currentPhrase.length) {
        isDeletingRef.current = true;
        typingSpeed = 2000; // Pause at end of phrase
      } else if (isDeletingRef.current && currentCharIndexRef.current === 0) {
        isDeletingRef.current = false;
        currentPhraseIndexRef.current = (currentPhraseIndexRef.current + 1) % phrasesRef.current.length;
        typingSpeed = 500; // Pause before typing next phrase
      }
      
      setTimeout(typeEffect, typingSpeed);
    };
    
    const typingTimeout = setTimeout(typeEffect, 1000); // Initial delay
    
    return () => clearTimeout(typingTimeout);
  }, []);

  return <span ref={typingElementRef} className="text-typing"></span>;
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-100">Hi, I'm </span>
              <span className="text-primary">John Doe</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-300 h-12">
              <TypeWriter phrases={[
                'IT Support Professional',
                'Cloud Engineer',
                'AWS Certified Solutions Architect',
                'DevOps Enthusiast'
              ]} />
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transitioning from IT Support to Cloud Computing with expertise in AWS, Azure, 
              and DevOps practices. Passionate about automation, infrastructure as code, and cloud architecture.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button 
                className="gap-2"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code size={18} /> View Projects
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail size={18} /> Contact Me
              </Button>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300" 
                aria-label="Medium"
              >
                <FaMedium size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-purple-500 opacity-20 absolute -top-4 -left-4 animate-pulse"></div>
              <div className="w-80 h-80 overflow-hidden rounded-full border-4 border-gray-800 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                  alt="John Doe portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zinc-800 px-4 py-2 rounded-full shadow-lg border border-gray-700 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Open to Work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a 
          href="#about" 
          className="text-gray-400 hover:text-white"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
