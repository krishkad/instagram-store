"use client";

import CustomerReviews from "@/components/product/CustomerReviews";
import InstagramInspiration from "@/components/product/InstagramInspiration";
import MobileProductBar from "@/components/product/MobileProductBar";
import ProductImageCarousel from "@/components/product/ProductImageCarousel";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  console.log({ id });

  // Mock product data - in real app, this would come from API
  const product = {
    id: 1,
    name: "Brown Canvas Shoes",
    price: 89,
    originalPrice: 129,
    images: [
      "https://images.unsplash.com/photo-1555436171-771b73dbab62?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    colors: [
      { name: "Brown", value: "#8B5E3C" },
      { name: "Beige", value: "#D6C6B8" },
      { name: "Black", value: "#2D2D2D" },
    ],
    sizes: ["6", "7", "8", "9", "10", "11"],
    highlights: [
      "Durable canvas upper",
      "Breathable lining",
      "Lightweight rubber sole",
      "Everyday comfort fit",
    ],
    tags: ["Best Seller", "Limited Edition"],
    description:
      "Upgrade your everyday footwear with our Brown Canvas Shoes. Featuring a breathable upper, cushioned sole, and versatile style, they're perfect for casual outings, work, or weekend adventures.",
    specifications: {
      Material: "100% Canvas Upper, Rubber Sole",
      Care: "Spot clean with mild soap",
      Fit: "True to size",
      "Model Size": "Model is wearing size 9",
    },
    shipping: "Free shipping on orders above $75. Express delivery available.",
    returns:
      "7-day hassle-free returns. Shoes must be unworn and in original packaging.",
    rating: 4.6,
    reviewCount: 102,
  };

  return (
    <div className="min-h-screen bg-cream">
      <main className="pt-20 pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Product Images */}
            <ProductImageCarousel images={product.images} />

            {/* Product Info */}
            <ProductInfo
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>

          {/* Product Details Tabs */}
          <ProductTabs
            description={product.description}
            specifications={product.specifications}
            shipping={product.shipping}
            returns={product.returns}
          />

          {/* Customer Reviews */}
          <CustomerReviews
            rating={product.rating}
            reviewCount={product.reviewCount}
          />

          {/* Related Products */}
          <RelatedProducts />

          {/* Instagram Inspiration */}
          <InstagramInspiration />
        </div>
      </main>

      {/* Mobile Sticky Bottom Bar */}
      <MobileProductBar
        price={product.price}
        originalPrice={product.originalPrice}
      />

      {/* <Footer /> */}
      {/* <MobileBottomBar /> */}
    </div>
  );
};

export default ProductPage;
