import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Sparkles, Star, Heart } from "lucide-react";
import loriHero from "@/assets/lori-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-light via-muted to-background py-16 md:py-24 lg:py-32">
      {/* Fun decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-8 h-8 text-3xl animate-float">🍂</div>
        <div className="absolute top-40 right-20 w-12 h-12 text-4xl animate-float-delayed">🌳</div>
        <div className="absolute bottom-20 left-1/4 w-6 h-6 text-2xl animate-float-slow">🐿️</div>
        <div className="absolute top-1/4 right-1/3 w-6 h-6 text-2xl animate-bounce-gentle">⭐</div>
        <div className="absolute bottom-1/4 left-[15%] w-4 h-4 text-xl animate-sparkle">✨</div>
        <div className="absolute top-1/3 left-[5%] w-5 h-5 text-xl animate-wiggle">🌸</div>
        <div className="absolute bottom-1/3 right-[10%] w-5 h-5 text-xl animate-pulse-soft">💚</div>
        <div className="absolute top-[60%] right-1/4 w-4 h-4 text-lg animate-float">🍃</div>
        
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunny/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/40 text-accent-foreground text-sm font-bold border-2 border-accent shadow-lg">
              <Sparkles className="w-4 h-4 text-accent-foreground animate-sparkle" />
              Children&apos;s Author
              <span className="text-lg">📚</span>
            </div>
            
            <h1 className="heading-hero text-foreground">
              Inspiring Stories for{" "}
              <span className="text-primary relative">
                Little Adventurers
                <span className="absolute -top-4 -right-4 text-2xl animate-bounce-gentle">✨</span>
              </span>
            </h1>
            
            <p className="text-body text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Meet Lori J Thompson, author of the beloved Squeak the Squirrel series. 
              With over 30 years of early childhood education experience, she creates 
              heartwarming stories that nurture toddlers&apos; confidence and imagination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="btn-bounce rounded-full text-base shadow-xl bg-gradient-to-r from-primary to-forest-light hover:from-forest-light hover:to-primary">
                <a 
                  href="https://www.amazon.ca/Squeak-Little-Grey-Squirrel-Lori/dp/1525591096/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Shop on Amazon
                  <span className="ml-2">🛒</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-bounce rounded-full text-base border-2 border-coral bg-coral/10 hover:bg-coral hover:text-white">
                <Link to="/about">
                  <User className="w-5 h-5 mr-2" />
                  Meet Lori
                  <span className="ml-2">👋</span>
                </Link>
              </Button>
            </div>

            {/* Fun stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="font-bold">30+ Years</span>
                <span className="text-muted-foreground">Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Heart className="w-5 h-5 text-coral fill-coral" />
                <span className="font-bold">3 Books</span>
                <span className="text-muted-foreground">Published</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-4 border-dashed border-accent/30 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border-4 border-dotted border-primary/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
              
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sunny/30 via-coral/20 to-primary/30 blur-2xl" />
              
              {/* Main image container */}
              <div className="relative rounded-[3rem] overflow-hidden bg-muted aspect-square shadow-2xl border-4 border-white">
                <img 
                  src={loriHero} 
                  alt="Lori J Thompson holding her book Squeak Meets New Friends"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-accent to-sunny-light text-accent-foreground px-6 py-3 rounded-2xl shadow-xl font-display font-bold animate-bounce-gentle border-2 border-white">
                <span className="mr-2">🎉</span>
                3 Books Published!
              </div>

              {/* Extra fun elements */}
              <div className="absolute -top-6 -left-6 bg-coral text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-wiggle text-2xl">
                🐿️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
