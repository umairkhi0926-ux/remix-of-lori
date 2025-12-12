import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import loriHero from "@/assets/lori-hero.jpg";
import loriReading from "@/assets/lori-reading.jpg";
import loriElegant from "@/assets/lori-elegant.jpg";
import loriThoughtful from "@/assets/lori-thoughtful.jpg";
import loriFallPortrait from "@/assets/lori-fall-portrait.jpg";
import loriPlayful from "@/assets/lori-playful.jpg";

const articles = [
  {
    publication: "America Daily Post",
    title: "Lori J Thompson Brings Joy to Young Readers with the Squeak Series",
    image: loriHero,
    link: "#",
  },
  {
    publication: "LA Weekly Magazine",
    title: "Meet the Author Behind the Beloved Children's Book Series Squeak",
    image: loriReading,
    link: "#",
  },
  {
    publication: "USA Wire",
    title: "How Squeak the Mouse is Teaching Kids About Friendship and Adventure",
    image: loriElegant,
    link: "#",
  },
  {
    publication: "WellnessVoice",
    title: "The Heartwarming Story Behind Lori J Thompson's Children's Books",
    image: loriThoughtful,
    link: "#",
  },
  {
    publication: "The American Reporter",
    title: "Author Lori J Thompson Shares Her Journey Into Children's Literature",
    image: loriFallPortrait,
    link: "#",
  },
  {
    publication: "Time Business News",
    title: "Squeak Series: A New Classic in Early Childhood Reading",
    image: loriPlayful,
    link: "#",
  },
];

export function MediaMentions() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Fun decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-[10%] text-3xl animate-sparkle">✨</div>
        <div className="absolute bottom-8 right-[10%] text-3xl animate-sparkle" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute top-1/2 left-[3%] text-2xl animate-float">📰</div>
        <div className="absolute top-1/2 right-[3%] text-2xl animate-float-delayed">🌟</div>
      </div>

      <div className="container-page relative">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <span>📺</span>
            Featured Articles
            <span>📺</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full" />
        </div>

        {/* Articles Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {articles.map((article, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group h-full">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border-2 border-border/50 hover:border-primary/30">
                    {/* Article Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Article Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      {/* Publication Name */}
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">
                        {article.publication}
                      </h3>
                      
                      {/* Article Title */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                        {article.title}
                      </p>
                      
                      {/* Read Article Link */}
                      <a
                        href={article.link}
                        className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary/80 transition-colors group/link"
                      >
                        Read Article
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-primary text-primary-foreground hover:bg-primary/90 border-none shadow-lg" />
          <CarouselNext className="hidden md:flex -right-4 bg-primary text-primary-foreground hover:bg-primary/90 border-none shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
}
