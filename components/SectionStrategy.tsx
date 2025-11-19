import React, { useState } from 'react';
import { STRATEGY_STEPS, UNIQUE_THAI_PRODUCTS } from '../constants';
import { CheckSquare, Lightbulb, Target, ArrowRight, ChevronDown, Download, Calculator, RefreshCw, FileSpreadsheet, Phone, Mail, Globe, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsPDF } from "jspdf";
import { CostingRow } from '../types';

const SectionStrategy: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // --- CALCULATOR STATE ---
  const [costRows, setCostRows] = useState<CostingRow[]>([
    { id: 1, productName: 'Jasmine Rice (1kg)', fobPrice: 0.85, freightCost: 0.15, dutyRate: 15, markup: 25 },
    { id: 2, productName: 'Canned Tuna (185g)', fobPrice: 1.10, freightCost: 0.08, dutyRate: 10, markup: 30 },
    { id: 3, productName: 'Auto Filter', fobPrice: 3.50, freightCost: 0.50, dutyRate: 20, markup: 40 },
    { id: 4, productName: '', fobPrice: 0, freightCost: 0, dutyRate: 0, markup: 0 },
    { id: 5, productName: '', fobPrice: 0, freightCost: 0, dutyRate: 0, markup: 0 },
  ]);

  const toggleExpand = (idx: number) => {
    setExpandedId(expandedId === idx ? null : idx);
  };

  // --- CALCULATOR LOGIC ---
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
    // Markup formula: Price = Cost / (1 - Margin%)
    // OR Simple Markup: Cost * (1 + Markup%) -> Using Simple Markup here for clarity
    return landed * (1 + (row.markup / 100));
  };

  const handleExportCSV = () => {
    const headers = ["Product Name", "FOB (USD)", "Freight (USD)", "Duty (%)", "Landed Cost (USD)", "Markup (%)", "Est. Retail Price (USD)"];
    const csvRows = [
        headers.join(','), // header row
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
    a.setAttribute('download', 'Thai2Africa_Landed_Cost_Calc.csv');
    a.click();
  };

  // --- PDF GENERATION LOGIC ---
  const handleDownloadPDF = () => {
    setIsGenerating(true);
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const maxLineWidth = pageWidth - (margin * 2);
    let y = 20;

    // Improved Helper to add text with auto-paging and line splitting
    const addText = (text: string, fontSize: number, fontType: string = "normal", color: string = "#1A1A1A", bottomSpacing: number = 7) => {
        doc.setFontSize(fontSize);
        doc.setFont("helvetica", fontType);
        doc.setTextColor(color);

        // Split text to fit width
        const textLines = doc.splitTextToSize(text, maxLineWidth);
        const lineHeight = fontSize * 0.4; 
        const blockHeight = textLines.length * lineHeight;

        // Check if we need a new page
        if (y + blockHeight > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }

        doc.text(textLines, margin, y);
        y += blockHeight + (bottomSpacing - lineHeight) + 2; // Adjust spacing
    };

    // Helper for dividing lines
    const addDivider = () => {
        if (y + 10 > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, y, pageWidth - margin, y);
        y += 10;
    };

    // --- TITLE PAGE ---
    addText("Africa-Thai Trade Report", 24, "bold", "#2A6F97", 10);
    addText("Official Execution Guide & Strategic Roadmap", 16, "normal", "#1A1A1A", 15);
    
    addText("Presented by Kris Laohasiri", 12, "bold", "#1A1A1A", 5);
    addText("Tel/WhatsApp: +66 81 851 9922", 10, "normal", "#444444", 5);
    addText("Email: krisada@email.com", 10, "normal", "#444444", 5);
    addText("Web: www.vickyamber.com", 10, "normal", "#D4A017", 20);

    addText("Prepared for Mr. Lakmal", 12, "italic", "#666666", 20);
    
    addDivider();

    // --- 90 DAY PLAN ---
    addText("1. Tactical Action Plan (90 Days)", 18, "bold", "#D4A017", 10);
    
    STRATEGY_STEPS.forEach((step, idx) => {
        // Check page space for step block
        if (y > pageHeight - 30) {
            doc.addPage();
            y = margin;
        }
        addText(`${idx + 1}. ${step.title}`, 14, "bold", "#1A1A1A", 6);
        addText(step.desc, 11, "normal", "#444444", 12);
    });

    y += 5;
    addDivider();

    // --- PRODUCT DEEP DIVES ---
    addText("2. Hidden Gems & Market Intelligence", 18, "bold", "#2F5233", 10);
    addText("Detailed analysis of high-potential Thai exports for South Africa & Malawi.", 11, "italic", "#666666", 15);

    UNIQUE_THAI_PRODUCTS.forEach((product, idx) => {
        // Force page break for a new product if space is tight
        if (y > pageHeight - 60) {
            doc.addPage();
            y = margin;
        }

        // Product Header Background
        doc.setFillColor(242, 242, 242);
        doc.rect(margin, y - 6, maxLineWidth, 14, 'F');
        
        addText(`${idx + 1}. ${product.name}`, 14, "bold", "#2A6F97", 8);
        
        addText(`Primary Target: ${product.target}`, 11, "bold", "#1A1A1A", 5);
        addText(`Strategic Value: ${product.note}`, 11, "italic", "#444444", 10);

        // Details loop
        product.details.forEach((detail) => {
            // Ensure title and at least one line of content stay together
            if (y > pageHeight - 40) {
                doc.addPage();
                y = margin;
            }
            addText(detail.title, 10, "bold", "#D4A017", 4);
            addText(detail.content, 10, "normal", "#444444", 8);
        });

        y += 8; // Spacing between products
    });

    // Save
    doc.save("AfricaThai_Execution_Guide.pdf");
    setIsGenerating(false);
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
              Below you will find a structured 90-day immediate action plan, a <strong>Landed Cost Calculator</strong> for margin analysis, and deep-dive analyses of high-potential "Hidden Gem" products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Col: 90 Day Plan */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-24 z-10">
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
                <button 
                  onClick={handleDownloadPDF}
                  disabled={isGenerating}
                  className="w-full py-4 bg-charcoal text-white rounded-xl font-bold hover:bg-lake transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isGenerating ? 'Generating PDF...' : 'Download Full Execution Guide'} 
                  {!isGenerating && <Download size={18} />}
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
          </div>
        </div>

        {/* NEW: Interactive Landed Cost Calculator */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12 mb-16">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                 <h3 className="text-2xl font-serif font-bold text-charcoal flex items-center gap-3">
                   <Calculator className="text-deepGreen" size={28} />
                   Interactive Landed Cost Calculator
                 </h3>
                 <p className="text-gray-500 text-sm mt-2">
                   Simulate margin scenarios for up to 5 products. Exports to CSV for Excel analysis.
                 </p>
              </div>
              <button 
                onClick={handleExportCSV}
                className="flex items-center gap-2 bg-deepGreen/10 text-deepGreen px-6 py-3 rounded-lg font-bold hover:bg-deepGreen hover:text-white transition-colors"
              >
                 <FileSpreadsheet size={20} /> Export to Excel
              </button>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                   <tr className="bg-gray-50 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 w-1/4">Product Name</th>
                      <th className="p-4">FOB Price <span className="block text-[10px] text-gray-400">(USD)</span></th>
                      <th className="p-4">Freight <span className="block text-[10px] text-gray-400">(USD/Unit)</span></th>
                      <th className="p-4">Duty Rate <span className="block text-[10px] text-gray-400">(%)</span></th>
                      <th className="p-4 bg-lake/5 text-lake">Landed Cost <span className="block text-[10px] opacity-70">(USD)</span></th>
                      <th className="p-4">Markup <span className="block text-[10px] text-gray-400">(%)</span></th>
                      <th className="p-4 bg-warmGold/5 text-warmGold">Est. Retail <span className="block text-[10px] opacity-70">(USD)</span></th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                   {costRows.map((row) => {
                      const landed = calculateLanded(row);
                      const retail = calculateRetail(row);
                      const profit = retail - landed;

                      return (
                        <tr key={row.id} className="hover:bg-gray-50 transition-colors group">
                           <td className="p-3">
                             <input 
                               type="text" 
                               value={row.productName}
                               placeholder="Item Name"
                               onChange={(e) => handleInputChange(row.id, 'productName', e.target.value)}
                               className="w-full bg-transparent border-b border-transparent group-hover:border-gray-300 focus:border-lake outline-none px-2 py-1 font-medium text-charcoal placeholder-gray-300"
                             />
                           </td>
                           <td className="p-3">
                             <input 
                               type="number" 
                               value={row.fobPrice || ''}
                               placeholder="0.00"
                               onChange={(e) => handleInputChange(row.id, 'fobPrice', parseFloat(e.target.value) || 0)}
                               className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm focus:ring-2 focus:ring-lake/20 outline-none"
                             />
                           </td>
                           <td className="p-3">
                             <input 
                               type="number" 
                               value={row.freightCost || ''}
                               placeholder="0.00"
                               onChange={(e) => handleInputChange(row.id, 'freightCost', parseFloat(e.target.value) || 0)}
                               className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm focus:ring-2 focus:ring-lake/20 outline-none"
                             />
                           </td>
                           <td className="p-3">
                             <div className="relative">
                               <input 
                                 type="number" 
                                 value={row.dutyRate || ''}
                                 placeholder="0"
                                 onChange={(e) => handleInputChange(row.id, 'dutyRate', parseFloat(e.target.value) || 0)}
                                 className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm focus:ring-2 focus:ring-lake/20 outline-none pr-6"
                               />
                               <span className="absolute right-2 top-2 text-gray-400 text-xs">%</span>
                             </div>
                           </td>
                           <td className="p-4 bg-lake/5 text-right font-mono font-bold text-lake">
                              ${landed.toFixed(2)}
                           </td>
                           <td className="p-3">
                             <div className="relative">
                               <input 
                                 type="number" 
                                 value={row.markup || ''}
                                 placeholder="0"
                                 onChange={(e) => handleInputChange(row.id, 'markup', parseFloat(e.target.value) || 0)}
                                 className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-right font-mono text-sm focus:ring-2 focus:ring-lake/20 outline-none pr-6"
                               />
                               <span className="absolute right-2 top-2 text-gray-400 text-xs">%</span>
                             </div>
                           </td>
                           <td className="p-4 bg-warmGold/5 text-right">
                              <div className="font-mono font-bold text-charcoal">${retail.toFixed(2)}</div>
                              {profit > 0 && <div className="text-[10px] text-green-600 font-bold">+{profit.toFixed(2)} Profit</div>}
                           </td>
                        </tr>
                      );
                   })}
                </tbody>
              </table>
           </div>
           <div className="mt-6 text-xs text-gray-400 flex items-center gap-2">
              <RefreshCw size={12} />
              <span>Values update automatically. Formula: Retail = (FOB + Freight + Duty) * (1 + Markup%)</span>
           </div>
        </div>

        {/* NEW: Strategic Advisor Contact Card (Bottom Full Width) */}
        <div className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl shadow-lg border border-lake/20 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-lake/10 p-4 rounded-full text-lake shrink-0">
                <User size={48} />
            </div>
            <div className="text-center md:text-left flex-grow">
                <h4 className="text-2xl font-serif font-bold text-charcoal mb-2">Strategic Trade Advisor</h4>
                <p className="text-gray-600 text-lg font-medium mb-4">Contact us for personalized market entry strategies and B2B matchmaking.</p>
                
                <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 text-sm text-gray-700">
                     <div className="flex items-center gap-2">
                         <User size={18} className="text-warmGold" />
                         <span className="font-bold">Kris Laohasiri</span>
                     </div>
                     <a href="tel:+66818519922" className="flex items-center gap-2 hover:text-lake transition-colors">
                        <Phone size={18} className="text-warmGold" />
                        +66(0)81 851 9922 (WhatsApp)
                     </a>
                     <a href="mailto:krisada@email.com" className="flex items-center gap-2 hover:text-lake transition-colors">
                        <Mail size={18} className="text-warmGold" />
                        krisada@email.com
                     </a>
                     <a href="https://www.vickyamber.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-lake transition-colors">
                        <Globe size={18} className="text-warmGold" />
                        www.vickyamber.com
                     </a>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default SectionStrategy;