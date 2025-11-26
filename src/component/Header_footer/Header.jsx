// import React, { useState, useEffect } from 'react';
// import { Menu, X, Phone } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import BlackLogo from '../../assets/Logo/logo.png'; 
// import WhiteLogo from '../../assets/Logo/logo1.png'; 

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Products', path: '/service' },
//     { name: 'Testimonial', path: '/testimonial' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-[#ffffff]/10 backdrop-blur-lg shadow-xl py-3' 
//           : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-5">
//         <div className="flex items-center justify-between h-15">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={scrolled ? BlackLogo : WhiteLogo}
//               alt="Brand Logo"
//               className="h-20 w-auto object-contain transition-all duration-300 pl-16"
//             />
//           </Link>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-16">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`font-medium text-base tracking-wide relative group transition-colors duration-300 ${
//                   scrolled ? 'text-gray-800 hover:text-[#855d14]' : 'text-white hover:text-[#e5e2d7]'
//                 }`}
//               >
//                 {link.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#855d14] group-hover:w-full transition-all duration-400 ease-in-out" />
//               </Link>
//             ))}
//           </nav>

//           {/* Right Actions */}
//           <div className="flex items-center gap-4">
//             <Link
//               to="/contact"
//               className="hidden md:flex items-center bg-[#855d14] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 text-sm tracking-wider uppercase"
//             >
//               Shop Now
//             </Link>

//             <button
//               aria-label="Toggle Mobile Menu"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className={`lg:hidden p-2 rounded-full transition ${
//                 scrolled ? 'text-gray-800 hover:bg-[#e5e2d7]' : 'text-white hover:bg-white/20'
//               }`}
//             >
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
            
//             <Link
//               to="tel:YOUR_PHONE_NUMBER"
//               className="md:hidden p-3 bg-[#855d14] text-white rounded-full hover:bg-[#e5e2d7] transition"
//             >
//               <Phone size={20} />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden fixed inset-0 top-[6rem] bg-[#ffffff]/95 backdrop-blur-sm shadow-inner transition-transform duration-300 ease-in-out ${
//           mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
//         }`}
//       >
//         <nav className="py-10 px-6 space-y-8 text-center">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               onClick={() => setMobileMenuOpen(false)}
//               className="block text-2xl font-serif text-gray-800 hover:text-[#855d14] transition tracking-wide"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link
//             to="/contact"
//             onClick={() => setMobileMenuOpen(false)}
//             className="inline-block mt-8 bg-gradient-to-r from-[#855d14] to-[#e5e2d7] text-white px-12 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition tracking-wider uppercase"
//           >
//             Shop Now
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }



// src/components/Header/Header.jsx   (or wherever your header is)
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlackLogo from '../../assets/Logo/logo.png';

const translations = {
  EN: {
    home: "Home",
    about: "About",
    products: "Products",
    testimonial: "Testimonial",
    contact: "Contact Us",
    shopNow: "Shop Now",
    switchTo: "Deutsch"
  },
  DE: {
    home: "Startseite",
    about: "Über uns",
    products: "Produkte",
    testimonial: "Kundenstimmen",
    contact: "Kontakt",
    shopNow: "Jetzt shoppen",
    switchTo: "English"
  }
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN'); // EN or DE

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'DE' : 'EN');
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.products, path: '/product' },
    { name: t.testimonial, path: '/testimonial' },
    { name: t.contact, path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-4 border-b border-[#e5e2d7]/30' 
        : 'bg-white/10 backdrop-blur-lg py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={BlackLogo}
              alt="CEEN Logo"
              className="h-20 w-auto object-contain hover:scale-105 transition duration-500"
            />
          </Link>

          {/* Desktop Navigation + Language Button */}
          <nav className="hidden lg:flex items-center gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-lg font-medium text-gray-800 hover:text-[#855d14] transition-colors duration-300
                           after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#855d14] 
                           after:transition-all after:duration-400 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="relative group flex items-center gap-3 px-4 py-1
                         bg-gradient-to-r from-[#9e6b1a] via-[#b8860b] to-[#c49a3e]
                         text-white rounded-full shadow-2xl hover:shadow-3xl hover:shadow-[#b8860b]/70
                         transform hover:scale-110 transition-all duration-500 overflow-hidden
                         border border-[#d4af37]/40"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                               -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
              <Globe className="w-5 h-5 relative z-10" />
              <span className="relative z-10 font-bold tracking-wider">
                {language === 'EN' ? 'DE' : 'EN'}
              </span>
            </button>
          </nav>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4">
            {/* Mobile Language */}
            <button
              onClick={toggleLanguage}
              className="lg:hidden p-3 bg-[#855d14] text-white rounded-full hover:bg-[#6d4a10] 
                         shadow-xl hover:shadow-2xl transform hover:scale-110 transition"
            >
              <Globe size={10} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-full bg-white/90 backdrop-blur shadow-lg"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-24 bg-white shadow-2xl 
                       transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="py-16 px-8 space-y-10 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl font-light text-gray-800 hover:text-[#855d14] transition"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={toggleLanguage}
            className="mt-10 inline-flex items-center gap-4 px-16 py-6 
                       bg-gradient-to-r from-[#9e6b1a] via-[#b8860b] to-[#c49a3e]
                       text-white text-xl font-bold rounded-full shadow-3xl
                       transform hover:scale-110 transition-all duration-500"
          >
            <Globe className="w-7 h-7" />
            {t.switchTo}
          </button>
        </nav>
      </div>
    </header>
  );
}