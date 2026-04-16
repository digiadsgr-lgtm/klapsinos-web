'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, PhoneCall, Search, HelpCircle } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { firstAidDB } from '../data/firstAid';

export function FirstAidKit() {
  const t = useTranslations('FirstAid');
  const locale = useLocale() as 'en' | 'el' | 'de';
  const [activeTab, setActiveTab] = useState(firstAidDB[0].id);
  const [search, setSearch] = useState('');
  const [quizMode, setQuizMode] = useState(false);

  const filteredEmergencies = firstAidDB.filter(e => 
    e.id.toLowerCase().includes(search.toLowerCase()) || 
    e.keywords.some(k => k.toLowerCase().includes(search.toLowerCase())) ||
    e.locales[locale].title.toLowerCase().includes(search.toLowerCase())
  );

  const displayList = search.length > 0 ? filteredEmergencies : firstAidDB;
  const activeContent = firstAidDB.find(e => e.id === activeTab);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-200/50 overflow-hidden">
      <div className="p-8 border-b border-slate-100/50 bg-slate-900/95 backdrop-blur-md text-white flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
           <h2 className="text-3xl font-extrabold tracking-tight flex items-center gap-3">
             <AlertCircle className="text-red-400" />
             {t('title')}
           </h2>
           <p className="text-slate-300 mt-2 font-medium tracking-tight">{t('subtitle')}</p>
        </div>
        <div className="flex gap-3">
            <button onClick={() => setQuizMode(!quizMode)} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3.5 rounded-[18px] font-semibold tracking-tight transition-all backdrop-blur-md border border-white/5">
                <HelpCircle size={18} className="text-teal-300" /> {t('quiz_cta')}
            </button>
            <a href="tel:112" className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-3.5 rounded-[18px] font-bold tracking-tight transition-all shadow-[0_8px_20px_rgba(239,68,68,0.3)]">
                <PhoneCall size={18} /> 112
            </a>
        </div>
      </div>

      <AnimatePresence mode="wait">
      {quizMode ? (
         <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="p-12 bg-slate-50/50 text-center flex flex-col items-center justify-center min-h-[400px]">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 max-w-2xl leading-tight">
                {locale === 'el' ? 'Νιώθετε έντονο πόνο στο στήθος που αντανακλάται στο αριστερό χέρι ή το πηγούνι;' : 'Are you experiencing chest pressure spreading to your arm or jaw?'}
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => { setActiveTab('heart_attack'); setQuizMode(false); setSearch(''); }} className="px-8 py-4 bg-red-500 text-white rounded-[20px] font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-[0_8px_20px_rgba(239,68,68,0.2)]">
                    {locale === 'el' ? 'Ναι, είναι έντονος' : 'Yes, it\'s severe'}
                </button>
                <button onClick={() => setQuizMode(false)} className="px-8 py-4 bg-white border border-slate-200/60 rounded-[20px] font-bold text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition-all shadow-sm">
                    {locale === 'el' ? 'Όχι, κάτι άλλο' : 'No, something else'}
                </button>
            </div>
         </motion.div>
      ) : (
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 lg:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 p-4 md:p-6 flex flex-col gap-3 max-h-[300px] md:max-h-[600px] overflow-y-auto bg-slate-50/30 shrink-0 shadow-inner md:shadow-none">
           {/* Search Bar */}
           <div className="relative sticky top-0 z-10 pb-4 pt-1 bg-white/10 backdrop-blur-xl">
             <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 mt-[-6px] text-slate-400" />
             <input type="text" placeholder={locale === 'el' ? 'Αναζήτηση συμπτώματος...' : 'Search symptoms...'} value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-11 pr-4 py-3.5 rounded-[18px] bg-white border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-[15px] font-medium text-slate-900 shadow-sm transition-all" />
           </div>

           {displayList.map((em) => (
             <button
               key={em.id}
               onClick={() => setActiveTab(em.id)}
               className={`flex items-center gap-3.5 p-4 rounded-[20px] text-left font-semibold tracking-tight transition-all ${
                 activeTab === em.id 
                   ? 'bg-white shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05)] text-blue-900 border border-blue-100/50' 
                   : 'text-slate-500 hover:bg-white hover:text-slate-800 hover:shadow-sm border border-transparent'
               }`}
             >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeTab === em.id ? em.bg : 'bg-slate-100'}`}>
                   <em.icon className={activeTab === em.id ? em.color : 'text-slate-400'} size={20} />
                </div>
                <span className="leading-tight flex-1">{em.locales[locale].title}</span>
             </button>
           ))}
           {displayList.length === 0 && <p className="text-[15px] text-slate-400 font-medium text-center py-4">{locale === 'el' ? 'Δεν βρέθηκε πρωτόκολλο.' : 'No protocol found.'}</p>}
        </div>

        <div className="w-full md:w-3/5 lg:w-2/3 p-8 lg:p-14 relative overflow-hidden bg-white min-h-[600px]">
            {/* Warning watermark */}
            <AlertCircle size={400} className="absolute -right-32 -bottom-32 text-slate-50/50 z-0 pointer-events-none" />

            <AnimatePresence mode="wait">
              {activeContent && (
                <motion.div
                  key={activeContent.id}
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-10 relative z-10"
                >
                  <div className="flex items-center gap-5">
                      <div className={`w-[88px] h-[88px] rounded-[28px] flex items-center justify-center shadow-sm border border-white ${activeContent.bg} ${activeContent.color}`}>
                         <activeContent.icon size={44} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 max-w-sm leading-tight">{activeContent.locales[locale].title}</h3>
                  </div>
                  
                  <ul className="space-y-4">
                     {activeContent.locales[locale].steps.map((step, index) => (
                       <li key={index} className="flex items-start gap-4 text-slate-700 text-[17px] font-medium leading-relaxed bg-white p-5 rounded-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-100">
                          <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold shadow-sm ${index === 0 ? 'bg-red-500 text-white shadow-red-200' : 'bg-slate-100 text-slate-700'}`}>
                             {index + 1}
                          </span>
                          <span className={`pt-1 ${index === 0 ? 'text-red-600 font-bold' : ''}`}>{step}</span>
                       </li>
                     ))}
                  </ul>
                  
                  {/* Floating Disclaimer */}
                  <div className="mt-8 p-5 rounded-[24px] bg-red-50/80 text-red-800 text-[15px] font-semibold border border-red-100/50 flex items-start gap-3.5 backdrop-blur-sm">
                    <AlertCircle className="shrink-0 text-red-500 mt-0.5" size={22} />
                    <p>{locale === 'el' ? 'Δεν αντικαθιστά την ιατρική βοήθεια. Καλέστε το 166 ή το 112 ΑΜΕΣΩΣ αν τα συμπτώματα είναι σοβαρά.' : 'This does not replace medical help. Call 166/112 immediately for severe symptoms.'}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
      </div>
      )}
      </AnimatePresence>
    </div>
  );
}
