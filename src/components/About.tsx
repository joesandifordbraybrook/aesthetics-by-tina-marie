import React from 'react';
import { Award, Heart, Users, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Qualified Practitioner',
      description: 'Advanced Aesthetics Practitioner with extensive training and certification'
    },
    {
      icon: Heart,
      title: 'Personalised Care',
      description: 'Tailored treatments to enhance your natural beauty and boost confidence'
    },
    {
      icon: Users,
      title: 'Trusted by Clients',
      description: 'Building lasting relationships through exceptional results and care'
    },
    {
      icon: Shield,
      title: 'Safe & Professional',
      description: 'Highest standards of safety, hygiene, and professional practice'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-900 mb-6">
              Meet Tina Marie
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to Aesthetics by Tina Marie, where your beauty journey begins. As an Advanced 
              Aesthetics Practitioner based in the heart of Rossendale, I'm passionate about helping 
              you feel confident and beautiful in your own skin.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With extensive training in non-surgical aesthetic treatments, I specialise in anti-wrinkle 
              injections, dermal fillers, skin boosters, and advanced facial treatments. My approach 
              combines artistry with medical precision to deliver natural-looking results that enhance 
              your unique features.
            </p>

            <div className="bg-gray-100 p-6 rounded-xl">
              <p className="text-gray-800 font-medium italic">
                "My mission is to help every client feel their most confident and beautiful self. 
                I believe in enhancing natural beauty, not changing it."
              </p>
              <p className="text-gray-700 mt-2 font-semibold">- Tina Marie</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
              <img 
                src="/tina-marie.webp" 
                alt="Tina Marie - Professional Aesthetic Practitioner"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-serif font-semibold text-navy-900 text-center mb-12">
            Why Choose Aesthetics by Tina Marie
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-navy-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

