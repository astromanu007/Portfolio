import React from 'react';
import Scene from './components/Scene';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import { Code2, Database, Globe, Server,Cpu,
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
  BarChart,
  Python,
  Camera,
  Users,
  Target
} from 'lucide-react';

function App() {
 
  const skills = [
    {
      title: 'Frontend Development',
      description: 'React, Vue, Angular',
      icon: Globe,
    },
    {
      title: 'Backend Development',
      description: 'Node.js, Python, Java',
      icon: Server,
    },
    {
      title: 'Database Design',
      description: 'SQL, NoSQL, Data Modeling',
      icon: Database,
    },
    {
      title: 'Cloud Architecture',
      description: 'AWS, Azure, GCP',
      icon: Cloud,
    },
    {
      title: 'Machine Learning',
      description: 'TensorFlow, PyTorch, Neural Networks',
      icon: Brain,
    },
    {
      title: 'DevOps',
      description: 'CI/CD, Docker, Kubernetes',
      icon: Code2,
    },
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
    {
      title: 'Programming Languages',
      description: 'Python, C, C++, MATLAB',
      icon: Code2,
    },
    {
      title: 'Libraries and Tools',
      description: 'PyTorch, Keras, Pandas, Numpy, OpenCV',
      icon: Lightbulb,
    },
    {
      title: 'ML Models',
      description: 'CNN, DNN, YOLO, Transfer Learning',
      icon: Brain,
    },
    {
      title: 'Version Control',
      description: 'Git, AWS CodeCommit',
      icon: Briefcase,
    },
    {
      title: 'Research & Analysis',
      description: 'Statistical & Qualitative Research',
      icon: BarChart,
    },
    {
      title: 'Specializations',
      description: 'Robotics, AI, IOT',
      icon: Target,
    },
    {
      title: 'Database Management',
      description: 'MySQL, MongoDB',
      icon: Database,
    },
    {
      title: 'Soft Skills',
      description: 'Communication, Teamwork, Leadership, Adaptability',
      icon: Users,
    },
    {
      title: 'AI & Computer Vision',
      description: 'Image Recognition, Object Detection, Segmentation, Face Recognition',
      icon: Camera,
    },
    {
      title: 'Project Management',
      description: 'Agile, Scrum, Kanban, Stakeholder Communication, Roadmap Planning',
      icon: Globe,
    },
  ];
  
  const projects = [
    {
      title: 'AI-Driven Object Detection for Autonomous Cars',
      description: 'A real-time object detection system for autonomous vehicles using MobileNet SSD for vehicle, pedestrian, and traffic sign detection.',
      image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/astromanu007/AI-Driven-Object-Detection-for-Autonomous-Cars-',
      demo: 'https://github.com/astromanu007/AI-Driven-Object-Detection-for-Autonomous-Cars-',
    },
    {
      title: 'Makardhwaj Medicine Recommendation System',
      description: 'A machine learning-based platform that diagnoses over 40 diseases and provides personalized medicine recommendations.',
      image: 'https://cdn.pixabay.com/photo/2017/08/24/03/41/starry-sky-2675322_640.jpg',
      github: 'https://github.com/astromanu007/Makardhwaj-Medicine-Recommendation-System',
      demo: 'https://github.com/astromanu007/Makardhwaj-Medicine-Recommendation-System',
    },
    {
      title: 'AI-Enhanced Smart Stethoscope',
      description: 'An AI-powered stethoscope integrated with telemedicine, wireless charging, and real-time data analysis.',
      image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/astromanu007/AI-Enhanced-Smart-Stethoscope',
      demo: 'https://github.com/astromanu007/AI-Enhanced-Smart-Stethoscope',
    },
    {
      title: 'Advanced PCB Anomaly Detection System',
      description: 'A fault detection system using infrared imaging to localize overheated PCB components and improve system reliability.',
      image: 'https://media.istockphoto.com/id/1035676256/photo/background-of-galaxy-and-stars.webp?a=1&b=1&s=612x612&w=0&k=20&c=fTMmKEEBS5hNqG_Ddl90z1z_3cm7i6GXgVXYtV6fQyk=',
      github: 'https://github.com/astromanu007/PCB_Anomaly_Detection',
      demo: 'https://github.com/astromanu007/PCB_Anomaly_Detection',
    },
    {
      title: 'Deep Learning-Based Leaf Disease Detection and Cure',
      description: 'A deep learning-based Flask application for diagnosing leaf diseases and providing care suggestions for 39 plant species.',
      image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: 'https://github.com/astromanu007/Leaf-Disease-Detection',
      demo: 'https://github.com/astromanu007/Leaf-Disease-Detection',
    },
    {
      title: 'AI Virtual Mouse',
      description: 'AI Virtual Mouse is a cutting-edge project that brings a new dimension to computer interaction. Using advanced machine learning and computer vision techniques, FingerMouse allows you to control your computer with the wave of your hand.',
      image: 'https://cdn.pixabay.com/photo/2020/12/25/04/51/polar-lights-5858656_1280.jpg',
      github: 'https://github.com/astromanu007/AI_Virtual_Mouse',
      demo: 'https://github.com/astromanu007/AI_Virtual_Mouse',
    }
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

  const publications = {
    publishedPapers: [
      {
        title:
          'Topic Modelling for News Article Categorization Using Latent Dirichlet Allocation: A Text Mining Approach',
        authors: 'M. A. Dhatrak, S. Jadhav, S. Gupta, N. Siddiqui',
        journal:
          'Journal of Knowledge in Data Science and Information Management, (2024)',
        link: 'https://matjournals.net/engineering/index.php/JoKDSIM/article/view/1003',
      },
      {
        title:
          'Self-Supervised Learning in Computer Vision: Enhancing Model Accuracy with Limited Labeled Data',
        authors: 'S. Jadhav, M. A. Dhatrak, S. Gupta, N. Siddiqui',
        journal: 'Journal of Data Engineering and Knowledge Discovery, (2024)',
        link: 'https://matjournals.net/engineering/index.php/JoDEKD/article/view/1167',
      },
    ],
    acceptedPapers: [
      {
        title:
          'AI-Powered Emotion and Stress Detection: A WBAN-Based Approach for Real-Time Health Monitoring',
        authors: 'M. A. Dhatrak, S. Jadhav, P. Vibhute, S. Gupta',
        journal:
          '19th EAI International Conference on Body Area Networks: Globally Connected Intelligent BAN (Final Stage of Publication)',
        link: '#',
      },
      {
        title:
          'AI-Powered Virtual Try-On System: Enhancing Fit Prediction and User Comfort Through Deep Learning',
        authors: 'M. A. Dhatrak, S. Jadhav, A. Harkal, A. Kankrale, S. Gupta',
        journal:
          '5th International Conference on Communication, Computing & Industry 6.0 (C2I6) (Final Stage of Publication)',
        link: '#',
      },
      {
        title:
          'AI Enhanced Stethoscope for Real-Time Cardiopulmonary Diagnostics and Telemedicine Integration',
        authors: 'M. A. Dhatrak, S. Jadhav, S. Gupta, N. Siddiqui',
        journal:
          '3rd International Conference on Advancement in Computation & Computer Technologies (InCACCT) (Preliminarily Stage of Publication)',
        link: '#',
      },
    ],
    underReviewPapers: [
      {
        title:
          'Columbus Voice Automation System: An NLP-Powered Real-Time Speech Command Processing',
        authors: 'M. A. Dhatrak, S. Jadhav, N. Darwante, B. Agarkar',
        journal: 'Songklanakarin Journal of Science and Technology (SJST)',
      },
      {
        title:
          'Wearable IoT-Based Animal Distraction Device for Mitigating Human-Wildlife Conflicts',
        authors: 'K. Wakchaure, P. Vibhute, M. A. Dhatrak, K. Fuse, S. Kulkarni',
        journal: 'Internet of Things',
      },
      {
        title:
          'A Deep Learning-Driven Approach for Real-Time PCB Anomaly Detection via Thermal Imaging',
        authors: 'M. A. Dhatrak, S. Jadhav, S. Gupta, N. Siddiqui',
        journal: 'Songklanakarin Journal of Science and Technology (SJST)',
      },
      {
        title:
          'AI-Enabled Real-Time Intrusion Detection for Smart Fences Using Advanced Image Processing',
        authors: 'S. Bhongale, M. A. Dhatrak, R. Gagare, T. Shivadkar',
        journal:
          '3rd International Conference on Advancement in Computation & Computer Technologies (InCACCT)',
      },
      {
        title:
          'Computer Vision-Driven Car Speed Control System Using Real-Time Traffic Sign Detection and Recognition',
        authors: 'S. Jadhav, M. A. Dhatrak, P. Vibhute',
        journal: 'Journal of Artificial Intelligence Research (JAIR)',
      },
      {
        title:
          'Multimodal Emotion Recognition: Leveraging Hybrid Fusion with Deep Learning Techniques',
        authors: 'S. Kulkarni, M. A. Dhatrak, S. Jadhav, N. Bhopale',
        journal:
          'International Journal of Ad Hoc and Ubiquitous Computing',
      },
    ],
  };
  
  

  const patents = [
    {
      title: 'WRITING PAD WITH PEN HOLDER',
      number: 'Design No. : 415676-001',
      year: '2024',
      status: 'Granted',
      description: 'Innovative writing pad design with an integrated pen holder for improved functionality and convenience. Ideal for students, professionals, and creatives alikes.',
    },
    {
      title: 'SMART SPECTACLES',
      number: 'Design No. : 414349-001',
      year: '2024',
      status: 'Granted',
      description: 'A new design for spectacles enhancing comfort and style. Engineered for both fashion and functionality, it provides long-lasting comfort. The frame is suitable for a variety of face shapes and sizes.',
    },
    {
      title: 'ROBOTIC ARM GRIPPER',
      number: 'Design No. : 416281-001',
      year: '2024',
      status: 'Granted',
      description: 'A robotic arm gripper design to improve precision and strength for industrial applications. The gripper enhances accuracy in handling delicate items. Built to withstand high-stress environments in industry settings.',
    },
    {
      title: 'HYDROHEAL BOTTLE',
      number: 'Design No. : 415935-001',
      year: '2024',
      status: 'Granted',
      description: 'An innovative bottle design with hydro healing technology to retain hydration properties. The bottle is designed with advanced materials that help retain water temperature for longer durations. Ideal for people with active lifestyles, it promotes hydration efficiency with a comfortable grip for ease of use.',
    },
    {
      title: 'FLEXIFEAST SPOON',
      number: 'Design No. : 415106-001',
      year: '2024',
      status: 'Granted',
      description: 'A flexible spoon design that enhances the experience of eating various types of foods. The flexible tip adapts to the shape and consistency of different foods, making it easier to scoop up and consume. Whether for soft desserts or soups, it ensures that users can enjoy their meals without any hassle.',
    },
    {
      title: 'ENIGMAGUARD: USB PORT PROTECTOR',
      number: 'Design No. : 414830-001',
      year: '2024',
      status: 'Granted',
      description: 'A silicon-based protector for laptop USB ports, providing enhanced protection against wear and tear. It shields USB ports from daily use and damage. Easy to apply and remove, ensuring long-lasting durability.',
    },
    {
      title: 'ELEGANCE SEAT WITH BAG COMPARTMENT VAULT',
      number: 'Design No. : 415290-001',
      year: '2024',
      status: 'Granted',
      description: 'A unique seat design featuring a compartment for safely storing bags and accessories. The compartment ensures your personal belongings are safe. A sleek and stylish design, perfect for modern spaces.',
    },
    {
      title: 'PRECISION CONTROL BRAKE WITH ERGONOMIC GRIP',
      number: 'Design No. : 433263-001',
      year: '2024',
      status: 'Granted',
      description: 'A precision control brake system with an ergonomic grip for enhanced user comfort and control. The design reduces hand strain during use. Offers improved braking precision, ideal for long-duration usage.',
    },
    {
      title: 'OPULENT SOAP COMPARTMENT STOOL',
      number: 'Design No. : 414552-001',
      year: '2024',
      status: 'Pending',
      description: 'The Opulent Soap Compartment Stool is an innovative design that combines comfort with functionality. It features a dedicated soap compartment integrated into the seat, offering convenience and practicality for users.',
    },
  ];
  

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
          <strong>"Where Technology Meets Imagination"</strong>
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
                src="https://avatars.githubusercontent.com/u/98075143?s=400&u=d87c28809dc33c8d81123df7627a6fee69023b63&v=4"
                alt="Profile"
                className="relative rounded-full w-64 h-64 mx-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              <strong>About Me</strong>
              </h2>
              <p className="text-gray-300 mb-6 text-justify">
              I am <strong>Manish Dhatrak</strong>, as an undergraduate in <strong>Electronics and Computer Engineering</strong>,
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
                <strong>Download Resume</strong>
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
      Authored Publications
    </h2>

    {/* Published Papers */}
    <h3 className="text-2xl font-bold mb-6 text-white">Published Papers</h3>
    <div className="space-y-6">
      {publications.publishedPapers.map((pub, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative p-6 bg-black rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
            <p className="text-gray-400 mb-1">{pub.authors}</p>
            <p className="text-sm text-purple-400 mb-2">{pub.journal}</p>
            {pub.link && (
              <a
                href={pub.link}
                className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
              >
                Read Paper →
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Accepted Papers */}
    <h3 className="text-2xl font-bold mt-12 mb-6 text-white">Accepted Papers</h3>
    <div className="space-y-6">
      {publications.acceptedPapers.map((pub, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative p-6 bg-black rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
            <p className="text-gray-400 mb-1">{pub.authors}</p>
            <p className="text-sm text-purple-400 mb-2">{pub.journal}</p>
            
          </div>
        </motion.div>
      ))}
    </div>

    {/* Under Review Papers */}
    <h3 className="text-2xl font-bold mt-12 mb-6 text-white">Under Review Papers</h3>
    <div className="space-y-6">
      {publications.underReviewPapers.map((pub, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative p-6 bg-black rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
            <p className="text-gray-400 mb-1">{pub.authors}</p>
            <p className="text-sm text-purple-400 mb-2">{pub.journal}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Patents Section */}
     {/* Patents Section */}
<section id="patents" className="py-20 relative">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
      Patents
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {patents.map((patent, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-6 bg-black rounded-lg">
            <Lightbulb className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{patent.title}</h3>
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
            <p className="text-gray-400 text-sm mt-3">{patent.description}</p>
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
              href="https://github.com/astromanu007"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <Github className="relative w-12 h-12 text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/manish-dhatrak-b759171aa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <Linkedin className="relative w-12 h-12 text-white" />
            </motion.a>
            <motion.a
              href="mailto:manishdhatrak1121@gmail.com"
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
