
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 text-center">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Demande envoyée !</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Merci pour votre intérêt. Un expert de Thalès Informatique vous contactera sous 24 heures pour échanger sur votre projet.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Prénom</label>
            <input 
              required
              type="text" 
              name="firstName"
              placeholder="Ex: Jean"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Nom</label>
            <input 
              required
              type="text" 
              name="lastName"
              placeholder="Ex: Dupont"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email professionnel</label>
          <input 
            required
            type="email" 
            name="email"
            placeholder="jean.dupont@entreprise.fr"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Société</label>
            <input 
              required
              type="text" 
              name="company"
              placeholder="Ex: ACME Corp"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Fonction</label>
            <select 
              required
              name="role"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white appearance-none"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Sélectionnez...</option>
              <option value="drh">DRH / Responsable RH</option>
              <option value="dirigeant">Chef d'entreprise / Dirigeant</option>
              <option value="daf">DAF / Responsable Administratif</option>
              <option value="autre">Autre</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Message (Optionnel)</label>
          <textarea 
            name="message"
            rows={3}
            placeholder="Comment pouvons-nous vous aider ?"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all dark:text-white resize-none"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30"
        >
          Demander ma démonstration
          <Send size={18} />
        </button>

        <p className="text-[10px] text-center text-slate-500 dark:text-slate-400">
          En soumettant ce formulaire, vous acceptez que vos données soient traitées par Thalès Informatique pour répondre à votre demande. Conformément au RGPD, vous disposez d'un droit d'accès et de rectification.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
