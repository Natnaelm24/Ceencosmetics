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




import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlackLogo from '../../assets/Logo/logo.png';
import WhiteLogo from '../../assets/Logo/logo1.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/product' },
    { name: 'Testimonial', path: '/testimonial' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#ffffff]/10 backdrop-blur-lg shadow-xl py-5'
          : 'bg-[#ffffff]/10 backdrop-blur-lg shadow-xl py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-1">
        <div className="flex items-center justify-between h-15">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={BlackLogo}
              alt="Brand Logo"
              className="h-20 w-auto object-contain transition-all duration-300 pl-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-18">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-base tracking-wide relative group transition-colors duration-300 text-gray-800 hover:text-[#855d14]`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#855d14] group-hover:w-full transition-all duration-400 ease-in-out" />
              </Link>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/shopnow"
              className="hidden md:flex items-center bg-[#ffffff] text-[#855d14] border-2 border-[#855d14] px-6 py-2.5 rounded-full font-semibold hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 text-sm tracking-wider uppercase"
            >
              Shop Now
            </Link>

            <button
              aria-label="Toggle Mobile Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-gray-800 hover:bg-[#e5e2d7] transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link
              to="tel:YOUR_PHONE_NUMBER"
              className="md:hidden p-3 bg-[#855d14] text-white rounded-full hover:bg-[#6d4a10] transition"
            >
              <Phone size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[6rem] bg-white shadow-inner transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="py-10 px-6 space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-serif text-gray-800 hover:text-[#855d14] transition tracking-wide"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/shopnow"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block mt-8 bg-[#855d14] text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-[#6d4a10] hover:shadow-2xl transform hover:scale-105 transition tracking-wider uppercase"
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
