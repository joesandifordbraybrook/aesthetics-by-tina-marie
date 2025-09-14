import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Absolutely amazing experience! Tina Marie is so professional and made me feel completely at ease. The results from my anti-wrinkle treatment are exactly what I wanted - natural and refreshed.',
      treatment: 'Anti-wrinkle injections'
    },
    {
      name: 'Emma L.',
      rating: 5,
      text: 'I\'ve been coming to Tina Marie for over a year now and I couldn\'t be happier. Her attention to detail and gentle approach make every visit a pleasure. Highly recommend!',
      treatment: 'Dermal fillers'
    },
    {
      name: 'Jessica R.',
      rating: 5,
      text: 'The deluxe dermaplane facial was incredible! My skin has never felt so smooth and radiant. Tina Marie\'s expertise really shows in the quality of her work.',
      treatment: 'Deluxe Dermaplane'
    },
    {
      name: 'Michelle K.',
      rating: 5,
      text: 'Professional, clean, and welcoming environment. Tina Marie takes the time to explain everything and ensures you\'re comfortable throughout. The results speak for themselves!',
      treatment: 'Skin boosters'
    },
    {
      name: 'Lisa T.',
      rating: 5,
      text: 'I was nervous about my first aesthetic treatment, but Tina Marie put me completely at ease. The consultation was thorough and the results are better than I expected.',
      treatment: 'Lip fillers'
    },
    {
      name: 'Rachel H.',
      rating: 5,
      text: 'The clinic is beautiful and Tina Marie is so knowledgeable. She really listens to what you want and delivers amazing results. I wouldn\'t go anywhere else!',
      treatment: 'Profhilo'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-900 mb-6">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our satisfied clients have to say 
            about their experience with Aesthetics by Tina Marie.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
                <Quote className="h-6 w-6 text-gray-400" />
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{review.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-navy-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-black text-white rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5★</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Professional Care</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-navy-900 mb-4">
            Ready to Join Our Happy Clients?
          </h3>
          <p className="text-gray-600 mb-8">
            Book your consultation today and discover why our clients love coming back.
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
            Book Your Treatment
          </button>
        </div>

        {/* Review invitation */}
        <div className="mt-16 bg-navy-900 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Share Your Experience</h3>
          <p className="text-gray-300 mb-6">
            Had a treatment with us? We'd love to hear about your experience!
          </p>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

