import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import morelsGolden from "@/assets/morels/morels-group-golden.jpg";
import morelsDarkPair from "@/assets/morels/morels-dark-pair.jpg";
import morelHoneycomb from "@/assets/morels/morel-honeycomb.jpg";
import morelBurnedLog from "@/assets/morels/morel-burned-log.jpg";
import morelsTrio from "@/assets/morels/morels-trio-dark.jpg";
import morelsCloseup from "@/assets/morels/morels-closeup-texture.jpg";
import morelsCluster from "@/assets/morels/morels-cluster-charcoal.jpg";
import morelsOverhead from "@/assets/morels/morels-overhead-needles.jpg";
import morelTallGreen from "@/assets/morels/morel-tall-green.jpg";
import morelClassic from "@/assets/morels/morel-classic-stem.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { useI18n } from "@/i18n/context";

const photos = [
  { src: morelsGolden, alt: "Golden morels on burned soil" },
  { src: morelsTrio, alt: "Trio of dark morels on pine needles" },
  { src: morelHoneycomb, alt: "Honeycomb morel on mossy ground" },
  { src: morelsCluster, alt: "Cluster of morels on charcoal" },
  { src: morelBurnedLog, alt: "Morel near a burned log" },
  { src: morelsCloseup, alt: "Close-up morel texture" },
  { src: morelsDarkPair, alt: "Pair of dark morels" },
  { src: morelsOverhead, alt: "Morels from above on pine needles" },
  { src: morelTallGreen, alt: "Tall black morel in greenery" },
  { src: morelClassic, alt: "Classic morel on white stem" },
];

const GallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const { t } = useI18n();

  return (
    <section id="galerie" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal blur>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">{t("gallery.label")}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              {t("gallery.title")} <span className="italic text-gradient-gold">{t("gallery.titleHighlight")}</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mt-8" />
            <p className="text-secondary-foreground/70 font-light mt-6 max-w-xl mx-auto">{t("gallery.description")}</p>
          </div>
        </ScrollReveal>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {photos.map((photo, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="mb-3 md:mb-4 break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer"
              onClick={() => setSelectedPhoto(i)}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
              <motion.p className="absolute bottom-3 left-3 right-3 text-xs font-light text-foreground/90" initial={{ opacity: 0, y: 10 }} whileHover={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>{photo.alt}</motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img src={photos[selectedPhoto].src} alt={photos[selectedPhoto].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.p className="absolute bottom-8 text-sm text-muted-foreground font-light"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >{photos[selectedPhoto].alt}</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
