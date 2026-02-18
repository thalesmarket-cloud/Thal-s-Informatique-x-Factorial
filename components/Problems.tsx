
import React, { useState, useEffect } from 'react';
import { Clock, FileWarning, Users, Calculator, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Problems: React.FC = () => {
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Gestion chronophage",
      desc: "Perte de temps sur les saisies manuelles des congés et des absences sur Excel.",
      prompt: "3D isometric illustration of a clock and messy paper files, professional HR management style, corporate blue and white colors, minimalist."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Préparation de paie complexe",
      desc: "Erreurs fréquentes lors de la transmission des variables de paie au comptable.",
      prompt: "3D render of a sleek digital calculator with floating currency symbols and spreadsheets, professional finance aesthetic, blue theme."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dossiers éparpillés",
      desc: "Difficulté à centraliser et mettre à jour les documents administratifs des salariés.",
      prompt: "3D illustration of scattered digital employee profiles being organized into a central hub, tech aesthetic, clean corporate design."
    },
    {
      icon: <FileWarning className="w-6 h-6" />,
      title: "Risque de conformité",
      desc: "Suivi approximatif du temps de travail et non-respect des obligations légales.",
      prompt: "Professional 3D render of a legal document with a subtle warning shield icon, secure and compliant HR tech style, minimalist blue."
    }
  ];

  useEffect(() => {
    const generateAllImages = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const imagePromises = problems.map(p => 
          ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: { parts: [{ text: p.prompt }] }
          })
        );

        const responses = await Promise.all(imagePromises);
        const urls = responses.map(response => {
          const part = response.candidates[0].content.parts.find(p => p.inlineData);
          return part ? `data:image/png;base64,${part.inlineData.data}` : "";
        }).filter(url => url !== "");

        setGeneratedImages(urls);
      } catch (error) {
        console.error("Erreur génération images problèmes:", error);
        // Fallback static images in case of error
        setGeneratedImages([
          "https://images.unsplash.com/photo-1454165833767-0274b0fb4a7a?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    generateAllImages();
  }, []);

  return (
    <section id="defis" className="py-24 scroll-mt-20">
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
          <div className="lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
            {isLoading ? (
               <div className="flex flex-col items-center gap-4 text-slate-400">
                  <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
                  <p className="text-sm font-medium animate-pulse">Génération des visuels RH...</p>
               </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 w-full animate-in fade-in duration-1000">
                <div className="space-y-4">
                    <img src={generatedImages[0]} alt="Problème 1" className="rounded-2xl w-full h-64 object-cover shadow-lg border border-slate-100 dark:border-slate-800" />
                    <img src={generatedImages[1]} alt="Problème 2" className="rounded-2xl w-full h-48 object-cover shadow-lg border border-slate-100 dark:border-slate-800" />
                </div>
                <div className="space-y-4 pt-8">
                    <img src={generatedImages[2]} alt="Problème 3" className="rounded-2xl w-full h-48 object-cover shadow-lg border border-slate-100 dark:border-slate-800" />
                    <img src={generatedImages[3]} alt="Problème 4" className="rounded-2xl w-full h-64 object-cover shadow-lg border border-slate-100 dark:border-slate-800" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
