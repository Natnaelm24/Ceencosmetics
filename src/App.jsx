// src/App.jsx ← FINAL CLEAN VERSION
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./component/Header_footer/Header";
import FooterTop from "./component/Header_footer/Footer";

// Pages
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Product from "./page/ProductDetail/Allproduct";
import ProductDetailPage from "./page/ProductDetail/Component/ProductDetailPage";
import ING from "./page/Ingridients/Ingridients";
import Testimonial from "./page/Testimonial/Testimonial";
import ContactUs from "./page/Contact/ContactUs";
import SkinGuides from "./page/SkinGuides/SkinGuides";
import GuideDetail from "./page/SkinGuides/Component/GuideDetail";

// Skin Concern Pages
import Dryness from "./page/SkinCareguides/Dryness/Dryness";
import SkinAging from "./page/SkinCareguides/SkinAging/SkinAging";
import Dullness from "./page/SkinCareguides/Dullness/Dullness";
import UnevenSkinTone from "./page/SkinCareguides/Unevenskintone/Unevenskintone";
import UVProtection from "./page/SkinCareguides/Uvprotection/Uvprotection";

function App() {
  return (
     <BrowserRouter>
      <Header />
      
      <Routes>
        {/* Primary Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/Ceen-ingredient" element={<ING />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/skincare-guides" element={<SkinGuides  />} />
        <Route path="/skincare-guides/:slug" element={<GuideDetail />} />

        {/* Skin Concerns */}
        <Route path="/:slug" element={<Dryness />} />
        <Route path="/:slug" element={<SkinAging />} />
        <Route path="/:slug" element={<Dullness />} />
        <Route path="/:slug" element={<UnevenSkinTone />} />
        <Route path="/:slug" element={<UVProtection />} />
      </Routes>

      <FooterTop />
      </BrowserRouter>
  );
}

export default App;
