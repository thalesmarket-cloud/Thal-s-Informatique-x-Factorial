
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img 
                src="https://thales.ma/wp-content/uploads/2019/12/logo-thales2020-1.png" 
                alt="Thalès Logo" 
                className="h-10 w-auto brightness-0 invert" 
              />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Partenaire certifié Factorial, nous accompagnons la transformation digitale des entreprises depuis plus de 20 ans avec passion et expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Liens rapides</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">Le Partenariat</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Nos Solutions RH</a></li>
              <li><a href="#advantages" className="hover:text-white transition-colors">Pourquoi Thalès ?</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Demander une démo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500" />
                <span>02 40 XX XX XX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500" />
                <span>contact@thales-informatique.fr</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-500 mt-1" />
                <span>12 Rue de l'Innovation,<br />44000 Nantes, France</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solution Partenaire</h4>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
              <p className="text-xs italic mb-4">"Factorial est la solution RH n°1 pour les PME en Europe."</p>
              <img 
                src="https://picsum.photos/seed/factorial-white/200/50?grayscale" 
                alt="Factorial Partner" 
                className="h-6 w-auto opacity-70 invert"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Thalès Informatique. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
