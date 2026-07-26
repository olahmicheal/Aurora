import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
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
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-red-600 rounded-full flex flex-col items-center justify-center text-white relative overflow-hidden">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mb-0.5">
              <path d="M12 3L3 21h18L12 3z" />
            </svg>
            <div className="text-[5px] font-bold tracking-widest text-center leading-tight">
              AURORA<br/>CREATIVE
            </div>
          </div>
        </div>

        {/* Desktop Links */}
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

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
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