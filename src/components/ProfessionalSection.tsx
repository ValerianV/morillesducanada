import { ChefHat, Truck, MessageSquare, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { useI18n } from "@/i18n/context";

const itemIcons = [ChefHat, Truck, MessageSquare];

const ProfessionalSection = () => {
  const { t, translations } = useI18n();
  const items = translations.professional.items;

  return (
    <section id="professionnels" className="py-24 md:py-32 bg-gradient-card">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">{t("professional.label")}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              {t("professional.title")} <span className="italic text-gradient-gold">{t("professional.titleHighlight")}</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mt-8" />
            <p className="text-muted-foreground font-light mt-6 max-w-2xl mx-auto">{t("professional.description")}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.map((item, i) => {
            const Icon = itemIcons[i];
            return (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-center p-8"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-6" />
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mt-12 p-6 md:p-8 border border-primary/30 rounded-sm bg-background/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <CalendarClock className="w-10 h-10 text-primary flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-serif text-xl md:text-2xl mb-2">{t("professional.preorderTitle")}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t("professional.preorderDesc") }} />
              </div>
            </div>
            <div className="mt-6 text-center md:text-left">
              <Link to="/pre-commande" className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors duration-300 rounded-sm">
                {t("professional.preorderCta")}
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-8">
            <a href="#contact" className="inline-block px-10 py-4 border border-primary/40 text-foreground font-light tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-colors duration-300 rounded-sm">
              {t("professional.quoteCta")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProfessionalSection;
