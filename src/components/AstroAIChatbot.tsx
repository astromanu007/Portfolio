import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AstroAIChatbotProps {
  skills: any[];
  projects: any[];
  experience: any[];
  achievements: any[];
  publications: {
    publishedPapers: any[];
    acceptedPapers: any[];
    underReviewPapers: any[];
  };
  patents: any[];
  certifications: any[];
}

const PRESETS = [
  { q: "Tell me about your NASA Space Apps awards", key: "nasa" },
  { q: "What research did you do at NTU Singapore?", key: "ntu" },
  { q: "How many patents do you have?", key: "patents" },
  { q: "List your key technical skills", key: "skills" }
];


const AstroAIChatbot = ({
  skills,
  projects,
  experience,
  achievements,
  publications,
  patents,
  certifications
}: AstroAIChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    { sender: 'bot', text: "Hello! I am your Astro-AI digital twin assistant. I have full real-time access to all my skills, projects, publications, experience history, certifications, and patents. Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      window.speechSynthesis.cancel();
    }
  }, [isOpen]);


  const searchKnowledge = (query: string): string => {
    const clean = query.toLowerCase().trim();

    // 1. GREETINGS & WHO ARE YOU
    if (/^(hi|hello|hey|greetings|hola)/i.test(clean)) {
      return "Greetings, traveler! How can I assist you today? You can ask me about my research internships, patents, deep learning projects, or academic papers.";
    }
    if (clean.includes('who are you') || clean.includes('your name') || clean.includes('who is manish')) {
      return "I am Astro-AI, the digital twin of Manish Dhatrak. I'm built to answer any query about his credentials, achievements, research, and technical stack using the live data on this page.";
    }

    // 2. INTERNSHIPS / EXPERIENCE
    if (clean.includes('experience') || clean.includes('work') || clean.includes('job') || clean.includes('intern')) {
      // Check for specific companies
      if (clean.includes('ntu') || clean.includes('singapore') || clean.includes('nanyang')) {
        const exp = experience.find(e => e.company.toLowerCase().includes('nanyang') || e.company.toLowerCase().includes('ntu'));
        return exp 
          ? `At ${exp.company} (${exp.period}), I work as a ${exp.title} (${exp.location}). ${exp.description} Key accomplishments include:\n- ${exp.achievements.join('\n- ')}`
          : "I am currently a Research Student Intern at NTU Singapore focusing on Deep Learning for Medical Imaging.";
      }
      if (clean.includes('sanjivani')) {
        const exp = experience.find(e => e.company.toLowerCase().includes('sanjivani'));
        return exp 
          ? `At ${exp.company} (${exp.period}), I served as ${exp.title}. ${exp.description}\nKey achievements:\n- ${exp.achievements.join('\n- ')}`
          : "I worked with Sanjivani Group of Institutes as a Project Developer and Research Intern, building Wildlife Threat Detection systems and smart campus tools.";
      }
      if (clean.includes('jpmorgan') || clean.includes('j.p. morgan') || clean.includes('j.p.morgan')) {
        const exp = experience.find(e => e.company.toLowerCase().includes('j.p. morgan') || e.company.toLowerCase().includes('jpmorgan'));
        return exp 
          ? `At ${exp.company} (${exp.period}), I was a ${exp.title}. ${exp.description}\nAchievements:\n- ${exp.achievements.join('\n- ')}`
          : "I completed a Software Engineering Virtual Internship at J.P. Morgan, working on telemetry, debugging repositories, and data visualization using Perspective.";
      }
      if (clean.includes('nasa')) {
        const exp = experience.find(e => e.company.toLowerCase().includes('nasa'));
        return exp 
          ? `As the ${exp.title} (${exp.period}), I lead space-themed innovation. Key contributions:\n- ${exp.achievements.join('\n- ')}`
          : "I am the Local Lead for Kopargaon for the NASA International Space Apps Challenge, directing space-tech hackathons.";
      }
      if (clean.includes('space zone') || clean.includes('rhumi') || clean.includes('rocket')) {
        const exp = experience.find(e => e.company.toLowerCase().includes('space zone') || e.company.toLowerCase().includes('rhumi'));
        return exp 
          ? `During my traineeship at ${exp.company} (${exp.period}), I worked on ${exp.title}. ${exp.description}\nAchievements:\n- ${exp.achievements.join('\n- ')}`
          : "I was a Mission Rhumi Trainee with Space Zone India, working on Rhumi-1 (India's first reusable hybrid rocket) and launching suborbital payloads.";
      }
      if (clean.includes('adgebra') || clean.includes('inuxu')) {
        const exp = experience.find(e => e.company.toLowerCase().includes('adgebra') || e.company.toLowerCase().includes('inuxu'));
        return exp 
          ? `At ${exp.company} (${exp.period}), I was an ${exp.title}. ${exp.description}\nAchievements:\n- ${exp.achievements.join('\n- ')}`
          : "I worked as an AI/ML Intern at Adgebra, developing optimization models and contributing to real-time analytics.";
      }

      // General experience overview
      const list = experience.map(e => `- ${e.title} at ${e.company.split('·')[0]}`).join('\n');
      return `Here is a summary of my professional experience and internships:\n${list}\n\nAsk me about any specific role (e.g., 'Tell me about NTU Singapore' or 'What did you do at J.P. Morgan?') for detailed achievements.`;
    }

    // 3. PROJECTS
    if (clean.includes('project') || clean.includes('portfolio') || clean.includes('code') || clean.includes('github')) {
      const match = projects.find(p => clean.includes(p.title.toLowerCase()) || p.tags.some(t => clean.includes(t.toLowerCase())) || p.title.toLowerCase().split(' ').some(word => word.length > 3 && clean.includes(word)));
      if (match) {
        return `Project: **${match.title}**\nDescription: ${match.description}\nTech Stack: ${match.tags.join(', ')}\nGitHub Repo: ${match.github || 'N/A'}`;
      }
      const list = projects.map(p => `- ${p.title} (${p.tags.slice(0, 2).join(', ')})`).join('\n');
      return `Here are some of my featured AI, Healthcare, and Vision projects:\n${list}\n\nAsk about a specific project (e.g. 'tell me about Smart Stethoscope' or 'autonomous car project') for tech stack details.`;
    }

    // 4. PATENTS
    if (clean.includes('patent')) {
      const match = patents.find(p => clean.includes(p.title.toLowerCase()) || p.title.toLowerCase().split(' ').some(word => word.length > 3 && clean.includes(word)));
      if (match) {
        return `Patent Details:\nTitle: **${match.title}**\nDesign Number: ${match.number}\nStatus: ${match.status} (${match.year})\nDescription: ${match.description}`;
      }
      const list = patents.map(p => `- ${p.title} (${p.status})`).join('\n');
      return `I have 9 design patents granted in 2024 by the Indian Patent Office, including:\n${list}\n\nAsk about any patent (e.g., 'robotic arm gripper' or 'smart spectacles') for the Design Number.`;
    }

    // 5. PUBLICATIONS
    if (clean.includes('publication') || clean.includes('paper') || clean.includes('ieee') || clean.includes('journal')) {
      const allPublished = publications.publishedPapers;
      const allAccepted = publications.acceptedPapers;
      const allReview = publications.underReviewPapers;

      if (clean.includes('published')) {
        return `Published papers:\n${allPublished.map((p, idx) => `${idx+1}. "${p.title}" published in ${p.journal}`).join('\n')}`;
      }
      if (clean.includes('accepted')) {
        return `Accepted papers:\n${allAccepted.map((p, idx) => `${idx+1}. "${p.title}" accepted by ${p.journal}`).join('\n')}`;
      }
      if (clean.includes('review') || clean.includes('under review')) {
        return `Papers currently under peer review:\n${allReview.map((p, idx) => `${idx+1}. "${p.title}" under review at ${p.journal}`).join('\n')}`;
      }

      return `I have authored multiple research papers:\n- **${allPublished.length} Published Papers** (e.g., IEEE INDISCON 2025 NIT Rourkela, C2I6, JoKDSIM)\n- **${allAccepted.length} Accepted Papers** (e.g., body area networks emotion detection WBAN)\n- **${allReview.length} Papers Under Review** (e.g., SJST, JAIR, JAIR speech voice automation)\n\nAsk me for 'published papers', 'accepted papers', or 'papers under review' to see the titles!`;
    }

    // 6. CERTIFICATIONS
    if (clean.includes('certif') || clean.includes('credential') || clean.includes('course')) {
      const match = certifications.find(c => clean.includes(c.title.toLowerCase()) || c.title.toLowerCase().split(' ').some(word => word.length > 3 && clean.includes(word)));
      if (match) {
        return `Certification: **${match.title}**\nIssued by: ${match.organization} (${match.date})\nCredential ID: ${match.credentialId}\nVerify Link: ${match.verifyLink}`;
      }
      const list = certifications.map(c => `- ${c.title} (${c.organization})`).join('\n');
      return `I hold several advanced certifications:\n${list}\n\nAsk about any certification (e.g., 'AWS EC2' or 'TensorFlow') to get the verification link.`;
    }

    // 7. ACHIEVEMENTS & AWARDS
    if (clean.includes('achievement') || clean.includes('award') || clean.includes('prize') || clean.includes('winner') || clean.includes('rank')) {
      if (clean.includes('nasa') || clean.includes('space apps')) {
        return "I won the People's Choice Award in the NASA Space Apps Challenge 2024 for developing 'ExoYatra' (galactic challenge game), achieving 90% engagement and 60,000+ votes.";
      }
      if (clean.includes('m2l') || clean.includes('croatia') || clean.includes('deepmind')) {
        return "I was selected as a Scholar for the Mediterranean Machine Learning (M2L) Summer School 2025 in Split, Croatia, sponsored by Google DeepMind.";
      }
      if (clean.includes('dipex') || clean.includes('monitorx')) {
        return "I won Second Prize in the Safety Category at Dipex 2025 (State-Level Competition) for developing MonitorX (infrastructure health monitoring system), receiving ₹5,000 and a Trophy.";
      }
      if (clean.includes('olympiad')) {
        return "I achieved 2nd Global Rank in the International Space Olympiad (EduMitra) in January 2021 among 1,000+ global participants.";
      }

      const list = achievements.map(a => `- ${a.title} (${a.year})`).join('\n');
      return `Here are some of my key career achievements and awards:\n${list}\n\nAsk about a specific one (e.g. 'NASA award' or 'Croatia summer school') to see details.`;
    }

    // 8. SKILLS
    if (clean.includes('skill') || clean.includes('language') || clean.includes('python') || clean.includes('programming')) {
      const list = skills.map(s => `* **${s.title}**: ${s.description}`).join('\n');
      return `My core technical and soft skill categories include:\n${list}`;
    }

    // 9. EXTRA FUN FACTS (SINGING)
    if (clean.includes('sing') || clean.includes('music') || clean.includes('song')) {
      return "Yes! I won First Prize in the Singing Competition at Sanjivani College of Engineering, Kopargaon in November 2024, showing my passion for performing arts alongside technical research.";
    }

    // 10. CONTACT / CONNECT
    if (clean.includes('contact') || clean.includes('email') || clean.includes('linkedin') || clean.includes('reach out')) {
      return "You can reach out to me directly at **manishdhatrak1121@gmail.com** or connect with me on LinkedIn at [Manish Dhatrak](https://www.linkedin.com/in/manish-dhatrak-b759171aa/). Alternatively, use the contact form on this page to send a message directly to my inbox.";
    }

    // 11. GENERAL SEARCH FALLBACK
    // Try to scan all objects for any word match
    const keywords = clean.split(' ').filter(w => w.length > 3);
    for (const key of keywords) {
      // Search projects
      const projMatch = projects.find(p => p.title.toLowerCase().includes(key) || p.description.toLowerCase().includes(key));
      if (projMatch) return `I found a matching project: **${projMatch.title}**\n${projMatch.description}\nStack: ${projMatch.tags.join(', ')}`;
      
      // Search experience
      const expMatch = experience.find(e => e.company.toLowerCase().includes(key) || e.title.toLowerCase().includes(key) || e.description.toLowerCase().includes(key));
      if (expMatch) return `I found a matching role: **${expMatch.title}** at **${expMatch.company}**\nPeriod: ${expMatch.period}\nDescription: ${expMatch.description}`;

      // Search patents
      const patMatch = patents.find(p => p.title.toLowerCase().includes(key) || p.description.toLowerCase().includes(key));
      if (patMatch) return `I found a matching patent: **${patMatch.title}**\nDesign No: ${patMatch.number} (${patMatch.status})`;
    }

    return "I couldn't find a direct match in my knowledge systems. Try asking about: 'NASA', 'NTU Singapore', 'patents', 'IEEE publications', 'my technical skills', or my experience at 'J.P. Morgan'.";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg = text.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      const reply = searchKnowledge(userMsg);
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      
      if (!isMuted) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(reply.replace(/\*\*|\*/g, ''));
        utterance.rate = 1.05;
        utterance.pitch = 0.95;
        window.speechSynthesis.speak(utterance);
      }
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            className="w-[320px] sm:w-[380px] h-[500px] mb-4 bg-black/95 border border-purple-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-md"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-purple-900/60 to-blue-900/60 border-b border-purple-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-purple-400 animate-pulse" />
                <div>
                  <h4 className="font-bold text-white text-sm flex items-center gap-1">
                    Astro-AI Chat <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  </h4>
                  <span className="text-xs text-purple-300">Online & Orbiting</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const newMuted = !isMuted;
                    setIsMuted(newMuted);
                    if (newMuted) {
                      window.speechSynthesis.cancel();
                    } else {
                      window.speechSynthesis.cancel();
                      const utter = new SpeechSynthesisUtterance("Voice output activated.");
                      window.speechSynthesis.speak(utter);
                    }
                  }}
                  className="p-1 text-gray-400 hover:text-white rounded-full bg-white/5"
                  title={isMuted ? "Unmute Voice Synth" : "Mute Voice Synth"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-green-400" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-white rounded-full bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>


            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-purple-600/40">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 ${
                    msg.sender === 'user' ? 'bg-blue-600/30' : 'bg-purple-600/30'
                  }`}>
                    {msg.sender === 'user' ? <User className="w-4 h-4 text-blue-300" /> : <Bot className="w-4 h-4 text-purple-300" />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-blue-600/20 border border-blue-500/30 text-white rounded-tr-none'
                      : 'bg-purple-950/20 border border-purple-500/30 text-gray-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Presets */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.key}
                    onClick={() => handleSend(preset.q)}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 border border-purple-500/10 hover:border-purple-500/30 hover:bg-white/10 text-purple-300 text-left transition-all duration-300"
                  >
                    {preset.q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 bg-white/5 border-t border-purple-500/20 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask about J.P. Morgan, patents..."
                className="flex-1 bg-black/60 border border-purple-500/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={() => handleSend(input)}
                className="p-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:scale-105 transition-all text-white"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center border border-purple-400/25 relative group"
      >
        <div className="absolute inset-0 bg-purple-600 rounded-full blur opacity-45 group-hover:opacity-75 transition duration-500 -z-10"></div>
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default AstroAIChatbot;
