import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import loriFallOutdoor from "@/assets/lori-fall-outdoor.jpg";

const highlights = [
  {
    icon: GraduationCap,
    title: "30+ Years Experience",
    description: "In early childhood education",
    emoji: "🎓",
    color: "bg-sky/20 text-sky",
  },
  {
    icon: Heart,
    title: "Inspired by Love",
    description: "Stories from watching her grandchildren",
    emoji: "💕",
    color: "bg-coral/20 text-coral",
  },
  {
    icon: BookOpen,
    title: "3 Published Books",
    description: "The beloved Squeak series",
    emoji: "📚",
    color: "bg-primary/20 text-primary",
  },
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden">
      {/* Fun background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 text-4xl animate-float">🌟</div>
        <div className="absolute bottom-20 left-10 text-3xl animate-float-delayed">🍂</div>
        <div className="absolute top-1/2 right-20 text-2xl animate-bounce-gentle">💚</div>
      </div>

      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sunny/30 via-coral/20 to-primary/30 rounded-[3rem] blur-2xl" />
              
              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce-gentle">
                ✨
              </div>
              
              {/* Main image container */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-card shadow-2xl border-4 border-white">
                <img 
                  src={loriFallOutdoor} 
                  alt="Lori J Thompson outdoors in autumn with her book"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 max-w-xs bg-white p-5 rounded-2xl shadow-xl border-2 border-primary/20">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-sm italic text-muted-foreground">
                      "I believe in &apos;Terrific Twos&apos; — not &apos;Terrible Twos&apos;!"
                    </p>
                    <p className="text-xs text-primary font-bold mt-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      — Lori J Thompson
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/20 text-coral text-sm font-bold">
              <span>👩‍🏫</span>
              Meet the Author
            </div>
            
            <h2 className="heading-section text-foreground">
              The Magic Behind the{" "}
              <span className="text-primary">Stories</span>
              <span className="inline-block ml-2 animate-wiggle">✨</span>
            </h2>
            
            <p className="text-body text-muted-foreground">
              Lori J Thompson&apos;s journey as a children&apos;s author began with 14 years of cherished 
              work in preschools, where she discovered the profound impact of storytelling on 
              young minds. Watching her grandchildren interact with the squirrels in her backyard 
              sparked the inspiration for Squeak&apos;s adventures.
            </p>
            
            <p className="text-body text-muted-foreground">
              Her mission is simple yet powerful: to help toddlers build confidence through 
              gentle, heartwarming stories that celebrate curiosity, friendship, and the 
              wonders of nature.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 py-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20"
                >
                  <div className={`w-14 h-14 rounded-full ${item.color} mx-auto mb-3 flex items-center justify-center text-2xl`}>
                    {item.emoji}
                  </div>
                  <h4 className="font-display font-bold text-foreground text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full btn-bounce bg-gradient-to-r from-coral to-coral-light hover:from-coral-light hover:to-coral shadow-xl">
              <Link to="/about">
                Read Full Story
                <ArrowRight className="w-4 h-4 ml-2" />
                <span className="ml-1">📖</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
