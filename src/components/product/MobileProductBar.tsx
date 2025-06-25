
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileProductBarProps {
  price: number;
  originalPrice?: number;
}

const MobileProductBar = ({ price, originalPrice }: MobileProductBarProps) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-charcoal">${price}</span>
            {originalPrice && (
              <span className="text-sm text-truffle line-through">${originalPrice}</span>
            )}
          </div>
          <p className="text-xs text-truffle">Free shipping</p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="lg" 
            className="bg-charcoal text-cream hover:bg-charcoal/90 rounded-full px-6"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
          <Button 
            size="lg" 
            className="bg-gold text-white hover:bg-gold/90 rounded-full px-6"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileProductBar;