// src/components/UI/Toast.jsx
import { useEffect } from 'react';
import { Check } from 'lucide-react'; // Optional: npm install lucide-react

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="bg-white rounded-3xl shadow-2xl border border-[#e5e2d7] flex items-center gap-4 px-8 py-5 min-w-[320px] max-w-md">
        {/* Golden Checkmark Circle */}
        <div className="w-12 h-12 bg-[#855d14] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
          <Check className="w-7 h-7 text-white" strokeWidth={3} />
          {/* Or without lucide: */}
          {/* <span className="text-2xl font-bold text-white">Checkmark</span> */}
        </div>

        {/* Message */}
        <p className="font-medium text-[#855d14] text-base pr-4">
          {message}
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="ml-auto text-[#855d14]/60 hover:text-[#855d14] transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;