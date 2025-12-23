import React, { useState } from 'react';
import { Bean, TrendingUp, Truck, ShoppingBag, ArrowRight, Search, MapPin, Phone, Briefcase, Lightbulb, ChevronRight, Info } from 'lucide-react';
import { THAI_BUYERS_DIRECTORY, PIGEON_PEA_IMAGES, PIGEON_PEA_INTEL } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { t } from '../localization';

const SectionPigeonPea: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeTabId, setActiveTabId] = useState(PIGEON_PEA_INTEL[0].id);

  return (
    <div className="py-16 md:py-24 px-6 bg-deepGreen text-white relative overflow-hidden min-h-screen">
      {/* Pattern Background Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-12 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-3 text-warmGold mb-2">
               <Bean size={20} />
               <span className="uppercase tracking-widest text-sm font-bold">{t(lang, 'pigeon', 'tag')}</span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
              {t(lang, 'pigeon', 'title')} <br/><span className="text-white/50">{t(lang, 'pigeon', 'subtitle')}</span>
            </h2>
            
            {/* 1. Introductory Intelligence Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-md">
               <h3 className="flex items-center gap-2 text-warmGold font-bold text-lg mb-3">
                  <Info size={20} /> Executive Intelligence Summary
               </h3>
               <p className="text-lg text-gray-200 leading-relaxed font-light">
                 {t(lang, 'pigeon', 'intro_summary')}
               </p>
            </div>

            {/* Intro Paragraph Quote */}
            <div className={`bg-white/10 p-4 rounded-lg border-warmGold text-sm text-gray-200 italic max-w-2xl ${lang === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
                "{t(lang, 'pigeon', 'intro_quote')}"
            </div>
          </div>
          <div className="mt-8 lg:mt-0 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 min-w-[250px]">
             <div className="text-sm text-gray-300 mb-1">Malawi Export Value (2023)</div>
             <div className="text-4xl font-bold text-warmGold">USD 31.6M</div>
             <div className="text-xs text-gray-400 mt-2">Source: Tridge / UN COMTRADE</div>
          </div>
        </div>

        {/* 4. Visual Enhancement - Controlled Images with captions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           <div className="flex flex-col gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group">
                 <img 
                   src={PIGEON_PEA_IMAGES[0].url} 
                   alt={PIGEON_PEA_IMAGES[0].alt} 
                   className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-[10px] text-gray-300 font-mono">{PIGEON_PEA_IMAGES[0].credit}</p>
                 </div>
              </div>
              <p className="text-sm text-gray-400 italic text-center px-4">
                "High-yield pigeon pea pods: The foundation of the Thailand-Africa agri-corridor for non-GMO protein sourcing."
              </p>
           </div>
           <div className="flex flex-col gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group">
                 <img 
                   src={PIGEON_PEA_IMAGES[1].url} 
                   alt={PIGEON_PEA_IMAGES[1].alt} 
                   className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-[10px] text-gray-300 font-mono">{PIGEON_PEA_IMAGES[1].credit}</p>
                 </div>
              </div>
              <p className="text-sm text-gray-400 italic text-center px-4">
                "Seamless intermodal logistics architecture: Required to bridge the gap between African origins and Thai industrial processors."
              </p>
           </div>
        </div>

        {/* 2. Information Architecture (Categorization Only) */}
        <div className="mb-20">
           <h3 className={`text-2xl md:text-3xl font-bold mb-10 text-center ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'pigeon', 'deep_dive')}</h3>
           
           <div className="flex flex-wrap justify-center gap-4 mb-10">
              {PIGEON_PEA_INTEL.map((tab) => {
                 const isActive = activeTabId === tab.id;
                 return (
                   <button 
                     key={tab.id}
                     onClick={() => setActiveTabId(tab.id)}
                     className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${isActive ? 'bg-warmGold text-charcoal shadow-lg scale-105' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
                   >
                     <tab.icon size={18} />
                     {tab.label}
                   </button>
                 )
              })}
           </div>

           <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm min-h-[450px]">
              <AnimatePresence mode="wait">
                {PIGEON_PEA_INTEL.map((tab) => (
                   tab.id === activeTabId && (
                     <motion.div
                       key={tab.id}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="grid grid-cols-1 gap-8"
                     >
                        {tab.sections.map((section, sIdx) => (
                           <div key={sIdx} className="border-b border-white/5 last:border-0 pb-8 last:pb-0">
                              <h4 className="text-xl font-bold text-warmGold mb-4 flex items-center gap-3">
                                 <div className="w-2 h-2 bg-warmGold rounded-full"></div>
                                 {section.title}
                              </h4>
                              <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line text-lg font-light">{section.content}</p>
                              {section.listItems && (
                                 <ul className={`space-y-3 mt-4 ${lang === 'ar' ? 'pr-4 border-r-2' : 'pl-4 border-l-2'} border-white/10`}>
                                    {section.listItems.map((item, i) => (
                                       <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                          <ChevronRight size={14} className={`mt-1 shrink-0 text-lake ${lang === 'ar' ? 'rotate-180' : ''}`} />
                                          {item}
                                       </li>
                                    ))}
                                 </ul>
                              )}
                           </div>
                        ))}
                     </motion.div>
                   )
                ))}
              </AnimatePresence>
           </div>
        </div>

        {/* Directory preserved as is */}
        <div className="space-y-8">
           <div className="flex items-center justify-between">
              <h3 className={`text-2xl md:text-3xl font-bold ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'pigeon', 'directory_title')}</h3>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-300 bg-white/10 px-4 py-2 rounded-full">
                 <MapPin size={16} /> Based in Bangkok/Central Thailand
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {THAI_BUYERS_DIRECTORY.map((buyer, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 text-charcoal hover:shadow-2xl transition-all duration-300 group">
                   <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg text-lake leading-tight group-hover:text-deepGreen transition-colors">
                        {buyer.name}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded text-gray-500 shrink-0 ml-2">
                        {buyer.type}
                      </span>
                   </div>
                   <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                      <div className="w-2 h-2 bg-warmGold rounded-full"></div>
                      {buyer.focus}
                   </div>
                   <div className="bg-neutralGrey p-4 rounded-lg space-y-2 mb-4 border border-gray-200 text-sm">
                      <div className="flex items-start gap-2 text-gray-600">
                         <Briefcase size={14} className="mt-1 shrink-0 text-gray-400" />
                         <span>{buyer.note}</span>
                      </div>
                      {buyer.phone && (
                        <div className="flex items-center gap-2 text-gray-600 font-mono">
                           <Phone size={14} className="shrink-0 text-gray-400" />
                           <span>{buyer.phone}</span>
                        </div>
                      )}
                      {buyer.address && (
                        <div className="flex items-start gap-2 text-gray-600">
                           <MapPin size={14} className="mt-1 shrink-0 text-gray-400" />
                           <span className="leading-tight text-xs">{buyer.address}</span>
                        </div>
                      )}
                   </div>
                   <div className="flex items-start gap-2 text-sm bg-lake/5 p-3 rounded border border-lake/10">
                      <Lightbulb size={16} className="text-lake shrink-0 mt-0.5" />
                      <p className="text-charcoal/80 italic">{buyer.approach}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default SectionPigeonPea;