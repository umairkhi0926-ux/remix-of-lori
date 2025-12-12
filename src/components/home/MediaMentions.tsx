import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

import loriHero from "@/assets/lori-hero.jpg";
import loriReading from "@/assets/lori-reading.jpg";
import loriElegant from "@/assets/lori-elegant.jpg";
import loriThoughtful from "@/assets/lori-thoughtful.jpg";
import loriFallPortrait from "@/assets/lori-fall-portrait.jpg";
import loriPlayful from "@/assets/lori-playful.jpg";

const articles = [
  {
    publication: "America Daily Post",
    title: "Lori J Thompson: Inspiring Young Readers with Squeak the Squirrel",
    image: loriHero,
    link: "https://americadailypost.com/lori-j-thompson-inspiring-young-readers-with-squeak-the-squirrel/",
  },
  {
    publication: "LA Weekly Magazine",
    title: "The 'Terrific Twos' Philosophy: A Fresh Take on Toddler Development",
    image: loriReading,
    link: "https://laweeklymagazine.com/lori-j-thompson-terrific-twos/",
  },
  {
    publication: "USA Wire",
    title: "Children's Author Lori J Thompson on the Power of Nature-Inspired Storytelling",
    image: loriElegant,
    link: "https://usawire.com/lori-j-thompson-nature-inspired-storytelling/",
  },
  {
    publication: "WellnessVoice",
    title: "Building Toddler Confidence Through Gentle Storytelling",
    image: loriThoughtful,
    link: "https://wellnessvoice.com/lori-j-thompson-toddler-confidence/",
  },
  {
    publication: "The American Reporter",
    title: "From Backyard to Bookshelf: The Real Story Behind Squeak",
    image: loriFallPortrait,
    link: "https://theamericanreporter.com/lori-j-thompson-squeak-story/",
  },
  {
    publication: "Time Business News",
    title: "Self-Published Success: Lori J Thompson's Journey as an Author-Entrepreneur",
    image: loriPlayful,
    link: "https://timebusinessnews.com/lori-j-thompson-author-entrepreneur/",
  },
];

export function MediaMentions() {
  const plugin = useRef(
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })
  );

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
            dragFree: true,
          }}
          plugins={[plugin.current]}
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
                        target="_blank"
                        rel="noopener noreferrer"
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
        </Carousel>
      </div>
    </section>
  );
}
