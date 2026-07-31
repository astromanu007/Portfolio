import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowUpRight, Cpu, Rocket, Activity } from 'lucide-react';
import { sfx } from '../utils/audio';

const ARTICLES = [
  {
    title: "Optimizing YOLO-Based Computer Vision Models for Edge Microcontrollers",
    excerpt: "Insights from deploying real-time threat perception models at Sanjivani University on resource-constrained embedded hardware.",
    date: "Feb 2026",
    readTime: "5 min read",
    tag: "Computer Vision",
    icon: Cpu,
    color: "text-purple-400"
  },
  {
    title: "Payload Telemetry & Sensor Integration for Reusable Hybrid Rockets",
    excerpt: "Key learnings from working on India's Rhumi-1 hybrid rocket payload development at Space Zone India, Tamil Nadu.",
    date: "Jan 2026",
    readTime: "7 min read",
    tag: "Space Avionics",
    icon: Rocket,
    color: "text-cyan-400"
  },
  {
    title: "Deep Learning Architectures in Medical Image Diagnostics",
    excerpt: "Exploring CNN feature extraction and segmentation techniques researched during remote internship at NTU Singapore.",
    date: "Late 2025",
    readTime: "6 min read",
    tag: "Medical AI",
    icon: Activity,
    color: "text-rose-400"
  }
];

const EngineeringBlog: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 flex items-center justify-center gap-2">
          <BookOpen className="w-7 h-7 text-purple-400" /> Engineering Notes & Publications
        </h2>
        <p className="text-xs md:text-sm text-gray-400 font-mono">
          Technical write-ups detailing real-world engineering challenges, research insights, and architecture choices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map((article, index) => {
          const Icon = article.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => sfx.playHover()}
              className="p-6 rounded-3xl bg-slate-950/80 border border-purple-500/20 hover:border-purple-500/50 backdrop-blur-md flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-gray-500">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-5 h-5 ${article.color}`} />
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {article.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-gray-500">{article.readTime}</span>
                <span className="flex items-center gap-1 text-xs font-mono text-purple-400 group-hover:translate-x-0.5 transition">
                  Read Note <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default EngineeringBlog;
