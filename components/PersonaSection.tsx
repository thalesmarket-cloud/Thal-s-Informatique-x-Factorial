
import React, { useState } from 'react';

interface Persona {
  id: string;
  title: string;
  description: string;
  image: string;
}

const PersonaSection: React.FC = () => {
  const personas: Persona[] = [
    {
      id: 'rh',
      title: "Responsables RH",
      description: "Unifiez les processus, obtenez des insights et stimulez la croissance des talents.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2074"
    },
    {
      id: 'cfo',
      title: "CFOs",
      description: "Visualisez les dépenses de l'entreprise—équipes, projets, salaires—et maîtrisez les coûts.",
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=2022"
    },
    {
      id: 'managers',
      title: "Managers",
      description: "Obtenez des insights sur le développement pour créer des équipes efficaces et épanouies.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: 'employes',
      title: "Employés",
      description: "Donnez-leur l'autonomie pour gérer les heures, accéder aux bulletins et suivre leurs objectifs.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071"
    }
  ];

  const [activePersona, setActivePersona] = useState(personas[0]);

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Qui que vous soyez, nous pouvons vous aider
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
            Factorial, ce n'est plus seulement un <span className="text-teal-600 dark:text-teal-400 underline cursor-pointer font-medium">logiciel RH</span>. C'est une solution complète permettant aux managers et à leurs équipes de mieux collaborer, décider et avancer ensemble. Un accompagnement dans les missions quotidiennes — gestion du temps, des projets, des finances, des talents — tout en offrant des données essentielles pour guider les prises de décision.
          </p>
        </div>

        {/* Persona Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {personas.map((persona) => (
            <div 
              key={persona.id}
              onClick={() => setActivePersona(persona)}
              className={`cursor-pointer pl-4 py-2 border-l-2 transition-all duration-300 ${
                activePersona.id === persona.id 
                ? 'border-blue-600 dark:border-blue-500' 
                : 'border-slate-200 dark:border-slate-800 border-dashed hover:border-slate-400'
              }`}
            >
              <h4 className={`font-bold mb-2 ${
                activePersona.id === persona.id ? 'text-slate-900 dark:text-white' : 'text-slate-500'
              }`}>
                {persona.title}
              </h4>
              <p className={`text-xs leading-relaxed ${
                activePersona.id === persona.id ? 'text-slate-600 dark:text-slate-400' : 'text-slate-400'
              }`}>
                {persona.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Visual */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/8] md:aspect-[21/9] border border-slate-100 dark:border-slate-800 animate-in fade-in duration-700">
          <img 
            src={activePersona.image} 
            alt={activePersona.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Subtle overlay for realism */}
          <div className="absolute inset-0 bg-slate-900/5 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
