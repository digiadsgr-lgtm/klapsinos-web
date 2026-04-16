"use client";

import { useTranslations } from 'next-intl';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSmsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const smsBody = encodeURIComponent(`Message from ${name}:\n\n${message}`);
    // Use the doctor's mobile number
    window.location.href = `sms:+306974101601?body=${smsBody}`;
  };

  return (
    <main className="flex-1 py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{t('title')}</h1>
          <p className="text-xl text-slate-600">Get in touch to schedule an appointment or for any general inquiries.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
           
           {/* Info Side */}
           <div className="w-full lg:w-2/5 bg-slate-900 p-12 text-white">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <ul className="space-y-8">
                 <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-teal-400" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-400 font-bold tracking-wider uppercase mb-1">{t('address_label')}</p>
                        <a href="https://maps.app.goo.gl/4Acyq4cFxxChSZDF6" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-teal-300 transition block">
                           {t('address')}
                        </a>
                    </div>
                 </li>
                 <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-teal-400" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-400 font-bold tracking-wider uppercase mb-1">{t('phone')}</p>
                        <a href="tel:+302831056030" className="text-lg hover:text-teal-300 transition">28310 56030</a>
                        <br/>
                        <a href="tel:+306974101601" className="text-lg hover:text-teal-300 transition">+30 6974 101601</a>
                    </div>
                 </li>
              </ul>

              <div className="mt-12 p-6 bg-slate-800 rounded-2xl">
                 <p className="font-bold mb-2">{t('hours')}</p>
                 <p className="text-slate-300 text-sm">{t('hours_val')}</p>
              </div>
           </div>

           {/* Form Side */}
           <div className="w-full lg:w-3/5 p-12">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Send an SMS</h3>
              <p className="text-slate-500 mb-8 font-medium">Type your message below and we will send it directly to the doctor's mobile phone via SMS.</p>
              <form onSubmit={handleSmsSubmit} className="space-y-6">
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('form_name')}</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t('form_msg')}</label>
                    <textarea rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="E.g. I would like to schedule a Triplex..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"></textarea>
                 </div>
                 <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30">
                    Send SMS <Send size={18} />
                 </button>
              </form>
           </div>

        </div>
      </div>
    </main>
  );
}
