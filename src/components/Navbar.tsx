
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Problem', link: '/problem' },
    { title: 'Solution', link: '/solution' },
    { title: 'Features', link: '/features' },
    { title: 'Technology', link: '/technology' },
    { title: 'Architecture', link: '/architecture' },
    { title: 'Benefits', link: '/benefits' },
    { title: 'Roadmap', link: '/roadmap' },
    { title: 'Contact', link: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel backdrop-blur-md bg-cyber-darkPurple/90 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-xl text-cyber-gradient">ModusMapping</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className={`px-2 py-1 text-sm transition-colors duration-200 ${
                    isActive(item.link)
                      ? 'text-cyber-blue'
                      : 'text-cyber-lightGray hover:text-cyber-blue'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild className="ml-4 bg-cyber-blue hover:bg-cyber-blue/80 text-white">
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-cyber-blue focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel backdrop-blur-lg border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className={`block px-3 py-2 ${
                  isActive(item.link)
                    ? 'text-cyber-blue'
                    : 'text-cyber-lightGray hover:text-cyber-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button 
              asChild
              className="w-full mt-3 bg-cyber-blue hover:bg-cyber-blue/80 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
