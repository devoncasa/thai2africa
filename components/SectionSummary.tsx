import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TRADE_STATS_DATA, SUMMARY_IMAGES } from '../constants';
import { TrendingUp, Anchor, Truck, ArrowUpRight, Globe, BarChart3, Factory, Sprout, MapPin } from 'lucide-react';
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

      {/* 2. Key Market Volumes Chart */}
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
                    {stat.trend === 'up' && <span className="text-xs font-bold text-green-600 flex items-center justify-end gap-1"><TrendingUp size={12}/> Growing</span>}
                    {stat.trend === 'stable' && <span className="text-xs font-bold text-blue-600 flex items-center justify-end gap-1"><Anchor size={12}/> Stable</span>}
                  </div>
               </div>
               <div className="mt-4 pt-4 border-t border-gray-200/50">
                 <p className="text-sm text-gray-600 leading-relaxed">
                   <span className="font-bold text-charcoal">Insight: </span> 
                   {stat.insight}
                 </p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Country-Specific Insights */}
      <div className="mb-20">
         <h3 className={`text-2xl md:text-3xl font-bold text-charcoal mb-10 text-center ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'summary', 'intro_title')} (Country Breakdown)</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                country: "South Africa",
                role: "The Industrial Gateway",
                insight: "Mature, regulated market. Buyers (Shoprite, Motus) value compliance (SABS) over rock-bottom price. Hub for SADC transshipment."
              },
              {
                country: "Nigeria",
                role: "The Hungry Giant",
                insight: "High-friction, low-trust. Severe food inflation driving duty waivers. Focus on 'Brown Rice' for millers and 'Tokunbo' auto parts."
              },
              {
                country: "Kenya",
                role: "Construction Hub",
                insight: "Driven by infrastructure boom. Thai ceramics/gypsum prized over Chinese. High duties (25%) + Railway Levy (2%)."
              },
              {
                country: "Malawi",
                role: "Sourcing Frontier",
                insight: "The 'Reverse Trade' asset. Exporting pigeon peas to Thailand generates forex to fund import of Thai construction materials."
              }
            ].map((mkt, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-3">
                     <MapPin className="text-lake" size={18} />
                     <h4 className="font-bold text-charcoal">{mkt.country}</h4>
                  </div>
                  <div className="text-xs font-bold text-warmGold uppercase tracking-wider mb-2">{mkt.role}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{mkt.insight}</p>
               </div>
            ))}
         </div>
      </div>

      {/* 4. Strategic Trade Pillars */}
      <div className="mb-20">
         <h3 className={`text-2xl md:text-3xl font-bold text-charcoal mb-10 text-center ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'summary', 'pillars_title')}</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Industrial Surplus",
                icon: Factory,
                color: "bg-lake",
                desc: "Thailand holds inventory in automotive parts and polymers. Manufacturers are willing to negotiate FOB prices to clear this stock."
              },
              {
                title: "Agro-Processing",
                icon: Sprout,
                color: "bg-deepGreen",
                desc: "Moving beyond raw commodities. Canned tuna, parboiled rice, and processed rubber offer shelf stability crucial for African supply chains."
              },
              {
                title: "Tech Appropriateness",
                icon: Truck,
                color: "bg-warmGold",
                desc: "Thai machinery (Kubota) and pickups (Hilux) are 'Tropicalized'—designed for rugged, hot environments, unlike fragile European tech."
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden"
              >
                <div className={`w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-md`}>
                   <pillar.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-3">{pillar.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
         </div>
      </div>

      {/* 5. Future Outlook */}
      <div className="bg-charcoal text-white rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="md:w-2/3">
                <h3 className={`text-2xl font-bold text-warmGold mb-4 flex items-center gap-3 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
                   <ArrowUpRight /> {t(lang, 'summary', 'future_title')}
                </h3>
                <ul className="text-gray-300 leading-relaxed space-y-4">
                   <li><strong>1. 'Thai-Spec' Auto Dominance:</strong> As Japanese used cars get pricier, maintaining existing fleets with Thai OEM parts becomes critical ({'>'}6% CAGR).</li>
                   <li><strong>2. Food Policy Shifts:</strong> African nations moving to 'Brown Rice' imports for local milling to capture value.</li>
                   <li><strong>3. The Beauty Boom:</strong> Thai herbal/whitening cosmetics finding massive traction in Nigeria (Projected €20Bn market by 2030).</li>
                </ul>
             </div>
             <div className="md:w-1/3 flex justify-center">
                <Globe size={120} className="text-white/10" />
             </div>
          </div>
      </div>

      {/* 6. Visual Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SUMMARY_IMAGES.map((img, idx) => (
          <motion.div 
             key={idx}
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
          >
             <img 
               src={img.url} 
               alt={img.alt} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               loading="lazy"
             />
             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
               <p className="text-[10px] text-gray-300 font-mono uppercase tracking-wider">{img.credit}</p>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionSummary;