
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface AutomationTab {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  features: {
    title: string;
    desc: string;
    linkText: string;
  }[];
}

const AutomationSection: React.FC = () => {
  const tabs: AutomationTab[] = [
    {
      id: 'rh-paie',
      label: 'RH & Paie',
      title: "Remettre l'humain au coeur des RH",
      description: "En déchargeant les RH des tâches administratives grâce à un portail intuitif, une paie centralisée, une gestion intelligente des documents et des signatures électroniques illimitées.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070",
      features: [
        {
          title: "Portail employé",
          desc: "Centralisez les données des employés avec un portail intuitif pour gérer les congés, les documents, et plus encore.",
          linkText: "Découvrir les avantages"
        },
        {
          title: "Documents et signature électronique",
          desc: "Un espace de stockage centralisé pour les politiques de l'entreprise, signatures électroniques et bulletins de paie.",
          linkText: "Activer maintenant"
        },
        {
          title: "Rapports et Données",
          desc: "Turnover, eNPS, formations : obtenez rapidement des informations pour prendre des décisions éclairées.",
          linkText: "En savoir plus"
        }
      ]
    },
    {
      id: 'gta',
      label: 'GTA & Plannings',
      title: "Optimisez le temps et la présence",
      description: "Gérez les temps de travail, les rotations et les absences en toute simplicité pour assurer une couverture optimale et respecter la législation en vigueur.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070",
      features: [
        {
          title: "Suivi du temps",
          desc: "Pointage digital précis pour suivre les heures réelles travaillées et les heures supplémentaires en temps réel.",
          linkText: "Voir le pointage"
        },
        {
          title: "Gestion des absences",
          desc: "Flux d'approbation simplifiés pour les congés, arrêts maladie et absences exceptionnelles.",
          linkText: "Gérer les absences"
        },
        {
          title: "Planification d'équipe",
          desc: "Créez des plannings équilibrés et partagez-les en un clic avec vos collaborateurs.",
          linkText: "Essayer le planning"
        }
      ]
    },
    {
      id: 'talents',
      label: 'Gestion des talents',
      title: "Développez le potentiel de vos équipes",
      description: "Attirez les meilleurs profils et accompagnez leur croissance au sein de l'entreprise grâce à des outils d'évaluation et de formation performants.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
      features: [
        {
          title: "Recrutement (ATS)",
          desc: "Créez des pages carrières attractives et gérez vos candidatures de manière collaborative.",
          linkText: "Recruter mieux"
        },
        {
          title: "Performance",
          desc: "Menez des entretiens annuels et des feedbacks 360° pour piloter le développement des compétences.",
          linkText: "Évaluer les talents"
        },
        {
          title: "Onboarding",
          desc: "Offrez une expérience d'intégration mémorable à vos nouveaux arrivants dès leur premier jour.",
          linkText: "Réussir l'intégration"
        }
      ]
    },
    {
      id: 'finance',
      label: 'Finance & IT',
      title: "Centralisez vos dépenses et actifs",
      description: "Simplifiez le suivi des frais professionnels et la gestion du parc informatique pour une visibilité totale sur vos coûts opérationnels.",
      image: "https://images.unsplash.com/photo-1454165833767-0274b0fb4a7a?auto=format&fit=crop&q=80&w=2070",
      features: [
        {
          title: "Notes de frais",
          desc: "Digitalisez les reçus et automatisez le remboursement des frais professionnels de vos collaborateurs.",
          linkText: "Gérer les frais"
        },
        {
          title: "Gestion du parc IT",
          desc: "Suivez l'attribution du matériel informatique et gérez les accès aux logiciels en toute sécurité.",
          linkText: "Suivre le matériel"
        },
        {
          title: "Analyse des coûts",
          desc: "Analysez vos coûts salariaux et prévoyez vos besoins futurs avec des outils d'analyse financière.",
          linkText: "Voir les rapports"
        }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Group */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Automatisez ce qui vous empêche d'avancer
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Factorial automatise les processus RH : congés, paie, notes de frais, pour vous libérer du temps et recentrer vos efforts sur la croissance de vos équipes.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-slate-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab.id === tab.id
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white lg:w-1/3">
              {activeTab.title}
            </h3>
            <div className="lg:w-1/2">
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {activeTab.description}
              </p>
              <button className="text-teal-600 dark:text-teal-400 font-bold text-sm inline-flex items-center gap-2 hover:underline">
                En savoir plus <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Large Representative Image */}
          <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] border border-slate-200 dark:border-slate-800">
            <img 
              src={activeTab.image} 
              alt={activeTab.title} 
              className="w-full h-full object-cover"
            />
            {/* Overlay simulation of Factorial UI - visual flavor */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeTab.features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all group"
              >
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">
                  {feature.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {feature.desc}
                </p>
                <button className="text-teal-600 dark:text-teal-400 font-bold text-xs inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  {feature.linkText} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
