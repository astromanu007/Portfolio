import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Calendar, Award, Rocket, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  category: 'space' | 'work' | 'award' | 'education';
}

const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '2026',
    title: 'Research Intern (AI & Intelligent Systems)',
    subtitle: 'Sanjivani University',
    description: 'Designed wildlife threat detection pipelines and YOLO-based perception models, ending March 2026.',
    icon: Briefcase,
    category: 'work'
  },
  {
    year: '2025',
    title: 'Research Student Intern (Remote)',
    subtitle: 'Nanyang Technological University (NTU), Singapore',
    description: 'Focusing on deep learning for medical imaging diagnosis and academic publishing.',
    icon: Briefcase,
    category: 'work'
  },
  {
    year: '2025',
    title: 'AI & Machine Learning Intern',
    subtitle: 'Adgebra | Inuxu Digital Media Technologies',
    description: 'Developed machine learning models to optimize business processes and contribute to real-time analytics.',
    icon: Briefcase,
    category: 'work'
  },
  {
    year: '2024',
    title: 'People\'s Choice Award Winner',
    subtitle: 'NASA Space Apps Challenge, USA',
    description: 'Created ExoYatra exoplanet game, achieving 90% engagement and 60,000+ global votes.',
    icon: Award,
    category: 'award'
  },
  {
    year: '2024',
    title: 'Mission Rhumi Internship Trainee',
    subtitle: 'Space Zone India, Tamil Nadu',
    description: 'Contributed to Rhumi-1, India\'s first reusable hybrid rocket launch, and CubeSat payloads.',
    icon: Rocket,
    category: 'space'
  },
  {
    year: '2024',
    title: 'Software Engineering Virtual Intern',
    subtitle: 'J.P. Morgan Chase & Co.',
    description: 'Configured and optimized real-time visual telemetry pipelines using Perspective library.',
    icon: Briefcase,
    category: 'work'
  },
  {
    year: '2022',
    title: 'Founder & Leader',
    subtitle: 'Team Charlie',
    description: 'Established 6 clubs across Space, Code, Cyber, Digital Marketing, Science, and AI/ML.',
    icon: GraduationCap,
    category: 'education'
  },
  {
    year: '2021',
    title: '2nd Global Rank',
    subtitle: 'International Space Olympiad, EduMitra',
    description: 'Ranked 2nd Globally among 1,000+ competitors from 50+ countries.',
    icon: Award,
    category: 'space'
  }
];

const MilestoneTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const yPosition = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto px-4 py-12">
      {/* Center timeline vertical line path */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-[92%] bg-white/10 top-6 pointer-events-none rounded-full">
        {/* Glowing progress line */}
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400 origin-top rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          style={{ scaleY, height: '100%' }}
        />
        
        {/* Glowing tracking rocket */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950 border border-purple-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.8)] z-20"
          style={{ top: yPosition }}
        >
          <Rocket className="w-4 h-4 text-purple-400 rotate-180 animate-pulse" />
        </motion.div>
      </div>

      <div className="space-y-12">
        {TIMELINE_DATA.map((event, index) => {
          const Icon = event.icon;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center justify-between w-full relative ${
                isLeft ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-black border border-purple-500 flex items-center justify-center z-10 shadow-lg shadow-purple-500/25">
                <Icon className="w-5 h-5 text-purple-400" />
              </div>

              {/* Empty spacer block to align items */}
              <div className="hidden md:block w-[45%]"></div>

              {/* Timeline Card */}
              <div className="w-full md:w-[45%] relative group mt-6 md:mt-0">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative p-6 bg-black/90 border border-purple-500/20 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-purple-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {event.year}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {event.title}
                  </h3>
                  <h4 className="text-sm text-blue-400 font-semibold mb-3">
                    {event.subtitle}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MilestoneTimeline;
