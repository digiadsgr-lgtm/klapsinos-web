import { library } from '@/data/library';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';

export default function LibraryPage() {
  const locale = useLocale() as 'en' | 'el' | 'de';
  
  const tr = {
    el: { title: 'Ιατρική Βιβλιοθήκη', subtitle: 'Άρθρα, μελέτες και ιατρικές ενημερώσεις από τον Dr. Κλαψινό.', readMore: 'Διαβάστε περισσότερα', time: 'χρόνος ανάγνωσης' },
    en: { title: 'Medical Library', subtitle: 'Articles, studies, and medical updates by Dr. Klapsinos.', readMore: 'Read more', time: 'read' },
    de: { title: 'Medizinische Bibliothek', subtitle: 'Artikel, Studien und medizinische Updates von Dr. Klapsinos.', readMore: 'Weiterlesen', time: 'lies' }
  }[locale];

  return (
    <main className="flex-1 py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
             <BookOpen className="text-blue-600" size={40} />
             {tr.title}
          </h1>
          <p className="text-xl text-slate-600">{tr.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {library.map((article) => {
             const data = article.locales[locale];
             return (
               <Link href={`/library/${article.slug}`} key={article.slug} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition flex border border-slate-100">
                  <div className="h-48 bg-slate-100 relative overflow-hidden">
                     <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition z-10"></div>
                     <img src={article.image || "/images/hero_background.png"} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                     <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-blue-800 uppercase tracking-wider shadow-sm">
                         {article.category}
                     </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                     <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 font-medium">
                        <Clock size={16} />
                        <span>{article.readingTime}</span>
                     </div>
                     <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition">
                         {data.title}
                     </h2>
                     <p className="text-slate-600 mb-8 flex-1">
                         {data.excerpt}
                     </p>
                     <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                        {tr.readMore} <ChevronRight size={18} className="mt-0.5" />
                     </div>
                  </div>
               </Link>
             )
          })}
        </div>
      </div>
    </main>
  );
}
