import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, Activity, PhoneCall, Calendar } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { FirstAidKit } from '@/components/FirstAidKit';

export default function HomePage() {
  const t = useTranslations('Index');

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
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Comprehensive Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Stethoscope, title: "Clinical Examination", desc: "Thorough cardiovascular assessment and consultation." },
                  { icon: HeartPulse, title: "Echocardiogram (Triplex)", desc: "Advanced ultrasound imaging of the heart." },
                  { icon: Activity, title: "Holter Monitor", desc: "24-48 hour ambulatory ECG tracking." }
                ].map((service, i) => (
                  <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                        <service.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Smart First Aid Kit Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
           <FirstAidKit />
        </div>
      </section>
    </main>
  );
}
