import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", emoji: "🏠" },
  { href: "/about", label: "About Lori", emoji: "👩‍🏫" },
  { href: "/books", label: "Books", emoji: "📚" },
  { href: "/parents-educators", label: "For Parents", emoji: "👨‍👩‍👧" },
  { href: "/media", label: "Media", emoji: "📰" },
  { href: "/gallery", label: "Gallery", emoji: "🖼️" },
  { href: "/contact", label: "Contact", emoji: "✉️" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-4 border-primary/20">
      <nav className="container-page">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-forest-light flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
              <span className="text-2xl">🐿️</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-foreground block leading-tight">
                Lori J Thompson
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-accent" />
                Author of Squeak
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent/30"
                )}
              >
                <span className="mr-1">{link.emoji}</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full bg-accent/20 hover:bg-accent/40"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t-2 border-primary/20 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300",
                    location.pathname === link.href
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent/30"
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="mr-2 text-lg">{link.emoji}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
