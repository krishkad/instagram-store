"use client";

import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const categories = [
    "All",
    "Dresses",
    "Tops",
    "Accessories",
    "Jewelry",
    "Home",
    "Knitwear",
    "Beauty",
  ];

  const allProducts = [
    {
      id: 1,
      name: "Silk Camisole",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop",
      category: "Tops",
      tags: ["New", "Best Seller"],
      hoverImage:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop&sat=-20",
    },
    {
      id: 2,
      name: "Cashmere Throw",
      price: 156,
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop",
      category: "Home",
      tags: ["Limited Edition"],
      hoverImage:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop&brightness=110",
    },
    {
      id: 3,
      name: "Gold Statement Ring",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=600&fit=crop",
      category: "Jewelry",
      tags: ["New"],
      hoverImage:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=600&fit=crop&contrast=110",
    },
    {
      id: 4,
      name: "Vintage Leather Bag",
      price: 234,
      image:
        "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=600&fit=crop",
      category: "Accessories",
      tags: ["Best Seller"],
      hoverImage:
        "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=600&fit=crop&sepia=20",
    },
    {
      id: 5,
      name: "Merino Wool Sweater",
      price: 128,
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop",
      category: "Knitwear",
      tags: [],
      hoverImage:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop&brightness=105",
    },
    {
      id: 6,
      name: "Flowy Summer Dress",
      price: 98,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop&hue=20",
      category: "Dresses",
      tags: ["New"],
      hoverImage:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop&hue=20&brightness=110",
    },
    {
      id: 7,
      name: "Pearl Drop Earrings",
      price: 67,
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=600&fit=crop&hue=30",
      category: "Jewelry",
      tags: ["Best Seller"],
      hoverImage:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=600&fit=crop&hue=30&brightness=105",
    },
    {
      id: 8,
      name: "Ceramic Vase Set",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop&hue=40",
      category: "Home",
      tags: ["Limited Edition"],
      hoverImage:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop&hue=40&contrast=105",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--blush)] to-[var(--cream)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Shop the Collection
          </h1>
          <p className="text-lg text-truffle max-w-2xl mx-auto">
            Curated looks. Effortless style. Handpicked for you.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center overflow-x-auto scrollbar-hide space-x-2 flex-1">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  className={`whitespace-nowrap rounded-full px-6 py-2 transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gold text-white shadow-md hover:bg-[var(--gold)]"
                      : "text-charcoal hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="ml-4 hidden md:block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛍️</div>
              <h3 className="text-xl font-serif text-charcoal mb-2">
                No products found in this category
              </h3>
              <p className="text-truffle">Try selecting a different category</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in"
                  >
                    <div className="aspect-[4/4] overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={product.hoverImage}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />

                      {/* Tags */}
                      {product.tags.length > 0 && (
                        <div className="absolute top-3 left-3 flex flex-col gap-1">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs px-2 py-1 rounded-full font-medium ${
                                tag === "New"
                                  ? "bg-sage text-white"
                                  : tag === "Best Seller"
                                  ? "bg-gold text-white"
                                  : "bg-charcoal text-white"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Wishlist Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Heart className="h-4 w-4 text-charcoal" />
                      </Button>

                      {/* Quick Add to Cart */}
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          className="w-full bg-charcoal text-white hover:bg-charcoal/90 rounded-full"
                          onClick={(e) => e.preventDefault()}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Quick Add
                        </Button>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-serif font-semibold text-lg text-charcoal mb-1 group-hover:text-[var(--gold)] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xl font-semibold text-charcoal">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-truffle mb-4">
                  Showing {sortedProducts.length} of {allProducts.length}{" "}
                  products
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
