import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '07585 892608',
      action: 'tel:07585892608'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'tinaday3@hotmail.co.uk',
      action: 'mailto:tinaday3@hotmail.co.uk'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '41-45 Kay Street, Rossendale, England BB4 7LS',
      action: 'https://maps.google.com/?q=41-45+Kay+Street+Rossendale+England+BB4+7LS'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: 'Wed & Thu: 10:00 AM - 9:00 PM | Sat: 11:00 AM - 6:00 PM',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your aesthetic journey? Contact us today to book your consultation 
            or to ask any questions about our treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-navy-900 mb-1">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-black transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <span className="text-gray-600">{info.details}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Opening Hours */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Opening Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Monday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Tuesday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
                <div className="flex justify-between py-1 bg-gray-50 px-2 rounded">
                  <span className="text-navy-900 font-medium">Wednesday</span>
                  <span className="text-navy-900 font-medium">10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between py-1 bg-gray-50 px-2 rounded">
                  <span className="text-navy-900 font-medium">Thursday</span>
                  <span className="text-navy-900 font-medium">10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Friday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
                <div className="flex justify-between py-1 bg-gray-50 px-2 rounded">
                  <span className="text-navy-900 font-medium">Saturday</span>
                  <span className="text-navy-900 font-medium">11:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Appointments available during opening hours. Book online or call to schedule.
              </p>
            </div>

            {/* Quick Booking Section */}
            <div className="bg-black text-white rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-8 w-8" />
                <h3 className="text-2xl font-semibold">Book Online 24/7</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Our online booking system is available around the clock for your convenience. 
                Choose your preferred treatment and time slot.
              </p>
              <a
                href="https://aestheticsbytinamarie.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-2xl font-semibold text-navy-900 mb-2">Find Us</h3>
              <p className="text-gray-600">
                Located in the heart of Rossendale, easily accessible with parking available.
              </p>
            </div>
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.123456789!2d-2.2847!3d53.7019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb2c5e8f9b9c9%3A0x1234567890abcdef!2s41-45%20Kay%20St%2C%20Rossendale%20BB4%207LS%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aesthetics by Tina Marie Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {/* Image Divider */}
        <div className="mt-12 mb-8 flex justify-center">
          <img 
            src="/2331bb0f-54e9-4f11-a9ea-794163496f81.jpg" 
            alt="Professional treatment" 
            className="w-full max-w-4xl h-28 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">Before Your Visit</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">Consultation</h4>
                <p className="text-gray-600 text-sm">
                  All new clients receive a thorough consultation to discuss your goals and 
                  determine the best treatment plan for you.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">Preparation</h4>
                <p className="text-gray-600 text-sm">
                  We'll provide you with detailed pre-treatment instructions to ensure 
                  optimal results and minimize any potential side effects.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">Aftercare</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive aftercare guidance and support to help you achieve 
                  the best possible results from your treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

