
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

interface MenuItem {
  name: string;
  target: string;
}

const menuItems: MenuItem[] = [
  { name: 'About Us', target: 'about' },
  { name: 'Tournaments', target: 'tournaments' },
  { name: 'Leaderboard', target: 'leaderboard' },
  { name: 'Archives', target: 'archives' },
  { name: 'Contact', target: 'contact' },
  { name: 'Install App', target: '' },
  { name: 'Login', target: '' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (target: string) => {
    if (!target) return;
    
    setIsMenuOpen(false);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
      isScrolled ? 'bg-unite-black/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="./logo.png" alt="UniteWB Logo" className="h-10 w-auto mr-4" />
          <h1 className="text-xl md:text-2xl font-bold text-unite-orange">UniteWB</h1>
        </div>
        
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white hover:text-unite-orange transition-colors"
          aria-label="Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMenuOpen(false)}>
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-unite-darkGray rounded-l-2xl p-8 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-unite-orange">Menu</h2>
            </div>
            
            <nav className="flex-grow">
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <li key={item.name} className="text-xl">
                    <button
                      onClick={() => handleNavigation(item.target)}
                      className={`w-full text-left py-2 border-l-4 pl-4 transition-all ${
                        item.target ? 'border-unite-orange hover:bg-unite-orange/10' : 'border-transparent text-gray-400'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="pt-8 border-t border-gray-700 mt-6">
              <p className="text-sm text-gray-400">© 2023 UniteWB</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
