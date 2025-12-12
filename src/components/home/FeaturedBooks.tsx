import { ShoppingCart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Squeak, The Little Grey Squirrel",
    description: "Follow Squeak on his very first adventure! A heartwarming tale inspired by the real squirrels in Lori's backyard, teaching toddlers about curiosity and bravery.",
    amazonUrl: "https://www.amazon.ca/Squeak-Little-Grey-Squirrel-Lori/dp/1525591096/",
    color: "from-primary to-forest-light",
    accent: "bg-primary",
  },
  {
    id: 2,
    title: "Squeak Meets New Friends",
    description: "Join Squeak as he meets Leo, Evlyn, and discovers a baby squirrel in need of help! A beautiful story about friendship and kindness.",
    amazonUrl: "https://www.amazon.ca/Squeak-Meets-New-Friends-Lori/dp/1039166245/",
    color: "from-coral to-coral-light",
    accent: "bg-coral",
  },
  {
    id: 3,
    title: "Squeak's Colouring Book",
    description: "Bring Squeak's world to life with colors! This creative companion encourages imagination and fine motor skill development through fun coloring activities.",
    amazonUrl: "https://www.amazon.ca/Squeaks-Colouring-Book-Lori-J/dp/1039196772/",
    color: "from-sky to-sky-light",
    accent: "bg-sky",
  },
];

export function FeaturedBooks() {
  return (
    <section className="section-padding bg-background">
      <div className="container-page">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section text-foreground mb-4">
            The Squeak Series
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Discover the adventures of Squeak the Squirrel — heartwarming stories that 
            inspire curiosity, kindness, and creativity in young readers.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="card-playful group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Book Cover Placeholder */}
              <div className={`aspect-[3/4] bg-gradient-to-br ${book.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-6">
                    <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">📖</span>
                    </div>
                    <p className="font-display font-bold text-lg">{book.title}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>

              {/* Book Info */}
              <div className="p-6 space-y-4">
                <h3 className="heading-card text-card-foreground group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {book.description}
                </p>
                
                <Button 
                  asChild 
                  className={`w-full btn-bounce rounded-full ${book.accent} hover:opacity-90`}
                >
                  <a 
                    href={book.amazonUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy on Amazon
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full btn-bounce">
            <Link to="/books">
              View All Books
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
