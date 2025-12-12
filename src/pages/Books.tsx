import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
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
      { text: "Perfect for ages 2-5", emoji: "👶" },
      { text: "Beautiful illustrations", emoji: "🎨" },
      { text: "Gentle life lessons", emoji: "💚" },
      { text: "Inspired by real backyard squirrels", emoji: "🐿️" },
    ],
    themes: ["Curiosity", "Bravery", "Nature"],
    amazonUrl: "https://www.amazon.ca/Squeak-Little-Grey-Squirrel-Lori/dp/1525591096/",
    cover: bookSqueakOriginal,
    badge: "🐿️ Book 1",
    gradient: "from-primary to-forest-light",
  },
  {
    id: 2,
    title: "Squeak Meets New Friends",
    subtitle: "A Story of Friendship & Kindness",
    description: "In this touching sequel, Squeak meets Leo and Evlyn — two kind children who discover a baby squirrel in need of help. Together, they learn about compassion, friendship, and the importance of caring for all creatures. Based on a real rescue story involving Lori's grandchildren!",
    features: [
      { text: "Inspired by a true story", emoji: "📖" },
      { text: "Teaches empathy and kindness", emoji: "💕" },
      { text: "Features Leo and Evlyn", emoji: "👧👦" },
      { text: "Beautiful nature themes", emoji: "🌳" },
    ],
    themes: ["Friendship", "Kindness", "Helping Others"],
    amazonUrl: "https://www.amazon.ca/Squeak-Meets-New-Friends-Lori/dp/1039166245/",
    cover: bookSqueakNewFriends,
    badge: "💕 Book 2",
    gradient: "from-coral to-coral-light",
  },
  {
    id: 3,
    title: "Squeak's Colouring Book",
    subtitle: "Creativity & Fun for Little Artists",
    description: "Bring Squeak's world to life with colors! This interactive colouring book is the perfect companion to the Squeak series, encouraging creativity and fine motor skill development. Each page features scenes from Squeak's adventures, waiting to be filled with your child's imagination.",
    features: [
      { text: "Develops fine motor skills", emoji: "✋" },
      { text: "Encourages creativity", emoji: "🌈" },
      { text: "Hours of coloring fun", emoji: "🎨" },
      { text: "Scenes from Squeak's adventures", emoji: "🖼️" },
    ],
    themes: ["Creativity", "Learning", "Play"],
    amazonUrl: "https://www.amazon.ca/Squeaks-Colouring-Book-Lori-J/dp/1039196772/",
    cover: bookSqueakColouring,
    badge: "🎨 Activity Book",
    gradient: "from-sky to-sky-light",
  },
];

const Books = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sunny-light via-muted to-background py-16 md:py-20">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[5%] text-4xl animate-float">📚</div>
          <div className="absolute top-32 right-[10%] text-3xl animate-float-delayed">🐿️</div>
          <div className="absolute bottom-20 left-[15%] text-2xl animate-bounce-gentle">⭐</div>
          <div className="absolute bottom-10 right-[8%] text-3xl animate-wiggle">✨</div>
        </div>

        <div className="container-page text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/40 text-accent-foreground text-sm font-bold mb-4">
            <span>📖</span>
            The Book Collection
          </div>
          <h1 className="heading-hero text-foreground mb-4 animate-fade-in">
            The <span className="text-primary">Squeak Series</span>
            <span className="inline-block ml-2 animate-wiggle">🐿️</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Heartwarming stories and creative activities that inspire curiosity, 
            kindness, and imagination in young readers! 🌟
          </p>
        </div>
      </section>

      {/* Books List */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 right-[3%] text-2xl animate-float opacity-40">🍂</div>
          <div className="absolute top-1/2 left-[3%] text-2xl animate-float-delayed opacity-40">🌳</div>
          <div className="absolute bottom-40 right-[5%] text-xl animate-sparkle opacity-40">✨</div>
        </div>

        <div className="container-page space-y-20 md:space-y-28 relative">
          {books.map((book, index) => (
            <article 
              key={book.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Book Cover */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                {/* Decorative background */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${book.gradient} opacity-20 rounded-[3rem] blur-2xl`} />
                
                <div className="aspect-[3/4] rounded-3xl relative overflow-hidden shadow-2xl max-w-sm mx-auto lg:max-w-none border-4 border-white">
                  <img 
                    src={book.cover} 
                    alt={`${book.title} book cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {book.badge}
                </div>
                
                {/* Decorative badge */}
                <div className={`absolute -bottom-4 -right-4 bg-gradient-to-r ${book.gradient} text-white px-5 py-3 rounded-2xl shadow-xl font-display font-bold animate-bounce-gentle`}>
                  <span className="mr-2">🛒</span>
                  Available Now!
                </div>
              </div>

              {/* Book Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    {book.subtitle}
                  </div>
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
                      className="px-4 py-1.5 rounded-full bg-accent/30 text-accent-foreground text-sm font-bold"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {book.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3 text-muted-foreground">
                      <span className="text-xl">{feature.emoji}</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className={`rounded-full btn-bounce bg-gradient-to-r ${book.gradient} shadow-xl`}>
                  <a 
                    href={book.amazonUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy on Amazon.ca
                    <span className="ml-2">🛒</span>
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-16 bg-gradient-to-b from-muted via-coral-light/20 to-muted relative overflow-hidden">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] text-3xl animate-float">🎁</div>
          <div className="absolute bottom-10 right-[10%] text-3xl animate-float-delayed">📚</div>
          <div className="absolute top-1/2 right-[5%] text-2xl animate-sparkle">✨</div>
        </div>

        <div className="container-page text-center relative">
          <div className="text-5xl mb-4 animate-bounce-gentle">🎁</div>
          <h2 className="heading-section text-foreground mb-4">
            Collect the Complete Series!
            <span className="inline-block ml-2 animate-wiggle">🎉</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-xl mx-auto mb-8">
            Give the gift of adventure! All three books make the perfect reading collection 
            for curious young minds. 🌟
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {books.map((book) => (
              <Button 
                key={book.id}
                asChild 
                variant="outline" 
                className="rounded-full btn-bounce border-2 border-primary bg-white hover:bg-primary hover:text-white shadow-lg"
              >
                <a 
                  href={book.amazonUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">{book.badge.split(" ")[0]}</span>
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
