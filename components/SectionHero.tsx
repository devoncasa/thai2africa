import React from 'react';
import { motion } from 'framer-motion';
import AfricanPattern from './AfricanPattern';

const SectionHero: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutralGrey text-charcoal">
      
      {/* 1. Background Image (Full Cover) */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/thai2africa.webp" 
            alt="Thai-Africa Trade Nexus Map" 
            className="w-full h-full object-cover object-center"
         />
      </div>

      {/* 2. White Faded Blur Overlay (Readability Layer) */}
      <div className="absolute inset-0 z-0 bg-white/75 backdrop-blur-[4px]"></div>

      {/* Pattern Overlay (Subtle Texture) */}
      <AfricanPattern className="opacity-5 z-0 mix-blend-multiply" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-lake font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Trade Intelligence Report 2024-2025
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-charcoal">
            Discover <span className="text-warmGold drop-shadow-sm">Malawi</span> <br />
            The Warm Heart of Africa
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
             A strategic analysis of trade opportunities between Thailand, South Africa, and Malawi.
             Unlocking potential in Agriculture, Automotive, and Processed Goods.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="bg-warmGold text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-lake transition-colors duration-300 mb-12 border border-white/20"
          >
            Explore Analysis
          </motion.button>

          {/* Presentation / Signature Block */}
          <div className="mt-8 pt-8 border-t border-charcoal/10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-lake uppercase mb-2 opacity-80">Presented By</p>
                  <h3 className="font-serif text-xl text-charcoal">Kris Laohasiri</h3>
                  <p className="text-xs text-gray-500 mt-1">Thailand Trade Representative</p>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-charcoal/20 to-transparent"></div>
              <div className="md:hidden w-12 h-px bg-gradient-to-r from-transparent via-charcoal/20 to-transparent"></div>

              <div className="text-center">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-lake uppercase mb-2 opacity-80">Prepared For</p>
                  <h3 className="font-serif text-xl text-charcoal">Mr. Lakmal</h3>
                  <p className="text-xs text-gray-500 mt-1">Malawi Trade Strategy</p>
              </div>
          </div>

        </motion.div>
      </div>

      {/* Bottom Gradient Blend (Seamless transition to next section) */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#F2F2F2] to-transparent"></div>
    </div>
  );
};

export default SectionHero;