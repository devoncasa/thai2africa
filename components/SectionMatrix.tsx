import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../constants';
import { CheckCircle, Info, Target, Target as ArchetypeIcon, BookOpen, Layers, BarChart4, ClipboardList, ShieldAlert, ChevronRight, TrendingUp, Users } from 'lucide-react';
import { Language } from '../types';
import { t } from '../localization';

const SectionMatrix: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState(PRODUCT_CATEGORIES[0].id);
  const [activeTab, setActiveTab] = useState<'logic' | 'context' | 'archetypes' | 'opps' | 'specs'>('logic');

  const activeData = PRODUCT_CATEGORIES.find(c => c.id === activeCategory) || PRODUCT_CATEGORIES[0];

  return (
    <div className="bg-white py-16 md:py-24 relative overflow-hidden min-h-screen">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neutralGrey to-white z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold text-charcoal mb-6 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'matrix', 'title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-4">
            {t(lang, 'matrix', 'subtitle')}
          </p>
          <div className="max-w-3xl mx-auto bg-lake/5 border border-lake/10 rounded-xl p-4 text-sm text-lake/90 leading-relaxed font-medium">
             <Info className="inline-block w-4 h-4 mr-2 mb-0.5" />
             {t(lang, 'matrix', 'info_box')}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Menu - Enhanced with overflow handling */}
          <div className="lg:w-1/4 flex flex-col gap-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 pl-4">{t(lang, 'matrix', 'categories')}</h3>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-0 pr-0 lg:pr-2 lg:max-h-[800px] scrollbar-thin scrollbar-thumb-gray-200">
              {PRODUCT_CATEGORIES.map((cat) => {
                const Icon = cat.icon || Layers;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setActiveTab('logic');
                    }}
                    className={`text-left px-5 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 group border whitespace-nowrap lg:whitespace-normal ${
                      isActive 
                        ? 'bg-charcoal text-white border-charcoal shadow-lg scale-105 z-10' 
                        : 'bg-white text-gray-600 border-transparent hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} className={isActive ? 'text-warmGold' : 'text-gray-400 group-hover:text-lake'} />
                    <span className="font-medium text-sm md:text-base">{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-2xl h-full relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-gray-100 gap-6">
                   <div className="flex items-center gap-5">
                      <div className="p-4 bg-neutralGrey rounded-2xl shadow-sm">
                        {activeData.icon && <activeData.icon className="text-lake w-8 h-8" />}
                      </div>
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-bold text-charcoal ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{activeData.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-[10px] font-bold bg-warmGold/10 text-warmGold px-3 py-1 rounded-full uppercase tracking-widest">{t(lang, 'matrix', 'high_potential')}</span>
                          <span className="text-[10px] font-bold bg-deepGreen/10 text-deepGreen px-3 py-1 rounded-full uppercase tracking-widest">{t(lang, 'matrix', 'export_ready')}</span>
                        </div>
                      </div>
                   </div>
                   <div className="bg-neutralGrey px-4 py-2 rounded-xl text-xs font-bold text-gray-400 border border-gray-200">
                      HS CODE RANGE: {activeData.topItems[0].hsCode || 'VARIOUS'}
                   </div>
                </div>

                {/* Multi-Tab Dynamic Nav */}
                <div className="flex flex-wrap gap-1 mb-10 bg-gray-100 p-1 rounded-2xl w-fit">
                  <button onClick={() => setActiveTab('logic')} className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'logic' ? 'bg-white text-lake shadow-md' : 'text-gray-500 hover:text-gray-700'}`}>
                    <BarChart4 size={14} /> Market Logic
                  </button>
                  <button onClick={() => setActiveTab('context')} className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'context' ? 'bg-white text-lake shadow-md' : 'text-gray-500 hover:text-gray-700'}`}>
                    <Info size={14} /> Sourcing Context
                  </button>
                  <button onClick={() => setActiveTab('archetypes')} className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'archetypes' ? 'bg-white text-lake shadow-md' : 'text-gray-500 hover:text-gray-700'}`}>
                    <Users size={14} /> Buyer Archetypes
                  </button>
                  <button onClick={() => setActiveTab('opps')} className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'opps' ? 'bg-white text-lake shadow-md' : 'text-gray-500 hover:text-gray-700'}`}>
                    <Target size={14} /> Opportunities
                  </button>
                  <button onClick={() => setActiveTab('specs')} className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === 'specs' ? 'bg-white text-lake shadow-md' : 'text-gray-500 hover:text-gray-700'}`}>
                    <ClipboardList size={14} /> Tech Specs
                  </button>
                </div>

                {/* Tab Content Rendering */}
                <div className="min-h-[500px]">
                  {activeData.topItems.map((item, idx) => (
                    <div key={idx} className="space-y-10">
                      
                      {activeTab === 'logic' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-6">
                             <div className="bg-lake/5 p-8 rounded-3xl border border-lake/10">
                                <h4 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                                  <TrendingUp size={20} className="text-lake"/> 2024-2025 Corridor Dynamics
                                </h4>
                                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                                  {item.marketLogic2025}
                                </p>
                             </div>
                             <div className="p-4 bg-neutralGrey rounded-2xl border border-gray-200">
                                <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Institutional Insight</h5>
                                <p className="text-xs text-gray-500 leading-relaxed italic">"Thai-origin products in this sector are currently favored by African ministries for their reliability during domestic supply gluts."</p>
                             </div>
                          </div>
                          <div className="bg-neutralGrey rounded-3xl border border-gray-200 flex flex-col items-center justify-center aspect-square group shadow-inner">
                             <img src="https://placehold.co/400x400/2A6F97/FFFFFF?text=Category+Growth" alt="Growth chart" className="w-full h-auto opacity-30 group-hover:opacity-60 transition-opacity rounded-3xl" />
                             <p className="text-[10px] font-bold text-lake uppercase tracking-widest absolute px-6 text-center">[Image Placeholder: Market Concentration Chart - 1:1]</p>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'context' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                          <div className="bg-neutralGrey p-8 rounded-3xl border border-gray-200">
                             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                               <h4 className="text-2xl font-bold text-charcoal">{item.name}</h4>
                               {item.hsCode && <span className="text-xs font-mono bg-charcoal text-white px-3 py-1.5 rounded-lg shadow-sm">HS: {item.hsCode}</span>}
                             </div>
                             <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                               {item.context}
                             </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                             {[1,2,3].map(i => (
                               <div key={i} className="aspect-video bg-gray-100 rounded-xl border border-gray-200 flex flex-col items-center justify-center">
                                  <p className="text-[8px] font-bold text-gray-400 uppercase">Product Variant {i}</p>
                                  <p className="text-[6px] text-gray-300">Placeholder</p>
                               </div>
                             ))}
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'archetypes' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {item.archetypes.map((archetype, bIdx) => (
                              <div key={bIdx} className="border border-gray-200 p-8 rounded-3xl bg-white hover:border-lake/30 hover:shadow-xl transition-all flex flex-col h-full relative group overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                   <Users size={64} className="text-lake" />
                                </div>
                                <h5 className="font-bold text-lake text-lg mb-3">{archetype.title}</h5>
                                <p className="text-sm text-gray-600 mb-6 flex-grow italic">"{archetype.description}"</p>
                                <div className="space-y-4">
                                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Decision Triggers</div>
                                   <div className="flex flex-wrap gap-2">
                                      {archetype.requirements.map((req, rIdx) => (
                                        <span key={rIdx} className="text-[10px] px-3 py-1 bg-gray-100 rounded-lg text-gray-600 font-bold">{req}</span>
                                      ))}
                                   </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-xs">
                                   <span className="text-gray-400 font-bold uppercase tracking-widest">Target Requisition</span>
                                   <span className="font-mono font-bold text-charcoal bg-neutralGrey px-2 py-1 rounded">{archetype.volumeTarget}</span>
                                </div>
                              </div>
                           ))}
                        </motion.div>
                      )}

                      {activeTab === 'opps' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                           <div className="bg-deepGreen/5 p-8 rounded-3xl border border-deepGreen/10">
                              <h5 className="flex items-center gap-2 text-deepGreen font-bold mb-6 text-lg">
                                <CheckCircle size={22} /> Thai Production Edge
                              </h5>
                              <ul className="space-y-4">
                                {item.pros.map((pro, i) => (
                                  <li key={i} className="text-sm text-gray-700 flex items-start gap-3">
                                    <div className="w-2 h-2 bg-deepGreen rounded-full mt-2 shrink-0 shadow-sm" />
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                           </div>
                           <div className="bg-maroon/5 p-8 rounded-3xl border border-maroon/10">
                              <h5 className="flex items-center gap-2 text-maroon font-bold mb-6 text-lg">
                                <ShieldAlert size={22} /> Risk Mitigation
                              </h5>
                              <ul className="space-y-4">
                                {item.cons.map((con, i) => (
                                  <li key={i} className="text-sm text-gray-700 flex items-start gap-3">
                                    <div className="w-2 h-2 bg-maroon rounded-full mt-2 shrink-0 shadow-sm" />
                                    {con}
                                  </li>
                                ))}
                              </ul>
                           </div>
                        </motion.div>
                      )}

                      {activeTab === 'specs' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                           <div className="bg-charcoal text-white p-10 md:p-14 rounded-[40px] relative overflow-hidden border-b-8 border-lake">
                              <div className="relative z-10">
                                 <h4 className="text-warmGold font-bold text-2xl mb-8 flex items-center gap-3">
                                   <BookOpen size={28} /> Export Compliance Framework
                                 </h4>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-gray-300">
                                    <div className="space-y-4">
                                       <div className="font-bold text-white uppercase tracking-widest text-xs flex items-center gap-2">
                                          <ChevronRight className="text-warmGold" size={16} /> Packaging & Standardization
                                       </div>
                                       <p className="leading-relaxed">Consignments are release-vetted for multi-layered humidity protection. Neutral corrugated outer-pack with heat-treated ISPM-15 pallets is mandatory for all African ports. Labelling must reflect SONCAP/PVOC consistency.</p>
                                    </div>
                                    <div className="space-y-4">
                                       <div className="font-bold text-white uppercase tracking-widest text-xs flex items-center gap-2">
                                          <ChevronRight className="text-warmGold" size={16} /> Technical Audit Lifecycle
                                       </div>
                                       <p className="leading-relaxed">We coordinate 3rd-party batch analysis (SGS/Bureau Veritas) directly from Thai factory gates. Institutional partners receive the pre-shipment report before the L/C is triggered, ensuring 100% technical alignment.</p>
                                    </div>
                                 </div>
                                 <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <p className="text-xs text-gray-500 max-w-md">Our trade desk manages the interface between Thai industrial testing (TIS) and African regulatory requirements.</p>
                                    <button className="px-10 py-5 bg-warmGold text-charcoal font-bold rounded-2xl hover:bg-white hover:scale-105 transition-all text-sm flex items-center gap-3 shadow-2xl">
                                       Request Technical Audit <ArchetypeIcon size={18} />
                                    </button>
                                 </div>
                              </div>
                              <div className="absolute top-0 right-0 p-8 opacity-5">
                                 <ClipboardList size={200} />
                              </div>
                           </div>
                        </motion.div>
                      )}

                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMatrix;