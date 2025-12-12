import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowRight } from "lucide-react";

const mediaOutlets = [
  { name: "America Daily Post", url: "#" },
  { name: "LA Weekly Magazine", url: "#" },
  { name: "USA Wire", url: "#" },
  { name: "WellnessVoice", url: "#" },
  { name: "The American Reporter", url: "#" },
  { name: "Time Business News", url: "#" },
];

export function MediaMentions() {
  return (
    <section className="py-12 bg-primary">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div className="flex items-center gap-3 text-primary-foreground">
            <Newspaper className="w-6 h-6" />
            <span className="font-display font-semibold text-lg">
              As Featured In:
            </span>
          </div>

          {/* Media Logos */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {mediaOutlets.map((outlet) => (
              <span 
                key={outlet.name}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                {outlet.name}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Button 
            asChild 
            variant="secondary" 
            size="sm" 
            className="rounded-full btn-bounce whitespace-nowrap"
          >
            <Link to="/media">
              View Press
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
