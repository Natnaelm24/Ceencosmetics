import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header_footer/Header";
import FooterTop from ".//component/Header_footer/Footer";
import { CartProvider } from "./component/ProductCard/CartContext";
import Testimonial from "../src/page/Testimonial/Testimonial";
import ContactUs from "../src/page/Contact/ContactUs.jsx";

import Home from "../src/page/Home/Home";
import About from "../src/page/About/About";
import Product from "../src/page/Prodact/Prodact";
import ShopNowPage from "./page/Shopnow/Shopnow";

function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shopnow" element={<ShopNowPage />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <FooterTop />
    </Router>
    </CartProvider>
  );
}

export default App;