// Central gallery data – all morel photos with SEO-optimised alt text
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
import morilleSolitaire from "@/assets/morels/morille-solitaire-aiguilles.jpg";
import morillesGroupe from "@/assets/morels/morilles-groupe-foret-brulee.jpg";
import morilleJeune from "@/assets/morels/morille-jeune-pousse.jpg";
import morilleHerbes from "@/assets/morels/morille-herbes-vertes.jpg";
import morilleVegetation from "@/assets/morels/morille-vegetation-repousse.jpg";
import morilleSolBrule from "@/assets/morels/morille-sol-brule-ciel.jpg";
import morilleCharbon from "@/assets/morels/morille-charbon-vegetation.jpg";
import morilleGrande from "@/assets/morels/morille-grande-alveolee.jpg";
import morilleChampignons from "@/assets/morels/morille-champignons-oranges.jpg";
import morilleNoire from "@/assets/morels/morille-noire-pied-arbre.jpg";

export interface GalleryPhoto {
  src: string;
  alt: string;
  title: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  { src: morelsGolden, alt: "Groupe de morilles dorées sur sol brûlé en Colombie-Britannique", title: "Morilles dorées" },
  { src: morelsTrio, alt: "Trio de morilles noires sur lit d'aiguilles de pin après feu de forêt", title: "Trio de morilles" },
  { src: morelHoneycomb, alt: "Morille à texture alvéolée sur sol moussu en forêt canadienne", title: "Morille alvéolée" },
  { src: morelsCluster, alt: "Grappe de morilles sauvages sur charbon de bois au Yukon", title: "Grappe sur charbon" },
  { src: morelBurnedLog, alt: "Morille de feu poussant près d'un tronc brûlé en Colombie-Britannique", title: "Morille près d'un tronc" },
  { src: morelsCloseup, alt: "Gros plan sur la texture d'une morille sauvage canadienne", title: "Texture en gros plan" },
  { src: morelsDarkPair, alt: "Paire de morilles sombres cueillies en forêt brûlée canadienne", title: "Paire de morilles" },
  { src: morelsOverhead, alt: "Morilles vues du dessus sur aiguilles de pin en Colombie-Britannique", title: "Vue aérienne" },
  { src: morelTallGreen, alt: "Grande morille noire entourée de verdure dans une forêt du Yukon", title: "Morille en verdure" },
  { src: morelClassic, alt: "Morille classique sur pied blanc dans une forêt brûlée canadienne", title: "Morille classique" },
  { src: morilleSolitaire, alt: "Morille solitaire sur lit d'aiguilles de pin en forêt brûlée de Colombie-Britannique", title: "Morille solitaire" },
  { src: morillesGroupe, alt: "Groupe de morilles de feu poussant sur sol brûlé avec charbon au Canada", title: "Groupe en forêt brûlée" },
  { src: morilleJeune, alt: "Jeune morille blonde émergeant du sol en Colombie-Britannique", title: "Jeune pousse" },
  { src: morilleHerbes, alt: "Morille sauvage alvéolée entourée d'herbes vertes au Yukon", title: "Morille dans les herbes" },
  { src: morilleVegetation, alt: "Morille de feu poussant parmi la végétation en repousse après incendie", title: "Végétation en repousse" },
  { src: morilleSolBrule, alt: "Morille sur sol brûlé avec ciel bleu et forêt en arrière-plan au Canada", title: "Morille et ciel bleu" },
  { src: morilleCharbon, alt: "Morille dorée sur charbon de bois entourée de feuillage naissant", title: "Charbon et feuillage" },
  { src: morilleGrande, alt: "Grande morille de feu à alvéoles profondes en forêt brûlée canadienne", title: "Grande morille alvéolée" },
  { src: morilleChampignons, alt: "Morille sauvage entourée de petits champignons oranges sur sol carbonisé", title: "Morille et champignons" },
  { src: morilleNoire, alt: "Morille noire au pied d'un arbre brûlé en Colombie-Britannique", title: "Morille noire" },
];

/** Returns `count` random photos from the gallery (Fisher-Yates shuffle) */
export function getRandomPhotos(count: number): GalleryPhoto[] {
  const shuffled = [...galleryPhotos];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
