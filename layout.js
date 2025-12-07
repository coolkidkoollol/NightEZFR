import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Menu, X, Github, Moon, Sun, Gamepad2 } from 'lucide-react';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full bg-black/90 backdrop-blur-xl border border-white/10 py-3 shadow-[0_0_20px_-5px_rgba(124,58,237,0.3)]' 
            : 'top-0 left-0 right-0 bg-transparent py-6'
        }`}
      >
        <div className={`px-6 flex items-center justify-between ${isScrolled ? 'max-w-full' : 'max-w-7xl mx-auto'}`}>
          <Link to={createPageUrl('Home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_-3px_rgba(124,58,237,0.5)]">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">NightEZ</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {['Home', 'Download'].map((item) => (
              <Link 
                key={item} 
                to={createPageUrl(item === 'Home' ? 'Home' : 'Download')} 
                className="hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to={createPageUrl('Download')}>
              <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105 active:scale-95">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center">
              <Gamepad2 className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold">NightEZ</span>
          </div>
          <p className="text-gray-400 text-sm max-w-md mb-8">
            The #1 source for uncopylocked Roblox games. Download high-quality game copies instantly.
          </p>
          <div className="text-gray-500 text-sm">
            © 2024 NightEZ. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}