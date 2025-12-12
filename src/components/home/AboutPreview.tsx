import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "30+ Years Experience",
    description: "In early childhood education",
  },
  {
    icon: Heart,
    title: "Inspired by Love",
    description: "Stories from watching her grandchildren",
  },
  {
    icon: BookOpen,
    title: "3 Published Books",
    description: "The beloved Squeak series",
  },
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-coral/20 rounded-[3rem] blur-2xl" />
              
              {/* Main image container */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-card shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl">👩‍🏫</span>
                    </div>
                    <p className="font-display text-xl text-muted-foreground">
                      Lori's Photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 max-w-xs bg-card p-4 rounded-2xl shadow-lg border border-border">
                <p className="text-sm italic text-muted-foreground">
                  "I believe in 'Terrific Twos' — not 'Terrible Twos'!"
                </p>
                <p className="text-xs text-primary font-semibold mt-2">— Lori J Thompson</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="heading-section text-foreground">
              Meet the Author Behind the Magic
            </h2>
            
            <p className="text-body text-muted-foreground">
              Lori J Thompson's journey as a children's author began with 14 years of cherished 
              work in preschools, where she discovered the profound impact of storytelling on 
              young minds. Watching her grandchildren interact with the squirrels in her backyard 
              sparked the inspiration for Squeak's adventures.
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
                  className="text-center p-4 rounded-2xl bg-background hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full btn-bounce">
              <Link to="/about">
                Read Full Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
