"use client";


import { useEffect, useState } from 'react';
import { X, Search } from 'lucide-react';
// import { useSearch } from '@/contexts/SearchContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Sample products data - this would typically come from your API or context
const allProducts = [
  {
    id: 1,
    name: "Silk Camisole",
    price: 89,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
    category: "Tops"
  },
  {
    id: 2,
    name: "Cashmere Throw",
    price: 156,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop",
    category: "Home"
  },
  {
    id: 3,
    name: "Gold Statement Ring",
    price: 45,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
    category: "Jewelry"
  },
  {
    id: 4,
    name: "Vintage Leather Bag",
    price: 234,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop",
    category: "Accessories"
  },
  {
    id: 5,
    name: "Merino Wool Sweater",
    price: 128,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
    category: "Knitwear"
  },
  {
    id: 6,
    name: "Flowy Summer Dress",
    price: 98,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&hue=20",
    category: "Dresses"
  },
  {
    id: 7,
    name: "Pearl Drop Earrings",
    price: 67,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&hue=30",
    category: "Jewelry"
  },
  {
    id: 8,
    name: "Ceramic Vase Set",
    price: 89,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop&hue=40",
    category: "Home"
  }
];

const SearchModal = () => {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery } = useSearch();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeSearch();
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="fixed inset-0 bg-cream/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between py-6 border-b border-border">
            <h2 className="text-2xl font-serif font-semibold text-charcoal">Search Products</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeSearch}
              className="text-charcoal hover:text-gold"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Search Input */}
          <div className="py-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-truffle h-5 w-5" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg bg-white border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all"
                autoFocus
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto pb-6">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-serif text-charcoal mb-2">
                  No products matched your search
                </h3>
                <p className="text-truffle">
                  Try searching with different keywords or browse our collections
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={closeSearch}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif font-semibold text-sm text-charcoal mb-1 group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-truffle mb-2">{product.category}</p>
                      <p className="text-lg font-semibold text-charcoal">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;