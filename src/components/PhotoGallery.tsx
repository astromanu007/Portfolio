import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
} from "lucide-react";

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
    src: "https://media.licdn.com/dms/image/v2/D5622AQGPo-g6Qjk5JQ/feedshare-shrink_800/B56ZjcGf7mHAAo-/0/1756039350978",
    headline: "All India Rank 1 — Mission Rhumi (Fully Funded NASA Visit)",
    date: "2025",
    category: "Awards",
  },
  {
    id: 2,
    src: "https://media.licdn.com/dms/image/v2/D5622AQHiQNomPumdtw/feedshare-shrink_1280/0/1730113290823",
    headline:
      "People’s Choice Award — NASA Space Apps Challenge (ExoYatra)",
    date: "2024",
    category: "Hackathon",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/2400x1600/?machine-learning,conference",
    headline: "Selected Scholar — M2L Summer School (Google DeepMind)",
    date: "2025",
    category: "International",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/2400x1600/?research,presentation",
    headline:
      "Winner — IEEE Mumbai Section Research Paper Presentation",
    date: "2024",
    category: "Research",
  },
  {
    id: 5,
    src: "https://media.licdn.com/dms/image/v2/D5622AQGpzQ1HOocxAQ/feedshare-shrink_2048_1536/0/1745741530853",
    headline:
      "Winner — DIPEX 2025 (Innovative Structural Safety Monitoring)",
    date: "2025",
    category: "Competition",
  },
  {
    id: 6,
    src: "https://media.licdn.com/dms/image/v2/D5622AQF8tOBm_r6pmg/feedshare-shrink_2048_1536/0/1745930530247",
    headline: "Winner — MIT ADT University Tech Expo",
    date: "2024",
    category: "Academia",
  },
  {
    id: 7,
    src: "https://media.licdn.com/dms/image/v2/D5622AQHfAYBQAHw0yA/feedshare-shrink_2048_1536/0/1712483554293",
    headline: "Finalist — Bosch Hackathon (Industry Challenge)",
    date: "April 2024",
    category: "Industry",
  },
  {
    id: 8,
    src: "https://media.licdn.com/dms/image/v2/C4D22AQEPHczAzj6bqg/feedshare-shrink_800/0/1655580979897",
    headline:
      "International Space Olympiad — Global Second Rank",
    date: "2024",
    category: "Olympiad",
  },
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] =
    useState<GalleryImage | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* Auto-play */
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(
          (prev) => (prev + 1) % galleryImages.length
        );
      }, 4200);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  return (
    <section id="gallery" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Achievement Gallery
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A curated record of academic excellence, innovation, and global recognition
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[520px] md:h-[620px] rounded-3xl overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* IMAGE — NO CROPPING, TRANSPARENT */}
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].headline}
                className="w-full h-full object-contain bg-transparent"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <span className="inline-block mb-2 px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400">
                  {galleryImages[currentIndex].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {galleryImages[currentIndex].headline}
                </h3>
                <p className="text-gray-300 mt-1">
                  {galleryImages[currentIndex].date}
                </p>
              </div>

              {/* Expand */}
              <button
                onClick={() => {
                  setLightboxImage(galleryImages[currentIndex]);
                  setIsLightboxOpen(true);
                  setIsAutoPlaying(false);
                }}
                className="absolute top-4 right-4 p-3 rounded-full bg-black/40 border border-white/20 opacity-0 group-hover:opacity-100 transition"
              >
                <Maximize2 className="text-white" />
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() =>
              setCurrentIndex(
                (prev) =>
                  (prev - 1 + galleryImages.length) %
                  galleryImages.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 border border-white/20 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={() =>
              setCurrentIndex(
                (prev) =>
                  (prev + 1) % galleryImages.length
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 border border-white/20 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex
                    ? "bg-purple-500 scale-125"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/20"
          >
            {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isAutoPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && lightboxImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              className="max-w-6xl w-full bg-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.headline}
                className="w-full max-h-[80vh] object-contain bg-transparent"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
