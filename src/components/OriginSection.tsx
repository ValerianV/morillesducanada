import landscapeImage from "@/assets/landscape-canada.jpg";

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
              Un phénomène unique au monde
            </h3>
            <p className="text-secondary-foreground/80 font-light leading-relaxed">
              Chaque été, les forêts boréales de la Colombie-Britannique et du Yukon sont marquées par d'immenses feux de forêt. Le printemps suivant, un miracle se produit : des morilles surgissent par milliers des sols brûlés — les célèbres <strong className="text-foreground">morilles de feu</strong> (<em>Morchella tomentosa</em>).
            </p>
            <p className="text-secondary-foreground/80 font-light leading-relaxed">
              Contrairement aux morilles cultivées en Chine — produites en masse et au goût neutre — ou aux morilles sauvages européennes, plus petites et aux arômes terreux, les <strong className="text-foreground">morilles de feu canadiennes</strong> développent un profil aromatique unique : des notes fumées intenses, une texture charnue et une profondeur de saveur que seul le feu peut conférer.
            </p>
            <p className="text-secondary-foreground/80 font-light leading-relaxed">
              Nous les cueillons à la main dans des zones reculées, souvent accessibles uniquement par hélicoptère ou après des heures de piste forestière. Cette cueillette extrême, combinée à une fenêtre de récolte de seulement 3 à 4 semaines par an, explique leur rareté et leur valeur exceptionnelle.
            </p>

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
