import { Link } from "react-router-dom";
import { Mail, Heart, Sparkles } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Lori", emoji: "👩‍🏫" },
  { href: "/books", label: "Books", emoji: "📚" },
  { href: "/contact", label: "Contact", emoji: "✉️" },
];

const bookLinks = [
  { href: "https://www.amazon.ca/Squeak-Little-Grey-Squirrel-Lori/dp/1525591096/", label: "Squeak, The Little Grey Squirrel", emoji: "🐿️" },
  { href: "https://www.amazon.ca/Squeak-Meets-New-Friends-Lori/dp/1039166245/", label: "Squeak Meets New Friends", emoji: "💕" },
  { href: "https://www.amazon.ca/Squeaks-Colouring-Book-Lori-J/dp/1039196772/", label: "Squeak's Colouring Book", emoji: "🎨" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-forest text-primary-foreground relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="h-16 bg-background relative overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-16 text-primary"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Fun floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] text-2xl opacity-30 animate-float">🍂</div>
        <div className="absolute top-32 right-[15%] text-3xl opacity-20 animate-float-delayed">🐿️</div>
        <div className="absolute bottom-20 left-[20%] text-xl opacity-25 animate-bounce-gentle">⭐</div>
        <div className="absolute bottom-32 right-[10%] text-2xl opacity-20 animate-float-slow">🌳</div>
      </div>

      <div className="container-page py-12 md:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform text-2xl">
                🐿️
              </div>
              <div>
                <span className="font-display font-bold text-xl block">Lori J Thompson</span>
                <span className="text-xs text-primary-foreground/70 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Author of Squeak
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Children&apos;s author inspiring young readers with heartwarming stories about nature, friendship, and growing up. 🌟
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              Quick Links
              <span className="text-lg">🔗</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-all text-sm flex items-center gap-2 hover:translate-x-1"
                  >
                    <span>{link.emoji}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Books */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              Books
              <span className="text-lg">📖</span>
            </h4>
            <ul className="space-y-3">
              {bookLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-all text-sm flex items-center gap-2 hover:translate-x-1"
                  >
                    <span>{link.emoji}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              Get in Touch
              <span className="text-lg">💌</span>
            </h4>
            <a
              href="mailto:lorij12259@gmail.com"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-all text-sm px-4 py-3 bg-white/10 rounded-2xl hover:bg-white/20"
            >
              <Mail className="w-4 h-4" />
              lorij12259@gmail.com
            </a>
            <p className="mt-4 text-primary-foreground/60 text-xs">
              I&apos;d love to hear from you! 💚
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Lori J Thompson
            <span>🐿️</span>
            All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
            Made with 
            <Heart className="w-4 h-4 text-coral fill-coral animate-pulse-soft" /> 
            for young readers
            <span className="animate-wiggle">✨</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
