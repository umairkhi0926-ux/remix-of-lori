import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, BookOpen, GraduationCap, Users, Sparkles, ArrowRight } from "lucide-react";
import loriWhiteJacket from "@/assets/lori-white-jacket.jpg";
import loriThoughtful from "@/assets/lori-thoughtful.jpg";

const milestones = [
  {
    icon: GraduationCap,
    title: "Early Childhood Educator",
    description: "14 years of nurturing young minds in preschool settings, developing a deep understanding of how children learn and grow.",
    emoji: "🎓",
    color: "bg-sky/20",
  },
  {
    icon: Heart,
    title: "Grandmother's Inspiration",
    description: "Watching grandchildren Leo and Evlyn discover the joy of backyard squirrels sparked the idea for Squeak's adventures.",
    emoji: "💕",
    color: "bg-coral/20",
  },
  {
    icon: BookOpen,
    title: "Author Journey Begins",
    description: "Transformed years of storytelling experience into the beloved Squeak the Squirrel book series.",
    emoji: "📚",
    color: "bg-primary/20",
  },
  {
    icon: Sparkles,
    title: "Terrific Twos Philosophy",
    description: "Championing the belief that toddlerhood is a time of wonder and growth, not terrible — it's terrific!",
    emoji: "✨",
    color: "bg-accent/30",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-light via-muted to-background py-16 md:py-24">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[5%] text-4xl animate-float">🌟</div>
          <div className="absolute top-32 right-[10%] text-3xl animate-float-delayed">🐿️</div>
          <div className="absolute bottom-20 left-[15%] text-2xl animate-bounce-gentle">💚</div>
          <div className="absolute bottom-32 right-[8%] text-3xl animate-wiggle">✨</div>
          <div className="absolute top-1/2 left-[3%] text-xl animate-sparkle">⭐</div>
        </div>

        <div className="container-page relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/40 text-accent-foreground text-sm font-bold">
                <span>👩‍🏫</span>
                Author & Educator
              </div>
              <h1 className="heading-hero text-foreground">
                Meet <span className="text-primary">Lori J Thompson</span>
                <span className="inline-block ml-2 animate-wiggle">✨</span>
              </h1>
              <p className="text-body text-muted-foreground">
                A passionate children&apos;s author with over 30 years of experience in early 
                childhood education, dedicated to creating heartwarming stories that help 
                little ones discover the magic of reading. 📖
              </p>
            </div>

            {/* Image */}
            <div className="relative animate-scale-in">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-4 border-dashed border-accent/30 animate-spin-slow" />
              
              <div className="relative aspect-square max-w-md mx-auto rounded-[3rem] overflow-hidden bg-muted shadow-2xl border-4 border-white">
                <img 
                  src={loriWhiteJacket} 
                  alt="Lori J Thompson professional portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Fun badge */}
              <div className="absolute -bottom-4 -left-4 bg-coral text-white px-5 py-3 rounded-2xl shadow-xl font-display font-bold animate-bounce-gentle">
                <span className="mr-2">🐿️</span>
                Creator of Squeak!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[5%] text-2xl animate-float opacity-50">🍂</div>
          <div className="absolute bottom-20 left-[5%] text-2xl animate-float-delayed opacity-50">🌳</div>
        </div>

        <div className="container-page max-w-4xl relative">
          <div className="prose prose-lg mx-auto space-y-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                <span>📖</span>
                Her Story
              </div>
              <h2 className="heading-section text-foreground">
                The Story Behind the Stories
                <span className="inline-block ml-2 text-2xl animate-sparkle">✨</span>
              </h2>
            </div>
            
            <div className="float-right ml-8 mb-6 hidden md:block">
              <div className="relative">
                <div className="w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src={loriThoughtful} 
                    alt="Lori J Thompson thoughtful portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg animate-bounce-gentle">
                  💭
                </div>
              </div>
            </div>
            
            <p className="text-body text-muted-foreground">
              Lori J Thompson&apos;s journey as a children&apos;s author is rooted in her deep love for 
              early childhood education. After spending 14 rewarding years working in preschools, 
              she developed an intuitive understanding of what captures young hearts and minds. 🎓
            </p>
            
            <p className="text-body text-muted-foreground">
              The inspiration for Squeak came from an unexpected source — her own backyard! 🏡
              Watching her grandchildren, Leo and Evlyn, delight in the antics of the grey 
              squirrels that visited their garden, Lori saw the perfect opportunity to create 
              something magical. These real-life moments of wonder became the foundation for 
              Squeak&apos;s adventures. 🐿️
            </p>

            <blockquote className="border-l-4 border-coral pl-6 py-4 my-8 bg-coral/10 rounded-r-2xl relative">
              <span className="absolute -top-4 -left-4 text-4xl">💬</span>
              <p className="text-lg italic text-foreground">
                "I believe in &apos;Terrific Twos&apos; — not &apos;Terrible Twos&apos;! Every child deserves stories 
                that celebrate their curiosity and help build their confidence."
              </p>
              <footer className="text-coral font-bold mt-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                — Lori J Thompson
              </footer>
            </blockquote>

            <p className="text-body text-muted-foreground">
              With over 30 years of combined experience in education and childcare, Lori brings 
              a unique perspective to her writing. She understands that the best children&apos;s books 
              aren&apos;t just entertaining — they&apos;re tools for growth, learning, and building the 
              kind of confidence that will serve children throughout their lives. 🌟
            </p>

            <p className="text-body text-muted-foreground">
              Today, Lori continues to write from her home, always with an eye on the backyard 
              where it all began. The squirrels still visit, and the stories keep coming! 📝✨
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-gradient-to-b from-muted via-sky-light/30 to-muted relative overflow-hidden">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] text-3xl animate-float">🎯</div>
          <div className="absolute bottom-10 right-[10%] text-3xl animate-float-delayed">🏆</div>
        </div>

        <div className="container-page relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/40 text-accent-foreground text-sm font-bold mb-4">
              <span>🌟</span>
              Journey Highlights
            </div>
            <h2 className="heading-section text-foreground">
              A Journey of Passion
              <span className="inline-block ml-2 animate-wiggle">💪</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-transparent hover:border-primary/20 flex gap-4"
              >
                <div className={`w-14 h-14 rounded-2xl ${milestone.color} flex-shrink-0 flex items-center justify-center text-2xl`}>
                  {milestone.emoji}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-card-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-forest-light to-primary relative overflow-hidden">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-[10%] text-2xl animate-sparkle">✨</div>
          <div className="absolute bottom-4 right-[10%] text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>⭐</div>
          <div className="absolute top-1/2 left-[5%] text-3xl animate-float">📚</div>
          <div className="absolute top-1/2 right-[5%] text-3xl animate-float-delayed">🐿️</div>
        </div>

        <div className="container-page text-center relative">
          <div className="text-5xl mb-4 animate-bounce-gentle">📖</div>
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Join Squeak&apos;s Adventure!
            <span className="inline-block ml-2 animate-wiggle">🎉</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Discover the books that are helping toddlers around the world fall in love with reading.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full btn-bounce shadow-xl bg-white text-primary hover:bg-accent hover:text-accent-foreground">
            <Link to="/books">
              Explore the Books
              <ArrowRight className="w-4 h-4 ml-2" />
              <span className="ml-1">📚</span>
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
