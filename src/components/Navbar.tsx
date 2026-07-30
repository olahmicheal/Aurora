import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ scrollLocked }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/Images-20260727T192134Z-1-001/Images/logo.png" 
            alt="Aurora Creative" 
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Links — Hidden when locked */}
        {!scrollLocked && (
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollTo('hero')} className="text-sm font-medium hover:text-red-600 transition-colors">Home</button>
            <button onClick={() => scrollTo('portfolio')} className="text-sm font-medium hover:text-red-600 transition-colors">Services</button>
            <button onClick={() => scrollTo('about')} className="text-sm font-medium hover:text-red-600 transition-colors">About</button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-6 py-2.5 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-all"
            >
              Contact
            </button>
          </div>
        )}

        {/* Mobile Toggle — Hidden when locked */}
        {!scrollLocked && (
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && !scrollLocked && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-6 px-6 flex flex-col gap-4">
          <button onClick={() => scrollTo('hero')} className="text-left font-medium">Home</button>
          <button onClick={() => scrollTo('portfolio')} className="text-left font-medium">Services</button>
          <button onClick={() => scrollTo('about')} className="text-left font-medium">About</button>
          <button onClick={() => scrollTo('contact')} className="text-left font-medium text-red-600">Contact</button>
        </div>
      )}
    </nav>
  );
}