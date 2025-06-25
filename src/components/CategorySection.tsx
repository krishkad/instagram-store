"use client";


import { useRef } from 'react';

const CategorySection = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      name: "Dresses",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop",
      count: "24 items"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=800&fit=crop",
      count: "18 items"
    },
    {
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=800&fit=crop",
      count: "12 items"
    },
    {
      name: "Home & Lifestyle",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=800&fit=crop",
      count: "16 items"
    },
    {
      name: "Knitwear",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop",
      count: "20 items"
    }
  ];

  // const scroll = (direction: 'left' | 'right') => {
  //   if (scrollRef.current) {
  //     const scrollAmount = 300;
  //     scrollRef.current.scrollBy({
  //       left: direction === 'left' ? -scrollAmount : scrollAmount,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            Shop by Category
          </h2>
          <p className="text-lg text-truffle max-w-2xl mx-auto">
            Explore our carefully curated categories, each telling its own story
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group cursor-pointer animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif font-semibold text-xl mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scrollable */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="flex-shrink-0 w-64 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-serif font-semibold text-xl mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile scroll indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {categories.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === 1 ? 'bg-gold' : 'bg-truffle/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;