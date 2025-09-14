import React from 'react';
import { ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';

const SocialFeed = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-navy-900 mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with our latest treatments, client transformations, and beauty tips. 
            Follow us on social media for daily inspiration and exclusive content.
          </p>
          <a
            href="https://www.facebook.com/BeautyandAestheticsByTinaMarie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Follow on Facebook</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Image Divider */}
        <div className="mb-12 flex justify-center">
          <img 
            src="/cab80d76-806c-437e-82cc-62011c6a4029.jpg" 
            alt="Treatment showcase" 
            className="w-full max-w-2xl h-32 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Facebook Feed Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b bg-black text-white">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Beauty and Aesthetics By Tina Marie</h3>
                  <p className="text-rose-100">@BeautyandAestheticsByTinaMarie</p>
                </div>
              </div>
            </div>

            {/* Facebook Feed Integration */}
            <div className="p-6">
              <div 
                className="fb-page" 
                data-href="https://www.facebook.com/BeautyandAestheticsByTinaMarie" 
                data-tabs="timeline" 
                data-width="500" 
                data-height="600" 
                data-small-header="false" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="true"
              >
                <blockquote 
                  cite="https://www.facebook.com/BeautyandAestheticsByTinaMarie" 
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/BeautyandAestheticsByTinaMarie">
                    Beauty and Aesthetics By Tina Marie
                  </a>
                </blockquote>
              </div>
              
              {/* Fallback content while Facebook loads */}
              <div className="text-center py-12 text-gray-500">
                <div className="animate-pulse">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
                <p className="mt-4">Loading Facebook feed...</p>
              </div>
            </div>

            <div className="p-6 border-t bg-gray-50">
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Like our posts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Leave comments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Share with friends</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Facebook</h3>
              <p className="text-gray-600 text-sm mb-4">Daily updates, client stories, and beauty tips</p>
              <a
                href="https://www.facebook.com/BeautyandAestheticsByTinaMarie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 font-medium text-sm"
              >
                Follow Us →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm mb-4">Before & after photos, treatment videos</p>
              <a
                href="https://www.instagram.com/aestheticsbytina.marie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 font-medium text-sm"
              >
                Follow Us →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Reviews</h3>
              <p className="text-gray-600 text-sm mb-4">Read what our clients say about us</p>
              <button className="text-black hover:text-gray-700 font-medium text-sm">
                Leave a Review →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;

