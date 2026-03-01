import { Flame, Mountain, Leaf, Award, Timer, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { useI18n } from "@/i18n/context";

const icons = [Flame, Mountain, Timer, Leaf, Award, ShieldCheck];

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const WhySection = () => {
  const { t, translations } = useI18n();
  const reasons = translations.why.reasons;
  const rows = translations.why.rows;

  return (
    <section id="pourquoi" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal blur>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">{t("why.label")}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              {t("why.title")} <span className="italic text-gradient-gold">{t("why.titleHighlight")}</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={reason.title} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-40px" }} variants={cardVariants}
                whileHover={{ y: -8, borderColor: "hsl(40 60% 50% / 0.3)", boxShadow: "0 0 40px hsl(40 60% 50% / 0.1)", transition: { duration: 0.3 } }}
                className="p-8 border border-gold/10 rounded-sm transition-all duration-500 group cursor-default"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Icon className="w-8 h-8 text-primary mb-6" />
                </motion.div>
                <h3 className="font-serif text-xl mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        <ScrollReveal delay={0.2} blur>
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl text-center mb-10">{t("why.compTitle")}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold/20">
                    <th className="text-left py-4 px-4 font-light tracking-widest uppercase text-muted-foreground text-xs"></th>
                    <th className="py-4 px-4 font-light tracking-widest uppercase text-primary text-xs whitespace-pre-line">{translations.why.headers[1]}</th>
                    <th className="py-4 px-4 font-light tracking-widest uppercase text-muted-foreground text-xs whitespace-pre-line">{translations.why.headers[2]}</th>
                    <th className="py-4 px-4 font-light tracking-widest uppercase text-muted-foreground text-xs whitespace-pre-line">{translations.why.headers[3]}</th>
                  </tr>
                </thead>
                <tbody className="font-light">
                  {rows.map(([label, fire, euro, china], i) => (
                    <motion.tr key={label} className="border-b border-gold/10"
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <td className="py-3 px-2 md:px-4 text-muted-foreground whitespace-nowrap">{label}</td>
                      <td className="py-3 px-2 md:px-4 text-center text-foreground">{fire}</td>
                      <td className="py-3 px-2 md:px-4 text-center text-muted-foreground">{euro}</td>
                      <td className="py-3 px-2 md:px-4 text-center text-muted-foreground">{china}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhySection;
