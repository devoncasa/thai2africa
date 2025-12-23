import React, { useState } from 'react';
import { STRATEGY_STEPS, UNIQUE_THAI_PRODUCTS } from '../constants';
import { CheckSquare, Lightbulb, Target, Download, Calculator, FileSpreadsheet, Phone, Mail, User, Building2, MapPin, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { jsPDF } from "jspdf";
import { CostingRow, Language } from '../types';
import { t } from '../localization';

const SectionStrategy: React.FC<{ lang: Language }> = ({ lang }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const [costRows, setCostRows] = useState<CostingRow[]>([
    { id: 1, productName: 'Institutional Grain Requisition', fobPrice: 550, freightCost: 85, dutyRate: 0, facilitationFee: 2.5, markup: 10 }, 
    { id: 2, productName: 'Industrial Component Batch', fobPrice: 45000, freightCost: 1200, dutyRate: 20, facilitationFee: 1.5, markup: 15 },
    { id: 3, productName: 'Polymer Feedstock Bulk', fobPrice: 8500, freightCost: 450, dutyRate: 15, facilitationFee: 2.0, markup: 5 },
    { id: 4, productName: '', fobPrice: 0, freightCost: 0, dutyRate: 0, facilitationFee: 0, markup: 0 },
  ]);

  const handleInputChange = (id: number, field: keyof CostingRow, value: string | number) => {
    const newRows = costRows.map(row => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setCostRows(newRows);
  };

  const calculateLanded = (row: CostingRow) => {
    const dutyAmt = row.fobPrice * (row.dutyRate / 100);
    const facilitationAmt = row.fobPrice * (row.facilitationFee / 100);
    return row.fobPrice + row.freightCost + dutyAmt + facilitationAmt;
  };

  const calculateFinal = (row: CostingRow) => {
    const landed = calculateLanded(row);
    return landed * (1 + (row.markup / 100));
  };

  const handleExportCSV = () => {
    const headers = ["Product", "FOB (USD)", "Freight", "Duty (%)", "Facilitation (%)", "Landed Cost", "Final Price"];
    const csvRows = [
        headers.join(','), 
        ...costRows.filter(r => r.productName).map(row => {
            return `"${row.productName}",${row.fobPrice},${row.freightCost},${row.dutyRate},${row.facilitationFee},${calculateLanded(row).toFixed(2)},${calculateFinal(row).toFixed(2)}`;
        })
    ].join('\n');

    const blob = new Blob([csvRows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'ATTN_Cost_Model_2025.csv');
    a.click();
  };

  const handleDownloadPDF = () => {
    setIsGenerating(true);
    const doc = new jsPDF();
    doc.setFontSize(24);
    doc.text("AfricanThaiTrade Nexus: Service Portfolio 2025", 20, 30);
    doc.setFontSize(12);
    doc.text("Institutional Trade Facilitation, Business Matching & Corridor Governance.", 20, 40);
    doc.save("ATTN_Service_Portfolio.pdf");
    setIsGenerating(false);
  };

  return (
    <div className="py-16 px-6 bg-neutralGrey min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold text-charcoal mb-8 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'strategy', 'title')}</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed font-medium">
            We orchestrate the complete trade lifecycle through a structured 4-phase framework. 
            Our neutral positioning ensures that sourcing introducing is governed strictly by technical specifications 
            and compliance verification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Roadmap */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-lake sticky top-24">
              <h3 className={`text-2xl font-bold text-charcoal mb-8 flex items-center gap-3 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
                {t(lang, 'strategy', 'roadmap_title')}
              </h3>
              <div className="space-y-8 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-100"></div>
                {STRATEGY_STEPS.map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative z-10">
                     <div className="w-8 h-8 rounded-full bg-white border-4 border-warmGold flex items-center justify-center shrink-0"></div>
                     <div className="pb-2">
                       <h4 className="text-lg font-bold text-lake mb-2">{step.title}</h4>
                       <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button 
                  onClick={handleDownloadPDF}
                  disabled={isGenerating}
                  className="w-full py-4 bg-charcoal text-white rounded-xl font-bold hover:bg-lake transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isGenerating ? t(lang, 'strategy', 'generating') : t(lang, 'strategy', 'download_btn')} 
                  {!isGenerating && <Download size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Sourcing Focus */}
          <div className="lg:col-span-7">
             <h3 className={`text-2xl font-bold text-charcoal mb-8 flex items-center gap-3 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
               <ShieldCheck className="text-warmGold" size={32} />
               Strategic Facilitation Hubs
             </h3>
             <div className="grid grid-cols-1 gap-4">
               {UNIQUE_THAI_PRODUCTS.map((product, idx) => (
                 <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                   <div className="flex items-start gap-4">
                     <div className="p-2 bg-deepGreen/10 rounded-lg text-deepGreen mt-1"><CheckSquare size={18} /></div>
                     <div>
                       <h4 className="font-bold text-charcoal text-lg">{product.name}</h4>
                       <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-bold">Logic: {product.note}</p>
                     </div>
                   </div>
                   <div className={`flex items-center gap-3 md:w-1/3 shrink-0 ${lang === 'ar' ? 'md:pr-4 md:border-r' : 'md:pl-4 md:border-l'} md:border-gray-100`}>
                      <Target className="text-warmGold shrink-0" size={20} />
                      <div>
                        <span className="block text-[10px] text-gray-400 uppercase">Strategic Focus</span>
                        <span className="text-sm font-bold text-gray-700">{product.target}</span>
                      </div>
                   </div>
                 </div>
               ))}
             </div>
             
             <div className="mt-8 bg-charcoal text-white p-6 rounded-2xl">
                <h4 className="font-bold mb-3 flex items-center gap-2 text-warmGold">
                   <ShieldCheck size={18} /> Neutral Governance Note
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                   "AfricanThaiTrade Nexus is strictly an intermediary. Introductions are made privately 
                   following a technical requisition. We maintain zero ownership of supply chains to ensure 
                   unbiased matchmaking for institutional partners."
                </p>
             </div>
          </div>
        </div>

        {/* Pricing Calculator */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12 mb-16">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                 <h3 className={`text-2xl font-bold text-charcoal flex items-center gap-3 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
                   <Calculator className="text-deepGreen" size={28} />
                   {t(lang, 'strategy', 'calculator_title')}
                 </h3>
                 <p className="text-gray-500 text-sm mt-2">{t(lang, 'strategy', 'calculator_desc')}</p>
              </div>
              <button onClick={handleExportCSV} className="flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg font-bold hover:bg-lake transition-colors">
                 <FileSpreadsheet size={20} /> Export Model
              </button>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                   <tr className="bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 w-1/4">Requisition</th>
                      <th className="p-4">Est. FOB <span className="block text-[10px] text-gray-400">(USD)</span></th>
                      <th className="p-4">Freight <span className="block text-[10px] text-gray-400">(USD)</span></th>
                      <th className="p-4">Facilitation <span className="block text-[10px] text-gray-400">(%)</span></th>
                      <th className="p-4">Duty <span className="block text-[10px] text-gray-400">(%)</span></th>
                      <th className="p-4 bg-lake/5 text-lake">Landed <span className="block text-[10px] opacity-70">(USD)</span></th>
                      <th className="p-4 bg-warmGold/5 text-warmGold">Final Price <span className="block text-[10px] opacity-70">(USD)</span></th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                   {costRows.map((row) => {
                      const landed = calculateLanded(row);
                      const final = calculateFinal(row);
                      return (
                        <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                           <td className="p-3"><input type="text" value={row.productName} onChange={(e) => handleInputChange(row.id, 'productName', e.target.value)} className="w-full bg-transparent outline-none px-2 py-1 font-medium text-charcoal" placeholder="Enter Description" /></td>
                           <td className="p-3"><input type="number" value={row.fobPrice || ''} onChange={(e) => handleInputChange(row.id, 'fobPrice', parseFloat(e.target.value) || 0)} className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm" /></td>
                           <td className="p-3"><input type="number" value={row.freightCost || ''} onChange={(e) => handleInputChange(row.id, 'freightCost', parseFloat(e.target.value) || 0)} className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm" /></td>
                           <td className="p-3"><input type="number" value={row.facilitationFee || ''} onChange={(e) => handleInputChange(row.id, 'facilitationFee', parseFloat(e.target.value) || 0)} className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm" /></td>
                           <td className="p-3"><input type="number" value={row.dutyRate || ''} onChange={(e) => handleInputChange(row.id, 'dutyRate', parseFloat(e.target.value) || 0)} className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm" /></td>
                           <td className="p-4 bg-lake/5 text-right font-mono font-bold text-lake">${landed.toFixed(2)}</td>
                           <td className="p-4 bg-warmGold/5 text-right font-mono font-bold text-charcoal">${final.toFixed(2)}</td>
                        </tr>
                      );
                   })}
                </tbody>
              </table>
           </div>
        </div>

        {/* Contact Desk */}
        <div className="bg-charcoal text-white p-8 md:p-12 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-8 border-b-8 border-lake">
            <div className="bg-lake/20 p-6 rounded-full text-warmGold shrink-0">
                <Building2 size={48} />
            </div>
            <div className="text-center md:text-left flex-grow">
                <h4 className="text-2xl font-bold mb-2">Institutional Trade Desk</h4>
                <p className="text-gray-400 text-lg mb-6">Initiate a private matching requisition through our secure desk.</p>
                <div className="flex flex-col md:flex-row gap-8 text-sm flex-wrap">
                     <div className="flex items-center gap-2"><User size={18} className="text-warmGold" /> Kris Laohasiri</div>
                     <a href="tel:+66818519922" className="flex items-center gap-2 hover:text-warmGold transition-colors"><Phone size={18} className="text-warmGold" /> +66 (0)81 851 9922</a>
                     <a href="mailto:k.laohasiri@gmail.com" className="flex items-center gap-2 hover:text-warmGold transition-colors"><Mail size={18} className="text-warmGold" /> k.laohasiri@gmail.com</a>
                     <div className="flex items-start gap-2 max-w-md text-left"><MapPin size={18} className="text-warmGold shrink-0 mt-0.5" /> Silom Road, Bangrak, Bangkok 10500</div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default SectionStrategy;