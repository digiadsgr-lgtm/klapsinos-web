'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { HeartPulse, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation({ locale }: { locale: string }) {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/library', label: locale === 'el' ? 'Βιβλιοθήκη' : locale === 'en' ? 'Library' : 'Bibliothek' },
    { href: '/contact', label: t('contact') }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-700 transition">
            <HeartPulse size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-tight text-slate-900">Dr. Klapsinos</span>
            <span className="text-xs font-medium text-slate-500 tracking-wider">CARDIOLOGY</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-blue-600 ${pathname === link.href ? 'text-blue-600' : 'text-slate-600'}`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-slate-200 pl-6 ml-2">
             <a href="/el" className={`text-xs font-bold px-2 py-1 rounded ${locale === 'el' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>EL</a>
             <a href="/en" className={`text-xs font-bold px-2 py-1 rounded ${locale === 'en' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>EN</a>
             <a href="/de" className={`text-xs font-bold px-2 py-1 rounded ${locale === 'de' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'}`}>DE</a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold ${pathname === link.href ? 'text-blue-600' : 'text-slate-800'}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <span className="text-sm text-slate-500 font-medium">Language:</span>
                <a href="/el" className="text-sm font-bold text-slate-800">EL</a>
                <a href="/en" className="text-sm font-bold text-slate-800">EN</a>
                <a href="/de" className="text-sm font-bold text-slate-800">DE</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
