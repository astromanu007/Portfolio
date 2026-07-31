import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Trophy, Star } from 'lucide-react';
import { sfx } from '../utils/audio';

const CERTIFICATIONS = [
  {
    title: "NASA Space Apps People's Choice Award",
    issuer: 'NASA Space Apps Challenge, USA',
    year: '2024',
    description: 'Winner for ExoYatra exoplanet game, securing 60,000+ global votes.',
    icon: Trophy,
    color: 'from-amber-500 to-orange-500',
    link: 'https://www.spaceappschallenge.org/'
  },
  {
    title: 'International Space Olympiad - 2nd Global Rank',
    issuer: 'EduMitra International Space Olympiad',
    year: '2021',
    description: 'Secured 2nd Global Rank among 1,000+ competitors from 50+ countries.',
    icon: Star,
    color: 'from-purple-500 to-indigo-500',
    link: 'https://spaceolympiad.org/'
  },
  {
    title: 'Mission Rhumi Hybrid Rocket Payload Trainee',
    issuer: 'Space Zone India, Tamil Nadu',
    year: '2024',
    description: 'Payload design trainee for Rhumi-1, India\'s first reusable hybrid rocket launch.',
    icon: ShieldCheck,
    color: 'from-cyan-500 to-blue-500',
    link: 'https://spacezoneindia.com/'
  },
  {
    title: 'Software Engineering Virtual Experience',
    issuer: 'J.P. Morgan Chase & Co.',
    year: '2024',
    description: 'Constructed real-time visual data telemetry pipelines using Perspective.',
    icon: Award,
    color: 'from-emerald-500 to-teal-500',
    link: 'https://www.jpmorganchase.com/'
  }
];

const CertificationsShelf: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 flex items-center justify-center gap-2">
          <Award className="w-7 h-7 text-amber-400" /> Verified Honors & Certifications
        </h2>
        <p className="text-xs md:text-sm text-gray-400 font-mono">
          Global awards, NASA recognitions, and accredited engineering credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => sfx.playHover()}
              className="p-6 rounded-3xl bg-slate-950/80 border border-purple-500/20 hover:border-purple-500/50 backdrop-blur-md relative group transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${cert.color} text-white shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  {cert.year}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                {cert.title}
              </h3>
              <div className="text-xs font-mono text-cyan-400 mb-3">{cert.issuer}</div>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sfx.playClick()}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-white transition"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationsShelf;
