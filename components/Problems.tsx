
import React from 'react';
import { Clock, FileWarning, Users, Calculator } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Gestion chronophage",
      desc: "Perte de temps sur les saisies manuelles des congés et des absences sur Excel."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Préparation de paie complexe",
      desc: "Erreurs fréquentes lors de la transmission des variables de paie au comptable."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dossiers éparpillés",
      desc: "Difficulté à centraliser et mettre à jour les documents administratifs des salariés."
    },
    {
      icon: <FileWarning className="w-6 h-6" />,
      title: "Risque de conformité",
      desc: "Suivi approximatif du temps de travail et non-respect des obligations légales."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Le constat actuel</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Vos processus RH freinent-ils votre croissance ?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              De nombreuses entreprises consacrent encore 60% de leur temps RH à des tâches administratives sans valeur ajoutée. Il est temps de libérer ce potentiel.
            </p>
            <div className="space-y-6">
              {problems.map((p, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-lg flex items-center justify-center">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{p.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="space-y-4">
                <img src="https://picsum.photos/seed/admin-1/300/400" alt="Office Work" className="rounded-2xl w-full h-64 object-cover" />
                <img src="https://picsum.photos/seed/admin-2/300/300" alt="Documents" className="rounded-2xl w-full h-48 object-cover" />
             </div>
             <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/admin-3/300/300" alt="Team Meeting" className="rounded-2xl w-full h-48 object-cover" />
                <img src="https://picsum.photos/seed/admin-4/300/400" alt="Stressed HR" className="rounded-2xl w-full h-64 object-cover" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
