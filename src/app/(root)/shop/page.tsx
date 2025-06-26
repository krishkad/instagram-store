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
    "Shoes",
    "Jeans",
    "Jackets",
    // "Jewelry",
    // "Home",
    // "Knitwear",
    // "Beauty",
  ];

  const allProducts = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1633344205710-4e6773b473ca?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Shoes",
      tags: ["New", "Everyday"],
      hoverImage:
        "https://images.unsplash.com/photo-1633344205710-4e6773b473ca?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Brown Leather Oxfords",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1555436171-771b73dbab62?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Shoes",
      tags: ["Best Seller"],
      hoverImage:
        "https://images.unsplash.com/photo-1555436171-771b73dbab62?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Blue Slim Jeans",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1686518528774-31014e028eb3?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Jeans",
      tags: ["New"],
      hoverImage:
        "https://images.unsplash.com/photo-1686518528774-31014e028eb3?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Black Skinny Jeans",
      price: 70,
      image:
        "https://images.unsplash.com/photo-1745450071522-97e3687fef4a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Jeans",
      tags: [],
      hoverImage:
        "https://images.unsplash.com/photo-1745450071522-97e3687fef4a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Denim Trucker Jacket",
      price: 110,
      image:
        "https://images.unsplash.com/photo-1612485947666-f656fe7fce32?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Jackets",
      tags: ["Limited Edition"],
      hoverImage:
        "https://images.unsplash.com/photo-1612485947666-f656fe7fce32?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Olive Bomber Jacket",
      price: 130,
      image:
        "https://images.unsplash.com/photo-1594587640199-90ad1cb30c8c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Jackets",
      tags: ["Best Seller"],
      hoverImage:
        "https://images.unsplash.com/photo-1594587640199-90ad1cb30c8c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        <div className="container mx-auto px-1">
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                {sortedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in"
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
                      <h3 className="font-serif font-semibold text-base md:text-lg text-charcoal mb-1 group-hover:text-[var(--gold)] transition-colors">
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
