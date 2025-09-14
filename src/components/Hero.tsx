import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Trigger the custom booking popup
    const event = new CustomEvent('setmore-booking', {
      detail: { url: 'https://aestheticsbytinamarie.setmore.com' }
    });
    window.dispatchEvent(event);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-32 md:pt-24">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/byTinaMarie.png" 
              alt="Aesthetics by Tina Marie" 
             className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto mx-auto"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-navy-900 mb-6 leading-tight">
            <span className="text-gray-600">Professional Aesthetic Treatments</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed px-4">
            Professional non-surgical aesthetic treatments in the heart of Rossendale. 
            Enhance your natural beauty with expert care and attention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <button
              onClick={handleBookingClick}
              data-setmore-booking="true"
              data-booking-url="https://aestheticsbytinamarie.setmore.com"
              className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Book Your Consultation
            </button>
            
            <a href="tel:07585892608" className="border-2 border-navy-900 text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-navy-900 hover:text-white transition-all w-full sm:w-auto text-center">
              Call Now
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16 px-4">
            <div className="flex items-center justify-center space-x-3 text-gray-700 text-sm md:text-base">
              <Star className="h-6 w-6 text-gray-600" />
              <span className="font-medium">Advanced Aesthetics Practitioner</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-gray-700 text-sm md:text-base">
              <MapPin className="h-6 w-6 text-gray-600" />
              <span className="font-medium">Rossendale, Lancashire</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-gray-700 text-sm md:text-base">
              <Clock className="h-6 w-6 text-gray-600" />
              <span className="font-medium">Flexible Appointment Times</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

