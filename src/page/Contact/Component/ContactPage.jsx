// src/components/Contact/ContactPage.jsx
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { Heart, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#f1f0ec] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#855d14] mb-6 tracking-wide">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-[#e5e2d7]">
            <h2 className="text-3xl font-bold text-[#855d14] mb-8 flex items-center gap-3">
              <Send className="w-8 h-8" />
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Info Cards */}
          <div>
            <h2 className="text-3xl font-bold text-[#855d14] mb-8">
              We’re Here For You
            </h2>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;