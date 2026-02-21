
import React, { useState } from 'react';
import { Search, BarChart3, ClipboardList, Paperclip, Send, MousePointer2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AIAgentSection: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const actions = [
    {
      id: 'report',
      text: 'Générer un rapport sur les coûts commerciaux',
      icon: <BarChart3 size={18} className="text-blue-500" />,
      response: "Bien sûr ! Je prépare l'analyse des coûts commerciaux pour le dernier trimestre. Voulez-vous inclure les commissions ?"
    },
    {
      id: 'survey',
      text: 'Créer un sondage sur le ressenti des équipes',
      icon: <ClipboardList size={18} className="text-purple-500" />,
      response: "Excellente idée. J'ai préparé un brouillon de sondage eNPS avec 5 questions clés. Souhaitez-vous le relire ?"
    },
    {
      id: 'search',
      text: 'Faire une recherche dans une base de donnée',
      icon: <Search size={18} className="text-teal-500" />,
      response: "Je parcours la base de données... J'ai trouvé 12 documents correspondant à votre recherche sur les politiques de télétravail."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Voici <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">One</span>, votre agent IA qui travaille pour vous, et avec vous.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            Mais One, c'est bien plus qu'un assistant : il vous aide à transformer vos données en insights fiables, à créer des rapports clairs, et à accélérer l'impact de vos équipes.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Background Dashboard Simulation */}
          <div className="absolute inset-0 -m-4 md:-m-12 opacity-20 dark:opacity-10 pointer-events-none">
            <div className="grid grid-cols-3 gap-4 h-full">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-4 border border-slate-200 dark:border-slate-700">
                <div className="h-4 w-24 bg-slate-100 dark:bg-slate-700 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-50 dark:bg-slate-700/50 rounded"></div>
                  <div className="h-2 w-2/3 bg-slate-50 dark:bg-slate-700/50 rounded"></div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-4 border border-slate-200 dark:border-slate-700 transform translate-y-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-4 w-16 bg-slate-100 dark:bg-slate-700 rounded"></div>
                  <div className="h-8 w-8 rounded-full bg-teal-100 dark:bg-teal-900/30"></div>
                </div>
                <div className="h-12 w-12 rounded-full border-4 border-teal-500 mx-auto mb-2 flex items-center justify-center text-[10px] font-bold">03:21</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-4 border border-slate-200 dark:border-slate-700">
                <div className="h-4 w-20 bg-slate-100 dark:bg-slate-700 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-blue-100 dark:bg-blue-900/30"></div>
                    <div className="h-2 w-16 bg-slate-50 dark:bg-slate-700/50 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-purple-100 dark:bg-purple-900/30"></div>
                    <div className="h-2 w-20 bg-slate-50 dark:bg-slate-700/50 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main AI Card */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Floating Tooltip */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-4 md:-left-32 top-1/2 transform -translate-y-1/2 hidden lg:flex items-center gap-4 z-30"
            >
              <div className="bg-[#1a1c2e] text-white p-5 rounded-2xl shadow-2xl max-w-[200px] relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
                    <MousePointer2 size={12} className="text-white" />
                  </div>
                </div>
                <p className="text-sm font-bold leading-tight">
                  Choisissez un exemple pour découvrir l'agent IA
                </p>
                {/* Tooltip arrow */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#1a1c2e] rotate-45"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-xl bg-white dark:bg-slate-800 rounded-[32px] shadow-2xl border border-slate-200 dark:border-slate-700 p-8 md:p-10"
            >
              {/* Logo/Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#ff3b30] flex items-center justify-center text-white shadow-lg shadow-red-500/20 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1771409242/Factorial_logo_couleur_xywdb2.png" 
                    alt="Factorial" 
                    className="w-8 h-8 object-contain brightness-0 invert"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Bonjour Adam,</p>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Comment puis-je vous aider aujourd'hui ?</h3>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-10">
                {actions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => setSelectedAction(action.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left group ${
                      selectedAction === action.id
                        ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800'
                        : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800'
                    }`}
                  >
                    <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                      {action.icon}
                    </div>
                    <span className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {action.text}
                    </span>
                  </button>
                ))}
              </div>

              {/* Response Area (Simulated) */}
              <AnimatePresence>
                {selectedAction && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800"
                  >
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                      {actions.find(a => a.id === selectedAction)?.response}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input Simulation */}
              <div className="relative">
                <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 pr-12">
                  <p className="text-slate-400 dark:text-slate-500 text-sm">Écrivez quelque chose ici...</p>
                </div>
                <div className="absolute left-4 bottom-4 flex gap-2">
                  <Paperclip size={18} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                </div>
                <div className="absolute right-3 bottom-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    <Send size={16} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Tooltip removed from here and moved above the card */}
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default AIAgentSection;
