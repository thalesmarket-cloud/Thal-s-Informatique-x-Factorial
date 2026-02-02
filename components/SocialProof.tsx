
import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Jean Dupont",
      role: "DRH, Groupe LogiTech",
      content: "Grâce au binôme Thalès x Factorial, nous avons réduit de 40% le temps de gestion des congés. L'accompagnement local a été crucial pour le paramétrage complexe de notre convention collective."
    },
    {
      name: "Sophie Martin",
      role: "Responsable RH, BioFoods",
      content: "Une interface que les salariés adorent ! Le portail RH Factorial est d'une simplicité enfantine. Thalès Informatique a su former nos équipes en 2 jours seulement."
    }
  ];

  const clientLogoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKESdypzbjCiJ2YyP05D4i-mRSQkbSJfl3g&s";

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Ils nous font confiance</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all dark:invert">
            <img src={clientLogoUrl} alt="Partenaire" className="h-12 w-auto object-contain" />
            <img src={clientLogoUrl} alt="Partenaire" className="h-12 w-auto object-contain" />
            <img src={clientLogoUrl} alt="Partenaire" className="h-12 w-auto object-contain" />
            <img src={clientLogoUrl} alt="Partenaire" className="h-12 w-auto object-contain" />
            <img src={clientLogoUrl} alt="Partenaire" className="h-12 w-auto object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 relative">
              <div className="absolute top-6 right-8 text-blue-600/10">
                <Quote size={64} fill="currentColor" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
              </div>
              <p className="text-lg italic text-slate-600 dark:text-slate-300 mb-6 relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-400">
                  {t.name[0]}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">{t.name}</h5>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Clients Monde</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">20 ans</div>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">D'Expertise IT</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Satisfaction Client</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">48h</div>
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Support Réactif</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
