import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from './constants';
import { SectionType, Language } from './types';
import { t } from './localization';
import { Menu, X, Globe, ChevronDown, ShieldCheck, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import SectionHero from './components/SectionHero';
import SectionSummary from './components/SectionSummary';
import SectionMatrix from './components/SectionMatrix';
import SectionPigeonPea from './components/SectionPigeonPea';
import SectionStrategy from './components/SectionStrategy';
import SectionLogistics from './components/SectionLogistics';
import SectionDirectory from './components/SectionDirectory';
import SectionFAQ from './components/SectionFAQ';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showDevBanner, setShowDevBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'sw', label: 'Kiswahili', flag: '🇰🇪' },
    { code: 'pt', label: 'Português', flag: '🇦🇴' },
    { code: 'ar', label: 'العربية', flag: '🇪🇬' },
  ];

  const renderContent = () => {
    switch(activeSection) {
      case SectionType.HOME:
        return <SectionHero onStart={() => setActiveSection(SectionType.SUMMARY)} lang={language} />;
      case SectionType.SUMMARY:
        return <SectionSummary lang={language} />;
      case SectionType.MATRIX:
        return <SectionMatrix lang={language} />;
      case SectionType.PIGEON_PEA:
        return <SectionPigeonPea lang={language} />;
      case SectionType.STRATEGY:
        return <SectionStrategy lang={language} />;
      case SectionType.LOGISTICS:
        return <SectionLogistics lang={language} />;
      case SectionType.VETTING_PORTFOLIO:
        return <SectionDirectory lang={language} />;
      case SectionType.FAQ:
        return <SectionFAQ lang={language} />;
      default:
        return <SectionHero onStart={() => setActiveSection(SectionType.SUMMARY)} lang={language} />;
    }
  };

  const getNavLabel = (id: SectionType) => {
    switch (id) {
      case SectionType.HOME: return t(language, 'nav', 'home');
      case SectionType.SUMMARY: return t(language, 'nav', 'summary');
      case SectionType.MATRIX: return t(language, 'nav', 'matrix');
      case SectionType.PIGEON_PEA: return t(language, 'nav', 'pigeon');
      case SectionType.STRATEGY: return t(language, 'nav', 'strategy');
      case SectionType.LOGISTICS: return t(language, 'nav', 'logistics');
      case SectionType.VETTING_PORTFOLIO: return t(language, 'nav', 'vetting');
      case SectionType.FAQ: return t(language, 'nav', 'faq');
      default: return '';
    }
  };

  return (
    <div className={`min-h-screen bg-[#F2F2F2] text-[#1A1A1A] selection:bg-warmGold selection:text-white ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Development Banner Pop-up */}
      <AnimatePresence>
        {showDevBanner && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-charcoal/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-gray-100 text-center relative"
            >
              <div className="w-16 h-16 bg-warmGold/10 text-warmGold rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4 font-serif">Platform Under Development</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Welcome to the AfricanThaiTrade Nexus. Please note that this platform is currently undergoing major technical development. Some features and data points are being updated for 2025 accuracy. Thank you for your patience.
              </p>
              <button 
                onClick={() => setShowDevBanner(false)}
                className="w-full py-4 bg-lake text-white font-bold rounded-xl hover:bg-charcoal transition-colors shadow-lg"
              >
                I Understand
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <div className={`p-2 rounded-lg transition-colors bg-lake text-white shadow-sm`}>
              <ShieldCheck size={24} />
            </div>
            <span className={`font-serif font-bold text-lg tracking-wide text-charcoal ${language === 'ar' ? 'font-arabic' : ''}`}>
              AfricanThai<span className="text-warmGold">Trade</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
             {NAV_ITEMS.map((item) => {
               const isActive = activeSection === item.id;
               let textColor = 'text-gray-500 hover:text-lake'; 
               if (isActive) textColor = 'text-lake font-bold bg-lake/5';

               return (
                 <button
                   key={item.id}
                   onClick={() => setActiveSection(item.id)}
                   className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${textColor} ${language === 'ar' ? 'font-arabic font-bold' : ''}`}
                 >
                   {getNavLabel(item.id)}
                 </button>
               )
             })}
          </div>

          <div className="flex items-center gap-4">
             {/* Language Switcher */}
             <div className="relative">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <span>{languages.find(l => l.code === language)?.flag}</span>
                  <span className="hidden md:inline">{languages.find(l => l.code === language)?.code.toUpperCase()}</span>
                  <ChevronDown size={14} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 w-40 overflow-hidden z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${language === lang.code ? 'bg-lake/5 text-lake font-bold' : 'text-gray-600'}`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className={lang.code === 'ar' ? 'font-arabic' : ''}>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>

             {/* Mobile Menu Toggle */}
             <button 
               className={`lg:hidden p-2 text-charcoal`}
               onClick={() => setIsMenuOpen(!isMenuOpen)}
             >
               {isMenuOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 bg-white shadow-xl z-40 overflow-hidden lg:hidden"
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
                  <span className={language === 'ar' ? 'font-arabic' : ''}>{getNavLabel(item.id)}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

      {activeSection !== SectionType.HOME && (
        <footer className="bg-charcoal text-gray-400 py-12 px-6 border-t-4 border-lake">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h4 className={`text-white text-xl font-bold mb-2 ${language === 'ar' ? 'font-arabic' : 'font-serif'}`}>AfricanThaiTrade Nexus</h4>
                <p className="text-sm max-w-md">Neutral middle-party corridor governance and institutional sourcing between Thailand and Africa.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-center md:text-right">
                <span>© 2025 AfricanThaiTrade Nexus. All Rights Reserved.</span>
                <span className="hover:text-warmGold cursor-pointer">Compliance Policy</span>
              </div>
           </div>
        </footer>
      )}
    </div>
  );
};

export default App;