import React from 'react';
import { motion } from 'framer-motion';
import AfricanPattern from './AfricanPattern';
import { Language } from '../types';
import { t } from '../localization';
import { ShieldCheck, Search, FileText } from 'lucide-react';

const SectionHero: React.FC<{ onStart: () => void; lang: Language }> = ({ onStart, lang }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutralGrey text-charcoal">
      
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/thai2africa.webp" 
            alt="AfricanThaiTrade Connectivity Map" 
            className="w-full h-full object-cover object-center"
         />
      </div>

      {/* 2. White Faded Blur Overlay */}
      <div className="absolute inset-0 z-0 bg-white/75 backdrop-blur-[4px]"></div>

      {/* Pattern Overlay */}
      <AfricanPattern className="opacity-5 z-0 mix-blend-multiply" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-lake font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            {t(lang, 'hero', 'subtitle')}
          </h2>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight text-charcoal ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
            {t(lang, 'hero', 'title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
             {t(lang, 'hero', 'desc')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStart}
              className="bg-warmGold text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-lake transition-colors duration-300 border border-white/20"
            >
              {t(lang, 'hero', 'cta')}
            </motion.button>
          </div>

          {/* Process-at-a-glance Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-charcoal/10 pt-10">
              <div className="flex items-center md:flex-col gap-4 md:text-center p-4 bg-white/50 rounded-2xl border border-white/50 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-lake rounded-xl flex items-center justify-center text-white shrink-0">
                    <Search size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">{t(lang, 'hero', 'process_1')}</h3>
                    <p className="text-xs text-gray-500">{t(lang, 'hero', 'process_1_desc')}</p>
                  </div>
              </div>

              <div className="flex items-center md:flex-col gap-4 md:text-center p-4 bg-white/50 rounded-2xl border border-white/50 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-warmGold rounded-xl flex items-center justify-center text-white shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">{t(lang, 'hero', 'process_2')}</h3>
                    <p className="text-xs text-gray-500">{t(lang, 'hero', 'process_2_desc')}</p>
                  </div>
              </div>

              <div className="flex items-center md:flex-col gap-4 md:text-center p-4 bg-white/50 rounded-2xl border border-white/50 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-deepGreen rounded-xl flex items-center justify-center text-white shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">{t(lang, 'hero', 'process_3')}</h3>
                    <p className="text-xs text-gray-500">{t(lang, 'hero', 'process_3_desc')}</p>
                  </div>
              </div>
          </div>

        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#F2F2F2] to-transparent"></div>
    </div>
  );
};

export default SectionHero;