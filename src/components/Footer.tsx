const Footer = () => {
  return (
    <footer className="py-12 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-xl text-gradient-gold">Morilles du Yukon</p>
          <p className="text-xs text-muted-foreground font-light tracking-wider">
            © {new Date().getFullYear()} Morilles du Yukon · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
