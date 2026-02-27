import { ChefHat, Truck, MessageSquare } from "lucide-react";

const ProfessionalSection = () => {
  return (
    <section id="professionnels" className="py-24 md:py-32 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Professionnels</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Pour les <span className="italic text-gradient-gold">chefs d'exception</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-8" />
          <p className="text-muted-foreground font-light mt-6 max-w-2xl mx-auto">
            Restaurateurs, chefs étoilés, traiteurs haut de gamme : nous fournissons les morilles de feu les plus recherchées au monde, conditionnées sous vide et livrées selon vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: ChefHat,
              title: "Qualité constante",
              description: "Chaque lot est trié et contrôlé. Morilles entières, calibrées, au profil aromatique garanti.",
            },
            {
              icon: Truck,
              title: "Livraison adaptée",
              description: "Conditionnement sous vide de 200g à plusieurs kilos. Livraison en France et en Europe.",
            },
            {
              icon: MessageSquare,
              title: "Service dédié",
              description: "Un interlocuteur unique pour vos commandes, devis personnalisés et approvisionnement régulier.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center p-8">
              <item.icon className="w-10 h-10 text-primary mx-auto mb-6" />
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-10 py-4 border border-primary/40 text-foreground font-light tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-colors duration-300 rounded-sm"
          >
            Demander un devis professionnel
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
