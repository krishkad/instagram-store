"use client";
import { useState } from 'react';
import { Star, ThumbsUp, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CustomerReviewsProps {
  rating: number;
  reviewCount: number;
}

const CustomerReviews = ({ rating, reviewCount }: CustomerReviewsProps) => {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely love this piece! The silk is so soft and the fit is perfect. Worth every penny.",
      verified: true,
      isIgBuyer: true,
      images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"]
    },
    {
      id: 2,
      name: "Emma K.",
      rating: 5,
      date: "1 month ago",
      comment: "Beautiful quality and fast shipping. This is my third purchase from this brand!",
      verified: true,
      isIgBuyer: true,
      images: []
    },
    {
      id: 3,
      name: "Lisa R.",
      rating: 4,
      date: "3 weeks ago",
      comment: "Great quality but runs slightly small. Would recommend sizing up.",
      verified: true,
      isIgBuyer: false,
      images: ["https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop"]
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl sm:text-3xl font-serif font-bold text-charcoal">Customer Reviews</h2>
        <Button variant="outline" className="rounded-full">
          Write a Review
        </Button>
      </div>

      {/* Rating Summary */}
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-6 mb-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-charcoal mb-1">{rating}</div>
            <div className="flex items-center justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-[var(--gold)] text-gold' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <div className="text-sm text-truffle">{reviewCount} reviews</div>
          </div>
          
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center gap-2 mb-1">
                <span className="text-sm w-8">{stars}★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-gold rounded-full" 
                    style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 10}%` }}
                  />
                </div>
                <span className="text-sm text-truffle w-8">
                  {stars === 5 ? '87' : stars === 4 ? '25' : '12'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['all', 'with photos', 'verified', 'ig buyers'].map((filterType) => (
          <Button
            key={filterType}
            variant={filter === filterType ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(filterType)}
            className="rounded-full whitespace-nowrap"
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </Button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <span className="text-gold font-semibold text-sm">
                  {review.name.charAt(0)}
                </span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-charcoal">{review.name}</span>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                  {review.isIgBuyer && (
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full flex items-center gap-1">
                      <Instagram className="h-3 w-3" />
                      IG Buyer
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? 'fill-[var(--gold)] text-gold' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-truffle">{review.date}</span>
                </div>
                
                <p className="text-truffle mb-4">{review.comment}</p>
                
                {review.images.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="Review"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    ))}
                  </div>
                )}
                
                <Button variant="ghost" size="sm" className="text-truffle hover:text-charcoal">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Helpful (3)
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;