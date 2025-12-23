import React from 'react';
import { motion } from 'framer-motion';
import { TRADE_FAQS } from '../constants';
import { HelpCircle, ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { t } from '../localization';

const SectionFAQ: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="bg-white py-16 md:py-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center p-3 bg-lake/10 text-lake rounded-2xl mb-4">
              <HelpCircle size={32} />
           </div>
           <h2 className={`text-3xl md:text-5xl font-bold text-charcoal mb-6 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
             {t(lang, 'faq', 'title')}
           </h2>
           <p className="text-gray-600 text-lg leading-relaxed">
             {t(lang, 'faq', 'subtitle')}
           </p>
        </div>

        <div className="space-y-6">
           {TRADE_FAQS.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-neutralGrey rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-lake/20 transition-all group"
              >
                 <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-white p-2 rounded-lg text-lake group-hover:bg-lake group-hover:text-white transition-colors">
                       <MessageSquare size={18} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center justify-between">
                          {faq.question}
                       </h3>
                       <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                       </p>
                    </div>
                 </div>
              </motion.div>
           ))}
        </div>

        <div className="mt-16 p-8 bg-charcoal text-white rounded-3xl relative overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                 <h4 className="text-warmGold font-bold text-xl mb-2 flex items-center gap-2">
                    <ShieldCheck size={20} /> Still have questions?
                 </h4>
                 <p className="text-gray-400 text-sm">
                    Our institutional trade desk is available for complex deal structuring and regulatory analysis.
                 </p>
              </div>
              <button className="px-8 py-4 bg-lake text-white font-bold rounded-xl hover:bg-warmGold hover:text-charcoal transition-all flex items-center gap-2">
                 Ask our Desk <ChevronRight size={18} />
              </button>
           </div>
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <HelpCircle size={120} />
           </div>
        </div>

      </div>
    </div>
  );
};

export default SectionFAQ;