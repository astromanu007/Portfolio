import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { sfx } from '../utils/audio';
import { sendScheduleEmail } from '../utils/email';

interface ScheduleChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleChatModal: React.FC<ScheduleChatModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Recruitment / Job Offer',
    date: '',
    time: '10:00 AM',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sfx.playClick();
    
    await sendScheduleEmail({
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      topic: formData.topic,
      preferred_date: formData.date,
      preferred_time: formData.time,
      notes: formData.notes
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg bg-slate-950 border border-purple-500/30 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.3)] font-mono"
        >
          <button
            onClick={() => { sfx.playClick(); onClose(); }}
            className="absolute top-6 right-6 p-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Schedule a Interview / Chat</h2>
          </div>
          <p className="text-xs text-gray-400 mb-6">
            Book a 15-minute quick call or technical interview directly with Manish.
          </p>

          {submitted ? (
            <div className="p-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <div className="text-base font-bold text-white">Meeting Invitation Sent!</div>
              <p className="text-xs text-gray-300">
                Manish will confirm the requested slot via email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-400 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@techcorp.com"
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-400 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. OpenAI / Space Tech"
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Meeting Purpose</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white outline-none focus:border-purple-500"
                  >
                    <option value="Recruitment / Job Offer">Recruitment / Job Offer</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Patent Consultation">Patent Consultation</option>
                    <option value="General Technical Chat">General Technical Chat</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-400 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Preferred Time</label>
                  <input
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    placeholder="e.g. 2:00 PM EST"
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-1">Brief Agenda / Note</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention role details or project topics..."
                  className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xs shadow-lg shadow-purple-500/25 hover:scale-[1.01] transition"
              >
                <Send className="w-4 h-4" />
                <span>CONFIRM & SCHEDULE MEETING</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ScheduleChatModal;
