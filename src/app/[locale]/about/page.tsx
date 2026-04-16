import { useTranslations } from 'next-intl';
import { Award, GraduationCap, Heart, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <main className="flex-1 py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-16 text-center">{t('title')}</h1>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Placeholder */}
            <div className="w-full lg:w-1/2">
                <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg">
                    {/* Placeholder content until a real portrait is uploaded */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 flex items-center justify-center">
                        <img src="/images/dr_klapsinos_portrait.png" alt="Dr. Nikos Klapsinos" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Bio Content */}
            <div className="w-full lg:w-1/2 space-y-8">
                <p className="text-xl text-slate-600 leading-relaxed">
                  {t('bio')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                         <GraduationCap size={24} />
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900">Extensive Training</h4>
                         <p className="text-sm text-slate-500">Board certified in cardiovascular medicine.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                         <Award size={24} />
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900">Clinical Excellence</h4>
                         <p className="text-sm text-slate-500">Years of experience in acute diagnostics.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                         <Heart size={24} />
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900">Patient-Centric</h4>
                         <p className="text-sm text-slate-500">Compassionate, personalized care plans.</p>
                      </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
