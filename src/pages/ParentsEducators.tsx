import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    title: "Cognitive Development",
    description: "Stories stimulate imagination and help develop critical thinking skills in toddlers.",
    emoji: "🧠",
    color: "bg-purple/20",
  },
  {
    title: "Emotional Intelligence",
    description: "Squeak's adventures teach empathy, kindness, and understanding of feelings.",
    emoji: "💕",
    color: "bg-coral/20",
  },
  {
    title: "Language Skills",
    description: "Reading aloud builds vocabulary and promotes early literacy development.",
    emoji: "💬",
    color: "bg-sky/20",
  },
  {
    title: "Bonding Time",
    description: "Shared reading creates precious moments of connection between caregivers and children.",
    emoji: "👨‍👩‍👧",
    color: "bg-sunny/30",
  },
  {
    title: "Creative Expression",
    description: "The colouring book encourages artistic expression and fine motor skill development.",
    emoji: "🎨",
    color: "bg-mint/20",
  },
  {
    title: "Love of Reading",
    description: "Engaging stories foster a lifelong appreciation for books and learning.",
    emoji: "📚",
    color: "bg-primary/20",
  },
];

const tips = [
  { text: "Make reading a daily ritual — even just 10-15 minutes creates lasting impact", emoji: "⏰" },
  { text: "Use different voices for characters to make stories come alive", emoji: "🎭" },
  { text: "Ask questions about the pictures and story to encourage engagement", emoji: "❓" },
  { text: "Let your child turn the pages — it builds participation and motor skills", emoji: "👆" },
  { text: "Connect story themes to real life: spot squirrels in the park!", emoji: "🐿️" },
  { text: "Praise your child's observations and questions during reading time", emoji: "⭐" },
];

const faqs = [
  {
    question: "What age group is the Squeak series best for?",
    answer: "The Squeak books are perfect for children ages 2-5, though many parents find that slightly older children enjoy them too! The simple, engaging stories and beautiful illustrations capture attention across early childhood.",
    emoji: "👶",
  },
  {
    question: "How can I use these books for learning?",
    answer: "Beyond reading, you can use Squeak's adventures to discuss nature, friendship, and feelings. The colouring book develops fine motor skills, and you can extend learning by going on 'squirrel hunts' in your local park or backyard!",
    emoji: "🎓",
  },
  {
    question: "Why does Lori believe in 'Terrific Twos'?",
    answer: "With 30+ years in early childhood education, Lori has seen that toddlerhood is a time of incredible growth and discovery. By framing this age positively, we help children develop confidence and a love of learning that lasts a lifetime.",
    emoji: "✨",
  },
  {
    question: "Are the stories based on real events?",
    answer: "Yes! Squeak was inspired by the grey squirrels that visit Lori's backyard, and 'Squeak Meets New Friends' is based on a real experience with her grandchildren Leo and Evlyn helping a baby squirrel.",
    emoji: "🐿️",
  },
  {
    question: "How can educators use these books in the classroom?",
    answer: "The Squeak series is perfect for circle time, nature study units, and social-emotional learning discussions. The colouring book works great for quiet activities, and the themes of friendship and kindness align with many early childhood curriculum goals.",
    emoji: "🏫",
  },
];

const ParentsEducators = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-coral-light/30 via-muted to-background py-16 md:py-20">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[5%] text-4xl animate-float">👨‍👩‍👧</div>
          <div className="absolute top-32 right-[10%] text-3xl animate-float-delayed">📚</div>
          <div className="absolute bottom-20 left-[15%] text-2xl animate-bounce-gentle">🎓</div>
          <div className="absolute bottom-10 right-[8%] text-3xl animate-wiggle">✨</div>
        </div>

        <div className="container-page text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/20 text-coral text-sm font-bold mb-4">
            <span>👩‍🏫</span>
            Resources for Grown-Ups
          </div>
          <h1 className="heading-hero text-foreground mb-4 animate-fade-in">
            For <span className="text-primary">Parents & Educators</span>
            <span className="inline-block ml-2 animate-wiggle">💕</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Discover how Squeak&apos;s adventures can support your child&apos;s development 
            and create meaningful moments of connection! 🌟
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[5%] text-2xl animate-float opacity-40">💡</div>
          <div className="absolute bottom-20 left-[5%] text-2xl animate-sparkle opacity-40">⭐</div>
        </div>

        <div className="container-page relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/40 text-accent-foreground text-sm font-bold mb-4">
              <span>✨</span>
              Learning Benefits
            </div>
            <h2 className="heading-section text-foreground mb-4">
              The Power of Story Time
              <span className="inline-block ml-2 animate-bounce-gentle">📖</span>
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Research shows that reading to children from an early age has profound benefits. 
              Here&apos;s how the Squeak series supports your little one&apos;s growth! 🌱
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-transparent hover:border-primary/20 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl ${benefit.color} mx-auto mb-4 flex items-center justify-center text-3xl`}>
                  {benefit.emoji}
                </div>
                <h3 className="font-display font-bold text-lg text-card-foreground mb-2">
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
      <section className="section-padding bg-gradient-to-b from-muted via-sky-light/30 to-muted relative overflow-hidden">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] text-3xl animate-float">💡</div>
          <div className="absolute bottom-10 right-[10%] text-3xl animate-float-delayed">🌟</div>
        </div>

        <div className="container-page relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                <span>💡</span>
                Pro Tips
              </div>
              <h2 className="heading-section text-foreground mb-4">
                Tips for Meaningful Story Time
                <span className="inline-block ml-2 animate-wiggle">📖</span>
              </h2>
              <p className="text-body text-muted-foreground">
                From Lori&apos;s 30+ years of experience in early childhood education 🎓
              </p>
            </div>

            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-primary/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center text-2xl flex-shrink-0">
                    {tip.emoji}
                  </div>
                  <p className="text-foreground pt-2">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[8%] text-2xl animate-sparkle opacity-40">❓</div>
          <div className="absolute bottom-20 left-[8%] text-2xl animate-float opacity-40">💭</div>
        </div>

        <div className="container-page max-w-3xl relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/20 text-coral text-sm font-bold mb-4">
              <span>❓</span>
              Got Questions?
            </div>
            <h2 className="heading-section text-foreground mb-4">
              Frequently Asked Questions
              <span className="inline-block ml-2 animate-bounce-gentle">🤔</span>
            </h2>
            <p className="text-body text-muted-foreground">
              Common questions from parents and educators
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-bold text-card-foreground hover:no-underline py-5">
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{faq.emoji}</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-coral via-coral-light to-coral relative overflow-hidden">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-[10%] text-2xl animate-sparkle">✨</div>
          <div className="absolute bottom-4 right-[10%] text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>⭐</div>
          <div className="absolute top-1/2 left-[5%] text-3xl animate-float">📚</div>
          <div className="absolute top-1/2 right-[5%] text-3xl animate-float-delayed">🐿️</div>
        </div>

        <div className="container-page text-center relative">
          <div className="text-5xl mb-4 animate-bounce-gentle">🚀</div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Start the Adventure?
            <span className="inline-block ml-2 animate-wiggle">🎉</span>
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8">
            Bring Squeak&apos;s heartwarming stories into your home or classroom today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full btn-bounce shadow-xl bg-white text-coral hover:bg-accent hover:text-accent-foreground">
              <Link to="/books">
                Explore the Books
                <ArrowRight className="w-4 h-4 ml-2" />
                <span className="ml-1">📚</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full btn-bounce bg-transparent border-2 border-white text-white hover:bg-white hover:text-coral">
              <Link to="/contact">
                Contact Lori
                <span className="ml-2">💌</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParentsEducators;
