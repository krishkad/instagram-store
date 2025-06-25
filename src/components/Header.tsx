"use client";

import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-semibold text-charcoal">
              Luxe Boutique
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-charcoal hover:text-[var(--gold)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-charcoal hover:text-[var(--gold)] transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/#about"
              className="text-charcoal hover:text-[var(--gold)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-charcoal hover:text-[var(--gold)] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-charcoal hover:text-[var(--gold)]"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/profile">
              <Button
                variant="ghost"
                size="icon"
                className="text-charcoal hover:text-gold"
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-charcoal hover:text-[var(--gold)] relative"
              onClick={() => router.push("/cart")}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal hover:text-[var(--gold)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block w-full h-0.5 bg-current transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-current transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-current transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-charcoal hover:text-[var(--gold)] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-charcoal hover:text-[var(--gold)] transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/#about"
                className="text-charcoal hover:text-[var(--gold)] transition-colors"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-charcoal hover:text-[var(--gold)] transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-border">
              <Button
                variant="ghost"
                size="icon"
                className="text-charcoal hover:text-[var(--gold)]"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Link href="/profile">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-charcoal hover:text-gold"
                >
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-charcoal hover:text-[var(--gold)] relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
