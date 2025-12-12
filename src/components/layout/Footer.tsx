import { Link } from "react-router-dom";
import { Leaf, Mail, Heart } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Lori" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact" },
];

const bookLinks = [
  { href: "https://www.amazon.ca/Squeak-Little-Grey-Squirrel-Lori/dp/1525591096/", label: "Squeak, The Little Grey Squirrel", external: true },
  { href: "https://www.amazon.ca/Squeak-Meets-New-Friends-Lori/dp/1039166245/", label: "Squeak Meets New Friends", external: true },
  { href: "https://www.amazon.ca/Squeaks-Colouring-Book-Lori-J/dp/1039196772/", label: "Squeak's Colouring Book", external: true },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
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

      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">Lori J Thompson</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Children's author inspiring young readers with heartwarming stories about nature, friendship, and growing up.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Books */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Books</h4>
            <ul className="space-y-2">
              {bookLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Get in Touch</h4>
            <a
              href="mailto:lorij12259@gmail.com"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              lorij12259@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Lori J Thompson. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-coral fill-coral" /> for young readers
          </p>
        </div>
      </div>
    </footer>
  );
}
