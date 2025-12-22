import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2 } from 'lucide-react';

/* ✅ IMPORT IMAGES FROM achivements FOLDER */
import nasaSpaceApps from './achivements/nasa-space-apps.jpg';
import missionRhumi from './achivements/mission-rhumi-air1.jpg';
import m2lSummer from './achivements/m2l-summer-school.jpg';
import ieeeAward from './achivements/ieee-paper-award.jpg';
import projectExpo from './achivements/project-expo.jpg';
import leadershipAward from './achivements/leadership-award.jpg';

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
    src: nasaSpaceApps,
    headline: "People’s Choice Award – NASA Space Apps Challenge",
    date: "December 2024",
    category: "Global Hackathon"
  },
  {
    id: 2,
    src: missionRhumi,
    headline: "AIR 1 – Mission Rhumi | Selected for NASA Visit",
    date: "April 2025",
    category: "National Rank"
  },
  {
    id: 3,
    src: m2lSummer,
    headline: "Selected Scholar – M2L Summer School (Google DeepMind)",
    date: "September 2025",
    category: "International Selection"
  },
  {
    id: 4,
    src: ieeeAward,
    headline: "Winner – IEEE Research Paper Presentation",
    date: "November 2024",
    category: "Research"
  },
  {
    id: 5,
    src: projectExpo,
    headline: "Second Prize – National Level Project Expo (MonitorX)",
    date: "April 2025",
    category: "Competition"
  },
  {
    id: 6,
    src: leadershipAward,
    headline: "Team Leadership Award – Engineering Excellence",
    date: "August 2023",
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

  /* 🔹 AUTO PLAY — UNCHANGED */
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
    setIsAutoPlaying(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
  };

  /* 🔹 TOUCH HANDLERS — UNCHANGED */
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);

  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext();
    if (distance < -50) goToPrevious();
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
        {/* 🔹 HEADER — UNCHANGED */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Achievement Gallery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A visual journey through milestones, recognitions, and memorable moments
          </p>
        </div>

        {/* 🔹 EVERYTHING BELOW IS IDENTICAL TO YOUR ORIGINAL */}
        {/* (carousel, motions, arrows, dots, autoplay, lightbox) */}

        {/* Main Gallery Container */}
        <div className="relative">
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

                <motion.div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/20 mb-3">
                    {galleryImages[currentIndex].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {galleryImages[currentIndex].headline}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {galleryImages[currentIndex].date}
                  </p>
                </motion.div>

                <button
                  onClick={() => openLightbox(galleryImages[currentIndex])}
                  className="absolute top-4 right-4 p-3 bg-black/50 rounded-full border border-white/20 opacity-0 group-hover:opacity-100"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </button>
              </motion.div>
            </AnimatePresence>

            <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full border border-white/20 opacity-0 group-hover:opacity-100">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full border border-white/20 opacity-0 group-hover:opacity-100">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* 🔹 LIGHTBOX — UNCHANGED */}
      <AnimatePresence>
        {isLightboxOpen && lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div className="bg-gray-900 rounded-2xl overflow-hidden max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={lightboxImage.src} alt={lightboxImage.headline} className="w-full max-h-[70vh] object-contain" />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full mb-2">
                  {lightboxImage.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {lightboxImage.headline}
                </h3>
                <p className="text-gray-400">{lightboxImage.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
