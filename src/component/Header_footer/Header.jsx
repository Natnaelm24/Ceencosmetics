// src/component/Header_footer/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import BlackLogo from "../../assets/Logo/logo.png";

const translations = {
  EN: {
    home: "Home",
    about: "About",
    products: "Products",
    testimonial: "Testimonials",
    contact: "Contact",
    ingredients: "Ceen Ingredient",
    concerns: "Skin Concerns",
    guides: "Guides",
    switchTo: "Deutsch",
  },
  DE: {
    home: "Startseite",
    about: "Über uns",
    products: "Produkte",
    testimonial: "Kundenstimmen",
    contact: "Kontakt",
    ingredients: "Inhaltsstoffe",
    concerns: "Hautprobleme",
    guides: "Ratgeber",
    switchTo: "English",
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [concernsData, setConcernsData] = useState([]); // Raw API data

  const t = translations[language];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch skin concerns ONCE
  useEffect(() => {
    const fetchConcerns = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/skin-concerns`);
        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        setConcernsData(data);
      } catch (err) {
        console.error("Failed to load skin concerns:", err);
        setConcernsData([]);
      }
    };

    fetchConcerns();
  }, []);

  // Compute translated links instantly when language changes
  const skinConcernLinks = concernsData.map((item) => ({
    label:
      language === "DE" && item.title_de?.trim()
        ? item.title_de
        : item.title_en || item.title || "Unknown",
    path: `/${item.slug}`,
  }));

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "DE" : "EN"));
  };

  // Navigation
  const primaryNav = [
    { name: t.home, path: "/" },
    { name: t.about, path: "/about" },
    { name: t.products, path: "/product" },
    { name: t.testimonial, path: "/testimonial" },
    { name: t.contact, path: "/contact" },
  ];

  const secondaryNav = [
    { name: t.ingredients, path: "/Ceen-ingredient" },
    { name: t.concerns, dropdown: skinConcernLinks },
    { name: t.guides, path: "/skincare-guides" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-lg"
      }`}
    >
      {/* TOP BAR */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
              <img src={BlackLogo} alt="CEEN Cosmetics" className="h-10 w-auto" />
            </Link>

            {/* Desktop Primary Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {primaryNav.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Language + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition text-sm font-medium"
              >
                <Globe size={16} />
                {language}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECONDARY NAV (Skin Concerns Dropdown) */}
      <div className="bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="hidden lg:flex items-center justify-center gap-10 h-12">
            {secondaryNav.map((link, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                {!link.dropdown ? (
                  <Link
                    to={link.path}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2 transition"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 py-2 transition">
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === link.name && link.dropdown.length > 0 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="block px-5 py-2.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Language Button */}
          <div className="lg:hidden py-3 flex justify-center">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm text-sm font-medium"
            >
              <Globe size={16} />
              {t.switchTo}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-8">
            {/* Main Menu */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">
                Main
              </h3>
              {primaryNav.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-4">
                Resources
              </h3>
              {secondaryNav.map((link, i) => (
                <div key={i}>
                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 px-4 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <details className="group">
                      <summary className="flex justify-between items-center py-3 px-4 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-lg cursor-pointer list-none">
                        {link.name}
                        <ChevronDown size={16} className="transition group-open:rotate-180" />
                      </summary>
                      <div className="mt-2 ml-6 space-y-1">
                        {skinConcernLinks.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded text-sm"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}