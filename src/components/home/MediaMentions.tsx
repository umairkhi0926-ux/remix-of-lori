import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const mediaOutlets = [
  { name: "America Daily Post", emoji: "📰" },
  { name: "LA Weekly Magazine", emoji: "🌟" },
  { name: "USA Wire", emoji: "⚡" },
  { name: "WellnessVoice", emoji: "💚" },
  { name: "The American Reporter", emoji: "📺" },
  { name: "Time Business News", emoji: "⏰" },
];

export function MediaMentions() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary via-forest-light to-primary relative overflow-hidden">
      {/* Fun decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-[10%] text-2xl animate-sparkle">✨</div>
        <div className="absolute bottom-4 right-[10%] text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute top-1/2 left-[5%] text-xl animate-float">🎉</div>
        <div className="absolute top-1/2 right-[5%] text-xl animate-float-delayed">🌟</div>
      </div>

      <div className="container-page relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div className="flex items-center gap-3 text-primary-foreground">
            <Sparkles className="w-6 h-6 animate-sparkle" />
            <span className="font-display font-bold text-lg flex items-center gap-2">
              As Featured In
              <span className="text-xl">📺</span>
            </span>
          </div>

          {/* Media Logos */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {mediaOutlets.map((outlet) => (
              <span 
                key={outlet.name}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-white/30 transition-all hover:scale-105 text-sm font-medium flex items-center gap-2"
              >
                <span>{outlet.emoji}</span>
                {outlet.name}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Button 
            asChild 
            variant="secondary" 
            size="sm" 
            className="rounded-full btn-bounce whitespace-nowrap bg-white text-primary hover:bg-accent hover:text-accent-foreground shadow-lg"
          >
            <Link to="/media">
              View Press
              <ArrowRight className="w-4 h-4 ml-1" />
              <span className="ml-1">📰</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
