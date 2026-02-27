import heroImage from "@/assets/hero-morels.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Morilles de feu séchées canadiennes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <p
          className="text-sm tracking-[0.4em] uppercase text-primary/80 mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Cueillies à la main · Colombie-Britannique & Yukon
        </p>
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Morilles de Feu
          <span className="block text-gradient-gold italic mt-2">du Canada</span>
        </h1>
        <p
          className="text-lg md:text-xl text-secondary-foreground/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          Nées des cendres des forêts boréales, nos morilles sauvages offrent un arôme fumé et une intensité incomparables. Un trésor rare, séché avec soin pour les palais les plus exigeants.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}
        >
          <a
            href="#produits"
            className="px-10 py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors duration-300 rounded-sm"
          >
            Découvrir nos morilles
          </a>
          <a
            href="#origine"
            className="px-10 py-4 border border-primary/40 text-foreground font-light tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-colors duration-300 rounded-sm"
          >
            Notre histoire
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
