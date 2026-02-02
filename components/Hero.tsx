
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Partenaire Officiel Factorial</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6">
              Simplifiez votre gestion RH avec <span className="text-blue-600">Factorial</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Thalès Informatique vous accompagne dans la digitalisation de vos processus RH. Libérez vos équipes des tâches administratives chronophages et concentrez-vous sur l'essentiel : vos collaborateurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 group"
              >
                Demander une démo gratuite
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#solutions" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
              >
                Découvrir la solution
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <CheckCircle size={16} className="text-green-500" /> Sans engagement
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <CheckCircle size={16} className="text-green-500" /> Accompagnement local
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <CheckCircle size={16} className="text-green-500" /> Déploiement rapide
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
            <img 
              src="https://www.datocms-assets.com/58969/1719930993-hero-core-lp-ana-finalx1-5.webp?auto=format&fit=max&w=3840&q=75" 
              alt="Factorial Interface Dashboard" 
              className="rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 md:right-0 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-[240px] hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="font-bold text-lg">+30%</span>
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">Gains de productivité RH</p>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 w-3/4 h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
