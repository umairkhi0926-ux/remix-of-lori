import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedBooks } from "@/components/home/FeaturedBooks";
import { AboutPreview } from "@/components/home/AboutPreview";
import { MediaMentions } from "@/components/home/MediaMentions";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedBooks />
      <AboutPreview />
      <MediaMentions />
    </Layout>
  );
};

export default Index;
