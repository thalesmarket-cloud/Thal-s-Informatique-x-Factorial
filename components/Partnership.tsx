
import React from 'react';
import { Handshake, MapPin, Zap } from 'lucide-react';

const Partnership: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Une alliance stratégique pour votre succès</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          L'alliance de l'expertise locale de Thalès Informatique et de la puissance technologique de Factorial.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
            <Handshake size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Thalès Informatique</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Expert reconnu dans l'intégration de solutions logicielles et l'infrastructure IT, nous accompagnons les PME et ETI dans leur transformation digitale.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center relative md:-mt-4 md:mb-4 border-blue-500/30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            La Solution
          </div>
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-500/20">
            <Zap size={32} />
          </div>
          <h3 className="text-xl font-bold text-blue-600 mb-3">Factorial</h3>
          <p className="text-slate-600 dark:text-slate-300">
            La solution RH tout-en-un la plus intuitive du marché. Gestion du temps, des talents et de la paie dans une interface unifiée et moderne.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
            <MapPin size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Accompagnement Local</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Bénéficiez d'une proximité géographique pour vos formations, le paramétrage et un support réactif et humain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
