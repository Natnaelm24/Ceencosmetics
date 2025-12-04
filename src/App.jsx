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
import Faq from  "./page/Faq/Faq"

// Skin Concern Pages
import SkinConcernPage from "./page/SkinCareGuides/SkinConcernPage";

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
        <Route path="/guides" element={<SkinGuides />} />
        <Route path="/guides/:slug" element={<GuideDetail />} />
        <Route path="/faq" element={<Faq />} />

        {/* Skin Concerns */}
        {/* <Route path="/:slug" element={<SkinConcernPage />} /> */}
      </Routes>

      <FooterTop />
      </BrowserRouter>
  );
}

export default App;
