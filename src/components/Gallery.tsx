import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-900 mb-6">
            Our Work & Social Media
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our latest treatments, client results, and behind-the-scenes content. 
            Follow us on social media for daily updates and beauty inspiration.
          </p>
        </div>

        {/* Treatment Results Showcase */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <img 
              src="/2331bb0f-54e9-4f11-a9ea-794163496f81.jpg" 
              alt="Treatment results" 
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <img 
              src="/23879f10-da2a-4be1-8e44-f3d649170cdd.jpg" 
              alt="Treatment results" 
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <img 
              src="/cab80d76-806c-437e-82cc-62011c6a4029.jpg" 
              alt="Treatment results" 
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.facebook.com/BeautyandAestheticsByTinaMarie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/aestheticsbytina.marie/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Facebook Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Treatment Video - Facial Mapping */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold text-navy-900">Facial Mapping for Anti-Wrinkle Injections</h3>
              <p className="text-gray-600 text-sm">Professional aesthetic treatments in action</p>
            </div>
            <div className="aspect-video">
              <div className="fb-video" data-href="https://www.facebook.com/BeautyandAestheticsByTinaMarie/videos/2171088420038411/" data-width="500" data-show-text="false">
                <blockquote cite="https://www.facebook.com/BeautyandAestheticsByTinaMarie/videos/2171088420038411/" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/BeautyandAestheticsByTinaMarie/videos/2171088420038411/"></a>
                  <p>✨ Marking up before anti-wrinkle injections is key to safe and natural results. Every face is unique, which is why careful mapping helps highlight the right muscles while avoiding important danger zones

✅ Safety and precision always come first!

📩 Direct message Instagram/Facebook for an appointment or consultation 

📍Kay Street Rawtenstall BB4 7LS 

📲 07585892608

#AntiWrinkle #FacialMapping #AestheticsSafety #SkinConfidence</p>
                  Posted by <a href="https://www.facebook.com/BeautyandAestheticsByTinaMarie">Aesthetics by Tina Marie</a> on Thursday 11 September 2025
                </blockquote>
              </div>
            </div>
          </div>

          {/* Ultrasound Ambassador Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold text-navy-900">Ultrasound Ambassador</h3>
              <p className="text-gray-600 text-sm">Advanced technology for safer treatments</p>
            </div>
            <div className="h-80 flex justify-center bg-gray-50">
              <img 
                src="/e8c03b28-4b73-4fca-9c39-67519b1057c1.jpg" 
                alt="Ultrasound Ambassador - Advanced aesthetic technology"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                We are an <strong>Ultrasound Ambassador</strong> in aesthetics, helping raise awareness about how ultrasound technology can make cosmetic treatments safer and more precise.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                My goal is to ensure clients feel confident knowing their care is supported by advanced technology and best practice.
              </p>
              <p className="text-navy-900 font-semibold text-sm">
                Emergency Appointments available for clients & Practitioners
              </p>
            </div>
          </div>

          {/* Facebook Post */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold text-navy-900">Latest Updates</h3>
              <p className="text-gray-600 text-sm">Follow our journey and client stories</p>
            </div>
            <div className="flex justify-center p-4">
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBeautyandAestheticsByTinaMarie%2Fposts%2F706922372094414&show_text=true&width=500" 
                width="500" 
                height="679" 
                style={{border: 'none', overflow: 'hidden'}} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Post"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-navy-900 mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-6">
              Follow us on social media for the latest updates, treatment showcases, and beauty tips. 
              See real results from our satisfied clients!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/BeautyandAestheticsByTinaMarie"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Follow on Facebook
              </a>
              <a
                href="https://www.instagram.com/aestheticsbytina.marie/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to experience professional aesthetic treatments?
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              const event = new CustomEvent('setmore-booking', {
                detail: { url: 'https://aestheticsbytinamarie.setmore.com' }
              });
              window.dispatchEvent(event);
            }}
            data-setmore-booking="true"
            data-booking-url="https://aestheticsbytinamarie.setmore.com"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

