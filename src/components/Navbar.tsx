import { Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-opacity-10 bg-black backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">
              Manish's Portfolio
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                'About',
                'Experience',
                'Achievements',
                'Skills',
                'Projects',
                'Publications',
                'Patents',
                'Contact',
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-purple-500/20"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            {[
              'About',
              'Experience',
              'Achievements',
              'Skills',
              'Projects',
              'Publications',
              'Patents',
              'Contact',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
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
