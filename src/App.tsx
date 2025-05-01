import React from 'react';
import Scene from './components/Scene';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import { Code2, Database, Globe, Server,Cpu,
  Cloud,
  Brain,
  MousePointer,
  Lock,
  Github,
  Linkedin,
  Mail,
  Leaf,
  Heart,
  Award,

  Lightbulb,
  Briefcase,
  Trophy,
  BarChart,
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
      tags: ['Computer Vision', 'AI/ML', 'Object Detection', 'TensorFlow'],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Makardhwaj Medicine Recommendation System',
      description: 'A machine learning-based platform that diagnoses over 40 diseases and provides personalized medicine recommendations.',
      image: 'https://cdn.pixabay.com/photo/2017/08/24/03/41/starry-sky-2675322_640.jpg',
      github: 'https://github.com/astromanu007/Makardhwaj-Medicine-Recommendation-System',
      demo: 'https://github.com/astromanu007/Makardhwaj-Medicine-Recommendation-System',
      tags: ['Machine Learning', 'AI in Healthcare', 'Data Science', 'Python'],
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: 'AI-Enhanced Smart Stethoscope',
      description: 'An AI-powered stethoscope integrated with telemedicine, wireless charging, and real-time data analysis.',
      image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/astromanu007/AI-Enhanced-Smart-Stethoscope',
      demo: 'https://github.com/astromanu007/AI-Enhanced-Smart-Stethoscope',
      tags: ['Healthcare Tech', 'AI/ML', 'Wearable Devices', 'IoT'],
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Advanced PCB Anomaly Detection System',
      description: 'A fault detection system using infrared imaging to localize overheated PCB components and improve system reliability.',
      image: 'https://media.istockphoto.com/id/1035676256/photo/background-of-galaxy-and-stars.webp?a=1&b=1&s=612x612&w=0&k=20&c=fTMmKEEBS5hNqG_Ddl90z1z_3cm7i6GXgVXYtV6fQyk=',
      github: 'https://github.com/astromanu007/PCB_Anomaly_Detection',
      demo: 'https://github.com/astromanu007/PCB_Anomaly_Detection',
      tags: ['Electronics', 'Infrared Imaging', 'Fault Detection', 'AI/ML'],
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Deep Learning-Based Leaf Disease Detection and Cure',
      description: 'A deep learning-based Flask application for diagnosing leaf diseases and providing care suggestions for 39 plant species.',
      image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      github: 'https://github.com/astromanu007/Leaf-Disease-Detection',
      demo: 'https://github.com/astromanu007/Leaf-Disease-Detection',
      tags: ['Agriculture Tech', 'AI in Farming', 'Computer Vision', 'Flask'],
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: 'AI Virtual Mouse',
      description: 'AI Virtual Mouse is a cutting-edge project that brings a new dimension to computer interaction. Using advanced machine learning and computer vision techniques, FingerMouse allows you to control your computer with the wave of your hand.',
      image: 'https://cdn.pixabay.com/photo/2020/12/25/04/51/polar-lights-5858656_1280.jpg',
      github: 'https://github.com/astromanu007/AI_Virtual_Mouse',
      demo: "https://github.com/astromanu007/AI_Virtual_Mouse",
      tags: ['AI/ML', 'Computer Vision', 'Hand Gesture Recognition', 'Human-Computer Interaction'],
      icon: <MousePointer className="w-6 h-6" />
    }
  ];
  
  

    const experience = [
      {
        title: "Research Student Intern (Remote)",
        company: "Nanyang Technological University (NTU) · Internship",
        period: "March 2025 - Present · 1 mo",
        location: "Singapore · Remote",
        description: "Conducting research in deep learning for medical imaging, focusing on AI-driven diagnosis and classification.",
        achievements: [
         "Developing and fine-tuning AI models for medical image analysis to improve diagnostic accuracy.",
          "Collaborating with researchers and faculty to advance deep learning applications in healthcare.",
          "Engaging in AI-driven research, data analysis, and academic publishing in the field of medical imaging."
        ],
      },
      
      {
        title: "NASA International Space Apps Challenge Local Lead - Kopargaon",
        company: "NASA International Space Apps Challenge",
        period: "March 2025 - Present · 1 mo",
        location: "Kopargaon, Maharashtra, India · On-site",
        description: "Leading and organizing the NASA International Space Apps Challenge in Kopargaon, fostering innovation in artificial intelligence and machine learning for space applications.",
        achievements: [
          "Coordinating with participants, mentors, and global organizers to facilitate a successful hackathon.",
          "Guiding teams in developing AI/ML-based solutions for real-world space challenges.",
          "Hosting brainstorming sessions to drive innovation and collaboration among participants.",
          "Managing event logistics and outreach to maximize engagement within the local tech community."
        ],
      },
      
      {
        title: 'Artificial Intelligence & Machine Learning Intern',
        company: 'Adgebra | Inuxu Digital Media Technologies · Internship',
        period: 'Jan 2025 - Present · 1 mo',
        location: 'Pune, Maharashtra, India · On-site',
        description: 'Working as an intern on artificial intelligence and machine learning projects, contributing to model development and real-time data analysis.',
        achievements: [
          'Developing machine learning models to optimize business processes.',
          'Collaborating with the team on AI-driven data analysis and automation tasks.',
          'Participating in weekly brainstorming sessions to innovate and improve ML solutions.'
        ],
      },
         
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
      title: 'AIR 1 – NASA Visit Winner | Mission Rhumi 2024',
      organization: 'Space Zone India, Tamil Nadu',
      year: '2024',
      description: [
        'Secured All India Rank 1 among 15,000+ participants and ranked in the top 0.0067%. Selected among the top 3 winners to represent India for a NASA visit, recognized for innovation and STEM excellence through a rigorous multi-phase national assessment.'
      ],
    },
    {
      title: 'Second Prize (Runner-Up) – Civil Engineering Domain',
      organization: 'National Level Project Expo 2K25, MIT ADT University, Pune',
      year: 'April 2025',
      description: [
        'Presented MonitorX, a structural health monitoring system. Secured 2nd Prize among 50+ national teams for interdisciplinary innovation and real-world impact in infrastructure safety. Won ₹11,000 cash prize and a trophy.'
      ],
    },
    
    {
      title: 'Second Prize – Safety Category',
      organization: 'Dipex 2025, State-Level Competition (Maharashtra & Goa)',
      year: 'March 2025',
      description: [
        'Developed MonitorX for resilient infrastructure. Won 2nd Prize in the Safety Category among top innovations and received ₹5000 and Trophy for engineering impact.'
      ],
    },
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
          'AI-Powered Virtual Try-On System: Enhancing Fit Prediction and User Comfort Through Deep Learning',
        authors: 'M. A. Dhatrak, S. Jadhav, A. Harkal, A. Kankrale, S. Gupta',
        journal:
          '5th International Conference on Communication, Computing & Industry 6.0 (C2I6) (2025)',
        link: 'https://ieeexplore.ieee.org/document/10895137',
      },
      {
        title:
          'Topic Modelling for News Article Categorization Using Latent Dirichlet Allocation: A Text Mining Approach',
        authors: 'M. A. Dhatrak, S. Jadhav, P. D. Kudake, A. V. Brahmane',
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
      status: 'Granted',
      description: 'The Opulent Soap Compartment Stool is an innovative design that combines comfort with functionality. It features a dedicated soap compartment integrated into the seat, offering convenience and practicality for users.',
    },
  ];
  const certifications = [
    {
      title: 'Create a Virtual Machine Using AWS EC2',
      organization: 'Coursera',
      date: 'January, 2025',
      credentialId: 'HHOD1QYNO8IW',
      image: 'https://wallpapercave.com/wp/wp13498955.jpg',
      skills: ['AWS EC2', 'Cloud Computing', 'Virtual Machine Setup'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/HHOD1QYNO8IW'
    },
    {
      title: 'Optimize TensorFlow Models For Deployment with TensorRT',
      organization: 'Coursera',
      date: 'January, 2025',
      credentialId: '1INA7CGF2VL7',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230415/pngtree-ai-robot-innovation-high-tech-ppt-robot-template-background-image-image_2207016.jpg',
      skills: ['TensorFlow', 'Deep Learning', 'Optimization','Python Programming', 'NVIDIA TensorRT (TF-TRT)'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/1INA7CGF2VL7'
    },
    {
      title: 'Breast Cancer Prediction Using Machine Learning',
      organization: 'Coursera Project Network',
      date: 'January 2025',
      credentialId: 'Y1MWJILAI3UN',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMVFhUXFhUYGBgXFhYdGhgXFhUXGRgYFxUYHiggGBolGxgYITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGRAQGy0lHR0tLS0tLS0tLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLf/AABEIAJ8BPQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABHEAACAQIEAwUEBQgHCAMAAAABAhEAAwQSITFBUWEFEyJxgQYykaEjQlKx8AcUcpKywdHhM0Nic4KisxUkU2ODk9LxFzTC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJhEAAwEAAgICAQMFAAAAAAAAAAECEQMSITFBUQQToeEiQmGBsf/aAAwDAQACEQMRAD8A8QpU9KqGKlT0qAFSpU9ADU9KlQMVPSinpgNFPSp6YCAqYWoinijBjjlTom9Mdam5kz5UxiymCPxvR1tr3Z1lywAAB24+fD509lS2vy09aGEywdzTwCYTwZ4GkLGvXkeOnwNSu4eAjRqwkaADdtRw3BHpRreG8BBJ4HTaQD0quhYlANToAPM6D508GWMXj7hsraZmyD6k+EQdwBpqdZM771PEY24uUBgNthsUED5E6xNAFwKzi6snxDXg22oNSuYN2y5A1zwgSqs2w6TRgEu01tKQLRzZgpY9Y1HXxTy0A0qfY9tLjFLphYYqTMK0GCcuuSYmPPSCaax2VcJhsqHkzJn8u7LBp9KH2Zhw7EH7LfPw7wYGu+w3Ok0YAbC4d2koSFLwIUECAcpLMRlMHffepYfEESupUC3EMwAIIQxl5ljy2qqmIZRkQgjMSDHSJE6DTjGlGezkVIBY5lJEaEhcyhSJmAx+I6UYA2OsuSCFOTwhYk+94uJJMknU70axbtJZdbqxeYjICDKgECTI8Os9SBxG8+x7yWL9u4QWtlhoCAxyujFG0O/unQyGJE1Jba4rFNli2jGRncAIihV8VxpgAakwTA0BMCngEe0cAtpgDcg5VMBQxOZVaREAbkQTMqfOh4bDEkFMzgrc+qZBCXAQQCenHjUe1MKlu4VttmT6raaiSAfDpqBPrWtgcJcOHvXc0WlsG2JZdbjLbJVUPEoxMgcTrvTGYlhfHDDUZtG5qCYIPUbVPB3gtwO8kazzMgiZ9ZqzjLxLPDqAWbQAjcnfKonzJNVbFssYUFjyUSflVqSki12hjFbKLYgCfrM2/wDaYA/IcOVUMtaI7Kv8bTqObjIP1rkCgXMOVMMCCCQRGxG4PI1SkrASqSu0wQB5EMY8tKhdQiNOA+7Wtbs6yDq0ZVSddQDnOsRGwInrziqeIsgE5SCJMHQcuvpR1DCrZMTp/KiFtQJGpH/rSRTOOHCoC0TSciwa/sPThFBAooT+WlQapwkzaVKlXMYip4pUqBip6UU9MBRSinAqQFAyMU4FSinApgRilFTAp4qsAgBUqmBThKeDIqs6VM2/FE/iKWXXSp3E+NPB4StmJHAedK3aAkuCQQQpHFo0PlRLNnMDH1QSQeXnRbTZsiuPo0YzAEwSJk8eG+lPB4CvWpOUOX0BAAzDRZiZ9NAaGwKseBGo576H51ZVLbXWBbu7bEiYnKp6SM0cuMVPtO4puOFZspZyJOkZiRIOs6/GngYNevsreHKCADmyJnkqCT3hGaZO81C6111LMbjoCASxdlB4Ak6A6/OtjsL2du4/Fixa0JALOQSqKEEs0egA4kgV712bawtm0OzRaY2VQWrtwqotd5cVfA7Eybr5wdAdXGoJFFNSDeHzb2esXE/SH31tYCzZ8MW1MnQ5QwB0EyZ46RvPCtT2t9hrnZd6wGuC7buHwuFynMsSrLJjQggzrryrkcKl0rnUkxA11100AII0kU2k1qG/JAWS1xwB/wATQeoAHqQB5itH2fxcPDyy5Igsco8WnQbwOpjjQcWvdMCACTOpB1gqQ++jZw2m2nHcv2Lju5YnKGlTxIjLmO45iQeYOsiQTqLAePJYm4AAM7tEiQPAslNwCwPDei3zaRLTWyDcOrAagAggowJM7TrwaNYJNW5iCQZVZMyfFMFy8bxEnlOgodu2WIA1J0FPqPCxiMHdKm8QShPvyOOg0mRy9KtYTw2s7DOc2VQzPlVcubRVYTMjQyNNqnd7UItCyuyx4gYmFCmIEgHz4nmIezJsyTJ70/6a1pE+S5QwxbAyFtLyizanXkxUtPrVxBi7g0OJcb6d6wiJ8ojXyFeg/k69nbfctdFz/e7lsmwCzoBIYrOniGe3OYAiBGsGe2wvZ9prrqQnd2T3RDXrj5nazZIzK5gQGyxqTRXLMvEvQO0vGHzybQ1o/bUm844BjHrFb3td2bbs4hltCFIzATp4mf3fCIXQQBI6msvtUxeuaA+LiOnWuhzqTRv13GZ1oaaxxCyF5HiepFBuA8Z5VauKZ1+6NPKiXCMvpG/TlUuROTMK0VF8P411bhw86crSuiAPLl6/vrOkQ0VH40I0e6NTQqyaM2jKpU8U8VymA0U8UqemAqcCkBUgKMGKKcCnipAU8GMBTgVICpAVWDwiBThakFqYWqUjwiFpwtEVaIq8qtSPASrrTsNaMLdTW0InjNWoKwhZC+OZ20/H43qLOfEBs0T6VZFtZMTFHv4UKAQs8RBmOrCT+6q6D6gyllTbmZy+McM3nDQekfCgG6pUjLBLTPTzn91IWyTprV/FYN7U2SilmCNIJ0GXNvtsafQfU9S/Ijctg4pNO9Pct1NsJAjmAxM/pCuwxnZ6Le+kv2Ew/fDEOtxibhvrsAztlRAQpgD6sbGvnvE2/F6L+wKB3QHAfKh/i9nug+HXunp35XfaSxib2Gw9h1uC05d2QgqGYAKoYaExJMcxXm2C/wDr3BpqX022tqdNdfL4bmnwQ8a+c+g1PyoIbwDNsM4UcSWBkmTAAngPuofEpSlA4xYSsX0Z5vARBJg7uQomBtouwEeW4HaQGTbUysRJDA5mjKdAIg0Fk3MGJ3q7g8SFtOvEz6yI/HSk5F1NDAdmhlBtgbySWtCBKj37omIzERExxmqHaFtlZvowNAC4zGZUAwwOSDtKjXnrUS5KwMpIykSFJAhs0Zh0XQcqjhizXB4oLEAnodNRx04dKagFJWVa1cNaPcaj+tP7Aqw1hLb52ttlZdMyDwt4TOUgKJB24ajhNLCibRPO6f2BW3HOtGsLWer+xNy0mCQOSHhHRLbBLjljcSV0QtoxEy36RiBvpaYqqKbOJQ94bYuIR4rLoim5dbMWYCQXyySJrzD2V9qL2DDIC5ttBygoDII+s6tAy5hA4ma0z7ZXI0VwQGAbvjoXBzEBVG7w0f2Y2NZ3+JyOngP8a3XgyPbNQcQfd0QAhSCAQzyJHLrB6CsLtK3F9zyefuq86kySSSSSSdyTqSes0LtW0O+uSY8XWu2uPqkjrfHiSM7FsGjKIAnhG8dT578armyYmNK1hh7eQmfFBOvHeABO+3xoJvfR5QDy4/jhWTRm0ZDLQWEedXXt+cnhFV76QfxyFZUjOkU3FQKUZhUDWDRi0Y1KlSrjOUVSApAVICmMQFOBTgVICmMQpwKQFSFVgxwKkBSAqQqkihAVMLSAoiitEhpDotEVaVtJMATR1sNMZW+BrVSaKSFvSdKJZSirhW5R5kD76NasRxX4/wAK1UmihlYA5Yjc0S1aLEaxxkzp8Aa1MJ2W14qilZ24x8QKFhMPDlTBglTBkGGAMEbjrWkSm8Nf0ms1ewP5qv2+M+FJ+bFaTZu9BEtCqPdPuhQBKidtuO1bllbcA91b2Q73PrOVO79KopAcqZggceSjUdeM9K0riSQVx4Z7XLizKoSIXW0hnQwZKydB86nZvMDq+QajMtq2mo3h0AJq1ePeNlQrMgCQB5kMdvlUMW65bdoqAUIDMAQTzzGdY4aCPWs3JDkrd+9xQveXDObN9JJYAEgC3mBaalf7OVADdW5MLC5lUw2ZpPhb4U9rFsl0Mp0BByg+GY2gghgDwIMxxqxi8Y98G45liy8uCt9kAfKko/qS+BKPJRLJEC0I/tPcJ/yso+VMpQf1Fr1N4/fcir3ZXZ5v37Vld7lxE8gxAJ9BJ9K7/wBt/wAnVjCYVr9hrrMjJmDlSMjHKSAqjUEqfKaq/wBOKUv2x11lqX8nm/f8rdof9MH9qakl9hstr/sWP/CkEqeXStlxL6NFxhcRiSe8sQIzvB+yFYtEAbafyo1nDG0DbdHYZswa3z90gyOg/nNV8VadbzMoM948R+kd6k93PczOZA0EknQTl13I+dYzOeiZn6Ltt7f2H/7tsbb/AFDVhWQf1Tzy7wHpwtjUcRVRbRJBRYUCJM5eOb3uGp3o9wl/diNRHhBjNKgTrtG1a6/s3WkmxYH9Sv8AiNz9zCpWFV8z3CQST7qT4jtpwUcuM9KDYaCAwUgTuPPiNYmidoZcxy7axEcSTGmnT0oa0prSk1sZjsADr5TwqvdEfVHz/jVnagXdaloTQNLoUbfPrVHFPJmPxAo9wVWuisKRz0iq4oSijOKGDWDMGYlIUqcVxHKOKkKYCpCmMcVIUwpxTGOKkKjUhVIZNakKexaZzCgk9KsjDBdGJJ5Lw9apMpJsFbUkwBJOwq/ZwYkBpLH6q/vP486SWmGwFteJ5/vNSfFBBlt8d24n+A6VombzKXst98toEADNyG09Tu1VEuux3JJoWEsNccKoJJNdxfFrsxVtlM2IYKzsQCLYbNlyg6MZB6CK1TNk99+EYuC9m8Rc1CEDmdB6k1afsexabLexIDD3lRHYjpIEbdaWL7Qa94u+Z+MGREcl2HpVqwn51ZdIm9bXNbPFhPjSeOmoHMdTWkvz5OnqlOz5I/7Ys2UZcJbfOwKm7ciQCIORFJgkTqTpyrIwGjdAJjyIoC2zMHQ6/EcPOj2rkayQehINdUJL0Y9m3rOsT2oUTGGtaljv9pcsbcN/OuXxWjeYHn7o25VO7iXEQ9yP0moDEkyZJ6nX51aU/CKxfBau4Rkt27+0nwkZRqJ5GZBB3H7pFasLcLlnbNBZebNOxnpPwoRYkRw9KNgmNtluLqVMxp11+VS14JaKgw09NY1PHkABJNHt2Mts/pj9k1ZZ1IkyJkBfd3IJ1CmIiNtQanduKyeCYDLz+xHLpSjzSFPs6j8knZfeY03SNLKE/wCO54V/y5677svtNO0Vx+HaMq3Hsj+7KZQ366uZ6VQ/Jb2cbeCa4ID3mYgkbBRkSRxEhj60X2L9jLmAvPcbELcV0ysMhUkhpDTmP9r9avO/JuKu235nEv8AXs5OapdU2/K9HknZls2sTbF1C5t3lDoFzFijwyBT7xJBEca0/bbEpexGe3h3w692o7t7YtmQXlsg4GRr0rofaXs3ue2rLD3b16xcHKc6q4/WWf8AFVf8rA/37/oW/wBq5XoRyK+SH9zp1xSq5f2jh8cJuuCdneP1jU8KoDAyOOuuhI0OnIkHTlVq6UFy6WAPifiJ947DefxOlVE/Gv8AKqk0lFzHXBccsI47ZoEsSAM2sCQPSrHZllWfKzKggeJlkLJUEkcdCapWvxr/ACo66GRIPQ9KeeMRpnjDRbDKbmrK4yF2KACTAlZAjRjEjeKdrNv/AIf+Y0HAMSzkkn6M7+a1r9oYlkcquUKMoAyJ9hTuV6/OqlfDNInxjMm8LcR3Y0/tN/GqV20h0CgaGCC2hieJrZxd66pZWAld/o7eg0193bUfEVQxD5lRjE5rokADQKkbAcz8am0s/ki0sObuVXYVYuGg3Grlo5aKjjWgmivQjXOznZiU4FMKlXCcg9PTU9MB6lUKeaYyU1pdkdmm8ZOiDc8+g6/dT9l9l5/G+ifNvLp1rVxOJULlHhUbKOP8qemkz8se7dAGSyAqjcj7gePnVI30TbxP8h51UxOMnQaDpVVrnKmmW7D3sSzGSaNgMM111RRJYgVStgkwNSa7/sHA/mNkYhhN+4PolP1Ad7hH3Dn5VfbEXxS7oPYNvA57NmHxCki5c+wRErb5kTqeBHqLForjLf5ve/pQZtMd85LHKT9lhHxBrC9tX7vE27o967YtXXn7cuhPqEB9TQcNi28F0aQZgcCDr57U9axnZx5W8b9oqW7jB1BkEFSRxzRtHDciK3+zLmZkuI6q2hOZgvDbxGCv/qs/20thcY5H10tXDHBntqW+cn1rLtYk9PmPuIFdSxowjlfG8Oq9pu5a8GsurEjxxmylhEEMPe0OscROs1kOASJ11AHkSRv5ifWqrMZG2uvr05GlbxBJGmoMk+pj5k/GtpeD7a9NNb86baLqrcyukA7a8q0MFgDeAW3aVmyqYkySwExLCd9ulYNu9DMTA00BHLb5gfCr1vFshUqSpAQhgSCPAuxFbca30XHn0WrtkJKtZCsNwTdBmeIzjlVa/lBUhQSQDl8RA8bAneeA48fKtj2nuK4s3kEZrVsXAFgd73avIPEFXHwNc7imJyRG0a8CXYcPSqbThUU2nOmljQFCAtbM2leVIaC7PKnKZUiIj49K+GEq4AAPeRuQOQkztrVK9i2YTJIBJg8jABjpHzotm/NttIlxPqCTHIaCo415RMez1H2y7YTD4KxYwt8FvCua1c1C2rck5lM6tl8wTXG4T2kxaOD+c32CuDlNxyCBJykE6gxFYHf7bfgR91SF3Wefwq+P8aInq/JUcMysfk9n9qsIt78yxKQe7xFgz/y7roP2slcd+VU/79/0Lf7VyuOGIOkaRyJ6dalcvFtSST1M/fUfj/ivipPdzf3Dh4HDT31oXw95cnL/AEj+9H2jwJ8uGwPSpXRADfRFRMhVtknxwdQNNGXcg61UxzEXH0Hvvuo5z++iZCySIHEgSBBEifqzAJjeKf8AkpIbuyCANZ2PAjnrR7ls7+E+TKT8AZqGEfXKGaDmGh3lT9Tj5TrWv2jawwUGz3ysqsCHtkSMrySdp1X9XrQ7x4V3x4UuzDq/6B+9a7QX8O4tybbsCColg2ZgBBUqAdQBEnYVx3Znuk6AFSJOwJMiW2WSCNem1TIIOjICNdLtudOIhqGpv28wrFXzmHY4+4i5u8TJnkEsQs5lykS20hRt9muU7fuIWTIUI8eiMpAGRAPd0Hun4VWxLX3EMbjjf3iwnnuaoNacGSrAAGSQQNjxrJQp86ZdVPyY1w1Wc0a61VnNZUzGmCc0KjFtKDNYNmDZjCpURcK/2fmKNbwBO5A9ZNcGo5cZVp61Uw1sDQA9Tr/IVFrFkan5GjsV1MytPB4NV8V30T/y6dKEcSie4oHXj8TVZ8QTvT0FiNbF9pk7fjyrMu4gmgF6aaY3QTNSBoc0S00Gaei06n2Yw62c+JcBjZttcCnYsICA9C7L8an2V2i11PpHLP3kszHgQPgNCI2EVhWO1WVLiACLihXmZIDKwjXTVRVf85Ow0HT8a0nrWHVx8yik18HU+2lxLuNuOtwG2BaVI1hVtICB0zZqrYfS34NVB+ZrnM5Ndv7Ddld5buNeISyFkuxhQNtSfKtE/sfHyeW0WPZjEfnN3JiFD2ysXGfe3bWZYXDqmTU1yguDUDXXQ8xzjhW17Te0Flg9jBrlsswZ3IhrrKZGh1VAdY4nWBx5tbnGtorCeXl7NYXi5MAfACrCHLqvi0E9DrppVNLuQqywfPXcHSKR0tzm1LQV14bE1suQlUWrl+RPp8a1MDYa9dt2kjNc7pBOwLKok9KwpBWZ101O2w5CeNXsH2n3dxLiO6XEy5WCKwBVQsjMwn4ca1jlw0nkw9Z9sfZ28ez8MiBWOGtk3IaNFtAMVnf3a8qxOJIyhTun/wC3/Hqa6H/5ExZRrbYmy6spU95YYGGBB/okjjXLuVzKGIZVVc2U6GXJAzRqIYHTkR5LiqpjK+xRTU4xrN2GWdpAPkTqPhWhi7627hS2FZDBytpBgnVgRlIGhgxpWdjMneDLohjXSOTQRp8NKliL+S7nWJ96AQYJnSTInbeR5iq76ylRbGLHG1biQPC9zjP1s5H1TRjfTc2bgH95H32zWebxukDXKInYwJYljlAAgH5VJrikCZXMARpMQ1wQTpzGoHpVrkf2WrZeXF2uV1fVG+XhqxZa20w9wedofuuGs/D4Mqym8It85Gu4ABHX5SdgaMqsA7WtUkj3QSVJIBgjTY8Z06TV/rP7LXI/suY+yWLMNtWAOUe8dQIYydfxpMPz/wCiCZRoT4tZ1thIJmIygaRvrPCqv+02MyFkgDUHhsR4ug6aVftYl0S2Fdl8De6xGve3JOnlSnX4HPnwDtd2UMkA6mTO+sbaRtwJ1psTeBAg6S33J/CtLDHE3EuXFLuloBrjEghQdpzeu3Kg3HuKiXDbXI+bI5sWoaDDQxXXUVWPfaNM8+wWEdskBok7acJ3HHj5etUTiSTw+flzq0cSv/Ct/wCdfkjgD0FVsRkKMVTIVAbRmIILKsQxJB8QMzw61FavZL1EcRhyIO866DSJiRrwOlUrjwdOG3xp7+MZhBPLnwAHEwNANuQqqz1i6MXQ91qrs1SD60O7vpxisqoydEGoZNOT+JoZesmzJsod8edN3hoVPXEYaEz02ao0qAHmlNNSpgPT01KgCVPNJLZOwq5bwECbrBB194+SjU09GioK0sF2O7guxCWxu7mFHTqeg1oaY63b/orYJ+1c1+CKYHqTQMZj7l0g3HLRsOC/oqNF9BQPUjTXGYez/RWzeb7dyQk9LY8RHmR5VX7Q7WvX4FxyVU+FBARf0UGk9d+tZoanzVSYOmwwapZzQpEVLvDVdhaWbl4cBGgoik3Cx0BifhwFAtWwSRpI5kD7zQ2uRoJHPh6eVUqHpd718qrrAmOk70+GdS0PpoeIiR+OdUEYyI34fdRbl/w5SPEC0nznSOFV3Hod7bBcx0ExJ56/wPwrSx+DKWUuQYeSDuPo2yQfCIJBzcePKsqLjWgBJUEnKBMbgnT8belzF9pMVVGggKBBLFQwPiETEjT0PKq7ldjS7Ox+S0FIGYSApdQSG1Bg6rx89Kqdu3PpeHuqdOsms7CWGuvE6mWJ3+GsbniRR8RaPd5nYluJLAx4oC7mZGc8xHxtV5GqC2cUF3EgFG0IBkA8Y13OlXsVgO7AUtmDTlIgQcszuZB2O23Ssi/iA8bjYEnWNTt/ZHAfyjb7TBU2wXLqEYgLDHQhdp/tE8OJgEkCu5Sohj+1e8tWbfdquQHxLMtLufFz1Zj6xR8fg7+HsrmLBLhDBTAmJysBJOXcgmJmQNaoYMWh3q3Tqui9TmymDwic3GcoGkkgF7FllExqfEddWGgnWPdjaJjpVKvopUXrF3Mpzux1ULMt4pmd9NAR61exsrlWRIVxptIvXRvxFZ/YeIw4b/ec+QHN4N8wGnA6TvR+1roLSugPekdAcRegeg+6tI5P6jWL8nqttbeAwlvHYFGe1ca2b4uCX7n3YUTC+OTx1beBW37W9hWsfh7TpfFpE+kD6d33biWYrIExrPDXmaqexftBZ7Qwt7C2rK2O7thMpXPby3FImBl0zZ/DMxrO8Z/YfZBwGHv4PHXSfzljbtG1mdjbNvKzLbylkCzJkZQWG81xun23+5P9v4OZ0935X/Dyy80EiQYJEgyDBiQeIoXeeC7+gP8AWtVWu3BJymVk5SdCVnQkcCRFRW54Lv8Adj/XtV23fg6q5PAJSSdKWJt5RP486rM8KOuvwJA/fThy8yY9N65nZg7IFqi76zSKGhXjWboh0Te55bcjyigZqiTTTUaRpBMKTR17PNXrmNtJxzHkv8dqqX+2WOiAL13PxOnyrm8k+ES/2fGpqBtWxu49NfuqhcuFjLEk8yZqNGE6aIewOZ9P40zYu1wtn1IrPpU8DSzcvqdkjzNRW+B9Vfn/ABoFKmGlg41+Bj9EAfMa0EtxqFPQIeaU1GnpgPNPNRpUATBoimaDNJTT0ehxcMnXWiIkiTwPy8/Wq6qZjjNWLt4hh1WDPWaAHVlytzkQfjSRshVjrIn41A2CpKkev/v4UV8KYXXaQdesz03+BGlPRkltvKoTAJkbffP3njRrF5bYuW21nQQTEiddN/59BVe7fZoJKrwXcTEcY8hJIq4nY/8ASZnAK2u8XVYbfmdduEmnoyHZN0KzMYgKZnqRw1nQHgdqfE3z403GZoM8C4J046rx5mqVg6EkmOIBjMTsD00PwprzySfOfUk1SYaaWJwaqqlXWSAYYxrrqCQAB0J051C4rkrlmYC6bhlEMvTaY5GqmCtB3CkwDM+gJ68orWDhLxtgwrk5juzZpOmwIHAaTx3gV2H2M+4jr7ysJ5gifInetfsDEpazG7ADqQoM6xOugPhnTrrxFLtHDqEi1luSwkG01o/XIgSuYwY8JbaeNYd28WMnf7o0AA4AbRT7aiuxs4VbDZveA8W4UwsEiDmXKJiW1I00IJqOIvSto87ZPqb12axc1aGIJCWSdu7InhPfXTE84I+IqpvyUqwu4XtS7aW4lu4ypdXLcUHR1GwI/fvqedepfk/fHLgvzskXbVmxiPza0om5cc3WzrcOUt71vwgc15V4z3ldr+Sz2nfDYy3ae8Fw9zOjC45FtJBcMsmEYuAOufXnS5HqFb1HRdtdk9mt2U+PtWGtm4qBVRiwtXQ5QCCYALeFumwBrzTCmRcH/LH+vZr0Pt32j7MQ9oYTLfZLrvcygqLQxKEAC0UMgM65yx8OkRz8zwj6XP7tf9ezUzTwSp4Tx6FdDz8O3umeXWqqtGsx+/0qJvGIgfftp9aYoTsTU9haWO82g8t6HdfQUIA0hqJJ2paToqiGpEx94qIqdFoA01OaaoJFT01KgB6VKlNACpUqVACpUqVACpUqVACpUqVAD04NRpUAELEnNxqZfNJaZAEfHjQQactTANaJMmDMaHlVq5ijlAg76kGeW528hVFLhAIHEQfx6Ufs+yHYgkDTjP7uPH0oQ9LuDyoGa8JV0hCpiDJ1yqOnumN561VWAoLsTIgiCQBMqDqCNp0P3ah71mVUzaKTAPCaJjsO9q41m5vbZlIBkBgdYpgdPiuxE/MjiFvI7F1HdrkzINYzD3gRHEjQ7cawezMX3ObN9ZSug1jmNR/OBwmq1vENlYBjoARqdADBjluKJh2NwwSC4zFc2s+BtNQZgwddN6AK5aDI04jpyj+NFF45gzEscwJkyTEbk0XtM7ayQzhtdmhMygRAUHaJ3qnOlPR6FvIF2MqRIkR01HMEEelaF3C5kVyy5iQXMbK5ARmjQncnmOZBo/s6dC0SQW3nRSEJIIMzMadT6tZ7UC3Ht3tbOZxBE5Zadh67azRoaBvYa3buKrZjOUyYUasdGTcDTU5tjtWp7SXktNbOEZ7StatF1Viv0hUllYKYJUZAerHYaVzFwAEgbSY8pouJYnKZJGVVHTIApH7/APFRoaXnxt2A1xLTg8WtpJkSCXt5XnzNQ/ObREmyy8+7umB1y3Fcn9YUK9fJsoIEBiJ46AQN+R+VQ7N1f/C23DTfry9RT7BofLZPu3iv95aIHxtFz8qe5aCJcJuW2zKFXK0knvbbGVIDKAFPvAbjnQe0rYDxIHPeNzGvExQsRicwAAjWdh8dN568viuwaEygqDpPzPz1+HCqs02c7SaaaWi0s2Tp68PXfpUS+44jb5aUNn0ER8J4a7017c0aGjss1AUlaKQNIWn/2Q==',
      skills: ['Machine Learning', 'Breast Cancer Prediction', 'Data Science'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/Y1MWJILAI3UN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project',
    },
    
    {
      title: 'Generative AI Explained',
      organization: 'NVIDIA Deep Learning Institute',
      date: 'December 2024',
      credentialId: 'NVIDIA-789012',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      skills: ['Generative AI', 'Deep Learning', 'Artificial Intelligence', 'Large Language Models', 'Machine Learning'],
      verifyLink: 'https://drive.google.com/file/d/1RH22-gN1I_rz_QNfQ4MYWlBvH_ZNKSVn/view',
    },
    {
      title: 'Facial Expression Recognition with PyTorch',
      organization: 'Coursera Project Network',
      date: 'November 2023',
      credentialId: 'MKNQCYQR8M8V',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcweZdDMgurpVo05g5CduN-fetOk5Xf4aurWlBYmjgVqyyZ5mnRWSHqYbR7Rn_AMLGdh4&usqp=CAU',
      skills: ['Computer Vision', 'Convolutional Neural Networks', 'Deep Learning', 'PyTorch', 'Classification'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/MKNQCYQR8M8V?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project',
    },
    {
      title: 'Creating Your First C++ Application',
      organization: 'Coursera Project Network',
      date: 'October 2023',
      credentialId: 'GP4262CYMRXA',
      image: 'data:image/jpeg;base64,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',
      skills: ['C++', 'Software Development', 'Programming','Command-Line Interface (CLI) Development'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/GP4262CYMRXA',
    }
    
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
                href="https://drive.google.com/file/d/1jgo2ZwppgE15gCa9k7yH5D7f8veRstuE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 inline-block"
              >
                <strong>Download Resume/CV</strong>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Philosophy Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              My Philosophy of Success
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group max-w-3xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <div className="relative p-8 bg-black rounded-2xl border border-purple-500/20">
              <div className="text-center space-y-6">
                <div className="text-3xl font-mono space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block"
                  >
                    <span className="text-purple-400">P(Success)</span> = 1
                  </motion.div>
                  <div className="text-2xl">
                    where
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block"
                  >
                    <span className="text-purple-400">Success</span> = <span className="text-blue-400">Σ</span> <span className="text-green-400">(Failures × Impact)</span>
                  </motion.div>
                </div>
                
                <div className="mt-8 text-gray-300 text-lg">
                  <p className="mb-4">The probability of success approaches certainty (1) as the sum of our failures and their magnitude increases. Each failure contributes proportionally to its impact:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative group p-4 rounded-lg bg-purple-900/20"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative">
                        <span className="text-xl font-bold text-purple-400">Small Failure</span>
                        <p className="text-sm mt-2">Impact × 1</p>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative group p-4 rounded-lg bg-purple-900/20"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative">
                        <span className="text-xl font-bold text-blue-400">Medium Failure</span>
                        <p className="text-sm mt-2">Impact × 2</p>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative group p-4 rounded-lg bg-purple-900/20"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative">
                        <span className="text-xl font-bold text-green-400">Large Failure</span>
                        <p className="text-sm mt-2">Impact × 3</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
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
         <section id="projects" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
              >
                Featured Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                Exploring the intersection of innovation and technology through carefully crafted solutions
              </motion.p>
            </div>

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-16"
            >
              <a
                href="https://github.com/astromanu007/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                View More Projects
              </a>
            </motion.div>
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
<section id="certifications" className="py-20 relative z-10">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
      Certifications
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.credentialId}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-6 bg-black rounded-lg h-full">
            <div className="h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <Award className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
            <p className="text-purple-400 mb-1">{cert.organization}</p>
            <p className="text-gray-400 mb-2">{cert.date}</p>
            <p className="text-gray-500 text-sm mb-3">ID: {cert.credentialId}</p>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-purple-900/30 text-purple-400 border border-purple-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Link Button to Verify the Certificate */}
            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Verify Certificate
            </a>
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
