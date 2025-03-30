import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import useActiveSection from "@/hooks/useActiveSection";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-900/95 shadow-md py-2" : "bg-zinc-900/80 backdrop-blur-sm"
      }`}
      id="navbar"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="text-white font-bold text-xl">
              <span className="text-primary">&lt;</span>John
              <span className="text-green-500">Doe</span>
              <span className="text-primary">/&gt;</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`transition-colors duration-300 nav-link ${
                      activeSection === item.href.substring(1)
                        ? "text-primary font-medium"
                        : "text-gray-300 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resume Download Button */}
          <div className="hidden md:block">
            <Button
              className="flex items-center gap-2"
              onClick={() => window.open("#", "_blank")}
            >
              <Download size={16} />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md ${
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-zinc-800"
                      : "text-gray-300 hover:text-primary hover:bg-zinc-800"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="w-full mt-4 justify-center flex items-center gap-2"
                onClick={() => window.open("#", "_blank")}
              >
                <Download size={16} />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
