import { ChefHat, Truck, MessageSquare, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const ProfessionalSection = () => {
  return (
    <section id="professionnels" className="py-24 md:py-32 bg-gradient-card">
      <div className="container mx-auto px-6">
        <ScrollReveal>
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
        </ScrollReveal>

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
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center p-8"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-6" />
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pre-order banner */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mt-12 p-6 md:p-8 border border-primary/30 rounded-sm bg-background/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <CalendarClock className="w-10 h-10 text-primary flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-serif text-xl md:text-2xl mb-2">
                  Saison 2026 — Réservez votre approvisionnement
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  La saison de cueillette est très courte (juin-juillet) et les quantités limitées. 
                  Pré-commandez dès maintenant pour garantir votre stock à des <strong className="text-foreground">tarifs dégressifs</strong>, 
                  avec <strong className="text-foreground">priorité de livraison</strong> et <strong className="text-foreground">lot garanti</strong>.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center md:text-left">
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors duration-300 rounded-sm"
              >
                Pré-commander pour l'été 2026
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-block px-10 py-4 border border-primary/40 text-foreground font-light tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-colors duration-300 rounded-sm"
            >
              Demander un devis professionnel
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProfessionalSection;
