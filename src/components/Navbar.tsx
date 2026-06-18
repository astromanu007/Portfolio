import { Menu, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';
import { sfx } from '../utils/audio';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sfx.isMuted());

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    sfx.playClick();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleMute = () => {
    const newMuteState = sfx.toggleMute();
    setIsMuted(newMuteState);
    if (!newMuteState) {
      sfx.playChime();
    } else {
      sfx.playClick();
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-opacity-10 bg-black backdrop-blur-lg border-b border-white/5">
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
            <span className="text-white text-xl font-bold font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-purple-400">
              AstroManu.007
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-2">
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
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-500/10"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Global Audio Controller */}
            <button
              onClick={toggleMute}
              onMouseEnter={() => sfx.playHover()}
              className="p-2 rounded-full border border-purple-500/20 hover:border-purple-500 bg-white/5 hover:bg-purple-500/10 text-purple-400 transition-all duration-300"
              title={isMuted ? "Unmute UI sounds" : "Mute UI sounds"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleMute}
              className="p-2 rounded-full border border-purple-500/20 bg-white/5 text-purple-400"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <button
              onClick={() => { sfx.playClick(); setIsOpen(!isOpen); }}
              className="text-gray-300 hover:text-white p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
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
                onMouseEnter={() => sfx.playHover()}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
