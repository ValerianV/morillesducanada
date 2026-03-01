import { Flame, Mountain, Leaf, Award, Timer, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    icon: Flame,
    title: "Arôme fumé unique",
    description: "Les morilles de feu développent des notes fumées et boisées impossibles à reproduire en culture. Un goût que seul le feu de forêt peut conférer.",
  },
  {
    icon: Mountain,
    title: "Terroir exceptionnel",
    description: "Cueillies entre 800 et 1 500 m d'altitude dans les forêts boréales vierges du Canada, loin de toute source de pollution.",
  },
  {
    icon: Timer,
    title: "Récolte éphémère",
    description: "4 à 6 semaines par an, exclusivement au printemps suivant un feu de forêt. Une fenêtre de cueillette unique et imprévisible.",
  },
  {
    icon: Leaf,
    title: "100% naturelles",
    description: "Aucun traitement, aucun pesticide, aucune culture. Des morilles véritablement sauvages, comme la nature les a conçues.",
  },
  {
    icon: Award,
    title: "Qualité supérieure",
    description: "Triées à la main, séchées lentement à basse température. Chaque morille est sélectionnée pour sa taille, sa forme et son intégrité.",
  },
  {
    icon: ShieldCheck,
    title: "Circuit court, sans intermédiaire",
    description: "Petite entreprise travaillant directement avec les cueilleurs. Pas de grossiste, pas de revendeur : du sol brûlé à votre assiette, la chaîne est courte et transparente.",
  },
];

const WhySection = () => {
  return (
    <section id="pourquoi" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">L'excellence</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Pourquoi nos morilles sont <span className="italic text-gradient-gold">différentes</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-8 border border-gold/10 rounded-sm hover:border-gold/30 hover:shadow-gold transition-all duration-500 group"
            >
              <reason.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-xl mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison block */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl text-center mb-10">
              Morilles de feu vs. autres morilles
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold/20">
                    <th className="text-left py-4 px-4 font-light tracking-widest uppercase text-muted-foreground text-xs"></th>
                    <th className="py-4 px-4 font-light tracking-widest uppercase text-primary text-xs">Morilles de feu<br />Canada</th>
                    <th className="py-4 px-4 font-light tracking-widest uppercase text-muted-foreground text-xs">Morilles sauvages<br />Europe</th>
                    <th className="py-4 px-4 font-light tracking-widest uppercase text-muted-foreground text-xs">Morilles cultivées<br />Chine</th>
                  </tr>
                </thead>
                <tbody className="font-light">
                  {[
                    ["Arôme", "Fumé, intense, boisé", "Terreux, délicat", "Neutre, fade"],
                    ["Taille", "Grande à très grande", "Petite à moyenne", "Variable"],
                    ["Texture", "Charnue, ferme", "Fine, fragile", "Spongieuse"],
                    ["Saison", "3-4 semaines/an", "~2 mois/an", "Toute l'année"],
                    ["Traitement", "Aucun", "Aucun", "Souvent traité"],
                    ["Rareté", "Très rare", "Rare", "Abondant"],
                  ].map(([label, fire, euro, china]) => (
                    <tr key={label} className="border-b border-gold/10">
                      <td className="py-3 px-2 md:px-4 text-muted-foreground whitespace-nowrap">{label}</td>
                      <td className="py-3 px-2 md:px-4 text-center text-foreground">{fire}</td>
                      <td className="py-3 px-2 md:px-4 text-center text-muted-foreground">{euro}</td>
                      <td className="py-3 px-2 md:px-4 text-center text-muted-foreground">{china}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhySection;
