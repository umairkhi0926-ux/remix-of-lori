import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-16 md:py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Leaf className="absolute top-20 left-10 w-8 h-8 text-primary/20 animate-float" />
        <Leaf className="absolute top-40 right-20 w-12 h-12 text-forest-light/30 animate-float-delayed" />
        <Leaf className="absolute bottom-20 left-1/4 w-6 h-6 text-primary/15 animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-sunny/30 animate-bounce-gentle" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-coral/30 animate-bounce-gentle" />
      </div>

      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Children's Author
            </div>
            
            <h1 className="heading-hero text-foreground">
              Inspiring Stories for{" "}
              <span className="text-primary">Little Adventurers</span>
            </h1>
            
            <p className="text-body text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Meet Lori J Thompson, author of the beloved Squeak the Squirrel series. 
              With over 30 years of early childhood education experience, she creates 
              heartwarming stories that nurture toddlers' confidence and imagination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="btn-bounce rounded-full text-base">
                <a 
                  href="https://www.amazon.ca/Squeak-Little-Grey-Squirrel-Lori/dp/1525591096/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Shop on Amazon
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-bounce rounded-full text-base">
                <Link to="/about">
                  <User className="w-5 h-5 mr-2" />
                  Meet Lori
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image Placeholder - Will use author photo */}
          <div className="relative animate-scale-in">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circle background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-coral/20 blur-3xl" />
              
              {/* Main image container */}
              <div className="relative rounded-[3rem] overflow-hidden bg-muted aspect-square shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="text-center p-8">
                    <Leaf className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="font-display text-xl text-muted-foreground">
                      Author Photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-lg font-display font-semibold animate-bounce-gentle">
                3 Books Published!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
