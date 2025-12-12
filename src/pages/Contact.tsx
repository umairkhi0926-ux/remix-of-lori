import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Sparkles } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

const contactReasons = [
  { title: "General Inquiries", description: "Questions about Lori or her books", emoji: "💬" },
  { title: "Media & Press", description: "Interview and feature requests", emoji: "📰" },
  { title: "School Visits", description: "Author visits and readings", emoji: "🏫" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (will be replaced with Resend integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. Lori will get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Oops! 😅",
        description: "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sunny-light/40 via-muted to-background py-16 md:py-20">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[5%] text-4xl animate-float">💌</div>
          <div className="absolute top-32 right-[10%] text-3xl animate-float-delayed">✉️</div>
          <div className="absolute bottom-20 left-[15%] text-2xl animate-bounce-gentle">⭐</div>
          <div className="absolute bottom-10 right-[8%] text-3xl animate-wiggle">✨</div>
        </div>

        <div className="container-page text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/40 text-accent-foreground text-sm font-bold mb-4">
            <span>👋</span>
            Say Hello!
          </div>
          <h1 className="heading-hero text-foreground mb-4 animate-fade-in">
            Get in <span className="text-primary">Touch</span>
            <span className="inline-block ml-2 animate-wiggle">💌</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Have a question, want to request a school visit, or just want to share 
            how Squeak has touched your family? Lori would love to hear from you! 🐿️
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[5%] text-2xl animate-sparkle opacity-40">✨</div>
          <div className="absolute bottom-20 left-[5%] text-2xl animate-float opacity-40">💚</div>
        </div>

        <div className="container-page relative">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                  <Sparkles className="w-4 h-4" />
                  Connect with Lori
                </div>
                <h2 className="heading-section text-foreground mb-4">
                  Let&apos;s Connect!
                  <span className="inline-block ml-2 animate-bounce-gentle">🤝</span>
                </h2>
                <p className="text-muted-foreground">
                  Whether you&apos;re a parent, educator, or fellow book lover, 
                  I&apos;d be delighted to hear from you. 💕
                </p>
              </div>

              {/* Contact reasons */}
              <div className="space-y-4">
                {contactReasons.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-primary/20"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center text-2xl flex-shrink-0">
                      {reason.emoji}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct email */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-coral/10 border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                    📧
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Prefer email directly?
                  </p>
                </div>
                <a 
                  href="mailto:lorij12259@gmail.com"
                  className="flex items-center gap-2 text-primary font-bold hover:underline text-lg"
                >
                  <Mail className="w-5 h-5" />
                  lorij12259@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-4 border-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center text-xl">
                  ✍️
                </div>
                <h3 className="font-display font-bold text-xl text-card-foreground">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <span>👤</span> Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={`rounded-xl border-2 ${errors.name ? "border-destructive" : "border-primary/20 focus:border-primary"}`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <span>📧</span> Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={`rounded-xl border-2 ${errors.email ? "border-destructive" : "border-primary/20 focus:border-primary"}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="flex items-center gap-2">
                    <span>📝</span> Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`rounded-xl border-2 ${errors.subject ? "border-destructive" : "border-primary/20 focus:border-primary"}`}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <span>💬</span> Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Lori what's on your mind..."
                    rows={5}
                    className={`rounded-xl resize-none border-2 ${errors.message ? "border-destructive" : "border-primary/20 focus:border-primary"}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-full btn-bounce bg-gradient-to-r from-primary to-forest-light shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <span className="ml-2 animate-spin">⏳</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                      <span className="ml-1">🚀</span>
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
                  <span>⏰</span>
                  Lori typically responds within 2-3 business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
