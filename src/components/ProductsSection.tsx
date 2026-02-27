import productImage from "@/assets/product-jar.jpg";

const products = [
  {
    name: "Découverte",
    weight: "12g",
    description: "Idéal pour une première dégustation ou un cadeau raffiné. Environ 2 à 3 portions.",
    format: "Pot en verre",
    badge: null,
  },
  {
    name: "Essentiel",
    weight: "30g",
    description: "Le format parfait pour sublimer vos plats du quotidien. Environ 6 à 8 portions.",
    format: "Pot en verre",
    badge: "Populaire",
  },
  {
    name: "Prestige",
    weight: "45g",
    description: "Pour les amateurs passionnés. Suffisant pour plusieurs recettes d'exception.",
    format: "Pot en verre",
    badge: null,
  },
  {
    name: "Professionnel",
    weight: "200g+",
    description: "Conditionnement sous vide pour les chefs et restaurateurs. Quantités sur mesure disponibles.",
    format: "Sous vide",
    badge: "Pro",
  },
];

const ProductsSection = () => {
  return (
    <section id="produits" className="py-24 md:py-32 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Nos Morilles</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Morilles séchées <span className="italic text-gradient-gold">premium</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-8" />
          <p className="text-muted-foreground font-light mt-6 max-w-xl mx-auto">
            Séchées lentement à basse température pour préserver l'intégralité de leurs arômes fumés et de leur texture unique.
          </p>
        </div>

        {/* Product image + grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Product image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src={productImage}
                alt="Pot de morilles séchées premium"
                className="w-80 h-80 object-cover rounded-sm shadow-gold"
              />
              <div className="absolute -inset-4 border border-gold/20 rounded-sm -z-10" />
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.weight}
                className="relative p-6 border border-gold/15 rounded-sm bg-background/50 hover:border-gold/40 transition-all duration-500 group"
              >
                {product.badge && (
                  <span className="absolute -top-3 right-4 px-3 py-1 bg-primary text-primary-foreground text-[10px] tracking-widest uppercase rounded-sm">
                    {product.badge}
                  </span>
                )}
                <p className="font-serif text-3xl text-gradient-gold mb-1">{product.weight}</p>
                <h3 className="font-serif text-xl mb-3">{product.name}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-xs tracking-widest uppercase text-primary/70">
                  {product.format}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors duration-300 rounded-sm"
          >
            Commander
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            Prix sur demande · Livraison en France métropolitaine
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
