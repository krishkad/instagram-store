
const OnboardingSection = () => {
  const steps = [
    {
      number: "01",
      title: "Choose",
      description: "Browse our curated collection and find pieces that speak to your style",
      icon: "👁️"
    },
    {
      number: "02", 
      title: "Checkout",
      description: "Secure payment with multiple options including COD for your convenience",
      icon: "💳"
    },
    {
      number: "03",
      title: "Delivered",
      description: "Fast shipping to your doorstep with premium packaging and care",
      icon: "📦"
    }
  ];

  const highlights = [
    {
      icon: "💰",
      title: "COD Available",
      description: "Pay when you receive your order"
    },
    {
      icon: "🚚",
      title: "Fast Shipping",
      description: "2-3 day delivery nationwide"
    },
    {
      icon: "↩️",
      title: "7-Day Return Policy",
      description: "Easy returns, no questions asked"
    },
    {
      icon: "🛡️",
      title: "Secure Shopping",
      description: "Your data is safe with us"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* How it Works */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            How It Works
          </h2>
          <p className="text-lg text-truffle max-w-2xl mx-auto mb-16">
            Your journey from Instagram inspiration to delivered luxury in three simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-8">
                  <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-truffle leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Highlights */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl font-serif font-bold text-charcoal text-center mb-12">
            Why Choose Luxe Boutique?
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="bg-blush rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{highlight.icon}</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-truffle">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <blockquote className="text-2xl md:text-3xl font-serif italic text-charcoal mb-6 max-w-4xl mx-auto">
            &quot;The seamless transition from Instagram browsing to doorstep delivery exceeded all my expectations. Quality, service, and style in perfect harmony.&quot;
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=60&h=60&fit=crop&crop=face"
              alt="Customer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-charcoal">Alexandra R.</div>
              <div className="text-sm text-truffle">Long-time Instagram follower</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;