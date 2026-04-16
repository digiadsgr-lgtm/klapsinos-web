import { useTranslations } from 'next-intl';
import { HeartPulse, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const tNav = useTranslations('Nav');
  const tContact = useTranslations('Contact');
  const d = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-12">
         
         {/* Brand Col */}
         <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <HeartPulse size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white">Dr. Klapsinos</span>
                <span className="text-xs font-medium text-slate-400 tracking-wider">CARDIOLOGY</span>
              </div>
            </div>
            <p className="max-w-sm text-slate-400">
              Advanced, state-of-the-art cardiovascular care located in the heart of Rethymno, Crete. Serving locals and tourists with excellence and compassion.
            </p>
         </div>

         {/* Quick Links */}
         <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-blue-400 transition">{tNav('home')}</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">{tNav('about')}</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">{tNav('services')}</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">{tNav('contact')}</a></li>
            </ul>
         </div>

         {/* Contact Info */}
         <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">{tContact('title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                <a href="https://maps.app.goo.gl/4Acyq4cFxxChSZDF6" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                   {tContact('address')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <a href="tel:+302831056030" className="hover:text-white transition">2831 056030</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <a href="mailto:info@klapsinos.gr" className="hover:text-white transition">info@klapsinos.gr</a>
              </li>
            </ul>
         </div>

      </div>
      <div className="container mx-auto px-6 max-w-6xl mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
         <p>&copy; {d} Dr. Nikos Klapsinos. All rights reserved.</p>
         <p>Medical Disclaimer: In case of severe emergency, contact 112 or 166 immediately.</p>
      </div>
    </footer>
  );
}
