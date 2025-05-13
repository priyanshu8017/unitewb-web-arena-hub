
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const FloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-unite-orange rounded-full p-3 shadow-lg 
                  transition-all duration-300 hover:bg-unite-lightOrange transform hover:scale-110
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="text-white" size={24} />
    </button>
  );
};

export default FloatingButton;
