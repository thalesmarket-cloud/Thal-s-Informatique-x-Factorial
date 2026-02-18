
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img 
              src="https://thales.ma/wp-content/uploads/2019/12/logo-thales2020-1.png" 
              alt="Thalès Logo" 
              className="h-6 md:h-8 w-auto dark:brightness-0 dark:invert" 
            />
            <span className="sr-only">Thalès Informatique</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-blue-600 transition-colors whitespace-nowrap">L'Alliance</a>
            <a href="#defis" className="hover:text-blue-600 transition-colors whitespace-nowrap">Vos Défis</a>
            <a href="#solutions" className="hover:text-blue-600 transition-colors whitespace-nowrap">La Solution</a>
            <a href="#personas" className="hover:text-blue-600 transition-colors whitespace-nowrap">Pour qui ?</a>
            <a href="#advantages" className="hover:text-blue-600 transition-colors whitespace-nowrap">Expertise</a>
            
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg shadow-blue-500/20"
            >
              Demander une démo
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Démo</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
