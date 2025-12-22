import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2 } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  headline: string;
  date: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://wallpapers.com/images/featured/nasa-galaxy-pictures-70kbz3omj6qrevn2.jpg",
    headline: "All India Rank 1 — Mission Rhumi (Fully Funded NASA Visit)",
    date: "2025",
    category: "Awards"
  },
  {
    id: 2,
    src: "https://forwardtogether.org/wp-content/uploads/2019/11/002e6962-9d03-486d-a662-23290f1ab1f9-shutterstock-1420252922.jpg",
    headline: "People’s Choice Award — NASA Space Apps Challenge (ExoYatra)",
    date: "2024",
    category: "Hackathon"
  },
  {
    id: 3,
    src: "https://www.kindpng.com/picc/m/175-1756272_education-empowered-students-hd-png-download.png",
    headline: "Selected Scholar — M2L Summer School (Google DeepMind)",
    date: "2025",
    category: "International"
  },
  {
    id: 4,
    src: "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg",
    headline: "Winner — IEEE Mumbai Section Research Paper Presentation",
    date: "2024",
    category: "Research"
  },
  {
    id: 5,
    src: "https://media.licdn.com/dms/image/v2/D5622AQGpzQ1HOocxAQ/feedshare-shrink_2048_1536/B56ZZ2Tbw5HUAo-/0/1745741530853?e=1767830400&v=beta&t=gZV_4zCedqKEVRE4aY8HkZk_lzo79HHC2eiu8h1Mcek",
    headline: "Winner — DIPEX 2025 (Innovative Structural Safety Monitoring)",
    date: "2025",
    category: "Competition"
  },
  {
    id: 6,
    src: "https://media.licdn.com/dms/image/v2/D5622AQF8tOBm_r6pmg/feedshare-shrink_2048_1536/B56ZaBkNAJGQAo-/0/1745930530247?e=1767830400&v=beta&t=p-SmdVXvZCVms9IFuftPGIAFlsGdmIrxle2iuNfrLuA",
    headline: "Winner — MIT ADT University Tech Expo",
    date: "2024",
    category: "Academia"
  },
  {
    id: 7,
    src: "https://wallpapercave.com/wp/wp14679603.jpg",
    headline: "Finalist — Bosch Hackathon (Industry Challenge)",
    date: "April 2024",
    category: "Industry"
  },
  {
    id: 8,
    src: "https://wallup.net/wp-content/uploads/2016/01/157049-planet-sea-sunset-beach-water-space-748x468.jpg",
    headline: "Local Lead — NASA Space Apps Challenge (Mentored 80+ Students)",
    date: "2025",
    category: "Leadership"
  }
];


const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
    setIsAutoPlaying(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Achievement Gallery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A visual journey through milestones, recognitions, and memorable moments in my professional career
          </p>
        </div>

        {/* Main Gallery Container */}
        <div className="relative">
          {/* Gallery Carousel */}
          <div 
            className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].headline}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Image Content Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                >
                  <div className="max-w-4xl">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/20 mb-3"
                    >
                      {galleryImages[currentIndex].category}
                    </motion.span>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight"
                    >
                      {galleryImages[currentIndex].headline}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="text-gray-300 text-lg"
                    >
                      {galleryImages[currentIndex].date}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Expand Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  onClick={() => openLightbox(galleryImages[currentIndex])}
                  className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:opacity-100 opacity-0"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </motion.button>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots Indicators */}
            <div className="flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-purple-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={toggleAutoPlay}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-full border border-purple-500/20 transition-all duration-300"
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 text-purple-400" />
              ) : (
                <Play className="w-4 h-4 text-purple-400" />
              )}
              <span className="text-purple-400 text-sm">
                {isAutoPlaying ? 'Pause' : 'Play'}
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.headline}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/20 mb-3">
                  {lightboxImage.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {lightboxImage.headline}
                </h3>
                <p className="text-gray-300">{lightboxImage.date}</p>
              </div>
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;