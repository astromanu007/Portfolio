import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Building, FileText, CheckCircle, ExternalLink, X, Mail, Phone, Calendar, UserCheck } from 'lucide-react';
import { sfx } from '../utils/audio';

interface Recommendation {
  id: string;
  name: string;
  title: string;
  department: string;
  institution: string;
  date: string;
  contactEmail: string;
  contactPhone: string;
  summaryQuote: string;
  fullLetterText: string[];
  keyHighlights: string[];
  officialDocTitle: string;
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'dr-kiran-wakchaure',
    name: 'Dr. Kiran Wakchaure',
    title: 'Director Research & Project',
    department: 'Department of Research & Project',
    institution: 'Sanjivani University, Kopargaon (Govt. of Maharashtra Act XX)',
    date: 'December 5, 2025',
    contactEmail: 'deanproject@sanjivani.edu.in',
    contactPhone: '+91 7588025393',
    summaryQuote: 'Manish independently developed the entire deep learning pipeline for animal detection (YOLOv8, 90.58% accuracy), custom PCB & sensors on Raspberry Pi deployed to 10+ farmers. He mentored over 70 research scholars, published a top-tier paper, and filed a product patent.',
    fullLetterText: [
      "It gives me great pleasure to recommend Mr. Manish Avishkar Dhatrak, an exceptionally dedicated and talented student whom I had the privilege to supervise as his Research Internship Guide during his research engagements at Sanjivani Institute.",
      "Manish independently developed the entire deep learning pipeline for animal detection, including dataset curation, augmentation, model training, and benchmarking, and fine-tuned the YOLOv8 model to recognize dangerous species with a commendable 90.58% accuracy.",
      "Demonstrating strong embedded vision and robotics skills, he integrated multi-sensor inputs such as PIR motion sensors, ultrasonic modules, and environmental sensing units to enhance reliability under diverse field conditions, and led a team of two in designing, fabricating, and testing a custom PCB that consolidated sensing, processing, and alert-control modules into a compact, low-power system.",
      "He further optimized the model for real-time inference on Raspberry Pi using OpenCV and implemented audio-visual alerts with IoT-based notifications to ensure rapid farmer response. His field-driven improvements significantly boosted system robustness, and the deployed prototype used by over ten farmers demonstrated high practicality, engineering rigor, and strong social impact in rural communities.",
      "Additionally, he mentored over 70 research scholars and peers, guiding them in machine learning, deep learning workflows, edge deployment, and technical documentation. He draft a comprehensive research paper published in a top-tier conference and played a key role in filing a product patent for the device."
    ],
    keyHighlights: [
      'YOLOv8 Pipeline (90.58% Accuracy)',
      'Custom Sensing PCB & Raspberry Pi Edge AI',
      'Deployed Field Prototype (10+ Farmers)',
      'Mentored 70+ Research Scholars',
      '1 Published Conference Paper & 1 Product Patent'
    ],
    officialDocTitle: 'Official Recommendation Letter - Research & Project Directorate'
  },
  {
    id: 'dr-pritish-vibhute',
    name: 'Dr. Pritish Vibhute',
    title: 'Associate Professor & Dean ERP',
    department: 'Sanjivani College of Engineering',
    institution: 'Sanjivani University, Kopargaon (India)',
    date: 'December 5, 2025',
    contactEmail: 'vibhutepritishetc@sanjivani.edu.in',
    contactPhone: '+91 9004030338',
    summaryQuote: 'Ranked in top 1% of class over 4 years. Secured All India Rank 1 in Mission RHUMI (fully funded academic visit to NASA centers). Remote Research Intern at NTU Singapore & selected among top 5 from India for M2L Croatia 2025.',
    fullLetterText: [
      "It is with great enthusiasm that I recommend Mr. Manish Avishkar Dhatrak, an exceptional and self-driven student whom I have had the privilege of mentoring for the past four years at Sanjivani College of Engineering.",
      "Throughout this period, Manish has demonstrated unwavering academic excellence consistently ranking within the top 1% of his class and has distinguished himself through remarkable technical depth, creativity, and an uncommon sense of purpose.",
      "Manish has consistently transformed ideas into highly practical and socially impactful technological solutions. His work spans an impressive range of interdisciplinary projects, including an AI Virtual Try-On System deployed at Reliance Trends and Zudio, and an AI-Enhanced Stethoscope with Telemedicine Integration used in 20+ plus patient screenings in collaboration with 5+ plus doctors.",
      "A notable highlight of his early achievements is securing All India Rank 1 in Mission RHUMI, which earned him a fully funded academic visit to NASA centers, reflecting his strong scientific curiosity. As the Founder and Mentor of the Robotics and AI Club, he has guided over 100+ plus students.",
      "Manish's achievements also extend to highly competitive international research environments. He is serving as a Remote Research Intern at Nanyang Technological University (NTU), Singapore (brain lesion detection project using deep learning), and was later selected as a Computational Programmer at the University of Hong Kong (HKU). He was also among the top five students selected from India for the fully funded M2L Summer School 2025 in Croatia."
    ],
    keyHighlights: [
      'Top 1% Academic Class Rank (4 Years)',
      'All India Rank 1 - Mission RHUMI (NASA Centers Visit)',
      'Remote Research Intern @ NTU Singapore (Brain Lesion AI)',
      'Selected Top 5 from India - M2L Croatia 2025',
      'Founder & Mentor - Robotics & AI Club (100+ Students)'
    ],
    officialDocTitle: 'Official Recommendation Letter - Dean ERP & Associate Professor'
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [selectedRec, setSelectedRec] = useState<Recommendation | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs mb-3">
          <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>VERIFIED ACADEMIC & RESEARCH ENDORSEMENTS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">
          Official Letters of Recommendation
        </h2>
        <p className="text-sm text-gray-400 font-mono max-w-2xl mx-auto">
          Direct endorsement letters from University Directors, Deans, and Research Supervisors validating Manish's engineering leadership, NASA achievements, and AI publications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RECOMMENDATIONS.map((rec) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => sfx.playHover()}
            className="p-8 rounded-3xl bg-slate-950/90 border border-purple-500/30 hover:border-cyan-400/60 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 relative group shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> Official Endorsement
                </span>
                <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" /> {rec.date}
                </span>
              </div>

              {/* Summary Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-purple-500/30 absolute -top-3 -left-2" />
                <p className="text-sm text-gray-200 italic leading-relaxed pl-6">
                  "{rec.summaryQuote}"
                </p>
              </div>

              {/* Highlight Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {rec.keyHighlights.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-purple-950/50 border border-purple-500/20 text-purple-300 font-mono text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Recommender Info & Action Button */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold font-mono text-base shadow-lg shadow-purple-500/30">
                  {rec.name.split(' ')[1]?.[0] || 'D'}
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {rec.name}
                  </div>
                  <div className="text-xs font-mono text-purple-300">{rec.title}</div>
                  <div className="text-[11px] font-mono text-gray-400 flex items-center gap-1 mt-0.5">
                    <Building className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate max-w-[220px]">{rec.institution}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => { sfx.playClick(); setSelectedRec(rec); }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/40 text-purple-300 font-mono text-xs font-semibold hover:text-white transition duration-300 shrink-0"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Read Full Letter</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Verbatim Letter Modal */}
      <AnimatePresence>
        {selectedRec && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-950 border border-purple-500/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.3)] relative"
            >
              {/* Close Button */}
              <button
                onClick={() => { sfx.playClick(); setSelectedRec(null); }}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Letter Modal Header */}
              <div className="border-b border-white/10 pb-6 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
                  <CheckCircle className="w-3.5 h-3.5" /> VERIFIED OFFICIAL LETTER OF RECOMMENDATION
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{selectedRec.officialDocTitle}</h3>
                <p className="text-xs font-mono text-purple-300">{selectedRec.institution}</p>
                <p className="text-xs font-mono text-gray-400 mt-1">Date Issued: {selectedRec.date}</p>
              </div>

              {/* Letter Recommender Profile Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-base font-bold text-white">{selectedRec.name}</div>
                  <div className="text-xs font-mono text-cyan-400">{selectedRec.title}</div>
                  <div className="text-xs font-mono text-gray-400">{selectedRec.department}</div>
                </div>
                <div className="space-y-1 text-xs font-mono text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-purple-400" />
                    <a href={`mailto:${selectedRec.contactEmail}`} className="hover:underline text-cyan-300">{selectedRec.contactEmail}</a>
                  </div>
                </div>
              </div>

              {/* Full Verbatim Letter Body */}
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-sans border-l-2 border-purple-500/40 pl-4 py-2 mb-6">
                {selectedRec.fullLetterText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Key Highlights Shelf */}
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 mb-6">
                <div className="text-xs font-mono font-bold text-purple-300 mb-2 uppercase">Key Verified Milestones</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300">
                  {selectedRec.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-cyan-400">►</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer Action */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedRec(null)}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialsCarousel;
