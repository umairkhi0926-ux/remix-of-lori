import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, MessageCircle, BookOpen } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

const contactReasons = [
  { icon: MessageCircle, title: "General Inquiries", description: "Questions about Lori or her books" },
  { icon: Mail, title: "Media & Press", description: "Interview and feature requests" },
  { icon: BookOpen, title: "School Visits", description: "Author visits and readings" },
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
        title: "Message Sent!",
        description: "Thank you for reaching out. Lori will get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Oops!",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-16 md:py-20">
        <div className="container-page text-center">
          <h1 className="heading-hero text-foreground mb-4 animate-fade-in">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Have a question, want to request a school visit, or just want to share 
            how Squeak has touched your family? Lori would love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-section text-foreground mb-4">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground">
                  Whether you're a parent, educator, or fellow book lover, 
                  I'd be delighted to hear from you.
                </p>
              </div>

              {/* Contact reasons */}
              <div className="space-y-4">
                {contactReasons.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-muted"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">
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
              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">
                  Prefer email directly?
                </p>
                <a 
                  href="mailto:lorij12259@gmail.com"
                  className="flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Mail className="w-5 h-5" />
                  lorij12259@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-playful p-6 md:p-8">
              <h3 className="font-display font-semibold text-xl text-card-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={`rounded-xl ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={`rounded-xl ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`rounded-xl ${errors.subject ? "border-destructive" : ""}`}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Lori what's on your mind..."
                    rows={5}
                    className={`rounded-xl resize-none ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-full btn-bounce"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
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
