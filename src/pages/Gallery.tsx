import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";

// Placeholder images - will be replaced with actual photos
const galleryImages = [
  { id: 1, alt: "Lori J Thompson author portrait", category: "Author" },
  { id: 2, alt: "Squeak book signing event", category: "Events" },
  { id: 3, alt: "Children reading Squeak books", category: "Readers" },
  { id: 4, alt: "Lori with grandchildren", category: "Family" },
  { id: 5, alt: "Backyard squirrel inspiration", category: "Inspiration" },
  { id: 6, alt: "Author at work", category: "Author" },
  { id: 7, alt: "Book display", category: "Books" },
  { id: 8, alt: "Lori speaking at school", category: "Events" },
  { id: 9, alt: "Squeak book covers", category: "Books" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-coral/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-4xl md:text-5xl">📷</span>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2">{image.category}</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-primary-foreground font-medium text-sm transition-opacity">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Note about photos */}
          <p className="text-center text-muted-foreground text-sm mt-8">
            Gallery photos will be added here — showcasing Lori's professional portraits, 
            book events, and the inspiration behind Squeak's adventures.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-primary-foreground hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div 
            className="max-w-4xl w-full aspect-video bg-card rounded-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center p-8">
              <span className="text-6xl">📷</span>
              <p className="text-muted-foreground mt-4">{galleryImages[selectedImage].alt}</p>
              <p className="text-sm text-muted-foreground/60 mt-2">
                {galleryImages[selectedImage].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
