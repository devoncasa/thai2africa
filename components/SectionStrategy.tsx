import React, { useState } from 'react';
import { STRATEGY_STEPS, UNIQUE_THAI_PRODUCTS } from '../constants';
import { CheckSquare, Lightbulb, Target, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SectionStrategy: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedId(expandedId === idx ? null : idx);
  };

  return (
    <div className="py-16 px-6 bg-neutralGrey min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-8">Go-To-Market Strategy</h2>
          
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              This section serves as a tactical command center for exporters and trade strategists. It moves beyond raw data to provide a clear, execution-focused roadmap designed to accelerate market entry into South Africa and Malawi, converting market intelligence into tangible business outcomes.
            </p>
            <p>
              Below you will find a structured 90-day immediate action plan alongside deep-dive analyses of high-potential "Hidden Gem" products. Each item includes specific targeting advice, regulatory insights, and buyer psychology to mitigate risk and maximize competitive advantage.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Col: 90 Day Plan */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-24">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-8 flex items-center gap-3">
                <span className="bg-lake h-10 w-10 rounded-lg flex items-center justify-center text-white text-sm font-sans">90d</span>
                Tactical Action Plan
              </h3>
              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-100 z-0"></div>

                {STRATEGY_STEPS.map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative z-10">
                     <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-white border-4 border-warmGold flex items-center justify-center shrink-0 shadow-sm">
                        </div>
                     </div>
                     <div className="pb-2">
                       <h4 className="text-lg font-bold text-lake mb-2">{step.title}</h4>
                       <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="w-full py-4 bg-charcoal text-white rounded-xl font-bold hover:bg-lake transition-colors flex items-center justify-center gap-2">
                  Download Full Execution Guide <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Col: Unique Products */}
          <div className="lg:col-span-7">
             <h3 className="text-2xl font-serif font-bold text-charcoal mb-8 flex items-center gap-3">
               <Lightbulb className="text-warmGold" size={32} />
               Hidden Gems & Target Buyers
             </h3>
             
             <div className="grid grid-cols-1 gap-4">
               {UNIQUE_THAI_PRODUCTS.map((product, idx) => (
                 <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all overflow-hidden">
                   
                   {/* Main Expandable Row */}
                   <div 
                     onClick={() => toggleExpand(idx)}
                     className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
                   >
                     <div className="flex items-start gap-4">
                       <div className="p-2 bg-deepGreen/10 rounded-lg text-deepGreen mt-1">
                          <CheckSquare size={18} />
                       </div>
                       <div>
                         <h4 className="font-bold text-charcoal text-lg group-hover:text-lake transition-colors">{product.name}</h4>
                         <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-bold">Why: {product.note}</p>
                       </div>
                     </div>
                     
                     <div className="flex items-center gap-3 pl-4 md:pl-0 md:border-l md:border-gray-100 md:w-1/3 shrink-0 justify-between md:justify-start">
                        <div className="flex items-center gap-3">
                          <Target className="text-warmGold shrink-0" size={20} />
                          <div>
                            <span className="block text-[10px] text-gray-400 uppercase">Primary Target</span>
                            <span className="text-sm font-bold text-gray-700">{product.target}</span>
                          </div>
                        </div>
                        <ChevronDown 
                          size={20} 
                          className={`text-gray-300 transition-transform duration-300 ${expandedId === idx ? 'rotate-180 text-lake' : ''}`} 
                        />
                     </div>
                   </div>

                   {/* Expandable Detail Section */}
                   <AnimatePresence>
                     {expandedId === idx && (
                       <motion.div 
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="bg-gray-50 border-t border-gray-100"
                       >
                          <div className="p-6">
                             {/* Product Images */}
                             {product.images && product.images.length > 0 && (
                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                 {product.images.map((img, imgIdx) => (
                                   <div key={imgIdx} className="h-40 rounded-lg overflow-hidden relative group">
                                     <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                     <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                                       <p className="text-[10px] text-gray-300 font-mono">{img.credit}</p>
                                     </div>
                                   </div>
                                 ))}
                               </div>
                             )}

                             <div className="grid grid-cols-1 gap-6">
                               {product.details.map((detail, dIdx) => (
                                  <div key={dIdx} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                                     <h5 className="font-bold text-lake text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                                       <span className="w-1 h-4 bg-warmGold rounded-full"></span>
                                       {detail.title}
                                     </h5>
                                     <p className="text-sm text-gray-600 leading-relaxed text-justify">{detail.content}</p>
                                  </div>
                               ))}
                               
                               {/* CTA for detail */}
                               <div className="flex justify-end">
                                  <button className="text-xs font-bold text-warmGold hover:text-charcoal transition-colors flex items-center gap-1 uppercase tracking-widest">
                                    Request Full Report <ArrowRight size={12} />
                                  </button>
                               </div>
                             </div>
                          </div>
                       </motion.div>
                     )}
                   </AnimatePresence>

                 </div>
               ))}
             </div>

             <div className="mt-8 p-6 bg-lake/5 text-lake rounded-xl text-sm border border-lake/10 flex gap-4 items-start">
               <div className="bg-lake text-white p-2 rounded-full shrink-0">
                 <Target size={16} />
               </div>
               <div>
                 <h4 className="font-bold mb-1">Strategic Recommendation</h4>
                 <p className="opacity-80">
                   For South Africa, focus on <span className="font-bold">branded retail goods</span> (Jasmine Rice, Sauces). 
                   For Malawi, focus on <span className="font-bold">volume staples & inputs</span> (Agro-chemicals, Machinery, Bulk Food).
                 </p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionStrategy;