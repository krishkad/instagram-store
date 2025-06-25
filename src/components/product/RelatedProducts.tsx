
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const RelatedProducts = () => {
  const relatedProducts = [
    {
      id: 2,
      name: "Cashmere Throw",
      price: 156,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=500&fit=crop",
      category: "Home"
    },
    {
      id: 3,
      name: "Gold Statement Ring",
      price: 45,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=500&fit=crop",
      category: "Jewelry"
    },
    {
      id: 4,
      name: "Vintage Leather Bag",
      price: 234,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop",
      category: "Accessories"
    },
    {
      id: 5,
      name: "Merino Wool Sweater",
      price: 128,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop",
      category: "Knitwear"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">You Might Also Like</h2>
      
      <div className="overflow-x-auto">
        <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 w-64 flex-shrink-0"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-white text-charcoal hover:bg-cream rounded-full px-6"
                    >
                      Quick View
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="text-sm text-gold font-medium mb-1">{product.category}</div>
                <h3 className="font-serif font-semibold text-lg text-charcoal mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-charcoal">${product.price}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-truffle hover:text-gold"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;