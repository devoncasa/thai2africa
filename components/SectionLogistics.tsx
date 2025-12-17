import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, ShieldCheck, AlertTriangle, CheckCircle, Map } from 'lucide-react';
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
           <p className="text-gray-600 max-w-3xl mx-auto text-lg">
             {t(lang, 'logistics', 'subtitle')}
           </p>
        </div>

        {/* Tab Nav */}
        <div className="flex justify-center mb-12">
           <div className="bg-white p-1 rounded-xl shadow-sm inline-flex">
              <button 
                onClick={() => setActiveTab('routes')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'routes' ? 'bg-lake text-white shadow-md' : 'text-gray-500 hover:text-lake'}`}
              >
                <Ship size={18} /> {t(lang, 'logistics', 'tab_routes')}
              </button>
              <button 
                onClick={() => setActiveTab('regs')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'regs' ? 'bg-lake text-white shadow-md' : 'text-gray-500 hover:text-lake'}`}
              >
                <ShieldCheck size={18} /> {t(lang, 'logistics', 'tab_regs')}
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
               className="grid grid-cols-1 lg:grid-cols-3 gap-6"
             >
                {LOGISTICS_ROUTES.map((route) => (
                   <div key={route.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col h-full">
                      <div className="mb-4">
                         <div className="bg-lake/10 w-12 h-12 rounded-full flex items-center justify-center text-lake mb-4">
                            <Map size={24} />
                         </div>
                         <h3 className="font-bold text-xl text-charcoal mb-2">{route.name}</h3>
                         <div className="text-sm font-mono text-gray-500 bg-gray-50 px-2 py-1 rounded w-fit">
                            {t(lang, 'logistics', 'transit')}: {route.transitTime}
                         </div>
                      </div>
                      
                      <div className="flex-grow space-y-4">
                         <div className="text-sm text-gray-700 leading-relaxed">
                            <span className="font-bold block text-lake mb-1">{t(lang, 'logistics', 'insight')}:</span>
                            {route.keyInsight}
                         </div>
                         <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                            <span className="font-bold block text-red-700 text-xs uppercase mb-1 flex items-center gap-1">
                               <AlertTriangle size={12}/> {t(lang, 'logistics', 'pain_points')}
                            </span>
                            <ul className={`list-disc text-xs text-red-800 space-y-1 ${lang === 'ar' ? 'pr-4' : 'pl-4'}`}>
                               {route.painPoints.map((pt, i) => <li key={i}>{pt}</li>)}
                            </ul>
                         </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                         <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 font-bold">{t(lang, 'logistics', 'est_cost')}:</span>
                            <span className="text-charcoal font-bold font-mono">{route.costEstimate}</span>
                         </div>
                         <div className="text-[10px] text-gray-400 mt-2">Carriers: {route.carriers.join(', ')}</div>
                      </div>
                   </div>
                ))}
             </motion.div>
          ) : (
             <motion.div 
               key="regs"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-6"
             >
                {REGULATORY_DATA.map((reg, idx) => (
                   <div key={idx} className={`bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden ${lang === 'ar' ? 'border-r-8 border-deepGreen' : 'border-l-8 border-deepGreen'}`}>
                      <div className={`absolute top-0 p-4 opacity-10 ${lang === 'ar' ? 'left-0' : 'right-0'}`}>
                         <ShieldCheck size={64} className="text-deepGreen" />
                      </div>
                      <h3 className="text-2xl font-bold text-charcoal mb-1">{reg.country}</h3>
                      <div className="text-deepGreen font-bold text-sm uppercase tracking-wider mb-4">{reg.name}</div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                         {reg.description}
                      </p>

                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                         <h4 className="flex items-center gap-2 font-bold text-charcoal text-sm mb-2">
                            <CheckCircle size={16} className="text-warmGold" /> {t(lang, 'logistics', 'critical_action')}
                         </h4>
                         <p className="text-sm text-gray-700 font-medium">
                            {reg.criticalAction}
                         </p>
                      </div>
                   </div>
                ))}
             </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default SectionLogistics;