import landscapeImage from "@/assets/landscape-canada.jpg";
import morelCloseup from "@/assets/morels/morels-closeup-texture.jpg";
import morelClassic from "@/assets/morels/morel-classic-stem.jpg";

const OriginSection = () => {
  return (
    <section id="origine" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Notre Histoire</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Nées du <span className="italic text-gradient-gold">feu</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative rounded-sm overflow-hidden shadow-gold">
            <img
              src={landscapeImage}
              alt="Paysage de Colombie-Britannique après un feu de forêt"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-light leading-relaxed">
              Le plus vieux métier du monde, à l'ère moderne
            </h3>
            <p className="text-secondary-foreground/80 font-light leading-relaxed">
              Après trois étés passés à chasser la morille dans les forêts boréales du Canada, j'ai découvert un métier ancestral à l'ère de l'intelligence artificielle : <strong className="text-foreground">cueilleur</strong>. Animé par l'amour de la nature, des grands espaces et de l'aventure, je parcours les zones brûlées de la Colombie-Britannique et du Yukon pour récolter à la main ces trésors éphémères.
            </p>
            <p className="text-secondary-foreground/80 font-light leading-relaxed">
              Chaque été, d'immenses feux de forêt marquent ces territoires. Le printemps suivant, un miracle se produit : des morilles surgissent par milliers des sols calcinés — les célèbres <strong className="text-foreground">morilles de feu</strong>. Contrairement aux morilles cultivées en Chine ou aux variétés européennes, elles développent un profil aromatique unique : des notes fumées intenses et une profondeur de saveur que seul le feu peut conférer.
            </p>
            <p className="text-secondary-foreground/80 font-light leading-relaxed">
              90% de ma récolte est vendue à des entreprises canadiennes. Le reste, je le ramène en France pour proposer à des amateurs de produits d'exception ces morilles sauvages, séchées sans queue, issues d'un mélange de variétés de feu : <em>M. tomentosa, M. conica, M. brunnea, M. americana</em> et d'autres espèces rares.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <img src={morelCloseup} alt="Texture d'une morille de feu" loading="lazy" className="w-full h-32 object-cover rounded-sm opacity-80" />
              <img src={morelClassic} alt="Morille sauvage sur pied" loading="lazy" className="w-full h-32 object-cover rounded-sm opacity-80" />
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gold/20">
              <div className="text-center">
                <p className="font-serif text-3xl text-gradient-gold">100%</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Sauvage</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-gradient-gold">3-4</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Semaines/an</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-gradient-gold">0</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Pesticide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
