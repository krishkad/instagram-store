"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToShop = () => {
    document.getElementById("featured-products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-start justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop&crop=center')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-24">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
          From Instagram to Your Doorstep
        </h1>
        <p
          className="text-xl md:text-2xl mb-4 animate-fade-in opacity-90"
          style={{ animationDelay: "0.2s" }}
        >
          Shop Now in Style
        </p>
        <p
          className="text-lg mb-8 animate-fade-in opacity-80 max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          Discover our curated collection of luxury fashion and lifestyle
          pieces, handpicked with love and trusted by thousands of Instagram
          shoppers.
        </p>

        <div
          className="space-y-4 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            onClick={scrollToShop}
            size="lg"
            className="bg-white text-charcoal hover:bg-cream text-lg px-8 py-6 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Shop Now
          </Button>

          <div className="flex justify-center mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToShop}
              className="text-white hover:text-[var(--gold)] rounded-full p-3 animate-bounce"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
