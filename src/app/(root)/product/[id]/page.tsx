"use client";



import CustomerReviews from '@/components/product/CustomerReviews';
import InstagramInspiration from '@/components/product/InstagramInspiration';
import MobileProductBar from '@/components/product/MobileProductBar';
import ProductImageCarousel from '@/components/product/ProductImageCarousel';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  console.log({id})

  // Mock product data - in real app, this would come from API
  const product = {
    id: 1,
    name: "Silk Camisole",
    price: 89,
    originalPrice: 129,
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=1000&fit=crop"
    ],
    colors: [
      { name: 'Cream', value: '#F8F6F0' },
      { name: 'Black', value: '#2D2D2D' },
      { name: 'Blush', value: '#F4E4D6' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    highlights: [
      '100% Mulberry Silk',
      'Handcrafted',
      'Made in Italy',
      'Dry Clean Only'
    ],
    tags: ['Best Seller', 'Limited Edition'],
    description: 'Indulge in the luxurious feel of our premium silk camisole. Crafted from the finest mulberry silk, this piece embodies elegance and comfort. Perfect for layering or wearing on its own for a sophisticated look.',
    specifications: {
      'Material': '100% Mulberry Silk',
      'Care': 'Dry Clean Only',
      'Fit': 'True to Size',
      'Model Size': 'Model is 5\'8" wearing size S'
    },
    shipping: 'Free shipping on orders above $75. Express delivery available.',
    returns: '7-day hassle-free returns. Items must be in original condition.',
    rating: 4.8,
    reviewCount: 124
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