"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductInfoProps {
  product: any;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const ProductInfo = ({
  product,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
}: ProductInfoProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className="space-y-6">
      {/* Product Title & Tags */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          {product.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-2">
          {product.name}
        </h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-[var(--gold)] text-gold"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-truffle">
            ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-charcoal">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-truffle line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <p className="text-sm text-truffle">
          Inclusive of all taxes • Free shipping
        </p>
      </div>

      {/* Color Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-charcoal">Color</label>
        <div className="flex gap-3">
          {product.colors.map((color: any) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                selectedColor === color.name
                  ? "border-gold ring-2 ring-gold/20 scale-110"
                  : "border-gray-300 hover:border-gold/50"
              }`}
              style={{ backgroundColor: color.value }}
              aria-label={color.name}
            />
          ))}
        </div>
        {selectedColor && (
          <p className="text-sm text-truffle">Selected: {selectedColor}</p>
        )}
      </div>

      {/* Size Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-charcoal">Size</label>
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {product.sizes.map((size: string) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Quantity */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-charcoal">Quantity</label>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              onClick={decreaseQuantity}
              className="h-10 w-10 rounded-l-lg"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-4 py-2 text-center min-w-[3rem]">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={increaseQuantity}
              className="h-10 w-10 rounded-r-lg"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <div className="flex gap-3">
          <Button
            size="lg"
            className="flex-1 bg-charcoal text-cream hover:bg-[var(--charcoal)]/90 rounded-full h-12"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`h-12 w-12 rounded-full ${
              isWishlisted ? "bg-pink-50 border-pink-200 text-pink-500" : ""
            }`}
          >
            <Heart
              className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`}
            />
          </Button>
        </div>
        <Button
          size="lg"
          className="w-full bg-gold text-white hover:bg-[var(--gold)]/90 rounded-full h-12"
        >
          Buy Now
        </Button>
      </div>

      {/* Product Highlights */}
      <div className="space-y-3 pt-6 border-t border-gray-200">
        <h3 className="font-medium text-charcoal">Product Highlights</h3>
        <div className="flex flex-wrap gap-2">
          {product.highlights.map((highlight: string) => (
            <span
              key={highlight}
              className="px-3 py-1 bg-blush/50 text-truffle text-sm rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
