import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from './constants';
import { SectionType } from './types';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import SectionHero from './components/SectionHero';
import SectionSummary from './components/SectionSummary';
import SectionMatrix from './components/SectionMatrix';
import SectionPigeonPea from './components/SectionPigeonPea';
import SectionStrategy from './components/SectionStrategy';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch(activeSection) {
      case SectionType.HOME:
        return <SectionHero onStart={() => setActiveSection(SectionType.SUMMARY)} />;
      case SectionType.SUMMARY:
        return <SectionSummary />;
      case SectionType.MATRIX:
        return <SectionMatrix />;
      case SectionType.PIGEON_PEA:
        return <SectionPigeonPea />;
      case SectionType.STRATEGY:
        return <SectionStrategy />;
      case SectionType.SOURCES:
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
                <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">Data Sources</h2>
                <ul className="text-gray-600 space-y-2">
                    <li>UN COMTRADE</li>
                    <li>Trading Economics</li>
                    <li>OEC World</li>
                    <li>Thai Ministry of Commerce (TPSO)</li>
                    <li>Tridge & Selina Wamucii</li>
                </ul>
            </div>
        );
      default:
        return <SectionHero onStart={() => setActiveSection(SectionType.SUMMARY)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#1A1A1A] font-sans selection:bg-warmGold selection:text-white">
      
      {/* Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || activeSection !== SectionType.HOME 
            ? 'bg-white shadow-md py-3' 
            : 'bg-white/80 backdrop-blur-md py-6 shadow-sm' 
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setActiveSection(SectionType.HOME)}
          >
            <div className={`p-2 rounded-lg transition-colors bg-lake text-white`}>
              <Globe size={24} />
            </div>
            <span className={`font-serif font-bold text-lg tracking-wide text-charcoal`}>
              Siam<span className="text-warmGold">Africa</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
             {NAV_ITEMS.map((item) => {
               const isActive = activeSection === item.id;
               // Since Hero is now Light, we use dark text always for readability
               let textColor = 'text-gray-500 hover:text-lake'; 
               if (isActive) textColor = 'text-lake font-bold bg-lake/5';

               return (
                 <button
                   key={item.id}
                   onClick={() => setActiveSection(item.id)}
                   className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${textColor}`}
                 >
                   {item.label}
                 </button>
               )
             })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 text-charcoal`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 bg-white shadow-xl z-40 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    activeSection === item.id ? 'bg-lake/10 text-lake font-bold' : 'text-gray-600'
                  }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-0">
        <AnimatePresence mode='wait'>
           <motion.div
             key={activeSection}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.4 }}
           >
             {renderContent()}
           </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      {activeSection !== SectionType.HOME && (
        <footer className="bg-charcoal text-gray-400 py-12 px-6 border-t-4 border-lake">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-white font-serif text-xl font-bold mb-2">SiamAfrica Nexus</h4>
                <p className="text-sm max-w-md">Connecting Thai Innovation with Southern African Opportunity.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-center md:text-right">
                <span>© 2024 Presented by Kris Laohasiri to Mr. Lakmal</span>
                <span className="hover:text-warmGold cursor-pointer">Contact Analysis Team</span>
              </div>
           </div>
        </footer>
      )}
    </div>
  );
};

export default App;