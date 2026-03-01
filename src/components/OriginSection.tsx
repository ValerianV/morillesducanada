import morelOverhead from "@/assets/morels/morels-overhead-needles.jpg";
import morelBurnedLog from "@/assets/morels/morel-burned-log.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const OriginSection = () => {
  return (
    <section id="origine" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
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
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <img src={morelOverhead} alt="Morilles vues du dessus sur aiguilles de pin" loading="lazy" className="w-full h-24 md:h-32 object-cover rounded-sm opacity-80" />
                <img src={morelBurnedLog} alt="Morille poussant près d'un tronc brûlé" loading="lazy" className="w-full h-24 md:h-32 object-cover rounded-sm opacity-80" />
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
                <div className="text-center">
                  <AnimatedCounter value="100%" className="font-serif text-3xl text-gradient-gold" />
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Sauvage</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter value="4-6" className="font-serif text-3xl text-gradient-gold" />
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Semaines/an</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter value="0" className="font-serif text-3xl text-gradient-gold" />
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Pesticide</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
