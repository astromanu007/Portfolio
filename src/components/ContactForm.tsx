import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    // Simulate sending message
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <div className="relative group max-w-2xl mx-auto">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
      <form
        onSubmit={handleSubmit}
        className="relative p-8 bg-black/90 border border-purple-500/20 rounded-2xl space-y-6 backdrop-blur-md"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white outline-none transition-all duration-300"
              placeholder="Elon Musk"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white outline-none transition-all duration-300"
              placeholder="elon@spacex.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white outline-none transition-all duration-300"
            placeholder="Collaboration Opportunities"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white outline-none transition-all duration-300 resize-none"
            placeholder="Hi Manish, I saw your NASA Space Apps project and publication portfolio..."
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100"
          >
            <Send className="w-5 h-5" />
            {status === 'sending' ? 'Sending Signal...' : 'Transmit Message'}
          </button>

          {status === 'sent' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-green-400 font-semibold"
            >
              <CheckCircle className="w-6 h-6" /> Signal Transmitted Successfully!
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-red-400 font-semibold"
            >
              <AlertCircle className="w-6 h-6" /> Please fill in all required fields.
            </motion.div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
