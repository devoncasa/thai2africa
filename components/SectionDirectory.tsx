import React from 'react';
import { THAI_EXPORTERS, LOGISTICS_PARTNERS, THAI_BUYERS_DIRECTORY } from '../constants';
import { Building, Truck, ShoppingBag, MapPin } from 'lucide-react';
import { Language } from '../types';
import { t } from '../localization';

const SectionDirectory: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="bg-white py-16 md:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <h2 className={`text-3xl md:text-5xl font-bold text-charcoal mb-6 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'directory', 'title')}</h2>
           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
             {t(lang, 'directory', 'subtitle')}
           </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
           
           {/* 1. Thai Exporters */}
           <div>
              <h3 className="text-2xl font-bold text-lake mb-6 flex items-center gap-3 pb-4 border-b border-gray-100">
                 <Building /> {t(lang, 'directory', 'sec_exporters')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {THAI_EXPORTERS.map((co, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-lake transition-colors">
                       <h4 className="font-bold text-charcoal text-lg mb-1">{co.name}</h4>
                       <div className="text-xs font-bold text-lake uppercase tracking-wider mb-3">{co.category}</div>
                       <p className="text-sm text-gray-600 mb-4">{co.description}</p>
                       <div className="flex items-center gap-2 text-xs text-gray-400">
                          <MapPin size={12} /> {co.location}
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* 2. Logistics Partners */}
           <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center gap-3 pb-4 border-b border-gray-100">
                 <Truck /> {t(lang, 'directory', 'sec_logistics')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {LOGISTICS_PARTNERS.map((co, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                       <h4 className="font-bold text-charcoal text-base mb-1">{co.name}</h4>
                       <div className="text-xs font-bold text-warmGold uppercase tracking-wider mb-3">{co.category}</div>
                       <p className="text-sm text-gray-600 mb-2">{co.description}</p>
                    </div>
                 ))}
              </div>
           </div>

           {/* 3. Thai Buyers (Reverse Trade) */}
           <div>
              <h3 className="text-2xl font-bold text-deepGreen mb-6 flex items-center gap-3 pb-4 border-b border-gray-100">
                 <ShoppingBag /> {t(lang, 'directory', 'sec_buyers')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {THAI_BUYERS_DIRECTORY.map((co, i) => (
                    <div key={i} className="bg-deepGreen/5 p-6 rounded-xl border border-deepGreen/10">
                       <h4 className="font-bold text-charcoal text-lg mb-1">{co.name}</h4>
                       <div className="text-xs font-bold text-deepGreen uppercase tracking-wider mb-3">{co.type}</div>
                       <p className="text-sm text-gray-600 mb-4">{co.note}</p>
                       <div className="text-xs text-gray-500 bg-white px-3 py-1 rounded w-fit">Focus: {co.focus}</div>
                    </div>
                 ))}
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};

export default SectionDirectory;