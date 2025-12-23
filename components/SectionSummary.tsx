import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TRADE_STATS_DATA, SUMMARY_IMAGES } from '../constants';
import { TrendingUp, Anchor, Truck, ArrowUpRight, Globe, BarChart3, Factory, ShieldCheck, MapPin, Layers } from 'lucide-react';
import { Language } from '../types';
import { t } from '../localization';

const COLORS = ['#2A6F97', '#2F5233', '#D4A017'];

const SectionSummary: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      
      {/* 1. Intro Section: Macro Analysis */}
      <div className="mb-20 text-center md:text-left">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
            <h2 className={`text-3xl md:text-5xl font-bold text-lake mb-6 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'summary', 'title')}</h2>
            <div className="w-32 h-1.5 bg-warmGold mb-8 mx-auto md:mx-0"></div>
            <p className="text-xl text-gray-700 max-w-4xl leading-relaxed font-light">
              <strong className="text-charcoal">{t(lang, 'summary', 'intro_title')}:</strong> {t(lang, 'summary', 'intro_desc')}
            </p>
        </motion.div>
      </div>

      {/* 2. Visual Hub: Corridor Mapping Placeholder */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-2">
            <Globe className="text-lake" /> Strategic Trade Corridor Mapping
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Effective trade between Thailand and Africa is not merely about shipping; it is about navigating the "Infrastructure Gaps" of the Global South. Our corridor mapping identifies port efficiency, rail-connectivity, and bonded warehouse locations in 2024-2025.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-gray-700">
               <MapPin className="text-warmGold mt-1 shrink-0" size={18} />
               <div>
                  <span className="font-bold">Hub-and-Spoke Distribution:</span> Utilizing Durban and Mombasa as primary nodes for multi-country inland reach.
               </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
               <Layers className="text-lake mt-1 shrink-0" size={18} />
               <div>
                  <span className="font-bold">Customs Corridors:</span> Pre-cleared documentation flow via T1/T2 transit protocols for landlocked SADC and EAC nations.
               </div>
            </li>
          </ul>
        </div>
        <div className="bg-neutralGrey rounded-3xl p-4 border border-gray-200 shadow-inner flex flex-col items-center justify-center aspect-video group">
           <img src={SUMMARY_IMAGES[0].url} alt={SUMMARY_IMAGES[0].alt} className="rounded-2xl w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
           <p className="text-[10px] font-bold text-gray-400 mt-4 uppercase tracking-widest">[Image Placeholder: Strategic Trade Corridor Map - 16:9]</p>
        </div>
      </div>

      {/* 3. Performance Data Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-2xl font-bold text-charcoal flex items-center gap-3">
               <BarChart3 className="text-lake" /> {t(lang, 'summary', 'chart_title')}
             </h3>
             <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500">{t(lang, 'summary', 'chart_subtitle')}</span>
          </div>
          
          <div className="flex-grow min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TRADE_STATS_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.5} />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={140} 
                  tick={{fontSize: 11, fontWeight: 600, fill: '#666'}} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1A1A', color: '#fff', border: 'none', borderRadius: '8px' }} 
                  cursor={{fill: 'rgba(0,0,0,0.05)'}}
                />
                <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={40}>
                  {TRADE_STATS_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-lake/5 rounded-xl text-[11px] text-lake/80 font-medium">
             [Infographic Note: Data reflects facilitated B2B match value across institutional grain, polymer, and automotive sectors.]
          </div>
        </motion.div>

        <div className="lg:col-span-6 space-y-6">
          {TRADE_STATS_DATA.map((stat, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.15 }}
               className="bg-neutralGrey p-6 rounded-2xl border-l-8 hover:bg-white hover:shadow-md transition-all duration-300 group"
               style={{ borderLeftColor: COLORS[idx % COLORS.length] }}
             >
               <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-charcoal group-hover:text-lake transition-colors">{stat.name}</h4>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">{stat.subtext}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`} style={{ color: COLORS[idx % COLORS.length] }}>
                      {stat.label}
                    </div>
                  </div>
               </div>
               <div className="mt-4 pt-4 border-t border-gray-200/50 text-sm text-gray-600 leading-relaxed">
                 {stat.insight}
               </div>
             </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Core Governance Pillars */}
      <div className="mb-20">
         <div className="text-center mb-12">
            <h3 className={`text-2xl md:text-3xl font-bold text-charcoal mb-4 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'summary', 'pillars_title')}</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">Institutional-grade trade matching requires more than a directory. We rely on three proprietary governance layers.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Vetting Governance",
                icon: ShieldCheck,
                color: "bg-lake",
                desc: "Every manufacturer in our portfolio undergoes a 5-tier audit of financial solvency, production scalability, and technical certifications. We eliminate vendor risk before matching."
              },
              {
                title: "Corridor Resilience",
                icon: MapPin,
                color: "bg-deepGreen",
                desc: "Mapping multimodal logistics routes that utilize rail-bridges and strategic bonded warehouses to circumvent port-side bottlenecks in high-volume hubs like Lagos and Durban."
              },
              {
                title: "Document Integrity",
                icon: Truck,
                color: "bg-warmGold",
                desc: "Managing the complex document lifecycle from Thai factory release to African port clearance, ensuring 100% compliance with SONCAP, PVOC, and AfCFTA CoO requirements."
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden h-full flex flex-col"
              >
                <div className={`w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-md`}>
                   <pillar.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-3">{pillar.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{pillar.desc}</p>
              </motion.div>
            ))}
         </div>
      </div>

      {/* 5. Strategic Outlook: Deep Analysis Placeholder */}
      <div className="bg-charcoal text-white rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16 border-b-8 border-warmGold">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="md:w-3/5">
                <h3 className={`text-2xl font-bold text-warmGold mb-4 flex items-center gap-3 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
                   <ArrowUpRight /> {t(lang, 'summary', 'future_title')}
                </h3>
                <div className="space-y-6 text-gray-300">
                   <div>
                     <h4 className="text-white font-bold mb-1">AfCFTA Value-Add Strategy (2025)</h4>
                     <p className="text-sm border-l-2 border-lake pl-4">
                       We are identifying strategic hubs for semi-knocked-down (SKD) assembly in Nigeria and South Africa. This allows Thai manufacturers to export components at lower tariffs while creating local value-add and jobs within Africa.
                     </p>
                   </div>
                   <div>
                     <h4 className="text-white font-bold mb-1">Digitized Vetting Portfolio</h4>
                     <p className="text-sm border-l-2 border-lake pl-4">
                       Our private matching desk is now data-driven, allowing institutional buyers to view neutral feasibility reports on Thai producers within 48 hours, significantly reducing requisition lead times.
                     </p>
                   </div>
                   <div>
                     <h4 className="text-white font-bold mb-1">Logistics Decoupling</h4>
                     <p className="text-sm border-l-2 border-lake pl-4">
                       In response to global shipping volatility, we are prioritizing secondary ports (e.g., Beira, Walvis Bay) to offer resilient alternatives for landlocked African economies.
                     </p>
                   </div>
                </div>
             </div>
             <div className="md:w-2/5 flex flex-col items-center justify-center bg-white/5 p-8 rounded-3xl border border-white/10 aspect-square">
                <img src={SUMMARY_IMAGES[1].url} alt={SUMMARY_IMAGES[1].alt} className="w-full h-auto mb-4 opacity-50 grayscale" />
                <p className="text-[10px] font-bold text-warmGold uppercase tracking-widest text-center">
                   [Image Placeholder: Process Flow Diagram - 1:1]
                </p>
                <p className="text-[10px] text-gray-500 mt-2 text-center">Visualizing the flow from Thai Factory to African Regional Distribution Hub.</p>
             </div>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <Globe size={300} />
          </div>
      </div>

      {/* 6. Visual Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SUMMARY_IMAGES.map((img, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] group bg-neutralGrey flex flex-col">
             <img src={img.url} alt={img.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
               <p className="text-[10px] text-gray-300 font-mono uppercase tracking-wider">{img.credit}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSummary;