import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TRADE_STATS_DATA, SUMMARY_IMAGES } from '../constants';
import { TrendingUp, Anchor, Truck, ArrowUpRight, Globe, BarChart3, Factory, Sprout } from 'lucide-react';

const COLORS = ['#2A6F97', '#2F5233', '#D4A017'];

const SectionSummary: React.FC = () => {
  return (
    <div className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      
      {/* 1. Intro Section */}
      <div className="mb-20 text-center md:text-left">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-lake mb-6">Executive Trade Intelligence</h2>
            <div className="w-32 h-1.5 bg-warmGold mb-8 mx-auto md:mx-0"></div>
            <p className="text-xl text-gray-700 max-w-4xl leading-relaxed font-light">
              <strong className="text-charcoal">Strategic Purpose:</strong> This executive dashboard synthesizes high-level bilateral trade data to identify immediate commercial opportunities. 
              It connects macro-economic flows between <span className="font-bold text-lake">Thailand</span>, <span className="font-bold text-deepGreen">South Africa</span>, and <span className="font-bold text-warmGold">Malawi</span>, 
              highlighting where supply meets demand in the Automotive, Agricultural, and Food Security sectors.
            </p>
        </motion.div>
      </div>

      {/* 2. Expanded Stats Section with Explanations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Left: Visualization */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-2xl font-bold text-charcoal flex items-center gap-3">
               <BarChart3 className="text-lake" /> Trade Volume Analysis
             </h3>
             <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500">2023/2024 Data</span>
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

        {/* Right: Detailed Insights (The "More Explanation" requested) */}
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
                    <div className="text-2xl font-serif font-bold" style={{ color: COLORS[idx % COLORS.length] }}>
                      {stat.label}
                    </div>
                    {stat.trend === 'up' && <span className="text-xs font-bold text-green-600 flex items-center justify-end gap-1"><TrendingUp size={12}/> Growing</span>}
                    {stat.trend === 'stable' && <span className="text-xs font-bold text-blue-600 flex items-center justify-end gap-1"><Anchor size={12}/> Stable</span>}
                  </div>
               </div>
               
               {/* The Added Explanation */}
               <div className="mt-4 pt-4 border-t border-gray-200/50">
                 <p className="text-sm text-gray-600 leading-relaxed">
                   <span className="font-bold text-charcoal">Analysis: </span> 
                   {stat.insight}
                 </p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>

      {/* 3. New Section: Strategic Trade Pillars (Dynamic Gesture) */}
      <div className="mb-20">
         <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-10 text-center">Strategic Trade Pillars</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Automotive Synergy",
                icon: Truck,
                color: "bg-lake",
                desc: "Shared Right-Hand Drive (RHD) ecosystems make South Africa the natural partner for Thai 1-ton pickup parts and accessories."
              },
              {
                title: "Food Security",
                icon: Sprout,
                color: "bg-deepGreen",
                desc: "Thailand serves as the 'Kitchen of the World', securing rice supplies for SADC nations during regional maize deficits."
              },
              {
                title: "Origin Sourcing",
                icon: Globe,
                color: "bg-warmGold",
                desc: "Malawi offers Thailand a strategic diversification source for raw agricultural commodities like Pigeon Peas and Oil Seeds."
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
                <div className={`absolute top-0 right-0 w-32 h-32 ${pillar.color} opacity-5 rounded-bl-full -mr-10 -mt-10 pointer-events-none`}></div>
              </motion.div>
            ))}
         </div>
      </div>

      {/* 4. New Section: Future Outlook */}
      <div className="bg-charcoal text-white rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="md:w-2/3">
                <h3 className="text-2xl font-serif font-bold text-warmGold mb-4 flex items-center gap-3">
                   <ArrowUpRight /> Future Outlook: 2025 & Beyond
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                   The trade corridor is shifting from simple "Buy-Sell" transactions to <strong>Strategic Value Chains</strong>. 
                   Future growth will be defined by direct shipments to inland markets (Malawi/Zambia), reducing reliance on Durban warehousing, and the rise of "Thai-Africa" joint ventures in agro-processing.
                </p>
                <div className="flex gap-4">
                   <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">Direct Logistics</span>
                   <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">Value-Added Processing</span>
                </div>
             </div>
             <div className="md:w-1/3 flex justify-center">
                <Factory size={120} className="text-white/10" />
             </div>
          </div>
      </div>

      {/* 5. Visual Gallery (Preserved) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SUMMARY_IMAGES.map((img, idx) => (
          <motion.div 
             key={idx}
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 + (idx * 0.1) }}
             className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video"
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