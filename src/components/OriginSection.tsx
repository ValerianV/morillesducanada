import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import valerianPortrait from "@/assets/valerian-portrait.png";
import morelOverhead from "@/assets/morels/morels-overhead-needles.jpg";
import morelBurnedLog from "@/assets/morels/morel-burned-log.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useI18n } from "@/i18n/context";

const OriginSection = () => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageParallax2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section id="origine" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <ScrollReveal blur>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">{t("origin.label")}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              {t("origin.title")} <span className="italic text-gradient-gold">{t("origin.titleHighlight")}</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mt-8" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-4">
              <div className="relative rounded-sm overflow-hidden shadow-gold aspect-[3/4] max-h-[420px]">
                <img src={valerianPortrait} alt="Valérian, cueilleur de morilles au Canada" loading="lazy" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
              <div className="grid grid-cols-2 gap-3 overflow-hidden">
                <motion.div style={{ y: imageParallax }} className="overflow-hidden rounded-sm">
                  <img src={morelOverhead} alt="Morels overhead on pine needles" loading="lazy" className="w-full h-24 md:h-32 object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                </motion.div>
                <motion.div style={{ y: imageParallax2 }} className="overflow-hidden rounded-sm">
                  <img src={morelBurnedLog} alt="Morel near a burned log" loading="lazy" className="w-full h-24 md:h-32 object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl font-light leading-relaxed">{t("origin.heading")}</h3>
              <p className="text-secondary-foreground/80 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t("origin.p1") }} />
              <p className="text-secondary-foreground/80 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t("origin.p2") }} />
              <p className="text-secondary-foreground/80 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t("origin.p3") }} />

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gold/20">
                {[
                  { value: "100%", label: t("origin.stat1") },
                  { value: "4-6", label: t("origin.stat2") },
                  { value: "0", label: t("origin.stat3") },
                ].map((stat, i) => (
                  <motion.div key={stat.label} className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <AnimatedCounter value={stat.value} className="font-serif text-3xl text-gradient-gold" />
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
