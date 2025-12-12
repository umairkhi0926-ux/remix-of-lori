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
  { id: 1, src: loriHero, alt: "Lori J Thompson holding Squeak Meets New Friends", category: "Author" },
  { id: 2, src: loriReading, alt: "Lori reading her book", category: "Reading" },
  { id: 3, src: loriBookOpen, alt: "Lori showing a page from her book", category: "Author" },
  { id: 4, src: loriPose, alt: "Lori J Thompson portrait with hat", category: "Portrait" },
  { id: 5, src: loriWhiteJacket, alt: "Lori with Squeak Meets New Friends book", category: "Author" },
  { id: 6, src: loriThoughtful, alt: "Lori J Thompson thoughtful portrait", category: "Portrait" },
  { id: 7, src: loriElegant, alt: "Lori J Thompson elegant portrait", category: "Portrait" },
  { id: 8, src: loriFallOutdoor, alt: "Lori outdoors in autumn with her book", category: "Outdoor" },
  { id: 9, src: loriFallPortrait, alt: "Lori portrait in autumn setting", category: "Outdoor" },
  { id: 10, src: loriPlayful, alt: "Lori in playful pose outdoors", category: "Outdoor" },
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
      <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background py-16 md:py-20">
        <div className="container-page text-center">
          <h1 className="heading-hero text-foreground mb-4 animate-fade-in">
            Photo <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Moments from Lori's journey as an author, the inspiration behind Squeak, 
            and the joy her books bring to young readers.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer card-playful"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end justify-start p-4">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-medium text-sm transition-opacity bg-foreground/50 px-3 py-1 rounded-full">
                    {image.category}
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
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div 
            className="max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-white/80 text-center mt-4">{galleryImages[selectedImage].alt}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
