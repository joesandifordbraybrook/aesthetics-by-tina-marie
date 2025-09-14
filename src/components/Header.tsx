import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Trigger the custom booking popup
    const event = new CustomEvent('setmore-booking', {
      detail: { url: 'https://aestheticsbytinamarie.setmore.com' }
    });
    window.dispatchEvent(event);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-3">
          <div className="flex items-center">
            <h1 className="text-lg md:text-xl font-serif font-semibold text-navy-900">
              Aesthetics by Tina Marie
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Services', id: 'services' },
              { name: 'About', id: 'about' },
              { name: 'Gallery', id: 'gallery' },
              { name: 'Reviews', id: 'reviews' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4">
            <a href="tel:07585892608" className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium text-sm">07585 892608</span>
            </a>
            <button
              onClick={handleBookingClick}
              data-setmore-booking="true"
              data-booking-url="https://aestheticsbytinamarie.setmore.com"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 font-medium text-sm"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <a href="tel:07585892608" className="p-2 text-gray-700 hover:text-black transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4 mx-4 mb-4">
            <nav className="space-y-4">
              {[
                { name: 'Services', id: 'services' },
                { name: 'About', id: 'about' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Reviews', id: 'reviews' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-black transition-colors font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t">
                <button
                  onClick={handleBookingClick}
                  data-setmore-booking="true"
                  data-booking-url="https://aestheticsbytinamarie.setmore.com"
                  className="block w-full bg-black text-white px-6 py-3 rounded-full text-center font-medium text-sm"
                >
                  Book Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;;

