import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, Activity, PhoneCall, Calendar } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { FirstAidKit } from '@/components/FirstAidKit';
import { SmartDietKit } from '@/components/SmartDietKit';

export default function HomePage() {
  const t = useTranslations('Index');
  const tSrv = useTranslations('Services');

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-40 text-white overflow-hidden bg-slate-900" style={{ backgroundImage: 'url(/images/hero_background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
        <div className="absolute inset-0 z-0 bg-blue-950/80 mix-blend-multiply backdrop-blur-[2px]"></div>

        <div className="container relative z-10 mx-auto px-6 max-w-6xl flex flex-col items-start justify-center h-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-[12px] bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-semibold tracking-tight shadow-sm">
             <HeartPulse size={16} className="text-teal-400" /> Medical & Tourist Care
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1] max-w-3xl drop-shadow-sm">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200/90 font-medium tracking-tight max-w-2xl mb-12">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/95 hover:bg-white text-slate-900 font-bold rounded-[20px] transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.02] active:scale-[0.98]">
               <Calendar size={20} /> {t('book_cta')}
            </Link>
            <a href="tel:112" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500/90 hover:bg-red-500 backdrop-blur-md text-white border border-red-400/50 font-bold rounded-[20px] transition-all shadow-[0_8px_30px_rgb(239,68,68,0.2)] hover:scale-[1.02] active:scale-[0.98]">
               <PhoneCall size={20} /> {t('emergency_cta')}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[#F5F5F7]">
        <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('services_title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Stethoscope, key: "clinical" },
                  { icon: HeartPulse, key: "triplex" },
                  { icon: Activity, key: "holter" }
                ].map((service, i) => (
                  <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                        <service.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{tSrv(`${service.key}.title`)}</h3>
                      <p className="text-slate-600 leading-relaxed">{tSrv(`${service.key}.desc`)}</p>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Smart First Aid Kit Section & Install Promo */}
      <section className="py-24 bg-white relative">
        {/* Install Prompter */}
        <div className="container mx-auto px-6 max-w-6xl mb-16">
           <div className="bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-blue-900/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="relative z-10 max-w-xl">
                 <h3 className="text-3xl font-extrabold mb-4 tracking-tight">{t('install_title')}</h3>
                 <p className="text-blue-100 text-lg font-medium">
                   {t('install_desc')}
                 </p>
              </div>
              <div className="relative z-10 shrink-0 flex items-center justify-center p-4 bg-white/20 backdrop-blur rounded-[24px] border border-white/30">
                 <img src="/icon.png" alt="Klapsinos App" className="w-20 h-20 shadow-md rounded-[16px]" />
              </div>
           </div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl">
           <FirstAidKit />
        </div>
      </section>

      {/* Smart Diet & Prevention Section */}
      <section className="py-24 bg-[#F5F5F7] border-t border-slate-200/60">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center">
            <SmartDietKit />
        </div>
      </section>
    </main>
  );
}
