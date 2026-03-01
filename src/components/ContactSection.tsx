import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "particulier",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend
    alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.");
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            <span className="italic text-gradient-gold">Contactez</span>-nous
          </h2>
          <div className="divider-gold w-24 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <p className="text-secondary-foreground/80 font-light leading-relaxed">
              Que vous soyez un particulier à la recherche de morilles d'exception ou un professionnel souhaitant un approvisionnement régulier, nous serons ravis d'échanger avec vous.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground font-light">contact@morillesducanada.fr</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground font-light">Colombie-Britannique & Yukon, Canada → France</span>
              </div>
            </div>
            <div className="p-6 border border-gold/15 rounded-sm">
              <p className="font-serif text-lg mb-2">Commandes professionnelles</p>
              <p className="text-sm text-muted-foreground font-light">
                Pour des volumes supérieurs à 200g ou un approvisionnement régulier, précisez « Professionnel » dans votre message pour recevoir nos tarifs dédiés.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Nom
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary/50 border border-gold/15 rounded-sm px-4 py-3 text-sm text-foreground font-light focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary/50 border border-gold/15 rounded-sm px-4 py-3 text-sm text-foreground font-light focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Vous êtes
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-secondary/50 border border-gold/15 rounded-sm px-4 py-3 text-sm text-foreground font-light focus:outline-none focus:border-primary transition-colors"
              >
                <option value="particulier">Particulier</option>
                <option value="professionnel">Professionnel (restaurateur, chef, traiteur)</option>
                <option value="precommande-2026">Pré-commande saison 2026</option>
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary/50 border border-gold/15 rounded-sm px-4 py-3 text-sm text-foreground font-light focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Précisez les quantités souhaitées, la fréquence, ou toute question..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors duration-300 rounded-sm"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
