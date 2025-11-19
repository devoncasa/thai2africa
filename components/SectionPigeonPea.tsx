import React from 'react';
import { Bean, TrendingUp, Truck, ShoppingBag, ArrowRight, Search, MapPin, Phone, Briefcase, Lightbulb } from 'lucide-react';
import { THAI_BUYERS_DIRECTORY, PIGEON_PEA_IMAGES } from '../constants';

const SectionPigeonPea: React.FC = () => {
  return (
    <div className="py-16 md:py-24 px-6 bg-deepGreen text-white relative overflow-hidden">
      {/* Pattern Background Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-3 text-warmGold mb-2">
               <Bean size={20} />
               <span className="uppercase tracking-widest text-sm font-bold">Special Commodity Report</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
              Pigeon Peas <br/><span className="text-white/50">Global Origin Analysis</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-xl">
              Malawi is the primary African origin pool (~50.8k tonnes). Thailand represents a niche but viable import market for processing and ethnic redistribution.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 min-w-[250px]">
             <div className="text-sm text-gray-300 mb-1">Malawi Export Value (2023)</div>
             <div className="text-4xl font-bold text-warmGold">USD 31.6M</div>
             <div className="text-xs text-gray-400 mt-2">Source: Tridge / UN COMTRADE</div>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PIGEON_PEA_IMAGES.map((img, idx) => (
             <div key={idx} className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                   <p className="text-[10px] text-gray-300 font-mono">{img.credit}</p>
                </div>
             </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Supply & Logic */}
          <div className="col-span-1 lg:col-span-2 bg-white text-charcoal p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-lake/10 rounded-bl-full z-0"></div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 relative z-10">
              <Truck className="text-lake" /> Supply Chain Dynamics
            </h3>
            <div className="space-y-4 text-gray-600 relative z-10">
               <p>
                 Malawi's pigeon pea exports are historically volatile, driven by Indian quota cycles. When India restricts imports, Malawi suffers a glut, creating <strong>buy opportunities for secondary markets like Thailand.</strong>
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-neutralGrey p-4 rounded-lg">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Major Competitors</span>
                    <span className="font-bold text-charcoal">Myanmar, India (Domestic)</span>
                  </div>
                  <div className="bg-neutralGrey p-4 rounded-lg">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Harvest Window</span>
                    <span className="font-bold text-charcoal">August - October</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Card 2: Price Signals */}
          <div className="bg-[#1A1A1A] text-white p-8 rounded-2xl shadow-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-warmGold">
              <TrendingUp size={20} /> Price Structure
            </h3>
            <div className="space-y-6">
               <div>
                 <div className="flex justify-between text-sm text-gray-400 mb-1">Origin FOB (Malawi)</div>
                 <div className="text-2xl font-bold">$0.60 - $1.00 <span className="text-sm font-normal">/ kg</span></div>
               </div>
               <div className="w-full h-px bg-gray-700"></div>
               <div>
                 <div className="flex justify-between text-sm text-gray-400 mb-1">Est. CIF Bangkok</div>
                 <div className="text-2xl font-bold text-green-400">~$1.60 <span className="text-sm font-normal">/ kg</span></div>
                 <p className="text-xs text-gray-500 mt-2">Includes freight & insurance. Competitive against domestic Thai pulses.</p>
               </div>
            </div>
          </div>
        </div>

        {/* BUYER DIRECTORY START */}
        <div className="space-y-8">
           <div className="flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-serif font-bold">Thailand Buyer Directory (20 Potential Leads)</h3>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-300 bg-white/10 px-4 py-2 rounded-full">
                 <MapPin size={16} /> Based in Bangkok/Central Thailand
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {THAI_BUYERS_DIRECTORY.map((buyer, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 text-charcoal hover:shadow-2xl transition-all duration-300 group">
                   <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg text-lake leading-tight group-hover:text-deepGreen transition-colors">
                        {buyer.name}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded text-gray-500 shrink-0 ml-2">
                        {buyer.type}
                      </span>
                   </div>

                   {/* Key Focus */}
                   <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                      <div className="w-2 h-2 bg-warmGold rounded-full"></div>
                      {buyer.focus}
                   </div>
                   
                   {/* Contact Info Block */}
                   <div className="bg-neutralGrey p-4 rounded-lg space-y-2 mb-4 border border-gray-200 text-sm">
                      <div className="flex items-start gap-2 text-gray-600">
                         <Briefcase size={14} className="mt-1 shrink-0 text-gray-400" />
                         <span>{buyer.note}</span>
                      </div>
                      {buyer.phone && (
                        <div className="flex items-center gap-2 text-gray-600 font-mono">
                           <Phone size={14} className="shrink-0 text-gray-400" />
                           <span>{buyer.phone}</span>
                        </div>
                      )}
                      {buyer.address && (
                        <div className="flex items-start gap-2 text-gray-600">
                           <MapPin size={14} className="mt-1 shrink-0 text-gray-400" />
                           <span className="leading-tight text-xs">{buyer.address}</span>
                        </div>
                      )}
                   </div>

                   {/* Strategy */}
                   <div className="flex items-start gap-2 text-sm bg-lake/5 p-3 rounded border border-lake/10">
                      <Lightbulb size={16} className="text-lake shrink-0 mt-0.5" />
                      <p className="text-charcoal/80 italic">{buyer.approach}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default SectionPigeonPea;