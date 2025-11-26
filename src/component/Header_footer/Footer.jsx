import React from "react";
import logo from "../../assets/Logo/logo.png";
import { Link } from "react-router-dom";

import visa from "../../assets/card/visa.png";
import mastercard from "../../assets/card/master.png";
import paypal from "../../assets/card/paypal.png";
import applepay from "../../assets/card/apple-pay.png";

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Truck,
  RefreshCw,
  Shield,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#e5e2d7] text-black pt-12">
      {/* Top Trust Badges */}
      <div className="bg-[#855d14] py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Truck className="text-white" size={28} />
            <div>
              <h4 className="font-semibold text-white">Free Shipping</h4>
              <p className="text-white text-sm">On orders over $50</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <RefreshCw className="text-white" size={28} />
            <div>
              <h4 className="font-semibold text-white">30-Day Returns</h4>
              <p className="text-white text-sm">Money-back guarantee</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Shield className="text-white" size={28} />
            <div>
              <h4 className="font-semibold text-white">Secure Payment</h4>
              <p className="text-white text-sm">100% secure checkout</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Social */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4 ml-10">
            <img src={logo} alt="Logo" className="h-20" />
          </Link>
          <p className="text-black mb-4">
            Discover your natural glow with our premium skincare and cosmetics.
            Cruelty-free & effective.
          </p>
          <div className="flex space-x-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-[#855d14] text-[#e5e2d7] p-2 rounded-full hover:bg-[#ffffff] hover:text-[#855d14] transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Shop</h4>
          <ul className="space-y-2 text-black">
            {[
              "Foam cleanser",
              "Ceramide moisturizer",
              "Organic retinol serum",
              "24 Hr face cream Q10",
              "Sun protection Lotion  Spf 50",
              "Hemp Hyaluronic organic serum",
            ].map((link) => (
              <li key={link}>
                <a
                  href="/product"
                  className="hover:text-[#ffffff] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-black">
            {[
              { name: "About Ceen", href: "/about" },
              { name: "Contact Us", href: "/contact" },
              { name: "Our Product", href: "/product" },
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
              { name: "FAQ", href: "#" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#ffffff] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
          <div className="space-y-3 mb-4 text-black">
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-black" />
              <span>info@Ceen.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-black" />
              <span>+49 160 755 4757</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-black" />
              <span>Cologne, Germany</span>
            </div>
          </div>
          <p className="text-black mb-2">Get beauty tips & exclusive offers</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 bg-[#7a5212] border border-[#e5e2d7] text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#e5e2d7]"
            />
            <button className="bg-[#ffffff] hover:bg-[#e5e2d7] text-[#855d14] px-4 py-2 rounded-r-lg transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#855d14]">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-lg mb-4 md:mb-0">
            © 2024 CEEN. All rights reserved.
          </p>
          <div className="flex space-x-5 text-">
            <img src={paypal} alt="PayPal" className="h-13" />
            <img src={mastercard} alt="Mastercard" className="h-10" />
            <img src={visa} alt="Visa" className="h-10" />
            <img src={applepay} alt="Apple Pay" className="h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
