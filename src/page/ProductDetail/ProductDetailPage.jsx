// src/components/ProductDetail/ProductDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import Hero from "../ProductDetail/Component/Hero";
import ProductGallery from "../ProductDetail/Component/ProductGallery";
import ProductTabs from "../ProductDetail/Component/ProductTabs";
import RelatedProducts from "../ProductDetail/Component/RelatedProducts";


import { products } from "../Prodact/Component/productsData";   

const ProductDetailPage = () => {
  const { id } = useParams();
  
  console.log("ID from URL:", id);        // ← Add this to test
  console.log("Products array:", products); // ← Should show array, not undefined

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#e5e2d7] flex items-center justify-center">
        <p className="text-4xl text-[#855d14] font-light">
          Product not found (ID: {id})
        </p>
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
            to="/shop"
            className="inline-flex items-center gap-3 text-[#855d14] hover:text-[#6b4a10] transition-all group"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition" />
            <span className="font-medium">Back to Collection</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
            {/* Left: Gallery */}
            <ProductGallery image={product.image} />

            {/* Right: Info & Actions */}
            <div className="space-y-12">
              {/* Name & Price */}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-[#855d14] tracking-wide leading-tight">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mt-6">
                  <p className="text-6xl font-light text-[#855d14]">
                    ${product.price}
                  </p>
                  <Sparkles className="w-10 h-10 text-[#855d14]/60" />
                </div>
              </div>

              {/* Actions
            <ProductActions product={product} /> */}

              {/* Tabs */}
              <ProductTabs product={product} />
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-32">
            <RelatedProducts currentId={product.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
