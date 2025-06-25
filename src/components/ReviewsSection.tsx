import { Star, Instagram } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      avatar:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The quality is absolutely stunning! Found this brand through Instagram and now I'm obsessed. The silk camisole is my new favorite piece.",
      verified: true,
      product: "Silk Camisole",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Emma K.",
      avatar:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Fast shipping and beautiful packaging! The cashmere throw is even softer than I expected. Will definitely be ordering more.",
      verified: true,
      product: "Cashmere Throw",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Jessica L.",
      avatar:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Love how responsive they are on Instagram! The personal touch makes all the difference. This ring is exactly what I was looking for.",
      verified: true,
      product: "Gold Statement Ring",
      date: "3 weeks ago",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-gold fill-current" : "text-truffle/30"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-blush">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-truffle max-w-2xl mx-auto">
            Real reviews from our Instagram community and verified buyers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-charcoal">
                      {review.name}
                    </h4>
                    {review.verified && (
                      <div className="flex items-center space-x-1 bg-[var(--sage)]/20 text-sage px-2 py-1 rounded-full text-xs">
                        <Instagram className="h-3 w-3" />
                        <span>Verified IG buyer</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-truffle">{review.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-truffle leading-relaxed mb-4">
                &quot;{review.text}&quot;
              </p>

              <div className="text-sm text-gold font-medium">
                Purchased: {review.product}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <div className="text-2xl">⭐</div>
            </div>
            <h3 className="font-serif font-semibold text-charcoal mb-2">
              4.9/5 Stars
            </h3>
            <p className="text-truffle">From 500+ verified reviews</p>
          </div>
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Instagram className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif font-semibold text-charcoal mb-2">
              Instagram Verified
            </h3>
            <p className="text-truffle">Trusted by our IG community</p>
          </div>
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <div className="text-2xl">🚀</div>
            </div>
            <h3 className="font-serif font-semibold text-charcoal mb-2">
              Fast Shipping
            </h3>
            <p className="text-truffle">2-3 day delivery available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
