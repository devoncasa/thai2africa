import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, ShieldCheck, AlertTriangle, CheckCircle, Map, Info, Compass, Anchor } from 'lucide-react';
import { LOGISTICS_ROUTES, REGULATORY_DATA } from '../constants';
import { Language } from '../types';
import { t } from '../localization';

const SectionLogistics: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'routes' | 'regs'>('routes');

  return (
    <div className="bg-neutralGrey py-16 md:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <h2 className={`text-3xl md:text-5xl font-bold text-charcoal mb-6 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'logistics', 'title')}</h2>
           <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
             Efficiently navigating the Thailand-Africa corridor requires more than freight booking. We coordinate multimodal infrastructure—from Laem Chabang's automation to the inland rail corridors of Southern and East Africa.
           </p>
        </div>

        {/* Tab Nav */}
        <div className="flex justify-center mb-16">
           <div className="bg-white p-1.5 rounded-2xl shadow-sm inline-flex border border-gray-200">
              <button 
                onClick={() => setActiveTab('routes')}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'routes' ? 'bg-lake text-white shadow-lg scale-105' : 'text-gray-500 hover:text-lake'}`}
              >
                <Compass size={20} /> {t(lang, 'logistics', 'tab_routes')}
              </button>
              <button 
                onClick={() => setActiveTab('regs')}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'regs' ? 'bg-lake text-white shadow-lg scale-105' : 'text-gray-500 hover:text-lake'}`}
              >
                <ShieldCheck size={20} /> {t(lang, 'logistics', 'tab_regs')}
              </button>
           </div>
        </div>

        <AnimatePresence mode='wait'>
          {activeTab === 'routes' ? (
             <motion.div 
               key="routes"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="space-y-12"
             >
                {/* Intro to Routes */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-12 items-center">
                   <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-2">
                         <Anchor className="text-lake" /> Multimodal Hub Synchronization
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                         Our logistics governance focuses on the 'Blue Corridor'—the most resilient maritime-to-rail connections between Thailand and African regional nodes. By prioritizing direct-feed alliances, we reduce transit volatility for institutional grain and industrial cargo.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 bg-neutralGrey rounded-xl border border-gray-200">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">SADC Lead Time</span>
                            <p className="text-lake font-bold">22-28 Days</p>
                         </div>
                         <div className="p-4 bg-neutralGrey rounded-xl border border-gray-200">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ECOWAS Lead Time</span>
                            <p className="text-warmGold font-bold">35-45 Days</p>
                         </div>
                      </div>
                   </div>
                   <div className="md:w-1/2 w-full aspect-video bg-neutralGrey rounded-2xl flex flex-col items-center justify-center border border-gray-200 shadow-inner group">
                      <img src="https://placehold.co/800x600/1A1A1A/FFFFFF?text=Transit+Corridor+Visual" alt="Corridor Visual" className="w-full h-full object-cover rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                      <p className="text-[10px] font-bold text-gray-400 mt-4 uppercase tracking-widest absolute bg-white/80 px-4 py-2 rounded-full">[Image Placeholder: Corridor Flow Diagram - 16:9]</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {LOGISTICS_ROUTES.map((route) => (
                      <div key={route.id} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col h-full hover:border-lake/20 transition-all">
                         <div className="mb-6 flex justify-between items-start">
                            <div>
                               <div className="bg-lake/10 w-12 h-12 rounded-2xl flex items-center justify-center text-lake mb-4">
                                  <Map size={24} />
                               </div>
                               <h3 className="font-bold text-xl text-charcoal mb-2">{route.name}</h3>
                               <div className="text-xs font-mono text-lake bg-lake/5 px-3 py-1.5 rounded-full w-fit font-bold">
                                  {t(lang, 'logistics', 'transit')}: {route.transitTime}
                               </div>
                            </div>
                            <Ship className="text-gray-200" size={48} />
                         </div>
                         
                         <div className="flex-grow space-y-6">
                            <div className="text-sm text-gray-700 leading-relaxed">
                               <h4 className="font-bold text-charcoal mb-2 uppercase text-[10px] tracking-widest text-lake">{t(lang, 'logistics', 'insight')}</h4>
                               {route.keyInsight}
                            </div>
                            <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                               <h4 className="font-bold text-red-700 text-[10px] uppercase mb-3 flex items-center gap-1.5 tracking-widest">
                                  <AlertTriangle size={14}/> {t(lang, 'logistics', 'pain_points')}
                               </h4>
                               <ul className={`list-disc text-[11px] text-red-800 space-y-2 ${lang === 'ar' ? 'pr-4' : 'pl-4'}`}>
                                  {route.painPoints.map((pt, i) => <li key={i}>{pt}</li>)}
                                </ul>
                            </div>
                         </div>

                         <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                            <div>
                               <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest block mb-1">{t(lang, 'logistics', 'est_cost')}</span>
                               <span className="text-charcoal font-bold font-mono text-lg">{route.costEstimate}</span>
                            </div>
                            <div className="text-right">
                               <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest block mb-1">Vetted Carriers</span>
                               <span className="text-charcoal font-bold text-xs">{route.carriers.join(', ')}</span>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </motion.div>
          ) : (
             <motion.div 
               key="regs"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="space-y-12"
             >
                {/* Intro to Regs */}
                <div className="bg-deepGreen text-white p-10 rounded-3xl relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
                   <div className="md:w-2/3 relative z-10">
                      <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                         <ShieldCheck className="text-warmGold" size={32} /> Documentation Governance
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                         African import markets are characterized by rigorous pre-shipment inspection (PSI) and conformity assessment. We coordinate the document lifecycle—from the Thai industrial test report to the final SONCAP/PVOC Certificate of Conformity—ensuring cargo release within 48 hours of port arrival.
                      </p>
                      <div className="flex gap-4">
                         <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold border border-white/20">ISO-17025 Labs</div>
                         <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold border border-white/20">PSI Coordination</div>
                         <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold border border-white/20">Digital Traceability</div>
                      </div>
                   </div>
                   <div className="md:w-1/3 w-full aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center border border-white/10 backdrop-blur-sm group">
                      <img src="https://placehold.co/400x400/D4A017/1A1A1A?text=Cert+Flow" alt="Cert Flow" className="w-full h-full object-cover rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                      <p className="text-[10px] font-bold text-warmGold mt-4 uppercase tracking-widest absolute text-center px-4">[Image Placeholder: Compliance Flowchart - 1:1]</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {REGULATORY_DATA.map((reg, idx) => (
                      <div key={idx} className={`bg-white rounded-3xl p-10 shadow-xl relative overflow-hidden group hover:border-deepGreen/20 border border-transparent transition-all ${lang === 'ar' ? 'border-r-8 border-deepGreen' : 'border-l-8 border-deepGreen'}`}>
                         <div className={`absolute top-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity ${lang === 'ar' ? 'left-0' : 'right-0'}`}>
                            <ShieldCheck size={96} className="text-deepGreen" />
                         </div>
                         <h3 className="text-2xl font-bold text-charcoal mb-1">{reg.country}</h3>
                         <div className="text-deepGreen font-bold text-xs uppercase tracking-widest mb-6 py-1 px-3 bg-deepGreen/5 w-fit rounded-lg">{reg.name}</div>
                         
                         <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                            {reg.description}
                         </p>

                         <div className="bg-neutralGrey p-6 rounded-2xl border border-gray-200">
                            <h4 className="flex items-center gap-2 font-bold text-charcoal text-xs mb-3 uppercase tracking-widest text-lake">
                               <CheckCircle size={16} className="text-warmGold" /> {t(lang, 'logistics', 'critical_action')}
                            </h4>
                            <p className="text-sm text-gray-700 font-medium leading-relaxed">
                               {reg.criticalAction}
                            </p>
                         </div>
                      </div>
                   ))}
                </div>
             </motion.div>
          )}
        </AnimatePresence>

        {/* Global South Note */}
        <div className="mt-20 p-8 bg-charcoal text-white rounded-3xl border-b-8 border-warmGold flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="md:w-3/4">
              <h4 className="text-xl font-bold text-warmGold mb-2 flex items-center gap-2">
                 <Info size={20} /> Infrastructure Resilience Strategy (2025)
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                 AfricanThaiTrade Nexus maintains active intelligence on port congestion indices at Apapa (Lagos), Tema (Accra), and Durban. Our logistics desk provides real-time "Resilience Routing"—pivoting cargo to secondary ports like Walvis Bay or Beira during periods of high congestion or labor strikes, ensuring supply continuity for institutional partners.
              </p>
           </div>
           <button className="px-8 py-4 bg-lake text-white font-bold rounded-xl hover:bg-white hover:text-charcoal transition-all text-xs flex items-center gap-2 shrink-0">
              Access Corridor Intelligence <Compass size={16} />
           </button>
        </div>

      </div>
    </div>
  );
};

export default SectionLogistics;