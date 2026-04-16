import { useTranslations } from 'next-intl';
import { Stethoscope, HeartPulse, Activity, ClipboardList } from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('Services');

  const services = [
    {
      id: 'clinical',
      icon: Stethoscope,
    },
    {
      id: 'triplex',
      icon: HeartPulse,
    },
    {
      id: 'dioisofageio',
      icon: Activity,
    },
    {
      id: 'holter',
      icon: Activity,
    },
    {
      id: 'stress',
      icon: ClipboardList,
    }
  ];

  return (
    <main className="flex-1 py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{t('title')}</h1>
        <p className="text-xl text-slate-600 mb-16">{t('subtitle')}</p>

        <div className="space-y-12">
          {services.map((service, idx) => (
             <div key={service.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 items-center`}>
                <div className="w-full md:w-2/5 h-64 md:h-auto bg-slate-100 flex items-center justify-center p-12">
                   <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                     <service.icon size={48} />
                   </div>
                </div>
                <div className="w-full md:w-3/5 p-8 md:p-12">
                   <h2 className="text-3xl font-bold text-slate-900 mb-4">{t(`${service.id}.title` as any)}</h2>
                   <p className="text-lg text-slate-600 leading-relaxed">
                     {t(`${service.id}.desc` as any)}
                   </p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </main>
  );
}
