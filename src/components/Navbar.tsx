import { Menu, Zap, Terminal as TermIcon } from 'lucide-react';
import { useState } from 'react';
import { sfx } from '../utils/audio';

interface NavbarProps {
  onOpenRecruiter?: () => void;
  onOpenPalette?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onOpenRecruiter,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    sfx.playClick();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-40 bg-black/80 backdrop-blur-lg border-b border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Profile Image */}
            <img
              src="https://avatars.githubusercontent.com/u/98075143?s=400&u=73e1af4d3675f7d8eedbe342374e8bc7112f23fa&v=4"
              alt="Manish Dhatrak"
              className="w-10 h-10 rounded-full mr-3 border border-purple-500/30"
              onMouseEnter={() => sfx.playHover()}
            />
            {/* Portfolio Title */}
            <span className="text-xl font-bold font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-purple-400">
              Manish Dhatrak
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-baseline space-x-1 text-xs">
              {[
                'About',
                'Experience',
                'Achievements',
                'Skills',
                'Projects',
                'Publications',
                'Patents',
                'Certifications',
                'Contact',
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  onMouseEnter={() => sfx.playHover()}
                  className="px-2.5 py-1.5 rounded-md font-medium text-gray-300 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Recruiter Quick Mode Trigger */}
            <button
              onClick={() => { sfx.playClick(); onOpenRecruiter?.(); }}
              onMouseEnter={() => sfx.playHover()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(245,158,11,0.15)]"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Recruiter Summary</span>
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => { sfx.playClick(); onOpenRecruiter?.(); }}
              className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold"
            >
              Recruiter
            </button>
            <button
              onClick={() => { sfx.playClick(); setIsOpen(!isOpen); }}
              className="p-2 text-gray-300 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-b border-white/10">
            {[
              'About',
              'Experience',
              'Achievements',
              'Skills',
              'Projects',
              'Publications',
              'Patents',
              'Certifications',
              'Contact',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/10"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
