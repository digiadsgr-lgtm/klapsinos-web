'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, RefreshCcw, Syringe, ActivitySquare, AlertTriangle } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { dietsDB } from '../data/diets';

export function SmartDietKit() {
  const t = useTranslations('DietKit');
  const locale = useLocale() as 'en' | 'el' | 'de';
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  const activeContent = dietsDB.find(d => d.id === selectedProfile);

  return (
    <div id="smart-diet-kit" className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-3xl rounded-[32px] shadow-[0_20px_60px_-15px_rgba(34,197,94,0.1)] border border-green-100/50 overflow-hidden mt-12 relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="p-8 border-b border-green-50/50 bg-gradient-to-r from-emerald-900 to-green-900 backdrop-blur-md text-white flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
        <div>
           <h2 className="text-3xl font-extrabold tracking-tight flex items-center gap-3">
             <Leaf className="text-green-400" />
             {t('title')}
           </h2>
           <p className="text-green-100/80 mt-2 font-medium tracking-tight max-w-xl">{t('subtitle')}</p>
        </div>
        {activeContent && (
          <button onClick={() => { setSelectedProfile(null); }} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-[18px] font-semibold tracking-tight transition-all backdrop-blur-md border border-white/10 shrink-0">
             <RefreshCcw size={16} className="text-green-300" /> {t('reset')}
          </button>
        )}
      </div>

      <div className="p-6 md:p-10 relative z-10 min-h-[400px]">
        <AnimatePresence mode="wait">
          {!activeContent ? (
             <motion.div key="selector" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {dietsDB.map(profile => (
                  <button 
                    key={profile.id} 
                    onClick={() => {
                        setSelectedProfile(profile.id);
                        if (window.innerWidth < 768) {
                           setTimeout(() => {
                              document.getElementById('smart-diet-kit')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                           }, 50);
                        }
                    }} 
                    className="flex items-center gap-4 p-6 rounded-[24px] bg-slate-50 hover:bg-green-50 border border-slate-100 hover:border-green-200 transition-all text-left group"
                  >
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${profile.bg} ${profile.color} group-hover:scale-110 transition-transform`}>
                        <profile.icon size={28} />
                     </div>
                     <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-800">{t(profile.id as any)}</h4>
                        <p className="text-sm text-slate-500 font-medium mt-1">{t('generate')} →</p>
                     </div>
                  </button>
               ))}
             </motion.div>
          ) : (
             <motion.div key="results" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-8">
                 
                 <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                     <div className={`w-16 h-16 rounded-[20px] flex items-center justify-center ${activeContent.bg} ${activeContent.color}`}>
                        <activeContent.icon size={32} />
                     </div>
                     <div>
                        <h3 className="text-3xl font-extrabold text-slate-800">{activeContent.locales[locale].title}</h3>
                        <p className="text-green-600 font-bold tracking-tight">{t('results')}</p>
                     </div>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Rules */}
                    <div className="bg-emerald-50/50 rounded-[28px] p-6 md:p-8 border border-emerald-100">
                       <h4 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                         <ActivitySquare className="text-emerald-500" /> {t('diet_plan')}
                       </h4>
                       <ul className="space-y-4">
                          {activeContent.locales[locale].rules.map((rule, idx) => (
                             <li key={idx} className="flex gap-3 text-emerald-800 font-medium leading-relaxed bg-white/60 p-4 rounded-2xl">
                                <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center text-sm font-bold shrink-0">{idx + 1}</span>
                                {rule}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Tests */}
                    <div className="bg-blue-50/50 rounded-[28px] p-6 md:p-8 border border-blue-100">
                       <h4 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                         <Syringe className="text-blue-500" /> {t('medical_tests')}
                       </h4>
                       <ul className="space-y-3">
                          {activeContent.locales[locale].tests.map((test, idx) => (
                             <li key={idx} className="flex gap-3 items-center text-blue-800 font-bold bg-white/60 p-4 rounded-2xl shadow-sm border border-blue-100/50">
                                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                                {test}
                             </li>
                          ))}
                       </ul>
                    </div>
                 </div>

                 {/* Disclaimer */}
                 <div className="p-5 rounded-[20px] bg-red-50 text-red-800 text-[15px] font-semibold border border-red-100 flex items-start gap-4">
                    <AlertTriangle className="shrink-0 text-red-500 mt-0.5" size={24} />
                    <p>{t('disclaimer')}</p>
                 </div>

             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
