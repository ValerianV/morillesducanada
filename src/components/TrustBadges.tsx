import { Leaf, Truck, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: Leaf, label: "Cueillette 100% sauvage" },
  { icon: Truck, label: "Livraison France & Europe" },
  { icon: ShieldCheck, label: "Paiement sécurisé" },
  { icon: Clock, label: "Expédition rapide" },
];

const TrustBadges = () => {
  return (
    <div className="py-10 md:py-14 border-t border-b border-gold/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="flex items-center gap-2.5 cursor-default"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <b.icon className="w-5 h-5 text-primary flex-shrink-0" />
              </motion.div>
              <span className="text-xs md:text-sm font-light tracking-wide text-muted-foreground">
                {b.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
