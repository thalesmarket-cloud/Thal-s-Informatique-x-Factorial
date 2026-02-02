
import React from 'react';
import { Calendar, UserCheck, Timer, BarChart3, Settings, Shield } from 'lucide-react';

const Solutions: React.FC = () => {
  const features = [
    {
      title: "Congés & Absences",
      icon: <Calendar />,
      desc: "Validation en un clic, visibilité immédiate sur les plannings d'équipe."
    },
    {
      title: "Gestion du temps",
      icon: <Timer />,
      desc: "Pointage digital, suivi des heures supplémentaires et respect du temps de travail."
    },
    {
      title: "Dossiers salariés",
      icon: <UserCheck />,
      desc: "Stockage sécurisé (Cloud), signature électronique et mise à jour en self-service."
    },
    {
      title: "Performance & Reporting",
      icon: <BarChart3 />,
      desc: "Tableaux de bord RH personnalisés pour piloter votre capital humain."
    },
    {
      title: "Workflows automatisés",
      icon: <Settings />,
      desc: "Automatisez l'onboarding, les rappels de fin de période d'essai et plus encore."
    },
    {
      title: "Conformité RGPD",
      icon: <Shield />,
      desc: "Sécurité maximale des données de vos collaborateurs, conforme aux normes européennes."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-blue-600 dark:bg-blue-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Une solution pensée pour les RH modernes</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Factorial centralise tous vos besoins dans une plateforme unique, intuitive et évolutive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-blue-50/80 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-100 mb-8 font-medium">Rejoignez plus de 10 000 entreprises qui utilisent Factorial au quotidien.</p>
          <a href="#contact" className="inline-flex px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl">
            Voir la démo produit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
