import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import morelOverhead from "@/assets/morels/morels-overhead-needles.jpg";
import morelBurnedLog from "@/assets/morels/morel-burned-log.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const OriginSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="origine" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <ScrollReveal blur>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Notre Histoire</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Nées du <span className="italic text-gradient-gold">feu</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Video */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-4">
              <div className="relative rounded-sm overflow-hidden shadow-gold aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/4ogERBVLPmo?autoplay=1&mute=1&loop=1&playlist=4ogERBVLPmo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3"
                  title="Paysage de montagne brûlée — Colombie-Britannique"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ border: "none" }}
                  allow="autoplay; encrypted-media"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
              <div className="grid grid-cols-2 gap-3 overflow-hidden">
                <motion.div style={{ y: imageParallax }} className="overflow-hidden rounded-sm">
                  <img
                    src={morelOverhead}
                    alt="Morilles vues du dessus sur aiguilles de pin"
                    loading="lazy"
                    className="w-full h-24 md:h-32 object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                  />
                </motion.div>
                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }} className="overflow-hidden rounded-sm">
                  <img
                    src={morelBurnedLog}
                    alt="Morille poussant près d'un tronc brûlé"
                    loading="lazy"
                    className="w-full h-24 md:h-32 object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                  />
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl font-light leading-relaxed">
                Le plus vieux métier du monde, à l'ère moderne
              </h3>
              <p className="text-secondary-foreground/80 font-light leading-relaxed">
                Voilà plusieurs étés passés à chasser la morille dans les forêts boréales du Canada. J'ai découvert un métier ancestral à l'ère de l'intelligence artificielle : <strong className="text-foreground">cueilleur</strong>. Animé par l'amour de la nature, des grands espaces et de l'aventure, je parcours les zones brûlées de la Colombie-Britannique et du Yukon pour récolter à la main ces trésors éphémères.
              </p>
              <p className="text-secondary-foreground/80 font-light leading-relaxed">
                Chaque été, d'immenses feux de forêt marquent ces territoires. Le printemps suivant, un miracle se produit : des morilles surgissent par milliers des sols calcinés — les célèbres <strong className="text-foreground">morilles de feu</strong>. Contrairement aux morilles cultivées en Chine ou aux variétés européennes, elles développent un profil aromatique unique : des notes fumées intenses et une profondeur de saveur que seul le feu peut conférer.
              </p>
              <p className="text-secondary-foreground/80 font-light leading-relaxed">
                Morilles du Canada est une toute petite entreprise, sans intermédiaire. Je travaille directement avec d'autres cueilleurs que je connais personnellement sur le terrain. Pas de grossiste, pas de revendeur : une chaîne courte, du cueilleur à votre cuisine. 90% de ma récolte est vendue à des entreprises canadiennes. Le reste, je le ramène en France pour proposer à des amateurs de produits d'exception ces morilles sauvages, séchées sans queue, issues d'un mélange de variétés de feu : <em>M. tomentosa, M. conica, M. brunnea, M. americana</em> et d'autres espèces rares.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gold/20">
                {[
                  { value: "100%", label: "Sauvage" },
                  { value: "4-6", label: "Semaines/an" },
                  { value: "0", label: "Pesticide" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <AnimatedCounter value={stat.value} className="font-serif text-3xl text-gradient-gold" />
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
