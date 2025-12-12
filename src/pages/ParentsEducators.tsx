import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Heart, 
  Brain, 
  Users, 
  Palette, 
  MessageCircle,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: Brain,
    title: "Cognitive Development",
    description: "Stories stimulate imagination and help develop critical thinking skills in toddlers.",
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Squeak's adventures teach empathy, kindness, and understanding of feelings.",
  },
  {
    icon: MessageCircle,
    title: "Language Skills",
    description: "Reading aloud builds vocabulary and promotes early literacy development.",
  },
  {
    icon: Users,
    title: "Bonding Time",
    description: "Shared reading creates precious moments of connection between caregivers and children.",
  },
  {
    icon: Palette,
    title: "Creative Expression",
    description: "The colouring book encourages artistic expression and fine motor skill development.",
  },
  {
    icon: BookOpen,
    title: "Love of Reading",
    description: "Engaging stories foster a lifelong appreciation for books and learning.",
  },
];

const tips = [
  "Make reading a daily ritual — even just 10-15 minutes creates lasting impact",
  "Use different voices for characters to make stories come alive",
  "Ask questions about the pictures and story to encourage engagement",
  "Let your child turn the pages — it builds participation and motor skills",
  "Connect story themes to real life: spot squirrels in the park!",
  "Praise your child's observations and questions during reading time",
];

const faqs = [
  {
    question: "What age group is the Squeak series best for?",
    answer: "The Squeak books are perfect for children ages 2-5, though many parents find that slightly older children enjoy them too! The simple, engaging stories and beautiful illustrations capture attention across early childhood.",
  },
  {
    question: "How can I use these books for learning?",
    answer: "Beyond reading, you can use Squeak's adventures to discuss nature, friendship, and feelings. The colouring book develops fine motor skills, and you can extend learning by going on 'squirrel hunts' in your local park or backyard!",
  },
  {
    question: "Why does Lori believe in 'Terrific Twos'?",
    answer: "With 30+ years in early childhood education, Lori has seen that toddlerhood is a time of incredible growth and discovery. By framing this age positively, we help children develop confidence and a love of learning that lasts a lifetime.",
  },
  {
    question: "Are the stories based on real events?",
    answer: "Yes! Squeak was inspired by the grey squirrels that visit Lori's backyard, and 'Squeak Meets New Friends' is based on a real experience with her grandchildren Leo and Evlyn helping a baby squirrel.",
  },
  {
    question: "How can educators use these books in the classroom?",
    answer: "The Squeak series is perfect for circle time, nature study units, and social-emotional learning discussions. The colouring book works great for quiet activities, and the themes of friendship and kindness align with many early childhood curriculum goals.",
  },
];

const ParentsEducators = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-16 md:py-20">
        <div className="container-page text-center">
          <h1 className="heading-hero text-foreground mb-4 animate-fade-in">
            For <span className="text-primary">Parents & Educators</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Discover how Squeak's adventures can support your child's development 
            and create meaningful moments of connection.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <h2 className="heading-section text-foreground text-center mb-4">
            The Power of Story Time
          </h2>
          <p className="text-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Research shows that reading to children from an early age has profound benefits. 
            Here's how the Squeak series supports your little one's growth.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="card-playful p-6 text-center hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Tips */}
      <section className="section-padding bg-muted">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-section text-foreground text-center mb-4">
              Tips for Meaningful Story Time
            </h2>
            <p className="text-body text-muted-foreground text-center mb-10">
              From Lori's 30+ years of experience in early childhood education
            </p>

            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-background p-4 rounded-2xl"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-page max-w-3xl">
          <h2 className="heading-section text-foreground text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body text-muted-foreground text-center mb-10">
            Common questions from parents and educators
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border border-border"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-card-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start the Adventure?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Bring Squeak's heartwarming stories into your home or classroom today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full btn-bounce">
              <Link to="/books">
                Explore the Books
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full btn-bounce bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">
                Contact Lori
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParentsEducators;
