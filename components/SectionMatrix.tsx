import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../constants';
import { CheckCircle, XCircle, ChevronRight, Building2, TrendingUp, Info, MessageCircle, Lightbulb, Globe, Phone, Mail, MapPin, ExternalLink, Calendar, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { t } from '../localization';

const SectionMatrix: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState(PRODUCT_CATEGORIES[0].id);
  const [activeTab, setActiveTab] = useState<'overview' | 'buyers'>('overview');

  const activeData = PRODUCT_CATEGORIES.find(c => c.id === activeCategory) || PRODUCT_CATEGORIES[0];

  return (
    <div className="bg-white py-16 md:py-24 relative overflow-hidden min-h-screen">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neutralGrey to-white z-0"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-lake/5 rounded-full blur-3xl z-0"></div>

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
          {/* Sidebar Menu */}
          <div className="lg:w-1/4 flex flex-col gap-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 pl-4">{t(lang, 'matrix', 'categories')}</h3>
            <div className="flex flex-col gap-2 overflow-y-auto pr-2 max-h-[600px] scrollbar-thin">
              {PRODUCT_CATEGORIES.map((cat) => {
                const Icon = cat.icon || ChevronRight;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setActiveTab('overview');
                    }}
                    className={`text-left px-5 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 group border ${
                      isActive 
                        ? 'bg-charcoal text-white border-charcoal shadow-lg scale-105' 
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
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                   <div className="flex items-center gap-5">
                      <div className="p-4 bg-neutralGrey rounded-2xl">
                        {activeData.icon && <activeData.icon className="text-lake w-8 h-8" />}
                      </div>
                      <div>
                        <h3 className={`text-3xl font-bold text-charcoal ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{activeData.title}</h3>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs font-bold bg-warmGold/10 text-warmGold px-3 py-1 rounded-full">{t(lang, 'matrix', 'high_potential')}</span>
                          <span className="text-xs font-bold bg-deepGreen/10 text-deepGreen px-3 py-1 rounded-full">{t(lang, 'matrix', 'export_ready')}</span>
                        </div>
                      </div>
                   </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'overview' ? 'bg-white text-lake shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    {t(lang, 'matrix', 'tab_overview')}
                  </button>
                  <button 
                    onClick={() => setActiveTab('buyers')}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'buyers' ? 'bg-white text-lake shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    {t(lang, 'matrix', 'tab_buyers')}
                  </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                  {activeData.topItems.map((item, idx) => (
                    <div key={idx} className="space-y-6">
                      
                      {activeTab === 'overview' && (
                        <motion.div 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div className="bg-lake/5 p-6 rounded-xl border border-lake/10">
                            <h4 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                              <Info size={20} className="text-lake"/> {item.name}
                            </h4>
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line space-y-4 text-sm md:text-base">
                              {item.context}
                            </div>
                            <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-lake/10">
                               {item.statHighlight && (
                                 <div className="bg-white px-4 py-2 rounded shadow-sm border border-lake/20">
                                   <span className="block text-xs text-gray-400 font-bold uppercase">Volume/Value</span>
                                   <span className="text-lake font-bold">{item.statHighlight}</span>
                                 </div>
                               )}
                               {item.priceSignal && (
                                 <div className="bg-white px-4 py-2 rounded shadow-sm border border-warmGold/20">
                                   <span className="block text-xs text-gray-400 font-bold uppercase">Price Signal</span>
                                   <span className="text-warmGold font-bold">{item.priceSignal}</span>
                                 </div>
                               )}
                            </div>
                          </div>

                          {/* Category Images */}
                          {item.images && item.images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {item.images.map((img, imgIdx) => (
                                <div key={imgIdx} className="rounded-lg overflow-hidden relative aspect-video group">
                                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                                    <p className="text-[10px] text-gray-300 truncate">{img.credit}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="flex items-center gap-2 text-deepGreen font-bold mb-4 border-b border-gray-100 pb-2">
                                <CheckCircle size={18} /> {t(lang, 'matrix', 'comp_adv')}
                              </h5>
                              <ul className="space-y-3">
                                {item.pros.map((pro, i) => (
                                  <li key={i} className="text-sm text-gray-700 flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                                    <span className="w-1.5 h-1.5 bg-deepGreen rounded-full mt-1.5 shrink-0"></span>
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="flex items-center gap-2 text-maroon font-bold mb-4 border-b border-gray-100 pb-2">
                                <XCircle size={18} /> {t(lang, 'matrix', 'risks')}
                              </h5>
                              <ul className="space-y-3">
                                {item.cons.map((con, i) => (
                                  <li key={i} className="text-sm text-gray-700 flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                                    <span className="w-1.5 h-1.5 bg-maroon rounded-full mt-1.5 shrink-0"></span>
                                    {con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'buyers' && (
                        <motion.div 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }}
                          className="space-y-6"
                        >
                          <div className="bg-charcoal text-white p-6 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                              <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                                <Building2 className="text-warmGold" /> {t(lang, 'matrix', 'active_leads')}
                              </h4>
                              <p className="text-gray-300 text-sm">
                                Curated list of verified importers and distributors for {activeData.title}.
                              </p>
                            </div>
                            <div className="bg-white/10 px-4 py-2 rounded-lg text-xs font-mono text-gray-300 border border-white/20">
                               {item.targetBuyers.length} {t(lang, 'matrix', 'leads_found')}
                            </div>
                          </div>

                          {/* Top Priority Section if any */}
                          {item.targetBuyers.some(b => b.isPriority) && (
                              <div className="mb-6">
                                <h5 className="text-sm font-bold text-lake uppercase tracking-widest mb-4 flex items-center gap-2">
                                   <div className="w-2 h-2 bg-lake rounded-full animate-pulse"></div> Top Priority Targets
                                </h5>
                                <div className="grid grid-cols-1 gap-4">
                                   {item.targetBuyers.filter(b => b.isPriority).map((buyer, pIdx) => (
                                       <div key={pIdx} className="bg-lake/5 border border-lake/20 p-5 rounded-xl flex flex-col md:flex-row gap-6">
                                           <div className="flex-1">
                                              <div className="flex items-center gap-3 mb-1">
                                                 <h4 className="font-bold text-lg text-charcoal">{buyer.name}</h4>
                                                 {buyer.country && <span className="text-[10px] font-bold px-2 py-1 bg-white rounded border border-gray-200">{buyer.country}</span>}
                                                 {buyer.website && (
                                                    <a href={buyer.website} target="_blank" rel="noopener noreferrer" className="text-lake hover:text-deepGreen">
                                                       <ExternalLink size={14} />
                                                    </a>
                                                 )}
                                              </div>
                                              <p className="text-sm text-gray-600 font-medium mb-2">{buyer.type}</p>
                                              <p className="text-sm text-gray-500 leading-relaxed">{buyer.note}</p>
                                              
                                              {buyer.products && (
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                   {buyer.products.map((prod, idx) => (
                                                      <span key={idx} className="text-[10px] px-2 py-0.5 bg-white rounded border border-gray-200 text-gray-500">{prod}</span>
                                                   ))}
                                                </div>
                                              )}
                                           </div>
                                           
                                           <div className={`md:w-1/3 border-t md:border-t-0 pt-4 md:pt-0 flex flex-col gap-3 text-sm ${lang === 'ar' ? 'md:border-r md:pr-6 border-lake/10' : 'md:border-l md:pl-6 border-lake/10'}`}>
                                              <div className="font-bold text-lake text-xs uppercase mb-1">{t(lang, 'matrix', 'contact_intel')}</div>
                                              {buyer.contactPerson && <div className="flex gap-2 text-gray-600"><Building2 size={14} className="shrink-0 mt-0.5"/> {buyer.contactPerson}</div>}
                                              {buyer.email && <div className="flex gap-2 text-gray-600"><Mail size={14} className="shrink-0 mt-0.5"/> {buyer.email}</div>}
                                              {buyer.phone && <div className="flex gap-2 text-gray-600"><Phone size={14} className="shrink-0 mt-0.5"/> {buyer.phone}</div>}
                                              {buyer.lastVerified && <div className="flex gap-2 text-green-600 text-xs mt-1"><Calendar size={12} className="shrink-0 mt-0.5"/> Verified: {buyer.lastVerified}</div>}
                                           </div>
                                       </div>
                                   ))}
                                </div>
                              </div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.targetBuyers.filter(b => !b.isPriority).map((buyer, bIdx) => (
                              <div key={bIdx} className="border border-gray-200 p-5 rounded-xl hover:border-gray-300 transition-colors bg-gray-50 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-2">
                                  <div className="flex items-center gap-2">
                                     <h5 className="font-bold text-base text-charcoal leading-tight">{buyer.name}</h5>
                                     {buyer.website && <a href={buyer.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lake"><ExternalLink size={12} /></a>}
                                  </div>
                                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded border border-gray-200 text-gray-500 shrink-0 ml-2">
                                    {buyer.country || buyer.type}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-500 mb-1">{buyer.type}</p>
                                <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{buyer.note}</p>
                                
                                <div className="space-y-1 mb-3">
                                   {buyer.email && <div className="text-xs text-gray-500 flex gap-2"><Mail size={12} className="shrink-0"/> {buyer.email}</div>}
                                   {buyer.phone && <div className="text-xs text-gray-500 flex gap-2"><Phone size={12} className="shrink-0"/> {buyer.phone}</div>}
                                </div>

                                {buyer.approach && (
                                  <div className="mt-auto pt-3 border-t border-gray-100">
                                     <p className="text-xs text-charcoal/70 italic">"<span className="font-bold text-warmGold">Tip:</span> {buyer.approach}"</p>
                                  </div>
                                )}
                                
                                <div className="mt-2 pt-2 border-t border-dashed border-gray-200">
                                   <p className="text-[10px] text-gray-400 truncate">Source: {buyer.sources?.[0] || 'Public Directory'}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8 p-4 bg-gray-100 rounded-lg border border-gray-200 text-xs text-gray-500 flex gap-3 items-start">
                             <ShieldAlert size={16} className="shrink-0 text-gray-400" />
                             <p>
                               <strong>Disclaimer:</strong> Leads compiled from public sources (websites, directories, registries). 
                               Verify compliance with local data privacy (POPIA in South Africa) and outreach laws before contacting. 
                               Contact details may have changed since last verification.
                             </p>
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