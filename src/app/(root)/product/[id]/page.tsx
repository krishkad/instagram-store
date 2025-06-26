"use client";

import CustomerReviews from "@/components/product/CustomerReviews";
import InstagramInspiration from "@/components/product/InstagramInspiration";
import MobileProductBar from "@/components/product/MobileProductBar";
import ProductImageCarousel from "@/components/product/ProductImageCarousel";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import { ProductProps } from "@/lib/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  console.log({ id });
  // Mock product data - in real app, this would come from API
  // const product = {
  //   id: 1,
  //   name: "Brown Canvas Shoes",
  //   price: 89,
  //   originalPrice: 129,
  //   images: [
  //     "https://images.unsplash.com/photo-1555436171-771b73dbab62?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   ],
  //   colors: [
  //     { name: "Brown", value: "#8B5E3C" },
  //     { name: "Beige", value: "#D6C6B8" },
  //     { name: "Black", value: "#2D2D2D" },
  //   ],
  //   sizes: ["6", "7", "8", "9", "10", "11"],
  //   highlights: [
  //     "Durable canvas upper",
  //     "Breathable lining",
  //     "Lightweight rubber sole",
  //     "Everyday comfort fit",
  //   ],
  //   tags: ["Best Seller", "Limited Edition"],
  //   description:
  //     "Upgrade your everyday footwear with our Brown Canvas Shoes. Featuring a breathable upper, cushioned sole, and versatile style, they're perfect for casual outings, work, or weekend adventures.",
  //   specifications: {
  //     Material: "100% Canvas Upper, Rubber Sole",
  //     Care: "Spot clean with mild soap",
  //     Fit: "True to size",
  //     "Model Size": "Model is wearing size 9",
  //   },
  //   shipping: "Free shipping on orders above $75. Express delivery available.",
  //   returns:
  //     "7-day hassle-free returns. Shoes must be unworn and in original packaging.",
  //   rating: 4.6,
  //   reviewCount: 102,
  // };

  const products = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: 75,
      originalPrice: 99,
      images: [
        "https://images.unsplash.com/photo-1633344205710-4e6773b473ca?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0",
      ],
      colors: [
        { name: "White", value: "#FFFFFF" },
        { name: "Gray", value: "#D3D3D3" },
        { name: "Black", value: "#000000" },
      ],
      sizes: ["6", "7", "8", "9", "10", "11"],
      highlights: [
        "Classic design",
        "All-day comfort",
        "Durable rubber sole",
        "Breathable upper",
      ],
      tags: ["New Arrival", "Trending"],
      description:
        "Step into comfort with our Classic White Sneakers. Minimal, durable, and effortlessly stylish—perfect for everyday wear.",
      specifications: {
        Material: "Canvas & Rubber",
        Care: "Wipe with damp cloth",
        Fit: "True to size",
        "Model Size": "Model is wearing size 10",
      },
      shipping: "Free shipping on orders over $75. Express delivery available.",
      returns: "7-day hassle-free returns. Item must be unworn.",
      rating: 4.5,
      reviewCount: 98,
    },
    {
      id: 2,
      name: "Brown Leather Oxfords",
      price: 120,
      originalPrice: 159,
      images: [
        "https://images.unsplash.com/photo-1555436171-771b73dbab62?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0",
      ],
      colors: [
        { name: "Brown", value: "#8B4513" },
        { name: "Black", value: "#2D2D2D" },
        { name: "Tan", value: "#D2B48C" },
      ],
      sizes: ["7", "8", "9", "10", "11"],
      highlights: [
        "Genuine leather",
        "Elegant handcrafted finish",
        "Comfort insole",
        "Durable grip sole",
      ],
      tags: ["Best Seller", "Limited Edition"],
      description:
        "Classic Oxfords made with premium leather, built to elevate both business and casual outfits.",
      specifications: {
        Material: "100% Leather",
        Care: "Use leather cleaner",
        Fit: "Runs slightly large",
        "Model Size": "Wearing size 9",
      },
      shipping: "Free shipping above $100. Fast 3-day delivery available.",
      returns: "10-day returns. Must be unused and in original packaging.",
      rating: 4.7,
      reviewCount: 154,
    },
    {
      id: 3,
      name: "Blue Slim Jeans",
      price: 65,
      originalPrice: 85,
      images: [
        "https://images.unsplash.com/photo-1686518528774-31014e028eb3?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0",
      ],
      colors: [
        { name: "Blue", value: "#1E3A8A" },
        { name: "Light Blue", value: "#ADD8E6" },
      ],
      sizes: ["28", "30", "32", "34", "36"],
      highlights: [
        "Slim fit cut",
        "Stretch denim",
        "5-pocket styling",
        "Faded wash look",
      ],
      tags: ["New", "Everyday Fit"],
      description:
        "Stylish and snug, our Blue Slim Jeans are your go-to choice for all-day wear with a modern look.",
      specifications: {
        Material: "98% Cotton, 2% Spandex",
        Care: "Machine wash cold",
        Fit: "Slim",
        "Model Size": "Wearing size 32",
      },
      shipping: "Free shipping on all jeans. Next-day shipping available.",
      returns: "Exchange or return within 7 days of delivery.",
      rating: 4.4,
      reviewCount: 88,
    },
    {
      id: 4,
      name: "Black Skinny Jeans",
      price: 70,
      originalPrice: 90,
      images: [
        "https://images.unsplash.com/photo-1745450071522-97e3687fef4a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      ],
      colors: [
        { name: "Black", value: "#000000" },
        { name: "Charcoal", value: "#2F2F2F" },
      ],
      sizes: ["28", "30", "32", "34", "36"],
      highlights: [
        "Tapered fit",
        "Premium stretch fabric",
        "Classic button fly",
        "Urban dark wash",
      ],
      tags: ["Streetwear", "Essential"],
      description:
        "Tailored for a modern silhouette, these black skinny jeans offer stretch and comfort without compromise.",
      specifications: {
        Material: "Cotton blend with elastane",
        Care: "Cold wash only",
        Fit: "Skinny",
        "Model Size": "Model is wearing size 30",
      },
      shipping: "Standard and express shipping available.",
      returns: "Free returns within 10 days.",
      rating: 4.6,
      reviewCount: 73,
    },
    {
      id: 5,
      name: "Denim Trucker Jacket",
      price: 110,
      originalPrice: 139,
      images: [
        "https://images.unsplash.com/photo-1612485947666-f656fe7fce32?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0",
      ],
      colors: [
        { name: "Indigo", value: "#264653" },
        { name: "Light Wash", value: "#87CEEB" },
      ],
      sizes: ["S", "M", "L", "XL"],
      highlights: [
        "Classic denim cut",
        "Two front pockets",
        "Button-down front",
        "Lined interior",
      ],
      tags: ["Limited Edition", "Winter Essential"],
      description:
        "Rugged and refined, the Denim Trucker Jacket is a must-have for cool evenings and layered style.",
      specifications: {
        Material: "100% Denim",
        Care: "Machine wash with cold water",
        Fit: "Relaxed",
        "Model Size": "Wearing size M",
      },
      shipping: "Ships in 1-3 days. Free on orders over $100.",
      returns: "Return within 10 days for refund or exchange.",
      rating: 4.5,
      reviewCount: 60,
    },
    {
      id: 6,
      name: "Olive Bomber Jacket",
      price: 130,
      originalPrice: 159,
      images: [
        "https://images.unsplash.com/photo-1594587640199-90ad1cb30c8c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      ],
      colors: [
        { name: "Olive", value: "#556B2F" },
        { name: "Army Green", value: "#4B5320" },
      ],
      sizes: ["S", "M", "L", "XL"],
      highlights: [
        "Zipper closure",
        "Ribbed cuffs",
        "Quilted lining",
        "All-season wear",
      ],
      tags: ["Best Seller", "Urban Style"],
      description:
        "Command attention in our Olive Bomber Jacket. Sleek, warm, and versatile—built for city streets and outdoor escapes.",
      specifications: {
        Material: "Polyester shell with insulated lining",
        Care: "Dry clean only",
        Fit: "Slim",
        "Model Size": "Wearing size L",
      },
      shipping: "Free standard shipping. Next-day available at extra cost.",
      returns: "Hassle-free returns within 7 days.",
      rating: 4.8,
      reviewCount: 132,
    },
  ];

  useEffect(() => {
    if (id) {
      const prod = products.filter((item) => item.id.toString() === id);
      setProduct(prod[0]);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (product === null) {
    return <>loading...</>;
  }
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
