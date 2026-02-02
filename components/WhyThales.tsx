
import React from 'react';
import { Headphones, GraduationCap, PenTool, TrendingUp } from 'lucide-react';

const WhyThales: React.FC = () => {
  const points = [
    {
      title: "Conseil personnalisé",
      icon: <TrendingUp className="text-blue-600" />,
      desc: "Nous analysons votre existant pour paramétrer la solution au plus proche de vos besoins."
    },
    {
      title: "Déploiement clé en main",
      icon: <PenTool className="text-blue-600" />,
      desc: "De l'import des données au lancement, nous gérons l'intégralité de l'aspect technique."
    },
    {
      title: "Formation des équipes",
      icon: <GraduationCap className="text-blue-600" />,
      desc: "Accompagnement de vos administrateurs et formation utilisateur pour une adoption rapide."
    },
    {
      title: "Support technique local",
      icon: <Headphones className="text-blue-600" />,
      desc: "Un interlocuteur dédié qui connaît votre dossier et répond à vos questions sans délai."
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              {points.map((p, idx) => (
                <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 shadow-sm border border-slate-100 dark:border-slate-700">
                    {p.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Pourquoi Thalès Informatique ?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Plus qu'un logiciel, un véritable partenaire de proximité
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              L'outil est puissant, mais sa réussite dépend de son intégration. En choisissant Thalès Informatique, vous bénéficiez de 20 ans d'expérience dans l'IT et les logiciels de gestion.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span>Expertise métier reconnue sur le secteur Grand-Ouest.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span>Certification partenaire officiel par Factorial.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span>Support client basé en France, pas de plateforme off-shore.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThales;
