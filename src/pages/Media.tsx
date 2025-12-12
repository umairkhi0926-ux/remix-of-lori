import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Download, Sparkles } from "lucide-react";

const pressArticles = [
  {
    outlet: "America Daily Post",
    title: "Lori J Thompson: Inspiring Young Readers with Squeak the Squirrel",
    excerpt: "A heartwarming journey from preschool teacher to beloved children's author, Lori J Thompson shares how her backyard squirrels inspired a book series that's capturing hearts nationwide.",
    url: "#",
    date: "2024",
    emoji: "📰",
  },
  {
    outlet: "LA Weekly Magazine",
    title: "The 'Terrific Twos' Philosophy: A Fresh Take on Toddler Development",
    excerpt: "After 30 years in early childhood education, Lori J Thompson is challenging the 'Terrible Twos' narrative with stories that celebrate curiosity and growth.",
    url: "#",
    date: "2024",
    emoji: "🌟",
  },
  {
    outlet: "USA Wire",
    title: "Children's Author Lori J Thompson on the Power of Nature-Inspired Storytelling",
    excerpt: "An exclusive interview with the author behind the Squeak series, exploring how real-life encounters with wildlife shaped her approach to children's literature.",
    url: "#",
    date: "2024",
    emoji: "⚡",
  },
  {
    outlet: "WellnessVoice",
    title: "Building Toddler Confidence Through Gentle Storytelling",
    excerpt: "Lori J Thompson discusses the developmental benefits of her Squeak books and shares tips for parents looking to foster early literacy.",
    url: "#",
    date: "2024",
    emoji: "💚",
  },
  {
    outlet: "The American Reporter",
    title: "From Backyard to Bookshelf: The Real Story Behind Squeak",
    excerpt: "The charming tale of how Lori's grandchildren and the squirrels in her garden became the inspiration for a successful children's book series.",
    url: "#",
    date: "2024",
    emoji: "📺",
  },
  {
    outlet: "Time Business News",
    title: "Self-Published Success: Lori J Thompson's Journey as an Author-Entrepreneur",
    excerpt: "How a former preschool teacher turned her passion for storytelling into a growing book business that's making a difference in early childhood education.",
    url: "#",
    date: "2024",
    emoji: "⏰",
  },
];

const Media = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-light/30 via-muted to-background py-16 md:py-20">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[5%] text-4xl animate-float">📰</div>
          <div className="absolute top-32 right-[10%] text-3xl animate-float-delayed">🎤</div>
          <div className="absolute bottom-20 left-[15%] text-2xl animate-bounce-gentle">⭐</div>
          <div className="absolute bottom-10 right-[8%] text-3xl animate-wiggle">✨</div>
        </div>

        <div className="container-page text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/20 text-purple text-sm font-bold mb-4">
            <span>📺</span>
            In The News
          </div>
          <h1 className="heading-hero text-foreground mb-4 animate-fade-in">
            <span className="text-primary">Media</span> & Press
            <span className="inline-block ml-2 animate-wiggle">📰</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Lori J Thompson&apos;s story has been featured in publications across North America. 
            Explore the coverage and learn more about the author behind Squeak! 🐿️
          </p>
        </div>
      </section>

      {/* Press Articles */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[5%] text-2xl animate-sparkle opacity-40">✨</div>
          <div className="absolute bottom-20 left-[5%] text-2xl animate-float opacity-40">📝</div>
        </div>

        <div className="container-page relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/40 text-accent-foreground text-sm font-bold mb-4">
              <span>📖</span>
              Read About Lori
            </div>
            <h2 className="heading-section text-foreground">
              Featured Articles
              <span className="inline-block ml-2 animate-bounce-gentle">🌟</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pressArticles.map((article, index) => (
              <article 
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-transparent hover:border-primary/20 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                    {article.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">{article.outlet}</p>
                    <p className="text-xs text-muted-foreground">{article.date}</p>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-card-foreground mb-3">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm flex-1 mb-4">
                  {article.excerpt}
                </p>

                <Button asChild variant="outline" size="sm" className="rounded-full self-start border-2 border-primary/30 hover:bg-primary hover:text-white">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read Article
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit & Contact */}
      <section className="section-padding bg-gradient-to-b from-muted via-sky-light/30 to-muted relative overflow-hidden">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] text-3xl animate-float">💌</div>
          <div className="absolute bottom-10 right-[10%] text-3xl animate-float-delayed">📦</div>
        </div>

        <div className="container-page relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/20 text-coral text-sm font-bold mb-4">
              <span>🎤</span>
              Work With Lori
            </div>
            <h2 className="heading-section text-foreground mb-4">
              Media Inquiries
              <span className="inline-block ml-2 animate-wiggle">📣</span>
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              Interested in featuring Lori J Thompson or the Squeak series? 
              We&apos;d love to hear from journalists, podcasters, and content creators! 🎙️
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border-4 border-transparent hover:border-primary/20 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-4 flex items-center justify-center text-3xl">
                  💌
                </div>
                <h3 className="font-display font-bold text-lg text-card-foreground mb-2">
                  Contact for Press
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Reach out for interviews, features, or collaboration opportunities.
                </p>
                <Button asChild className="rounded-full btn-bounce">
                  <a href="mailto:lorij12259@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Lori
                  </a>
                </Button>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border-4 border-transparent hover:border-primary/20 text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/30 mx-auto mb-4 flex items-center justify-center text-3xl">
                  📦
                </div>
                <h3 className="font-display font-bold text-lg text-card-foreground mb-2">
                  Media Kit
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Download author photos, book covers, and press materials.
                </p>
                <Button variant="outline" className="rounded-full btn-bounce border-2" disabled>
                  <Download className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Quote */}
      <section className="py-16 bg-gradient-to-r from-primary via-forest-light to-primary relative overflow-hidden">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-[10%] text-2xl animate-sparkle">✨</div>
          <div className="absolute bottom-4 right-[10%] text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>⭐</div>
          <div className="absolute top-1/2 left-[5%] text-3xl animate-float">💚</div>
          <div className="absolute top-1/2 right-[5%] text-3xl animate-float-delayed">🐿️</div>
        </div>

        <div className="container-page text-center relative">
          <div className="text-5xl mb-4 animate-bounce-gentle">💬</div>
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-2xl md:text-3xl text-primary-foreground italic mb-6">
              "Every child deserves stories that make them feel brave, curious, and loved. 
              That&apos;s what I hope to give with every book I write."
            </p>
            <footer className="text-primary-foreground/80 font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              — Lori J Thompson
              <span className="text-xl">✨</span>
            </footer>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
