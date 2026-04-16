import { library } from '@/data/library';
import { notFound } from 'next/navigation';
import { ChevronLeft, Calendar, User, Clock } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  
  const article = library.find(a => a.slug === slug);
  
  if (!article) {
    notFound();
  }

  const data = article.locales[locale as 'en' | 'el' | 'de'];
  if (!data) notFound();

  const tr = {
    el: { back: 'Επιστροφή στη Βιβλιοθήκη', dr: 'Dr. Νίκος Κλαψινός', posted: 'Δημοσιεύτηκε' },
    en: { back: 'Back to Library', dr: 'Dr. Nikos Klapsinos', posted: 'Posted' },
    de: { back: 'Zurück zur Bibliothek', dr: 'Dr. Nikos Klapsinos', posted: 'Gepostet' }
  }[locale as 'en' | 'el' | 'de'];

  return (
    <main className="flex-1 py-12 md:py-24 bg-white min-h-screen">
       <article className="container mx-auto px-6 max-w-4xl">
          
          <Link href="/library" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition font-medium mb-12">
             <ChevronLeft size={20} /> {tr.back}
          </Link>

          <header className="mb-16 border-b border-slate-100 pb-12">
             <div className="flex items-center gap-3 text-sm text-blue-600 font-bold uppercase tracking-wider mb-6">
                <span className="bg-blue-50 px-3 py-1 rounded-full">{article.category}</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
                {data.title}
             </h1>

             {article.image && (
                <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-md">
                   <img src={article.image} alt={data.title} className="w-full h-full object-cover" />
                </div>
             )}
             
             <div className="flex flex-wrap items-center gap-8 text-slate-500">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                      <User size={20} />
                   </div>
                   <span className="font-bold text-slate-700">{tr.dr}</span>
                </div>
                <div className="flex items-center gap-2">
                   <Calendar size={18} />
                   <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                   <Clock size={18} />
                   <span>{article.readingTime}</span>
                </div>
             </div>
          </header>

          <div className="prose prose-lg prose-slate prose-blue max-w-none">
             {data.content.map((paragraph, index) => {
                 if(paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-2xl font-bold text-slate-900 mt-12 mb-6">{paragraph.replace('### ', '')}</h3>
                 }
                 return <p key={index} className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: paragraph }} />
             })}
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 bg-slate-50 p-8 rounded-3xl">
             <div className="flex items-center gap-6">
                 <img src="/images/dr_klapsinos_portrait.png" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md" alt="" />
                 <div>
                    <h4 className="font-bold text-xl text-slate-900">Dr. Nikos Klapsinos, MD</h4>
                    <p className="text-slate-600 mt-1">Specialized Cardiologist based in Rethymno, Crete.</p>
                 </div>
             </div>
          </div>
       </article>
    </main>
  );
}
