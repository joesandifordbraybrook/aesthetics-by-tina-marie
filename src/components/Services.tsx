import React, { useState } from 'react';
import { Clock, Sparkles } from 'lucide-react';
import BookingPolicyModal from './BookingPolicyModal';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('anti-wrinkle');
  const [showPolicy, setShowPolicy] = useState(false);

  const handleBookingClick = (e: React.MouseEvent, serviceName?: string) => {
    e.preventDefault();
    const bookingUrl = serviceName 
      ? `https://aestheticsbytinamarie.setmore.com?service=${encodeURIComponent(serviceName)}`
      : 'https://aestheticsbytinamarie.setmore.com';
    
    // Trigger the custom booking popup
    const event = new CustomEvent('setmore-booking', {
      detail: { url: bookingUrl }
    });
    window.dispatchEvent(event);
  };

  const serviceCategories = {
    'anti-wrinkle': {
      title: 'Anti-Wrinkle Injections',
      services: [
        { name: '1 Area Anti Wrinkle', duration: '30 mins', price: '£90', description: 'Includes £25 prescription charge for consultation with our qualified prescriber' },
        { name: '2 Area Anti Wrinkle', duration: '30 mins', price: '£140', description: 'Includes £25 prescription charge for consultation with our qualified prescriber' },
        { name: '3 Area Anti Wrinkle', duration: '30 mins', price: '£180', description: 'Includes £25 prescription charge for consultation with our qualified prescriber' }
      ]
    },
    'filler': {
      title: 'Dermal Fillers',
      services: [
        { name: 'Lips', duration: '1 hr', price: '£120' },
        { name: 'Liquid Rhinoplasty', duration: '1 hr', price: '£120' },
        { name: 'Chin', duration: '1 hr', price: '£100' },
        { name: 'Jaw', duration: '1 hr', price: '£100' },
        { name: 'Cheeks', duration: '1 hr', price: '£100' },
        { name: 'Nasolabial Folds', duration: '1 hr', price: '£100' },
        { name: 'Marionette Lines', duration: '1 hr', price: '£100' },
        { name: 'Filler Dissolve', duration: '1 hr', price: '£100' }
      ]
    },
    'advanced-botox': {
      title: 'Advanced Botox Treatments',
      services: [
        { name: 'Jaw Line Slimming (Botox Masseter)', duration: '30 mins', price: '£100' },
        { name: 'Gummy Smile/Lip Flip', duration: '30 mins', price: '£70' },
        { name: 'Nose Tip Botox/Brow Lift/Chin Botox', duration: '30 mins', price: '£60' },
        { name: 'Nefertiti Lift (Neck Lines)', duration: '30 mins', price: '£100' },
        { name: 'Trap Tox (Neck/Shoulder Muscles)', duration: '30 mins', price: '£100' },
        { name: 'Hyperhydrosis Injections (Under Arm)', duration: '30 mins', price: '£100' }
      ]
    },
    'skin-boosters': {
      title: 'Skin Boosters',
      services: [
        { name: 'Profhilo Skin Booster', duration: '30 mins', price: '£200' },
        { name: '70 Hyal Skin Booster', duration: '30 mins', price: '£100' },
        { name: 'Hyaron Skin Booster', duration: '30 mins', price: '£70' },
        { name: 'Vitaran Polynucleotide Injections', duration: '30 mins', price: '£120' },
        { name: 'Vitaran Polynucleotides Under Eyes', duration: '30 mins', price: '£100' },
        { name: 'Lumi Eyes', duration: '30 mins', price: '£80' }
      ]
    },
    'facials': {
      title: 'Facials & Treatments',
      services: [
        { 
          name: 'Dermaplane', 
          duration: '30 mins', 
          price: '£25',
          description: 'A precise exfoliation technique that removes dead skin cells and peach fuzz, revealing brighter, smoother skin.'
        },
        { 
          name: 'Deluxe Dermaplane', 
          duration: '45 mins', 
          price: '£50',
          description: '✨ Deluxe Dermaplane Facial Experience ✨ Glow from within – relax, rejuvenate, and renew. Indulge in the ultimate skin and soul revival with our Deluxe Dermaplane Facial, a deeply restorative treatment designed to leave your skin smooth, radiant, and refreshed. Accompanied by soothing meditation music, this luxurious facial is more than just skincare—it\'s a sensory journey. Your experience includes: Facial Steam (opens pores and softens skin), Double Cleanse (thorough cleanse to remove impurities), Pore Extraction (gentle manual extractions), Dermaplane (precise exfoliation removing dead skin cells and peach fuzz), Custom Face Mask (targeted to your skin\'s needs), Ice Globes Therapy (refreshing globes to calm inflammation and boost circulation), Nourishing Oils (deeply hydrate and restore glow), Lymphatic Drainage & Face Massage (reduce puffiness and release tension), and SPF Protection (shield your renewed skin).'
        },
        { 
          name: 'Microneedling', 
          duration: '30 mins', 
          price: '£40',
          description: 'A minimally invasive treatment that stimulates collagen production to improve skin texture, reduce fine lines, and enhance overall skin appearance.'
        },
        { 
          name: 'Deluxe Microneedling', 
          duration: '30 mins', 
          price: '£60',
          description: 'Enhanced microneedling treatment with additional serums and aftercare for maximum skin rejuvenation and healing.'
        },
        { 
          name: 'Derma 2.0 Bio', 
          duration: '30 mins', 
          price: '£80',
          description: 'Advanced bio-stimulation treatment that promotes natural skin regeneration and cellular renewal for a youthful, radiant complexion.'
        },
        { 
          name: 'Derma 2.0 Firming', 
          duration: '30 mins', 
          price: '£80',
          description: 'Lift, firm, and redefine with our Derma 2.0 Firming Facial. Your treatment begins with relaxing facial steam, a meticulous double cleanse, and gentle exfoliation to prepare the skin. Microneedling is then performed using the Derma 2.0 Firming cocktail — an advanced formula enriched with multi-weight hyaluronic acid, amino acids, DMAE, Argireline, vitamins, and powerful peptides. These ingredients work together to improve skin firmness, enhance elasticity, stimulate collagen production, and soften fine lines. The result is a smoother, tighter, and more youthful-looking complexion. Your experience concludes with a revitalising Derma Glow Mask or protective SPF for lasting lift and luminosity.'
        },
        { 
          name: 'Derma 2.0 Lifting', 
          duration: '30 mins', 
          price: '£80',
          description: 'Defy gravity with our Derma 2.0 Lifting Facial. This advanced treatment begins with soothing facial steam, a deep double cleanse, and gentle exfoliation to prepare your skin for optimal results. We then perform microneedling with the Derma 2.0 Lifting cocktail — a potent blend of multi-weight hyaluronic acid, DMAE, Argireline, amino acids, vitamins, and peptides. Together, these actives help lift and contour facial features, enhance skin elasticity, stimulate collagen production, and smooth fine lines. The treatment is completed with a luxurious Derma Glow Mask or protective SPF, leaving your skin visibly lifted, firmer, and radiantly youthful.'
        }
      ]
    },
    'vitamins': {
      title: 'Vitamin Injections',
      services: [
        { name: 'Biotin', duration: '20 mins', price: '£30' },
        { name: 'B12', duration: '20 mins', price: '£20' },
        { name: 'B12 x 2', duration: '20 mins', price: '£30' }
      ]
    }
  };

  const packages = [
    { name: 'Glow Up Package', duration: '2 hrs', price: '£350', popular: true },
    { name: '1ml Package', duration: '1 hr', price: '£100' },
    { name: '2ml Package', duration: '1 hr', price: '£180' },
    { name: '3ml Package', duration: '1 hr 30 mins', price: '£260' },
    { name: '4ml Package', duration: '2 hrs', price: '£340' },
    { name: '5ml Package', duration: '2 hrs', price: '£420' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional non-surgical aesthetic treatments tailored to enhance your natural beauty. 
            All treatments performed by qualified practitioner Tina Marie.
          </p>
          
          <div className="mt-8">
            <button
              onClick={() => setShowPolicy(true)}
              className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors font-medium"
            >
              View Booking Policy & Important Information
            </button>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === key
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-serif font-semibold text-navy-900 mb-8 text-center">
              {serviceCategories[activeCategory as keyof typeof serviceCategories].title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories[activeCategory as keyof typeof serviceCategories].services.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-navy-900 mb-3">{service.name}</h4>
                  
                  <div className="flex items-center justify-between mb-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="text-2xl font-bold text-black">{service.price}</span>
                  </div>
                  
                  {service.description && (
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  )}
                  
                  <button
                    onClick={(e) => handleBookingClick(e, service.name)}
                    data-setmore-booking="true"
                    data-booking-url="https://aestheticsbytinamarie.setmore.com"
                    className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    Book Treatment
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Treatment Packages */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-semibold text-navy-900 mb-4">
              Treatment Packages
            </h3>
            <p className="text-gray-600">
              Save money with our specially curated treatment packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative rounded-xl p-6 transition-all hover:scale-105 ${
                pkg.popular 
                  ? 'bg-black text-white shadow-xl' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Sparkles className="h-3 w-3" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <h4 className={`text-xl font-semibold mb-3 ${pkg.popular ? 'text-white' : 'text-navy-900'}`}>
                  {pkg.name}
                </h4>
                
                <div className={`flex items-center justify-between mb-4 ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <span className={`text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-black'}`}>
                    {pkg.price}
                  </span>
                </div>
                
                <button
                  onClick={(e) => handleBookingClick(e, pkg.name)}
                  data-setmore-booking="true"
                  data-booking-url="https://aestheticsbytinamarie.setmore.com"
                  className={`w-full py-3 px-4 rounded-lg transition-all text-center block font-medium ${
                    pkg.popular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <BookingPolicyModal 
        isOpen={showPolicy} 
        onClose={() => setShowPolicy(false)} 
      />
    </section>
  );
};

export default Services;

