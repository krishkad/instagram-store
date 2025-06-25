
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramInspiration = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
      user: "@sarah_styles",
      caption: "Perfect for date night ✨"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
      user: "@emma_fashion",
      caption: "Layering perfection 💫"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop",
      user: "@lisa_luxe",
      caption: "Weekend vibes 🤍"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop",
      user: "@style_maven",
      caption: "Cozy chic at home"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal">
          <Instagram className="inline h-8 w-8 mr-3 text-pink-500" />
          Shop This Look
        </h2>
        <Button variant="outline" className="rounded-full">
          <Instagram className="h-4 w-4 mr-2" />
          Follow Us
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {instagramPosts.map((post) => (
          <div
            key={post.id}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
          >
            <img
              src={post.image}
              alt="Instagram post"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4">
              <Button
                size="sm"
                variant="ghost"
                className="self-end bg-white/20 hover:bg-white/30 text-white rounded-full"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
              
              <div className="text-white">
                <p className="font-medium text-sm mb-1">{post.user}</p>
                <p className="text-xs opacity-90">{post.caption}</p>
                <Button 
                  size="sm" 
                  className="mt-2 bg-white text-charcoal hover:bg-cream rounded-full text-xs"
                >
                  Shop This Look
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramInspiration;