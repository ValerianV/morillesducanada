import { motion } from "framer-motion";
import morelsGolden from "@/assets/morels/morels-group-golden.jpg";
import morelsDarkPair from "@/assets/morels/morels-dark-pair.jpg";
import morelHoneycomb from "@/assets/morels/morel-honeycomb.jpg";
import morelBurnedLog from "@/assets/morels/morel-burned-log.jpg";
import morelsTrio from "@/assets/morels/morels-trio-dark.jpg";
import morelsCloseup from "@/assets/morels/morels-closeup-texture.jpg";
import morelsCluster from "@/assets/morels/morels-cluster-charcoal.jpg";
import morelsOverhead from "@/assets/morels/morels-overhead-needles.jpg";
import morelTallGreen from "@/assets/morels/morel-tall-green.jpg";
import morelClassic from "@/assets/morels/morel-classic-stem.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const photos = [
  { src: morelsGolden, alt: "Groupe de morilles dorées sur sol brûlé" },
  { src: morelsTrio, alt: "Trio de morilles sombres sur aiguilles de pin" },
  { src: morelHoneycomb, alt: "Morille en nid d'abeille sur sol de mousse" },
  { src: morelsCluster, alt: "Grappe de morilles sur charbon et herbes" },
  { src: morelBurnedLog, alt: "Morille devant un tronc carbonisé" },
  { src: morelsCloseup, alt: "Gros plan sur la texture d'une morille" },
  { src: morelsDarkPair, alt: "Paire de morilles foncées en sous-bois" },
  { src: morelsOverhead, alt: "Morilles vues du dessus sur aiguilles de pin" },
  { src: morelTallGreen, alt: "Grande morille noire entourée de verdure" },
  { src: morelClassic, alt: "Morille classique sur son pied blanc" },
];

const GallerySection = () => {
  return (
    <section id="galerie" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">En forêt</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Directement du <span className="italic text-gradient-gold">terrain</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mt-8" />
            <p className="text-secondary-foreground/70 font-light mt-6 max-w-xl mx-auto">
              Chaque photo est prise sur les zones de cueillette, dans les forêts brûlées de Colombie-Britannique et du Yukon.
            </p>
          </div>
        </ScrollReveal>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-3 md:mb-4 break-inside-avoid group relative overflow-hidden rounded-sm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-3 left-3 right-3 text-xs font-light text-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {photo.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
