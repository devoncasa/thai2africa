import React from 'react';
import { Search, Users, ShieldCheck, Factory, Briefcase, Target, CheckCircle, Award, FileSearch, Lock } from 'lucide-react';
import { Language } from '../types';
import { t } from '../localization';

const SectionDirectory: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="bg-white py-16 md:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <h2 className={`text-3xl md:text-5xl font-bold text-charcoal mb-6 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>Vetting Portfolio Framework</h2>
           <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
             AfricanThaiTrade Nexus manages a <strong>confidential, deep-audited portfolio</strong> of manufacturers and institutional partners. We eliminate the information asymmetry of the Global South corridor by providing neutral feasibility reports and verified matching.
           </p>
        </div>

        {/* Audit Tier Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
           {/* Audit Tier 1 */}
           <div className="bg-neutralGrey p-10 rounded-3xl border-t-4 border-lake shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
              <div className="w-14 h-14 bg-lake rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                 <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Tier-1: Industrial Audit</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                 Mandatory factory-floor inspections in Thailand verify actual production capacity versus paper claims. We audit 2024-2025 raw material stock-levels to ensure supply resilience for large-scale institutional requisitions.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-2 text-lake font-bold text-xs">
                 <CheckCircle size={14} /> ISO & BRCGS Verified
              </div>
           </div>

           {/* Audit Tier 2 */}
           <div className="bg-neutralGrey p-10 rounded-3xl border-t-4 border-deepGreen shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
              <div className="w-14 h-14 bg-deepGreen rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                 <FileSearch size={28} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Tier-2: Financial Vetting</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                 Analysis of 3-year P&L performance and banking health. We ensure that manufacturers in our portfolio have the financial liquidity to execute complex Letter of Credit (L/C) and SBLC transactions without production delays.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-2 text-deepGreen font-bold text-xs">
                 <CheckCircle size={14} /> Solvency Verified
              </div>
           </div>

           {/* Audit Tier 3 */}
           <div className="bg-neutralGrey p-10 rounded-3xl border-t-4 border-warmGold shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
              <div className="w-14 h-14 bg-warmGold rounded-2xl flex items-center justify-center text-white mb-6 shadow-md">
                 <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Tier-3: Export Governance</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                 Verification of previous export performance to African hubs. We audit logistics history, port clearance times, and consistency in meeting SONCAP and PVOC regulatory standards.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-2 text-warmGold font-bold text-xs">
                 <CheckCircle size={14} /> Compliance Verified
              </div>
           </div>
        </div>

        {/* Visual Trust Grid Placeholder */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="bg-neutralGrey rounded-3xl p-10 border border-gray-200 shadow-inner flex flex-col items-center justify-center aspect-video group relative">
              <img src="https://placehold.co/800x600/2F5233/FFFFFF?text=Audit+Matrix" alt="Audit Matrix" className="rounded-2xl w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <Lock size={48} className="text-deepGreen mb-4" />
                 <p className="text-[10px] font-bold text-deepGreen uppercase tracking-widest">[Image Placeholder: Audit Trust Grid - 16:9]</p>
                 <p className="text-xs text-gray-400 mt-2 px-10 text-center">Proprietary matrix displaying vetted manufacturer certifications and industrial scores.</p>
              </div>
           </div>
           <div>
              <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-2">
                 <Target className="text-lake" /> Neutral Matching Intelligence
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                 Our matching system is built on a "Pull" methodology. We do not push products; we fulfill technical requisitions. When an institutional partner submits an SKU, our desk performs a deep-audit cross-reference within our private portfolio to identify the most resilient supply-fit.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 bg-lake/5 rounded-2xl border border-lake/10">
                    <div className="p-2 bg-lake rounded-lg text-white"><Briefcase size={20} /></div>
                    <div className="text-xs">
                       <span className="font-bold block text-charcoal mb-0.5 uppercase tracking-widest">Active Deal Flow</span>
                       <span className="text-gray-500">24+ Multi-year institutional contracts currently under governance.</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-warmGold/5 rounded-2xl border border-warmGold/10">
                    <div className="p-2 bg-warmGold rounded-lg text-white"><Users size={20} /></div>
                    <div className="text-xs">
                       <span className="font-bold block text-charcoal mb-0.5 uppercase tracking-widest">Verified Buyer Nodes</span>
                       <span className="text-gray-500">85+ Pan-African aggregators with port-side infrastructure.</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Portfolio Access CTA Section */}
        <div className="bg-charcoal text-white p-8 md:p-16 rounded-3xl relative overflow-hidden border-b-8 border-lake">
           <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-3/5">
                 <h3 className="text-3xl md:text-4xl font-bold mb-6 text-warmGold">Vetting Portfolio Access</h3>
                 <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    Access to our private portfolio is strictly reserved for institutional partners and government agencies. 
                    We maintain a neutral middle-party stance, providing <strong>Full Feasibility Reports</strong> 
                    that include audited manufacturer profiles, logistics cost-modeling, and regulatory gap-analysis.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 bg-white/5 p-5 rounded-2xl border border-white/10">
                       <Factory size={24} className="text-lake" />
                       <div>
                          <span className="text-sm font-bold block">Audited Manufacturers</span>
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest">450+ Verified Clusters</span>
                       </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-5 rounded-2xl border border-white/10">
                       <Search size={24} className="text-lake" />
                       <div>
                          <span className="text-sm font-bold block">2025 Market Requisitions</span>
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Strategic Corridor Matches</span>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-2/5 bg-white p-8 rounded-3xl border border-gray-200 shadow-2xl text-charcoal">
                 <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <ShieldCheck className="text-lake" /> Initiate Portfolio Audit
                 </h4>
                 <p className="text-sm text-gray-500 mb-6 leading-relaxed">Submit your technical SKU or procurement mandate. Our trade desk will perform a neutral search and return a matching feasibility report within 5 business days.</p>
                 <form className="space-y-4">
                    <div className="space-y-1">
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Technical Requisition Type</label>
                       <select className="w-full bg-neutralGrey border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-lake">
                          <option>Institutional Grains (Rice/Pulses)</option>
                          <option>Industrial Feedstock (Polymers/Starches)</option>
                          <option>Automotive Tier-2 Components</option>
                          <option>Technical Textiles/Apparel</option>
                       </select>
                    </div>
                    <button className="w-full py-4 bg-charcoal text-white font-bold rounded-xl hover:bg-lake transition-all flex items-center justify-center gap-2 shadow-lg">
                       Submit SKU for Feasibility <Search size={18} />
                    </button>
                 </form>
              </div>
           </div>
           {/* Decorative Background Icon */}
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={300} />
           </div>
        </div>

      </div>
    </div>
  );
};

export default SectionDirectory;