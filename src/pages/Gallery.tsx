import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import all gallery images
import loriHero from "@/assets/lori-hero.jpg";
import loriReading from "@/assets/lori-reading.jpg";
import loriBookOpen from "@/assets/lori-book-open.jpg";
import loriPose from "@/assets/lori-pose.jpg";
import loriWhiteJacket from "@/assets/lori-white-jacket.jpg";
import loriThoughtful from "@/assets/lori-thoughtful.jpg";
import loriElegant from "@/assets/lori-elegant.jpg";
import loriFallOutdoor from "@/assets/lori-fall-outdoor.jpg";
import loriFallPortrait from "@/assets/lori-fall-portrait.jpg";
import loriPlayful from "@/assets/lori-playful.jpg";

const galleryImages = [
  { id: 1, src: loriHero, alt: "Lori J Thompson holding Squeak Meets New Friends", category: "Author", emoji: "📚" },
  { id: 2, src: loriReading, alt: "Lori reading her book", category: "Reading", emoji: "📖" },
  { id: 3, src: loriBookOpen, alt: "Lori showing a page from her book", category: "Author", emoji: "✨" },
  { id: 4, src: loriPose, alt: "Lori J Thompson portrait with hat", category: "Portrait", emoji: "🎩" },
  { id: 5, src: loriWhiteJacket, alt: "Lori with Squeak Meets New Friends book", category: "Author", emoji: "📕" },
  { id: 6, src: loriThoughtful, alt: "Lori J Thompson thoughtful portrait", category: "Portrait", emoji: "💭" },
  { id: 7, src: loriElegant, alt: "Lori J Thompson elegant portrait", category: "Portrait", emoji: "🌟" },
  { id: 8, src: loriFallOutdoor, alt: "Lori outdoors in autumn with her book", category: "Outdoor", emoji: "🍂" },
  { id: 9, src: loriFallPortrait, alt: "Lori portrait in autumn setting", category: "Outdoor", emoji: "🌳" },
  { id: 10, src: loriPlayful, alt: "Lori in playful pose outdoors", category: "Outdoor", emoji: "🎉" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-mint-light/30 via-muted to-background py-16 md:py-20">
        {/* Fun decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[5%] text-4xl animate-float">🖼️</div>
          <div className="absolute top-32 right-[10%] text-3xl animate-float-delayed">📸</div>
          <div className="absolute bottom-20 left-[15%] text-2xl animate-bounce-gentle">⭐</div>
          <div className="absolute bottom-10 right-[8%] text-3xl animate-wiggle">✨</div>
        </div>

        <div className="container-page text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/20 text-mint text-sm font-bold mb-4">
            <span>📷</span>
            Picture Time!
          </div>
          <h1 className="heading-hero text-foreground mb-4 animate-fade-in">
            Photo <span className="text-primary">Gallery</span>
            <span className="inline-block ml-2 animate-wiggle">🖼️</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Moments from Lori&apos;s journey as an author, the inspiration behind Squeak, 
            and the joy her books bring to young readers! 🌟
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[5%] text-2xl animate-sparkle opacity-40">✨</div>
          <div className="absolute bottom-20 left-[5%] text-2xl animate-float opacity-40">🌟</div>
        </div>

        <div className="container-page relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-transparent hover:border-primary/30"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="mr-1">{image.emoji}</span>
                  {image.category}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-bold text-sm flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-full">
                    <span>👀</span>
                    View Photo
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10 bg-white/20 rounded-full p-2 hover:bg-white/30"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-3 bg-white/20 rounded-full hover:bg-white/30"
            onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-3 bg-white/20 rounded-full hover:bg-white/30"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <span className="text-2xl mr-2">{galleryImages[selectedImage].emoji}</span>
              <span className="text-white/80">{galleryImages[selectedImage].alt}</span>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
