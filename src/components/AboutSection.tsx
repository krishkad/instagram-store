import { Instagram } from "lucide-react";

const AboutSection = () => {
  const instagramPosts = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
  ];

  return (
    <section id="about" className="py-20 bg-blush">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Brand Story */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--charcoal)] mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-truffle leading-relaxed">
                <p>
                  What started as a passion project on Instagram has blossomed
                  into a curated luxury boutique trusted by thousands of
                  style-conscious shoppers worldwide.
                </p>
                <p>
                  We believe that exceptional style shouldn&apos;t be complicated.
                  Every piece in our collection is handpicked with love,
                  ensuring that each item meets our rigorous standards for
                  quality, design, and craftsmanship.
                </p>
                <p>
                  From our Instagram DMs to your doorstep, we&apos;re committed to
                  providing an elevated shopping experience that reflects the
                  personal touch our community has come to know and love.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-[var(--charcoal)] mb-2">
                  50K+
                </div>
                <div className="text-truffle">Instagram Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-[var(--charcoal)] mb-2">
                  10K+
                </div>
                <div className="text-truffle">Happy Customers</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl">
              <Instagram className="h-8 w-8 text-gold" />
              <div>
                <div className="font-semibold text-[var(--charcoal)]">
                  Trusted by thousands
                </div>
                <div className="text-truffle">Handpicked with love</div>
              </div>
            </div>
          </div>

          {/* Instagram Grid */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-serif font-semibold text-[var(--charcoal)] text-center">
              Follow Our Journey
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {instagramPosts.map((post, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-xl hover-lift"
                >
                  <img
                    src={post}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="inline-flex items-center space-x-2 text-[var(--gold)] hover:text-[var(--charcoal)] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="font-medium">@luxeboutique</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
