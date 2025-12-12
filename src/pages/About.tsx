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
  },
  {
    icon: Heart,
    title: "Grandmother's Inspiration",
    description: "Watching grandchildren Leo and Evlyn discover the joy of backyard squirrels sparked the idea for Squeak's adventures.",
  },
  {
    icon: BookOpen,
    title: "Author Journey Begins",
    description: "Transformed years of storytelling experience into the beloved Squeak the Squirrel book series.",
  },
  {
    icon: Sparkles,
    title: "Terrific Twos Philosophy",
    description: "Championing the belief that toddlerhood is a time of wonder and growth, not terrible — it's terrific!",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-16 md:py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="heading-hero text-foreground">
                Meet <span className="text-primary">Lori J Thompson</span>
              </h1>
              <p className="text-body text-muted-foreground">
                A passionate children's author with over 30 years of experience in early 
                childhood education, dedicated to creating heartwarming stories that help 
                little ones discover the magic of reading.
              </p>
            </div>

            {/* Image */}
            <div className="relative animate-scale-in">
              <div className="relative aspect-square max-w-md mx-auto rounded-[3rem] overflow-hidden bg-muted shadow-xl">
                <img 
                  src={loriWhiteJacket} 
                  alt="Lori J Thompson professional portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-page max-w-4xl">
          <div className="prose prose-lg mx-auto space-y-6">
            <h2 className="heading-section text-foreground text-center mb-8">
              The Story Behind the Stories
            </h2>
            
            <div className="float-right ml-8 mb-6 hidden md:block">
              <div className="relative">
                <div className="w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={loriThoughtful} 
                    alt="Lori J Thompson thoughtful portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-body text-muted-foreground">
              Lori J Thompson's journey as a children's author is rooted in her deep love for 
              early childhood education. After spending 14 rewarding years working in preschools, 
              she developed an intuitive understanding of what captures young hearts and minds.
            </p>
            
            <p className="text-body text-muted-foreground">
              The inspiration for Squeak came from an unexpected source — her own backyard. 
              Watching her grandchildren, Leo and Evlyn, delight in the antics of the grey 
              squirrels that visited their garden, Lori saw the perfect opportunity to create 
              something magical. These real-life moments of wonder became the foundation for 
              Squeak's adventures.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted rounded-r-2xl">
              <p className="text-lg italic text-foreground">
                "I believe in 'Terrific Twos' — not 'Terrible Twos'! Every child deserves stories 
                that celebrate their curiosity and help build their confidence."
              </p>
              <footer className="text-primary font-semibold mt-2">— Lori J Thompson</footer>
            </blockquote>

            <p className="text-body text-muted-foreground">
              With over 30 years of combined experience in education and childcare, Lori brings 
              a unique perspective to her writing. She understands that the best children's books 
              aren't just entertaining — they're tools for growth, learning, and building the 
              kind of confidence that will serve children throughout their lives.
            </p>

            <p className="text-body text-muted-foreground">
              Today, Lori continues to write from her home, always with an eye on the backyard 
              where it all began. The squirrels still visit, and the stories keep coming.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-muted">
        <div className="container-page">
          <h2 className="heading-section text-foreground text-center mb-12">
            A Journey of Passion
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="card-playful p-6 flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                  <milestone.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">
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
      <section className="py-16 bg-primary">
        <div className="container-page text-center">
          <Users className="w-12 h-12 text-primary-foreground/80 mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Join Squeak's Adventure
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Discover the books that are helping toddlers around the world fall in love with reading.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full btn-bounce">
            <Link to="/books">
              Explore the Books
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
