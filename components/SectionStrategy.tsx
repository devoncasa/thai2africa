import React, { useState } from 'react';
import { STRATEGY_STEPS, UNIQUE_THAI_PRODUCTS } from '../constants';
import { CheckSquare, Lightbulb, Target, ArrowRight, ChevronDown, Download, Calculator, RefreshCw, FileSpreadsheet, Phone, Mail, Globe, User, Building2, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsPDF } from "jspdf";
import { CostingRow, Language } from '../types';
import { t } from '../localization';

const SectionStrategy: React.FC<{ lang: Language }> = ({ lang }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // --- CALCULATOR STATE ---
  // Updated with 2025 Freight Estimates (approx $2200 for 20ft Rice to Durban ~ $0.11/kg if 20T load)
  // Auto Parts: $3500 to Apapa ~ Higher freight per unit
  const [costRows, setCostRows] = useState<CostingRow[]>([
    { id: 1, productName: 'Thai Parboiled Rice (1kg)', fobPrice: 0.55, freightCost: 0.12, dutyRate: 0, markup: 15 }, 
    { id: 2, productName: 'Hilux Revo Bumper', fobPrice: 45.00, freightCost: 12.00, dutyRate: 20, markup: 40 },
    { id: 3, productName: 'Fiber Cement Board', fobPrice: 8.50, freightCost: 4.00, dutyRate: 25, markup: 30 },
    { id: 4, productName: '', fobPrice: 0, freightCost: 0, dutyRate: 0, markup: 0 },
  ]);

  const toggleExpand = (idx: number) => {
    setExpandedId(expandedId === idx ? null : idx);
  };

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
    return row.fobPrice + row.freightCost + dutyAmt;
  };

  const calculateRetail = (row: CostingRow) => {
    const landed = calculateLanded(row);
    return landed * (1 + (row.markup / 100));
  };

  const handleExportCSV = () => {
    const headers = ["Product Name", "FOB (USD)", "Freight (USD)", "Duty (%)", "Landed Cost (USD)", "Markup (%)", "Est. Retail Price (USD)"];
    const csvRows = [
        headers.join(','), 
        ...costRows.filter(r => r.productName).map(row => {
            const landed = calculateLanded(row).toFixed(2);
            const retail = calculateRetail(row).toFixed(2);
            return `"${row.productName}",${row.fobPrice},${row.freightCost},${row.dutyRate},${landed},${row.markup},${retail}`;
        })
    ].join('\n');

    const blob = new Blob([csvRows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'Thai2Africa_Landed_Cost_2025.csv');
    a.click();
  };

  const handleDownloadPDF = () => {
    setIsGenerating(true);
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const maxLineWidth = pageWidth - (margin * 2);
    let y = 20;

    const addText = (text: string, fontSize: number, fontType: string = "normal", color: string = "#1A1A1A", bottomSpacing: number = 7) => {
        doc.setFontSize(fontSize);
        doc.setFont("helvetica", fontType);
        doc.setTextColor(color);
        const textLines = doc.splitTextToSize(text, maxLineWidth);
        const lineHeight = fontSize * 0.4; 
        const blockHeight = textLines.length * lineHeight;
        if (y + blockHeight > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }
        doc.text(textLines, margin, y);
        y += blockHeight + (bottomSpacing - lineHeight) + 2; 
    };

    const addDivider = () => {
        if (y + 10 > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, y, pageWidth - margin, y);
        y += 10;
    };

    addText("Strategic Trade Synergy: 2025-2030", 24, "bold", "#2A6F97", 10);
    addText("Operational Blueprint for Trade Intermediaries", 16, "normal", "#1A1A1A", 15);
    
    addText("Presented by Thai-Africa Trade Nexus", 12, "bold", "#1A1A1A", 5);
    addText("Contact: Kris Laohasiri", 10, "bold", "#1A1A1A", 5);
    addText("Tel/WhatsApp: +66 (0)81 851 9922", 10, "normal", "#444444", 5);
    addText("Email: k.laohasiri@gmail.com", 10, "normal", "#444444", 5);
    addText("Address: 919/1 JTC Building (BB038), Silom 19, Silom Road, Bangrak, Bangkok 10500", 10, "normal", "#444444", 5);
    addText("Web: www.ThaiAfricanTrade.com", 10, "normal", "#D4A017", 20);

    addText("Official Trade Strategy Document", 12, "italic", "#666666", 20);
    addDivider();

    addText("1. Tactical Action Plan (90 Days)", 18, "bold", "#D4A017", 10);
    STRATEGY_STEPS.forEach((step, idx) => {
        if (y > pageHeight - 30) { doc.addPage(); y = margin; }
        addText(`${idx + 1}. ${step.title}`, 14, "bold", "#1A1A1A", 6);
        addText(step.desc, 11, "normal", "#444444", 12);
    });

    y += 5;
    addDivider();

    addText("2. Hidden Gems & Market Intelligence", 18, "bold", "#2F5233", 10);
    UNIQUE_THAI_PRODUCTS.forEach((product, idx) => {
        if (y > pageHeight - 60) { doc.addPage(); y = margin; }
        doc.setFillColor(242, 242, 242);
        doc.rect(margin, y - 6, maxLineWidth, 14, 'F');
        addText(`${idx + 1}. ${product.name}`, 14, "bold", "#2A6F97", 8);
        addText(`Primary Target: ${product.target}`, 11, "bold", "#1A1A1A", 5);
        addText(`Strategic Value: ${product.note}`, 11, "italic", "#444444", 10);
        y += 8; 
    });

    doc.save("ThaiAfrica_Strategic_Blueprint_2025.pdf");
    setIsGenerating(false);
  };

  return (
    <div className="py-16 px-6 bg-neutralGrey min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold text-charcoal mb-8 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'strategy', 'title')}</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              {t(lang, 'strategy', 'subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Col: 90 Day Plan */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-24 z-10">
              <h3 className={`text-2xl font-bold text-charcoal mb-8 flex items-center gap-3 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
                <span className="bg-lake h-10 w-10 rounded-lg flex items-center justify-center text-white text-sm font-sans">90d</span>
                {t(lang, 'strategy', 'roadmap_title')}
              </h3>
              <div className="space-y-8 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-100 z-0"></div>
                {STRATEGY_STEPS.map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative z-10">
                     <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-white border-4 border-warmGold flex items-center justify-center shrink-0 shadow-sm"></div>
                     </div>
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

          {/* Right Col: Hidden Gems */}
          <div className="lg:col-span-7">
             <h3 className={`text-2xl font-bold text-charcoal mb-8 flex items-center gap-3 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
               <Lightbulb className="text-warmGold" size={32} />
               {t(lang, 'strategy', 'hidden_gems_title')}
             </h3>
             <div className="grid grid-cols-1 gap-4">
               {UNIQUE_THAI_PRODUCTS.map((product, idx) => (
                 <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
                   <div onClick={() => toggleExpand(idx)} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group">
                     <div className="flex items-start gap-4">
                       <div className="p-2 bg-deepGreen/10 rounded-lg text-deepGreen mt-1"><CheckSquare size={18} /></div>
                       <div>
                         <h4 className="font-bold text-charcoal text-lg group-hover:text-lake transition-colors">{product.name}</h4>
                         <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-bold">Value: {product.note}</p>
                       </div>
                     </div>
                     <div className={`flex items-center gap-3 md:w-1/3 shrink-0 justify-between md:justify-start ${lang === 'ar' ? 'md:pr-4 md:border-r' : 'md:pl-4 md:border-l'} md:border-gray-100`}>
                        <div className="flex items-center gap-3">
                          <Target className="text-warmGold shrink-0" size={20} />
                          <div>
                            <span className="block text-[10px] text-gray-400 uppercase">Target Market</span>
                            <span className="text-sm font-bold text-gray-700">{product.target}</span>
                          </div>
                        </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Landed Cost Calculator */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12 mb-16">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                 <h3 className={`text-2xl font-bold text-charcoal flex items-center gap-3 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>
                   <Calculator className="text-deepGreen" size={28} />
                   {t(lang, 'strategy', 'calculator_title')}
                 </h3>
                 <p className="text-gray-500 text-sm mt-2">
                   {t(lang, 'strategy', 'calculator_desc')}
                 </p>
              </div>
              <button onClick={handleExportCSV} className="flex items-center gap-2 bg-deepGreen/10 text-deepGreen px-6 py-3 rounded-lg font-bold hover:bg-deepGreen hover:text-white transition-colors">
                 <FileSpreadsheet size={20} /> Export to Excel
              </button>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                   <tr className="bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                      <th className={`p-4 w-1/4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>Product Name</th>
                      <th className={`p-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>FOB Price <span className="block text-[10px] text-gray-400">(USD)</span></th>
                      <th className={`p-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>Freight <span className="block text-[10px] text-gray-400">(USD/Unit)</span></th>
                      <th className={`p-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>Duty Rate <span className="block text-[10px] text-gray-400">(%)</span></th>
                      <th className={`p-4 bg-lake/5 text-lake ${lang === 'ar' ? 'text-right' : 'text-left'}`}>Landed Cost <span className="block text-[10px] opacity-70">(USD)</span></th>
                      <th className={`p-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>Markup <span className="block text-[10px] text-gray-400">(%)</span></th>
                      <th className={`p-4 bg-warmGold/5 text-warmGold ${lang === 'ar' ? 'text-right' : 'text-left'}`}>Est. Retail <span className="block text-[10px] opacity-70">(USD)</span></th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                   {costRows.map((row) => {
                      const landed = calculateLanded(row);
                      const retail = calculateRetail(row);
                      return (
                        <tr key={row.id} className="hover:bg-gray-50 transition-colors group">
                           <td className="p-3"><input type="text" value={row.productName} onChange={(e) => handleInputChange(row.id, 'productName', e.target.value)} className="w-full bg-transparent border-b border-transparent group-hover:border-gray-300 outline-none px-2 py-1 font-medium text-charcoal" /></td>
                           <td className="p-3"><input type="number" value={row.fobPrice || ''} onChange={(e) => handleInputChange(row.id, 'fobPrice', parseFloat(e.target.value) || 0)} className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm" /></td>
                           <td className="p-3"><input type="number" value={row.freightCost || ''} onChange={(e) => handleInputChange(row.id, 'freightCost', parseFloat(e.target.value) || 0)} className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm" /></td>
                           <td className="p-3"><input type="number" value={row.dutyRate || ''} onChange={(e) => handleInputChange(row.id, 'dutyRate', parseFloat(e.target.value) || 0)} className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm" /></td>
                           <td className="p-4 bg-lake/5 text-right font-mono font-bold text-lake">${landed.toFixed(2)}</td>
                           <td className="p-3"><input type="number" value={row.markup || ''} onChange={(e) => handleInputChange(row.id, 'markup', parseFloat(e.target.value) || 0)} className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm" /></td>
                           <td className="p-4 bg-warmGold/5 text-right"><div className="font-mono font-bold text-charcoal">${retail.toFixed(2)}</div></td>
                        </tr>
                      );
                   })}
                </tbody>
              </table>
           </div>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl shadow-lg border border-lake/20 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-lake/10 p-4 rounded-full text-lake shrink-0">
                <Building2 size={48} />
            </div>
            <div className="text-center md:text-left flex-grow">
                <h4 className={`text-2xl font-bold text-charcoal mb-2 ${lang === 'ar' ? 'font-arabic' : 'font-serif'}`}>{t(lang, 'strategy', 'support_title')}</h4>
                <p className="text-gray-600 text-lg font-medium mb-4">{t(lang, 'strategy', 'support_desc')}</p>
                <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 text-sm text-gray-700 flex-wrap">
                     <div className="flex items-center gap-2"><User size={18} className="text-warmGold" /> Kris Laohasiri</div>
                     <a href="tel:+66818519922" className="flex items-center gap-2 hover:text-lake transition-colors"><Phone size={18} className="text-warmGold" /> +66 (0)81 851 9922</a>
                     <a href="mailto:k.laohasiri@gmail.com" className="flex items-center gap-2 hover:text-lake transition-colors"><Mail size={18} className="text-warmGold" /> k.laohasiri@gmail.com</a>
                     <div className="flex items-start gap-2 hover:text-lake transition-colors max-w-md text-left"><MapPin size={18} className="text-warmGold shrink-0 mt-0.5" /> 919/1 JTC Building (BB038), Silom 19, Silom Road, Bangrak, Bangkok 10500</div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default SectionStrategy;