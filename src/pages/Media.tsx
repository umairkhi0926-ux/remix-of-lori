import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Newspaper, Mail, Download } from "lucide-react";

const pressArticles = [
  {
    outlet: "America Daily Post",
    title: "Lori J Thompson: Inspiring Young Readers with Squeak the Squirrel",
    excerpt: "A heartwarming journey from preschool teacher to beloved children's author, Lori J Thompson shares how her backyard squirrels inspired a book series that's capturing hearts nationwide.",
    url: "#",
    date: "2024",
  },
  {
    outlet: "LA Weekly Magazine",
    title: "The 'Terrific Twos' Philosophy: A Fresh Take on Toddler Development",
    excerpt: "After 30 years in early childhood education, Lori J Thompson is challenging the 'Terrible Twos' narrative with stories that celebrate curiosity and growth.",
    url: "#",
    date: "2024",
  },
  {
    outlet: "USA Wire",
    title: "Children's Author Lori J Thompson on the Power of Nature-Inspired Storytelling",
    excerpt: "An exclusive interview with the author behind the Squeak series, exploring how real-life encounters with wildlife shaped her approach to children's literature.",
    url: "#",
    date: "2024",
  },
  {
    outlet: "WellnessVoice",
    title: "Building Toddler Confidence Through Gentle Storytelling",
    excerpt: "Lori J Thompson discusses the developmental benefits of her Squeak books and shares tips for parents looking to foster early literacy.",
    url: "#",
    date: "2024",
  },
  {
    outlet: "The American Reporter",
    title: "From Backyard to Bookshelf: The Real Story Behind Squeak",
    excerpt: "The charming tale of how Lori's grandchildren and the squirrels in her garden became the inspiration for a successful children's book series.",
    url: "#",
    date: "2024",
  },
  {
    outlet: "Time Business News",
    title: "Self-Published Success: Lori J Thompson's Journey as an Author-Entrepreneur",
    excerpt: "How a former preschool teacher turned her passion for storytelling into a growing book business that's making a difference in early childhood education.",
    url: "#",
    date: "2024",
  },
];

const Media = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-16 md:py-20">
        <div className="container-page text-center">
          <h1 className="heading-hero text-foreground mb-4 animate-fade-in">
            <span className="text-primary">Media</span> & Press
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Lori J Thompson's story has been featured in publications across North America. 
            Explore the coverage and learn more about the author behind Squeak.
          </p>
        </div>
      </section>

      {/* Press Articles */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <h2 className="heading-section text-foreground text-center mb-12">
            Featured Articles
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pressArticles.map((article, index) => (
              <article 
                key={index}
                className="card-playful p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Newspaper className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">{article.outlet}</p>
                    <p className="text-xs text-muted-foreground">{article.date}</p>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-lg text-card-foreground mb-3">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm flex-1 mb-4">
                  {article.excerpt}
                </p>

                <Button asChild variant="outline" size="sm" className="rounded-full self-start">
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
      <section className="section-padding bg-muted">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section text-foreground mb-4">
              Media Inquiries
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              Interested in featuring Lori J Thompson or the Squeak series? 
              We'd love to hear from journalists, podcasters, and content creators.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="card-playful p-6 text-center">
                <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">
                  Contact for Press
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Reach out for interviews, features, or collaboration opportunities.
                </p>
                <Button asChild className="rounded-full">
                  <a href="mailto:lorij12259@gmail.com">
                    Email Lori
                  </a>
                </Button>
              </div>

              <div className="card-playful p-6 text-center">
                <Download className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">
                  Media Kit
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Download author photos, book covers, and press materials.
                </p>
                <Button variant="outline" className="rounded-full" disabled>
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Quote */}
      <section className="py-16 bg-primary">
        <div className="container-page text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-2xl md:text-3xl text-primary-foreground italic mb-6">
              "Every child deserves stories that make them feel brave, curious, and loved. 
              That's what I hope to give with every book I write."
            </p>
            <footer className="text-primary-foreground/80 font-semibold">
              — Lori J Thompson
            </footer>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
