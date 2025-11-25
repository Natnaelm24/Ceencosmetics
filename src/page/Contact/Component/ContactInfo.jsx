// src/components/Contact/ContactInfo.jsx
import { contactInfo } from './contactData';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {/* Email */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#e5e2d7] hover:shadow-xl transition-all">
        <div className="w-14 h-14 bg-[#855d14] rounded-full flex items-center justify-center mb-5">
          <Mail className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#855d14] mb-2">Email Us</h3>
        <p className="text-gray-600">{contactInfo.email}</p>
      </div>

      {/* Phone */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#e5e2d7] hover:shadow-xl transition-all">
        <div className="w-14 h-14 bg-[#855d14] rounded-full flex items-center justify-center mb-5">
          <Phone className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#855d14] mb-2">Call Us</h3>
        <p className="text-gray-600">{contactInfo.phone}</p>
      </div>

      {/* Address */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#e5e2d7] hover:shadow-xl transition-all">
        <div className="w-14 h-14 bg-[#855d14] rounded-full flex items-center justify-center mb-5">
          <MapPin className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#855d14] mb-2">Visit Us</h3>
        <p className="text-gray-600">{contactInfo.address}</p>
      </div>

      {/* Hours */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#e5e2d7] hover:shadow-xl transition-all">
        <div className="w-14 h-14 bg-[#855d14] rounded-full flex items-center justify-center mb-5">
          <Clock className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[#855d14] mb-2">Hours</h3>
        <p className="text-gray-600">{contactInfo.hours}</p>
      </div>
    </div>
  );
};

export default ContactInfo;