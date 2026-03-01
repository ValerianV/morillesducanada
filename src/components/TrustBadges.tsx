import { Leaf, Truck, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";

const icons = [Leaf, Truck, ShieldCheck, Clock];
const keys = ["trust.wild", "trust.delivery", "trust.payment", "trust.shipping"];

const TrustBadges = () => {
  const { t } = useI18n();

  return (
    <div className="py-10 md:py-14 border-t border-b border-gold/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {icons.map((Icon, i) => (
            <motion.div key={keys[i]}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="flex items-center gap-2.5 cursor-default"
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                <Icon className="w-5 h-5 text-primary flex-shrink-0" />
              </motion.div>
              <span className="text-xs md:text-sm font-light tracking-wide text-muted-foreground">{t(keys[i])}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
