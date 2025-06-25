"use client";

import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={cn(
        "bg-charcoal text-cream max-md:pb-16",
        (pathname.includes("/checkout") || pathname.includes("/cart")) &&
          "hidden"
      )}
    >
      {/* Newsletter Section */}
      <div className="border-b border-truffle">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Stay in the Loop
            </h3>
            <p className="text-lg text-cream/80 mb-8">
              Be the first to know about exclusive drops, styling tips, and
              special offers from our Instagram community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-cream placeholder:text-cream/60"
              />
              <Button className="bg-gold text-charcoal hover:bg-[var(--gold)]/90 font-medium px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">Luxe Boutique</h2>
            <p className="text-cream/80 leading-relaxed">
              From Instagram to your doorstep – curating luxury fashion and
              lifestyle pieces with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-cream hover:text-[var(--gold)] hover:bg-white/10 rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Shop</h4>
            <nav className="space-y-4">
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Dresses
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Accessories
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Beauty
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Home & Lifestyle
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Sale
              </a>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Support</h4>
            <nav className="space-y-4">
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                FAQs
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Size Guide
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Shipping Info
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Track Your Order
              </a>
            </nav>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Policies</h4>
            <nav className="space-y-4">
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Return Policy
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block text-cream/80 hover:text-[var(--gold)] transition-colors"
              >
                Refund Policy
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-truffle">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 text-sm">
              © 2025 Luxe Boutique. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-cream/60">
              <span className="max-md:text-xs">🔒 Secure Shopping</span>
              <span className="max-md:text-xs">🚚 Fast Delivery</span>
              <span className="max-md:text-xs">↩️ Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
