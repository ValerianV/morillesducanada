import { Leaf, Truck, ShieldCheck, Clock } from "lucide-react";

const badges = [
  { icon: Leaf, label: "Cueillette 100% sauvage" },
  { icon: Truck, label: "Livraison France & Europe" },
  { icon: ShieldCheck, label: "Paiement sécurisé" },
  { icon: Clock, label: "Expédition rapide" },
];

const TrustBadges = () => {
  return (
    <div className="py-10 md:py-14 border-t border-b border-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2.5">
              <b.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-xs md:text-sm font-light tracking-wide text-muted-foreground">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
