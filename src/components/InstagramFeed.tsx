
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      caption: "New silk collection drop! ✨",
      likes: 1234,
      productLink: "#silk-collection"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      caption: "Cozy weekend essentials 🤍",
      likes: 987,
      productLink: "#weekend-essentials"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      caption: "Home styling inspo 🏡",
      likes: 756,
      productLink: "#home-collection"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      caption: "Statement accessories ✨",
      likes: 1098,
      productLink: "#accessories"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      caption: "Golden hour glow 🌅",
      likes: 1456,
      productLink: "#jewelry"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      caption: "Minimalist elegance 🤍",
      likes: 892,
      productLink: "#minimal-collection"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Instagram className="h-8 w-8 text-gold" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
              Shop Our Instagram
            </h2>
          </div>
          <p className="text-lg text-truffle max-w-2xl mx-auto">
            Get inspired by our latest posts and shop the looks directly
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Instagram className="h-4 w-4" />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-white text-charcoal hover:bg-cream text-xs px-3 py-1 rounded-full"
                  >
                    Shop This Look
                  </Button>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <Instagram className="h-4 w-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 px-8 py-6 rounded-full font-medium inline-flex items-center space-x-3"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow @luxeboutique</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;