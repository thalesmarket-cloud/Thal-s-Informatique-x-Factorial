
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube, X } from 'lucide-react';

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
              Partenaire certifié Factorial, nous accompagnons la transformation digitale des entreprises depuis plus de 20 ans avec passion et expertise métier.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <X size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">L'Alliance</a></li>
              <li><a href="#defis" className="hover:text-white transition-colors">Vos Défis</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">La Solution</a></li>
              <li><a href="#personas" className="hover:text-white transition-colors">Pour qui ?</a></li>
              <li><a href="#advantages" className="hover:text-white transition-colors">Expertise Thalès</a></li>
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
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
              <p className="text-xs italic mb-4">"Factorial est la solution RH n°1 pour les PME en Europe, intégrée par Thalès Informatique."</p>
              <div className="flex items-center gap-2 mt-4">
                <img 
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1771409242/Factorial_logo_couleur_xywdb2.png" 
                  alt="Factorial Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
            <a 
              href="#contact" 
              className="mt-6 inline-block w-full text-center py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all text-sm shadow-lg shadow-blue-500/10"
            >
              Demander une démo
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Thalès Informatique. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Gestion des cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
