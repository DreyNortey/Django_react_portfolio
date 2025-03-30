export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = 64; // Account for fixed navbar height
    const sectionTop = section.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  }
};

export const registerScrollSpy = (): void => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const handleScroll = () => {
    let currentSection = '';
    
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionId = section.getAttribute('id') || '';
      
      // Adjust the offset to determine when a section is considered "active"
      if (sectionTop <= 100) {
        currentSection = sectionId;
      }
    });
    
    navLinks.forEach((link) => {
      link.classList.remove('text-primary', 'font-medium');
      link.classList.add('text-gray-300');
      
      const href = link.getAttribute('href');
      if (href && href === `#${currentSection}`) {
        link.classList.remove('text-gray-300');
        link.classList.add('text-primary', 'font-medium');
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
};
