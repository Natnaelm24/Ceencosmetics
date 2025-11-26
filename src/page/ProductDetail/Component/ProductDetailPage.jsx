// src/components/ProductDetail/ProductDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import Hero from "./Hero";
import ProductGallery from "./ProductGallery";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

const ProductDetailPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        const products = await res.json();

        // Find product by string ID (exact match)
        const found = products.find(p => p.id === id);
        setProduct(found || null);
      } catch (err) {
        console.error("Failed to load product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#e5e2d7] to-[#f5f2ea] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-[#855d14] border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
          <p className="text-2xl text-[#855d14]">Loading luxury...</p>
        </div>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="min-h-screen bg-[#e5e2d7] flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl text-[#855d14] font-light mb-8">Product not found</p>
          <Link to="/product" className="text-[#855d14] underline text-xl">
            ← Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="min-h-screen bg-gradient-to-b from-[#e5e2d7] to-[#f5f2ea]">
        <Hero />

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <Link
            to="/product"
            className="inline-flex items-center gap-3 text-[#855d14] hover:text-[#6b4a10] transition-all group text-lg font-medium"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition" />
            Back to Collection
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
            <ProductGallery images={product.image_url} />
            <div className="space-y-12">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#855d14] tracking-tight leading-tight">
                  {product.name.replace("CEEN ", "")}
                </h1>
              </div>
              <ProductTabs product={product} />
            </div>
          </div>
          <div className="mt-32">
            <RelatedProducts currentId={product.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;