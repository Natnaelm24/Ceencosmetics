// src/components/Contact/ContactForm.jsx
import { useState } from 'react';
import Toast from '../../../component/ProductCard/UI/Toast.jsx';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send to backend/email service
    console.log('Form submitted:', formData);
    setShowToast(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-6 py-4 rounded-2xl border border-[#e5e2d7] focus:border-[#855d14] focus:outline-none transition-all text-gray-800 placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-6 py-4 rounded-2xl border border-[#e5e2d7] focus:border-[#855d14] focus:outline-none transition-all text-gray-800 placeholder-gray-400"
          />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="w-full px-6 py-4 rounded-2xl border border-[#e5e2d7] focus:border-[#855d14] focus:outline-none transition-all text-gray-800 placeholder-gray-400"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          placeholder="Your Message"
          required
          className="w-full px-6 py-4 rounded-2xl border border-[#e5e2d7] focus:border-[#855d14] focus:outline-none transition-all text-gray-800 placeholder-gray-400 resize-none"
        />

        <button
          type="submit"
          className="w-full bg-[#855d14] hover:bg-[#6b4a10] text-white font-semibold py-5 rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl"
        >
          Send Message
        </button>
      </form>

      {showToast && (
        <Toast
          message="Thank you! Your message has been sent."
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default ContactForm;