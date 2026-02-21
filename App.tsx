
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero.tsx';
import Partnership from './components/Partnership.tsx';
import Problems from './components/Problems.tsx';
import Solutions from './components/Solutions.tsx';
import AIAgentSection from './components/AIAgentSection.tsx';
import AutomationSection from './components/AutomationSection.tsx';
import WhyThales from './components/WhyThales.tsx';
import PersonaSection from './components/PersonaSection.tsx';
import SocialProof from './components/SocialProof.tsx';
import LeadForm from './components/LeadForm.tsx';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Hero />
        <Partnership />
        <Problems />
        <Solutions />
        <AIAgentSection />
        <AutomationSection />
        <WhyThales />
        <PersonaSection />
        <SocialProof />
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Prêt à transformer votre gestion RH ?
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  Nos experts Thalès Informatique sont à votre disposition pour analyser vos besoins et vous proposer une démonstration personnalisée de Factorial.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                      ✓
                    </div>
                    <span>Analyse gratuite de vos processus actuels</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                      ✓
                    </div>
                    <span>Présentation des fonctionnalités clés</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                      ✓
                    </div>
                    <span>Estimation des gains de productivité</span>
                  </div>
                </div>
              </div>
              <LeadForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
