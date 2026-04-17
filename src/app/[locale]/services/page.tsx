import { useTranslations, useLocale } from 'next-intl';
import { Calendar } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { servicesData } from '@/data/servicesData';

export default function ServicesPage() {
  const t = useTranslations('Services');
  const tIndex = useTranslations('Index');
  const locale = useLocale() as 'en' | 'el' | 'de';

  return (
    <main className="flex-1 py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="max-w-2xl mb-20">
           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">{t('title')}</h1>
           <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">{t('subtitle')}</p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {servicesData.map((service, idx) => (
             <div id={service.id} key={service.id} className="scroll-mt-32">
                <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-200/60 items-stretch group hover:shadow-xl transition-shadow duration-500`}>
                   
                   {/* Icon / Branding Side */}
                   <div className="w-full lg:w-1/3 bg-slate-50 flex flex-col items-center justify-center p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-slate-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50"></div>
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-blue-100/80 flex items-center justify-center text-blue-600 mb-8 relative z-10 shadow-sm border border-blue-200">
                        <service.icon size={48} className="md:w-16 md:h-16" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center relative z-10">{service.locales[locale].title}</h2>
                      <p className="text-slate-500 text-center mt-3 font-medium relative z-10">{service.locales[locale].shortDesc}</p>
                   </div>
                   
                   {/* Content Side */}
                   <div className="w-full lg:w-2/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                      <div className="grid grid-cols-1 gap-8 mb-10">
                         {service.locales[locale].sections.map((sec, i) => (
                           <div key={i}>
                             <h4 className="text-lg font-bold text-blue-900 mb-2">{sec.heading}</h4>
                             <p className="text-slate-600 leading-relaxed">{sec.content}</p>
                           </div>
                         ))}
                      </div>
                      
                      {/* Call To Action */}
                      <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                         <p className="text-sm font-semibold tracking-tight text-slate-400 uppercase">Book an Appointment</p>
                         <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(37,99,235,0.2)] hover:scale-[1.02] active:scale-[0.98]">
                            <Calendar size={18} /> {tIndex('book_cta')}
                         </Link>
                      </div>
                   </div>

                </div>
             </div>
          ))}
        </div>
      </div>
    </main>
  );
}
