import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart, Palette, BookOpen } from "lucide-react";
import bookSqueakOriginal from "@/assets/book-squeak-original.jpg";
import bookSqueakNewFriends from "@/assets/book-squeak-new-friends.jpg";
import bookSqueakColouring from "@/assets/book-squeak-colouring.jpg";

const books = [
  {
    id: 1,
    title: "Squeak, The Little Grey Squirrel",
    subtitle: "Where the Adventure Begins",
    description: "Meet Squeak, a curious little grey squirrel who lives in a cozy tree in Lori's backyard. This heartwarming first book in the series introduces young readers to Squeak's world of wonder, teaching valuable lessons about bravery, curiosity, and the joy of discovery.",
    features: [
      "Perfect for ages 2-5",
      "Beautiful illustrations",
      "Gentle life lessons",
      "Inspired by real backyard squirrels",
    ],
    themes: ["Curiosity", "Bravery", "Nature"],
    amazonUrl: "https://www.amazon.ca/Squeak-Little-Grey-Squirrel-Lori/dp/1525591096/",
    cover: bookSqueakOriginal,
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Squeak Meets New Friends",
    subtitle: "A Story of Friendship & Kindness",
    description: "In this touching sequel, Squeak meets Leo and Evlyn — two kind children who discover a baby squirrel in need of help. Together, they learn about compassion, friendship, and the importance of caring for all creatures. Based on a real rescue story involving Lori's grandchildren!",
    features: [
      "Inspired by a true story",
      "Teaches empathy and kindness",
      "Features Leo and Evlyn",
      "Beautiful nature themes",
    ],
    themes: ["Friendship", "Kindness", "Helping Others"],
    amazonUrl: "https://www.amazon.ca/Squeak-Meets-New-Friends-Lori/dp/1039166245/",
    cover: bookSqueakNewFriends,
    icon: Heart,
  },
  {
    id: 3,
    title: "Squeak's Colouring Book",
    subtitle: "Creativity & Fun for Little Artists",
    description: "Bring Squeak's world to life with colors! This interactive colouring book is the perfect companion to the Squeak series, encouraging creativity and fine motor skill development. Each page features scenes from Squeak's adventures, waiting to be filled with your child's imagination.",
    features: [
      "Develops fine motor skills",
      "Encourages creativity",
      "Hours of coloring fun",
      "Scenes from Squeak's adventures",
    ],
    themes: ["Creativity", "Learning", "Play"],
    amazonUrl: "https://www.amazon.ca/Squeaks-Colouring-Book-Lori-J/dp/1039196772/",
    cover: bookSqueakColouring,
    icon: Palette,
  },
];

const Books = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-16 md:py-20">
        <div className="container-page text-center">
          <h1 className="heading-hero text-foreground mb-4 animate-fade-in">
            The <span className="text-primary">Squeak Series</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Heartwarming stories and creative activities that inspire curiosity, 
            kindness, and imagination in young readers.
          </p>
        </div>
      </section>

      {/* Books List */}
      <section className="section-padding bg-background">
        <div className="container-page space-y-16 md:space-y-24">
          {books.map((book, index) => (
            <article 
              key={book.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Book Cover */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[3/4] rounded-3xl relative overflow-hidden shadow-2xl max-w-sm mx-auto lg:max-w-none">
                  <img 
                    src={book.cover} 
                    alt={`${book.title} book cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-lg font-display text-sm font-semibold">
                  Available Now!
                </div>
              </div>

              {/* Book Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
                    {book.subtitle}
                  </p>
                  <h2 className="heading-section text-foreground">
                    {book.title}
                  </h2>
                </div>

                <p className="text-body text-muted-foreground">
                  {book.description}
                </p>

                {/* Themes */}
                <div className="flex flex-wrap gap-2">
                  {book.themes.map((theme) => (
                    <span 
                      key={theme}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {book.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className="rounded-full btn-bounce">
                  <a 
                    href={book.amazonUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy on Amazon.ca
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-16 bg-muted">
        <div className="container-page text-center">
          <h2 className="heading-section text-foreground mb-4">
            Collect the Complete Series
          </h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8">
            Give the gift of adventure! All three books make the perfect reading collection 
            for curious young minds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {books.map((book) => (
              <Button 
                key={book.id}
                asChild 
                variant="outline" 
                className="rounded-full btn-bounce"
              >
                <a 
                  href={book.amazonUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {book.title.split(",")[0]}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Books;
