import React from 'react';
import Scene from './components/Scene';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import {
  Code2,
  Database,
  Globe,
  Server,
  Cpu,
  Cloud,
  Brain,
  Lock,
  Github,
  Linkedin,
  Mail,
  Award,
  FileText,
  Lightbulb,
  Briefcase,
  Trophy,
} from 'lucide-react';

function App() {
  const skills = [
    {
      title: 'Frontend Development',
      description: 'React, Vue, Angular with modern practices',
      icon: Globe,
    },
    {
      title: 'Backend Development',
      description: 'Node.js, Python, Java microservices',
      icon: Server,
    },
    {
      title: 'Database Design',
      description: 'SQL, NoSQL, Data Modeling',
      icon: Database,
    },
    {
      title: 'Cloud Architecture',
      description: 'AWS, Azure, GCP solutions',
      icon: Cloud,
    },
    {
      title: 'Machine Learning',
      description: 'TensorFlow, PyTorch, Neural Networks',
      icon: Brain,
    },
    { title: 'DevOps', description: 'CI/CD, Docker, Kubernetes', icon: Code2 },
    {
      title: 'System Architecture',
      description: 'Scalable distributed systems',
      icon: Cpu,
    },
    {
      title: 'Security',
      description: 'Cybersecurity best practices',
      icon: Lock,
    },
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Real-time data analysis using machine learning algorithms',
      image:
        'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github:
        'https://github.com/astromanu007/Makardhwaj-Medicine-Recommendation-System',
      demo: '#',
    },
    {
      title: 'Quantum Computing Simulator',
      description: 'Educational platform for quantum computing concepts',
      image:
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
    {
      title: 'Blockchain Explorer',
      description: 'Visualize and analyze blockchain transactions',
      image:
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
    {
      title: 'Smart City IoT Platform',
      description: 'IoT management system for urban infrastructure',
      image:
        'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
    {
      title: 'Neural Network Visualization',
      description: 'Interactive 3D visualization of neural networks',
      image:
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
    {
      title: 'Autonomous Drone Control',
      description: 'AI-powered drone navigation system',
      image:
        'https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
    {
      title: 'Cybersecurity Analysis Tool',
      description: 'Advanced threat detection and analysis',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
    {
      title: 'Green Energy Management',
      description: 'Renewable energy optimization platform',
      image:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
    {
      title: 'Medical Imaging AI',
      description: 'AI-assisted medical image analysis',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
    {
      title: 'Space Weather Predictor',
      description: 'ML-based solar activity prediction',
      image:
        'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
    {
      title: 'Quantum Computing Simulator',
      description: 'Educational platform for quantum computing concepts',
      image:
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
    {
      title: 'Space Weather Predictor',
      description: 'ML-based solar activity prediction',
      image:
        'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: '#',
      demo: '#',
    },
  ];

  const experience = [
    {
      title: 'Project Developer',
      company: 'Sanjivani Group of Institutes, India',
      period: 'June 2022 - Present',
      description:
        'Developed innovative IoT, AI, ML, and web solutions for smart campus initiatives, streamlining operations and fostering innovation.',
      achievements: [
        'Delivered 60+ successful projects, enhancing efficiency across 10+ departments.',
        'Improved resource efficiency by 30% through automation systems.',
        'Mentored 200+ students, promoting research and innovative design.',
      ],
    },
    {
      title: 'IEEE Student Member',
      company:
        'Institute of Electrical and Electronics Engineers (IEEE), India',
      period: 'January 2021 - Present',
      description:
        'Actively contributing to the advancement of technology and professional growth as part of the IEEE community.',
      achievements: [
        'Participated in national and international conferences, gaining insights into cutting-edge technologies.',
        'Organized technical workshops and events, promoting innovation and knowledge sharing.',
        'Collaborated with professionals and peers to foster a culture of research and technological excellence.',
      ],
    },
    {
      title: 'Mission Rhumi Internship Trainee',
      company: 'Space Zone India, Tamil Nadu, India (Remote)',
      period: 'January 2024 - September 2024',
      description:
        'Worked on groundbreaking aerospace projects, contributing to India’s first reusable hybrid rocket and advancing satellite technology.',
      achievements: [
        "Contributed to 'Rhumi-1,' India’s first reusable hybrid rocket, under the mentorship of Dr. Mylswamy Annadurai.",
        'Participated in the successful launch of 3 CubeSats and 50 PICO satellites, promoting satellite technology outreach.',
        'Completed 40 hours of intensive training in satellite technology, rocket science, and payload integration.',
        'Collaborated in workshops, fostering aerospace innovation and providing hands-on training.',
      ],
    },
    {
      title: 'Participant & Developer - NASA Space Apps Challenge',
      company: 'NASA - National Aeronautics and Space Administration',
      period: 'October 2024',
      location: 'Ahmednagar, Maharashtra, India (Hybrid)',
      description:
        'Developed an innovative Exoplanet Exploration Game as part of NASA’s global hackathon, fostering creativity and teamwork to tackle real-world space challenges.',
      achievements: [
        "Honored with the People's Choice Award for creating a groundbreaking Exoplanet Exploration Game.",
        'Collaborated with a dynamic team to design and develop a game that enhances space discovery education.',
        'Continued project development post-hackathon to further explore the potential of gamified space exploration tools.',
      ],
    },
    {
      title: 'Software Engineering Virtual Intern',
      company: 'J.P. Morgan Chase & Co. (Forage)',
      period: 'May 2024 - June 2024',
      description:
        'Completed a virtual internship focused on web development, debugging, and utilizing proprietary tools to enhance application performance.',
      achievements: [
        'Set up a local development environment by downloading and configuring necessary files, tools, and dependencies.',
        'Debugged and resolved issues in repository files to ensure accurate web application output.',
        'Leveraged JPMorgan Chase’s open-source library, Perspective, to analyze and visualize real-time data effectively.',
      ],
    },
    {
      title: 'Machine Learning Intern',
      company: 'Cognifyz Technologies',
      period: 'June 2024 - July 2024',
      location: 'Kopargaon, Maharashtra, India (Remote)',
      description:
        'Focused on developing and implementing machine learning models to solve real-world problems, while gaining hands-on experience in data analysis and algorithm optimization.',
      achievements: [
        'Developed and optimized ML models to improve system performance and accuracy.',
        'Conducted data preprocessing and feature engineering to enhance model outputs.',
        'Collaborated with cross-functional teams to integrate ML solutions into existing systems.',
      ],
    },
    {
      title: 'Founder',
      company: 'Team Charlie',
      period: 'January 2022 - May 2024',
      location: 'Maharashtra, India (On-site)',
      description:
        'Founded Team Charlie to foster a culture of research-based learning by establishing interdisciplinary clubs and creating opportunities for innovation and collaboration.',
      achievements: [
        'Established 6 vibrant clubs: Space & Robotics, CodeCrafters, Science, Cybersecurity, Digital Marketing & Content Creation, and AI & ML.',
        'Promoted a collaborative environment, empowering students to explore cutting-edge technologies and innovative solutions.',
        'Organized numerous workshops and initiatives, contributing to skill development and academic excellence in diverse fields.',
      ],
    },
    {
      title: 'Cosmofluencer',
      company: 'Cosmofluencer',
      period: 'April 2022 - October 2023',
      location: 'Bengaluru, Karnataka, India',
      description:
        'Engaged in part-time work to promote and advocate for space-related initiatives, fostering enthusiasm and awareness about space exploration and technology.',
      achievements: [
        'Created and shared engaging content to educate and inspire audiences about space science and exploration.',
        'Collaborated with space industry professionals and organizations to amplify outreach efforts.',
        'Successfully built a community passionate about space and technology, encouraging STEM learning and innovation.',
      ],
    },
  ];

  const achievements = [
    {
      title: 'People’s Choice Award Winner',
      organization: 'NASA Space Apps Challenge, USA',
      year: 'December 2024',
      description: [
        "Developed 'ExoYatra,' an exploration game focused on galactic challenges.",
        'Achieved 90% user engagement and captivated 60,000+ participants.',
      ],
    },
    {
      title: 'Winner of Research Paper Presentation Competition',
      organization: 'IEEE Bombay Section, India',
      year: 'November 2024',
      description: [
        'Won among 200+ participants for innovative research and impactful presentation.',
        'Presented groundbreaking findings on an AI Virtual Try-On System, earning wide recognition from judges and peers.',
      ],
    },
    {
      title: 'Winner of Singing Competition',
      organization: 'Sanjivani College of Engineering, Kopargaon',
      year: 'November 2024',
      description: [
        'Secured first place in the college-level singing competition.',
        'Recognized for exceptional vocal performance and stage presence.',
      ],
    },
    {
      title: 'Innovative Finalist',
      organization: 'Bosch Global Software Technologies Pvt Ltd., Pune',
      year: 'April 2024',
      description: [
        'Developed technology solutions improving system functionality by 25%.',
        'Secured first place in 3 competitive rounds with high-performance prototypes.',
      ],
    },
    {
      title: '2nd Global Rank',
      organization: 'International Space Olympiad, EduMitra, India',
      year: 'January 2021',
      description: [
        'Achieved 2nd Global Rank among 1000+ participants from 50+ countries.',
      ],
    },
    {
      title: 'National Maths Olympiad',
      organization: 'Saint Monica English School, Vaijapur',
      year: 'April 2018',
      description: [
        'Scored 50/60 and secured 11th Rank in Maharashtra State Preliminary Level.',
      ],
    },
  ];

  const publications = Array.from({ length: 15 }, (_, i) => ({
    title: `Advanced ${
      [
        'Neural Networks',
        'Quantum Computing',
        'Blockchain',
        'Cloud Architecture',
        'Cybersecurity',
      ][i % 5]
    } Research Paper ${i + 1}`,
    journal: `${
      ['Nature', 'Science', 'IEEE', 'ACM', 'arXiv'][i % 5]
    } Journal of Technology`,
    year: `${2024 - Math.floor(i / 3)}`,
    link: '#',
    citation: `${150 - i * 10}+ citations`,
  }));

  const patents = Array.from({ length: 10 }, (_, i) => ({
    title: `${
      ['AI-Powered', 'Quantum', 'Blockchain', 'Cloud', 'Neural'][i % 5]
    } ${
      ['Algorithm', 'Architecture', 'Protocol', 'System', 'Framework'][i % 5]
    } Innovation ${i + 1}`,
    number: `US${Math.floor(Math.random() * 900000000) + 100000000}`,
    year: `${2024 - Math.floor(i / 5)}`,
    status: i < 20 ? 'Granted' : 'Pending',
    description: `Innovative ${
      [
        'machine learning',
        'quantum computing',
        'blockchain',
        'cloud computing',
        'neural network',
      ][i % 5]
    } solution for ${
      ['optimization', 'security', 'scalability', 'efficiency', 'automation'][
        i % 5
      ]
    }`,
  }));

  const handleExploreWork = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black text-white">
      <Scene />
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Driven by Curiosity, Powered by Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            "Where Technology Meets Imagination"
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreWork}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Unveil My Creations
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="relative rounded-full w-64 h-64 mx-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                About Me
              </h2>
              <p className="text-gray-300 mb-6 text-justify">
                As an undergraduate in Electronics and Computer Engineering,
                I’ve led over 60 impactful projects, authored 10 research
                papers, and secured 25 patents (10 granted). Driven by a passion
                for creativity and technological advancement, I craft innovative
                solutions that push boundaries and create meaningful change
                across industries and communities.
              </p>
              <motion.a
                href="https://drive.google.com/file/d/17tZcOmRx-FtceFSlzgtGr2FyMyLv9kn5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 inline-block"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-black rounded-lg">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 text-purple-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-purple-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="mb-1">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-black rounded-lg">
                  <Trophy className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-purple-400 mb-1">
                    {achievement.organization}
                  </p>
                  <p className="text-gray-400 mb-2">{achievement.year}</p>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-black rounded-lg flex items-start space-x-4">
                  <FileText className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-400 mb-1">
                      {pub.journal} • {pub.year}
                    </p>
                    <p className="text-sm text-purple-400">{pub.citation}</p>
                    <a
                      href={pub.link}
                      className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
                    >
                      Read Paper →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section id="patents" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Patents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patents.map((patent, index) => (
              <motion.div
                key={patent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-black rounded-lg">
                  <Lightbulb className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {patent.title}
                  </h3>
                  <p className="text-gray-400 mb-2">{patent.number}</p>
                  <p className="text-sm text-gray-500 mb-2">{patent.year}</p>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      patent.status === 'Granted'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {patent.status}
                  </span>
                  <p className="text-gray-400 text-sm mt-3">
                    {patent.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Let's Connect
          </h2>
          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <Github className="relative w-12 h-12 text-white" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <Linkedin className="relative w-12 h-12 text-white" />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <Mail className="relative w-12 h-12 text-white" />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
