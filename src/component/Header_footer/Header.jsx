// TWO-SECTION HEADER DESIGN
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
  const [concerns, setConcerns] = useState([]); // 👈 dynamic API data

  const t = translations[language];

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FETCH SKIN CONCERNS
  useEffect(() => {
    const fetchConcerns = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/skin-concerns`);
        const data = await res.json();

        // Expected API structure: data.data[]
        setConcerns(
          data?.data?.map((item) => ({
            label: item.name,
            path: `/concerns/${item.slug}`,
          })) || []
        );
      } catch (err) {
        console.error("Failed to load concerns:", err);
      }
    };

    fetchConcerns();
  }, []);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "EN" ? "DE" : "EN"));

  // PRIMARY NAV LINKS
  const primaryNav = [
    { name: t.home, path: "/" },
    { name: t.about, path: "/about" },
    { name: t.products, path: "/product" },
    { name: t.testimonial, path: "/testimonial" },
    { name: t.contact, path: "/contact" },
  ];

  // SECONDARY NAV LINKS
  const secondaryNav = [
    {
      name: t.ingredients,
      path: "/Ceen-ingredient",
    },
    {
      name: t.concerns,
      dropdown: concerns,
    },
    {
      name: t.guides,
      path: "/guides",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-lg"
      }`}
    >

      {/* TOP BAR - PRIMARY NAVIGATION */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center transition-transform hover:scale-105 duration-300"
            >
              <img src={BlackLogo} alt="CEEN Logo" className="h-10 w-auto" />
            </Link>

            {/* Primary Nav - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {primaryNav.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Language + Mobile Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 text-sm font-medium"
              >
                <Globe size={16} />
                {language}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-700 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* SECONDARY NAVIGATION */}
      <div className="bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="hidden lg:flex items-center justify-center gap-10 h-12">
            {secondaryNav.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                {!link.dropdown ? (
                  <Link
                    to={link.path}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2">
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-3">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
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
          <div className="lg:hidden flex items-center justify-center py-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 transition-colors duration-200 text-sm font-medium shadow-sm"
            >
              <Globe size={16} />
              Switch to {t.switchTo}
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------- */}
      {/* MOBILE MENU */}
      {/* ---------------------------------- */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white overflow-hidden border-t border-gray-100`}
      >
        <div className="px-4 py-6">
          {/* Primary Nav */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">
              Main Menu
            </h3>
            <nav className="space-y-1">
              {primaryNav.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-150 text-base font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Secondary Nav */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">
              Resources
            </h3>
            <nav className="space-y-1">
              {secondaryNav.map((link, index) => (
                <div key={index} className="border-b border-gray-50 last:border-b-0">
                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-150 text-base font-medium"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <details className="group">
                      <summary className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-150 text-base font-medium list-none">
                        {link.name}
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-200 group-open:rotate-180"
                        />
                      </summary>

                      <div className="ml-4 mt-1 space-y-1 pb-2">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-150 text-sm"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
