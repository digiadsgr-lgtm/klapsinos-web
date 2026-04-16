"use client";

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale() as 'en' | 'el' | 'de';

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const texts = {
    el: {
      msg: 'Χρησιμοποιούμε απολύτως απαραίτητα cookies για την ομαλή λειτουργία του ιστότοπου και την ασφάλεια (GDPR). Δεν καταγράφουμε προσωπικά ιατρικά σας δεδομένα.',
      btn: 'Κατανοητό'
    },
    en: {
      msg: 'We use strictly necessary cookies to ensure the smooth operation of our website (GDPR). We do not record any personal medical data.',
      btn: 'Got it'
    },
    de: {
      msg: 'Wir verwenden unbedingt notwendige Cookies, um den reibungslosen Betrieb unserer Website zu gewährleisten (DSGVO).',
      btn: 'Verstanden'
    }
  }[locale];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 animate-in slide-in-from-bottom-10 fade-in duration-700">
      <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur shadow-2xl rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden border border-slate-800">
        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl font-medium">
          {texts.msg}
        </p>
        <button
          onClick={acceptCookies}
          className="w-full md:w-auto shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all text-sm uppercase tracking-wider"
        >
          {texts.btn}
        </button>
      </div>
    </div>
  );
}
