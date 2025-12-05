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
  const [concerns, setConcerns] = useState([]); 
  console.log("CONCERNS:", concerns);
  

  const t = translations[language];

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FETCH SKIN CONCERNS (AUTOMATIC FORMAT DETECTION)
  useEffect(() => {
    const fetchConcerns = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/skin-concerns`;
        console.log("API_URL:", import.meta.env.VITE_API_URL);
        console.log("Fetching from:", url);

        const res = await fetch(url);
        const data = await res.json();

        console.log("RAW API RESPONSE:", data);

        // Auto-detect list format
        const items =
          Array.isArray(data)
            ? data
            : Array.isArray(data.data)
            ? data.data
            : Array.isArray(data.skin_concerns)
            ? data.skin_concerns
            : Array.isArray(data.items)
            ? data.items
            : [];

        const list = items.map((item) => ({
          label: item.slug  || "Untitled",
          path: `/concerns/${item.slug }`,
        }));

        console.log("FINAL MAPPED LIST:", list);

        setConcerns(list);
      } catch (err) {
        console.error("Failed to load concerns:", err);
      }
    };

    fetchConcerns();
  }, []);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "EN" ? "DE" : "EN"));

  // PRIMARY NAV
  const primaryNav = [
    { id: "home", name: t.home, path: "/" },
    { id: "about", name: t.about, path: "/about" },
    { id: "products", name: t.products, path: "/product" },
    { id: "testimonial", name: t.testimonial, path: "/testimonial" },
    { id: "contact", name: t.contact, path: "/contact" },
  ];

  // SECONDARY NAV (ID INSTEAD OF NAME FOR DROPDOWN)
  const secondaryNav = [
    {
      id: "ingredients",
      name: t.ingredients,
      path: "/Ceen-ingredient",
    },
    {
      id: "concerns",
      name: t.concerns,
      dropdown: concerns,
    },
    {
      id: "guides",
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
      {/* TOP BAR */}
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

            {/* Desktop Primary Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {primaryNav.map((link) => (
                <Link
                  key={link.id}
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
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium"
              >
                <Globe size={16} />
                {language}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-700"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECONDARY NAV */}
      <div className="bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="hidden lg:flex items-center justify-center gap-10 h-12">
            {secondaryNav.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.id)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                {!link.dropdown ? (
                  <Link
                    to={link.path}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2 transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 py-2">
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === link.id && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white shadow-lg border border-gray-100 rounded-xl py-3">
                          {concerns.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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

          {/* Mobile Language */}
          <div className="lg:hidden flex items-center justify-center py-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm font-medium shadow-sm"
            >
              <Globe size={16} />
              Switch to {t.switchTo}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-100`}
      >
        <div className="px-4 py-6">

          {/* Primary Mobile */}
          <div className="mb-8">
            <h3 className="text-xs text-gray-500 font-semibold uppercase px-4 mb-4">
              Main Menu
            </h3>
            <nav className="space-y-1">
              {primaryNav.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Secondary Mobile */}
          <div>
            <h3 className="text-xs text-gray-500 font-semibold uppercase px-4 mb-4">
              Resources
            </h3>

            <nav className="space-y-1">
              {secondaryNav.map((link) => (
                <div key={link.id} className="border-b last:border-none">
                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <details className="group">
                      <summary className="px-4 py-3 flex items-center justify-between text-gray-700 font-medium rounded-lg cursor-pointer hover:bg-gray-50">
                        {link.name}
                        <ChevronDown
                          size={16}
                          className="transition-transform group-open:rotate-180"
                        />
                      </summary>

                      <div className="ml-4 mt-1 space-y-1 pb-2">
                        {concerns.length === 0 ? (
                          <p className="px-4 py-2 text-sm text-gray-400">
                            Loading...
                          </p>
                        ) : (
                          concerns.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                            >
                              {item.label}
                            </Link>
                          ))
                        )}
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
