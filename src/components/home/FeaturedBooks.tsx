import { ShoppingCart, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bookSqueakOriginal from "@/assets/book-squeak-original.jpg";
import bookSqueakNewFriends from "@/assets/book-squeak-new-friends.jpg";
import bookSqueakColouring from "@/assets/book-squeak-colouring.jpg";

const books = [
  {
    id: 1,
    title: "Squeak, The Little Grey Squirrel",
    description: "Follow Squeak on his very first adventure! A heartwarming tale inspired by the real squirrels in Lori's backyard, teaching toddlers about curiosity and bravery.",
    amazonUrl: "https://www.amazon.ca/Squeak-Little-Grey-Squirrel-Lori/dp/1525591096/",
    cover: bookSqueakOriginal,
    accent: "from-primary to-forest-light",
    badge: "🐿️ Book 1",
    emoji: "🌳",
  },
  {
    id: 2,
    title: "Squeak Meets New Friends",
    description: "Join Squeak as he meets Leo, Evlyn, and discovers a baby squirrel in need of help! A beautiful story about friendship and kindness.",
    amazonUrl: "https://www.amazon.ca/Squeak-Meets-New-Friends-Lori/dp/1039166245/",
    cover: bookSqueakNewFriends,
    accent: "from-coral to-coral-light",
    badge: "💕 Book 2",
    emoji: "🤝",
  },
  {
    id: 3,
    title: "Squeak's Colouring Book",
    description: "Bring Squeak's world to life with colors! This creative companion encourages imagination and fine motor skill development through fun coloring activities.",
    amazonUrl: "https://www.amazon.ca/Squeaks-Colouring-Book-Lori-J/dp/1039196772/",
    cover: bookSqueakColouring,
    accent: "from-sky to-sky-light",
    badge: "🎨 Activity",
    emoji: "✨",
  },
];

export function FeaturedBooks() {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-sunny-light/20 to-background relative overflow-hidden">
      {/* Fun decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[5%] text-4xl animate-float">📚</div>
        <div className="absolute top-40 right-[8%] text-3xl animate-float-delayed">⭐</div>
        <div className="absolute bottom-32 left-[10%] text-2xl animate-bounce-gentle">🐿️</div>
        <div className="absolute bottom-20 right-[15%] text-3xl animate-wiggle">🌟</div>
      </div>

      <div className="container-page relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-accent-foreground text-sm font-bold mb-4">
            <span>📖</span>
            The Book Collection
          </div>
          <h2 className="heading-section text-foreground mb-4">
            The Squeak Series
            <span className="inline-block ml-2 animate-wiggle">🐿️</span>
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
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card with rainbow border on hover */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-4 border-transparent hover:border-primary/20 group-hover:-translate-y-2">
                {/* Book Cover */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={`${book.title} book cover`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {book.badge}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-bold text-lg flex items-center gap-2">
                      <Star className="w-5 h-5 fill-accent text-accent" />
                      Perfect for ages 2-5!
                    </span>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="heading-card text-card-foreground group-hover:text-primary transition-colors flex-1">
                      {book.title}
                    </h3>
                    <span className="text-2xl ml-2">{book.emoji}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {book.description}
                  </p>
                  
                  <Button 
                    asChild 
                    className={`w-full btn-bounce rounded-full bg-gradient-to-r ${book.accent} hover:opacity-90 shadow-lg`}
                  >
                    <a 
                      href={book.amazonUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy on Amazon
                      <span className="ml-2">🛒</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full btn-bounce border-2 border-primary bg-primary/5 hover:bg-primary hover:text-white shadow-lg">
            <Link to="/books">
              View All Books
              <ExternalLink className="w-4 h-4 ml-2" />
              <span className="ml-1">📚</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
