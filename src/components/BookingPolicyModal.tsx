import React from 'react';
import { X, Calendar, Clock, AlertTriangle, Heart, Users } from 'lucide-react';

interface BookingPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingPolicyModal: React.FC<BookingPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-serif font-semibold text-navy-900">
            Booking Policy & Important Information
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Meet Our Prescriber */}
          <section className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900">Meet Our Prescriber</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Our qualified prescriber ensures all Botox treatments are delivered safely and professionally.
            </p>
            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-navy-900 mb-2">Consultation Required</h4>
              <p className="text-gray-700 mb-3">
                A consultation must be booked with our prescriber before any Botox treatment. This allows us to review your medical history, discuss your goals, and confirm suitability.
              </p>
              <p className="font-medium text-navy-900">
                Book your consultation today to get started.
              </p>
            </div>
          </section>

          {/* Treatment Timing & Booking Policy */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900">Treatment Timing & Booking Policy</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Please note that each treatment is carefully timed to allow the best possible results within the scheduled session. When you book a service, you are reserving a specific time slot—and the treatment will be carried out within that time only.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-3">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <p className="text-gray-700">
                  <strong>If you arrive late,</strong> your appointment will still end at the scheduled time to avoid delays for the next client.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <p className="text-gray-700">
                  <strong>Requests for additional services</strong> or extended time cannot be accommodated on the day unless arranged in advance and based on availability.
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <p className="text-gray-700">
                  <strong>To ensure you get the most out of your appointment,</strong> please arrive on time and book the correct service for your needs.
                </p>
              </div>
            </div>
          </section>

          {/* Booking & Cancellation Policy */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900">📅 Booking & Cancellation Policy</h3>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-gray-700">
                To secure your appointment, a <strong>non-refundable deposit</strong> is required at the time of booking. This deposit will be deducted from your total on the day of your treatment.
              </p>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-navy-900 mb-3 flex items-center">
                <span className="mr-2">❌</span> Cancellations & Rescheduling
              </h4>
              <p className="text-gray-700 mb-3">
                If you need to cancel or reschedule, <strong>at least 24 hours' notice is required.</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Cancellations or rescheduling made with less than 24 hours' notice will result in the loss of your deposit.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>No-shows may be charged the full appointment cost and may not be able to book future appointments.</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-3 font-medium">
                This policy is in place to protect my time and allow other clients the opportunity to book.
              </p>
            </div>
            
            <p className="text-center text-gray-600 mt-4 italic">
              Thank you for your understanding and continued support.
            </p>
          </section>

          {/* Post-Treatment Reminder */}
          <section className="bg-pink-50 border border-pink-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
              <span className="mr-2">💉</span> Post-Treatment Reminder <span className="ml-2">💕</span>
            </h3>
            <p className="text-gray-700 mb-4">
              A little bruising or swelling after aesthetic treatments (such as fillers or injectables) is completely normal—especially around delicate areas like the lips or under the eyes.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✨</span>
                <p className="text-gray-700">
                  This is just your body's natural response and is nothing to worry about.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <p className="text-gray-700">
                  Bruising and swelling typically settle within a few days, and final results are best judged after 1–2 weeks.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">💧</span>
                <p className="text-gray-700">
                  Keep hydrated, avoid touching the area, and follow any aftercare advice provided.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment Room Policy */}
          <section className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900">👥 Treatment Room Policy</h3>
            </div>
            <p className="text-gray-700 mb-4">
              For insurance and safety purposes, only one person is allowed in the treatment room during procedures. This ensures optimal treatment conditions and maintains our professional standards.
            </p>
            <p className="text-center text-gray-600 italic">
              Thank you for your understanding and continued support 💕
            </p>
          </section>

          {/* Close Button */}
          <div className="text-center pt-6 border-t">
            <button
              onClick={onClose}
              className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPolicyModal;

