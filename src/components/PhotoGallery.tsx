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
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    headline: "Manish Dhatrak Receives Innovation Excellence Award at Tech Summit 2023",
    date: "December 2023",
    category: "Awards"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    headline: "AI Research Paper Presentation at International Conference on Machine Learning",
    date: "November 2023",
    category: "Research"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    headline: "Keynote Speaker at Global Technology Innovation Forum 2023",
    date: "October 2023",
    category: "Speaking"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    headline: "Patent Recognition Ceremony for Quantum Computing Breakthrough",
    date: "September 2023",
    category: "Patents"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    headline: "Team Leadership Award at Annual Engineering Excellence Awards",
    date: "August 2023",
    category: "Leadership"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    headline: "Distinguished Alumni Recognition at University Graduation Ceremony",
    date: "July 2023",
    category: "Recognition"
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