"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const router = useRouter();

  const products = [
    {
      id: 1,
      name: "Silk Camisole",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop",
      category: "Tops",
    },
    {
      id: 2,
      name: "Cashmere Throw",
      price: "$156",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop",
      category: "Home",
    },
    {
      id: 3,
      name: "Gold Statement Ring",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=600&fit=crop",
      category: "Jewelry",
    },
    {
      id: 4,
      name: "Vintage Leather Bag",
      price: "$234",
      image:
        "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=600&fit=crop",
      category: "Accessories",
    },
    {
      id: 5,
      name: "Merino Wool Sweater",
      price: "$128",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop",
      category: "Knitwear",
    },
    {
      id: 6,
      name: "Artisan Ceramic Vase",
      price: "$67",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop",
      category: "Home",
    },
  ];

  return (
    <section id="featured-products" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            Featured Collection
          </h2>
          <p className="text-lg text-truffle max-w-2xl mx-auto">
            Discover our most loved pieces, carefully curated from our latest
            Instagram drops
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in block"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-[4/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center space-x-4">
                    <Button
                      size="sm"
                      className="bg-white text-charcoal hover:bg-cream rounded-full px-6"
                      onClick={(e) => e.preventDefault()}
                    >
                      Quick View
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gold text-white hover:bg-gold/90 rounded-full px-6"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-gold font-medium mb-2">
                  {product.category}
                </div>
                <h3 className="font-serif font-semibold text-lg text-charcoal mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-charcoal">
                    {product.price}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-truffle hover:text-gold"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-charcoal text-cream hover:bg-[var(--charcoal)]/90 px-8 py-6 rounded-full font-medium"
            onClick={() => router.push("/shop")}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
