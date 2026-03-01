import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment conserver les morilles séchées ?",
    answer:
      "Conservez-les dans un récipient hermétique, à l'abri de la lumière et de l'humidité, à température ambiante. Elles se conservent ainsi pendant 2 ans minimum sans perte d'arôme.",
  },
  {
    question: "Comment réhydrater les morilles ?",
    answer:
      "Plongez-les dans de l'eau tiède (pas bouillante) pendant 20 à 30 minutes. Conservez l'eau de trempage : c'est un bouillon précieux pour vos sauces et risottos.",
  },
  {
    question: "Quelle est la différence entre morille de feu et morille cultivée ?",
    answer:
      "Les morilles de feu poussent naturellement sur les sols brûlés des forêts boréales canadiennes. Elles développent un arôme fumé intense impossible à reproduire en culture. Les morilles cultivées (principalement chinoises) sont produites en serre et ont un goût beaucoup plus neutre.",
  },
  {
    question: "Quelle quantité pour un plat ?",
    answer:
      "Comptez environ 10 à 15 g de morilles séchées par personne (elles triplent de volume à la réhydratation). Nos sachets de 12 g conviennent pour 1 à 2 personnes, ceux de 30 g pour 3 à 4 personnes.",
  },
  {
    question: "Livrez-vous en dehors de la France ?",
    answer:
      "Oui, nous livrons dans toute l'Union Européenne. Les frais de livraison et délais varient selon la destination. Contactez-nous pour un devis personnalisé pour les commandes hors France.",
  },
  {
    question: "Les morilles sont-elles sans queue ?",
    answer:
      "Oui, toutes nos morilles sont vendues sans queue (pied retiré). Vous n'achetez que la tête, la partie la plus savoureuse et aromatique du champignon.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-card" aria-label="Questions fréquentes">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Questions <span className="italic text-gradient-gold">fréquentes</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-8" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-gold/10 rounded-sm px-6 data-[state=open]:border-gold/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif text-base md:text-lg font-light hover:no-underline hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground font-light leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
