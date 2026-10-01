// Central image map — swap files here without touching components.
// All photos live in /public/images/ayurveda; licenses and authors are in lib/imageCredits.ts.
const A = '/images/ayurveda'

export const photos = {
  heroRemedies: { src: `${A}/hero-remedies.jpg`, alt: 'Turmeric, fenugreek, ashwagandha and boswellia on wooden spoons — classic Ayurvedic herbs' },
  ayurvedaBowls: { src: `${A}/ayurveda-bowls.jpg`, alt: 'Bowls of turmeric, ashwagandha powder, fenugreek and boswellia on a rustic wooden table' },
  ashwagandhaRoot: { src: `${A}/ashwagandha-root.jpg`, alt: 'Dried ashwagandha roots on a dark wooden surface' },
  ashwagandhaSpoons: { src: `${A}/ashwagandha-spoons.jpg`, alt: 'Ashwagandha root and ashwagandha powder on wooden spoons' },
  ashwagandhaRoots: { src: `${A}/ashwagandha-roots.jpg`, alt: 'A pile of dried ashwagandha roots' },
  turmericRootPowder: { src: `${A}/turmeric-root-powder.jpg`, alt: 'Fresh turmeric root with a bowl of turmeric powder' },
  turmericSpoon: { src: `${A}/turmeric-spoon.jpg`, alt: 'Golden turmeric powder on a wooden spoon against a black background' },
  shatavariFlowers: { src: `${A}/shatavari-flowers.jpg`, alt: 'Flowering shatavari plant with delicate white blossoms' },
  shatavariPlant: { src: `${A}/shatavari-plant.jpg`, alt: 'Shatavari (Asparagus racemosus) branches in bloom' },
  shilajit: { src: `${A}/shilajit.jpg`, alt: 'A piece of purified Himalayan shilajit resin' },
  kaunchBeej: { src: `${A}/kaunch-beej.jpg`, alt: 'Kaunch (Mucuna pruriens) plant with velvet bean pods' },
  gokshura: { src: `${A}/gokshura.jpg`, alt: 'Gokshura (Tribulus terrestris) plant with yellow flowers' },
  safedMusli: { src: `${A}/safed-musli.jpg`, alt: 'Dried safed musli tubers' },
  amla: { src: `${A}/amla.jpg`, alt: 'Fresh amla (Indian gooseberry) fruits' },
  fenugreek: { src: `${A}/fenugreek.jpg`, alt: 'Methi (fenugreek) seeds in a heart-shaped wooden dish' },
  fennel: { src: `${A}/fennel.jpg`, alt: 'Saunf (fennel seeds), a traditional Indian digestive' },
  cinnamonPowder: { src: `${A}/cinnamon-powder.jpg`, alt: 'Ground dalchini (cinnamon) powder with cinnamon sticks' },
  mortarPestle: { src: `${A}/mortar-pestle.jpg`, alt: 'Traditional Indian kundi sota stone mortar and pestle grinding herbs' },
  herbalOil: { src: `${A}/herbal-oil.jpg`, alt: 'Amber glass bottle of herbal oil surrounded by fresh herbs' },
  herbalOilDropper: { src: `${A}/herbal-oil-dropper.jpg`, alt: 'Herbal oil being drawn from an amber dropper bottle' },
  herbalCapsules: { src: `${A}/herbal-capsules.jpg`, alt: 'Herbal capsules and tablets on wooden spoons' },
  resinBowl: { src: `${A}/resin-bowl.jpg`, alt: 'Natural herbal resin in a stone mortar' },
  herbMarket: { src: `${A}/herb-market.jpg`, alt: 'Display of raw Ayurvedic herbs, roots and plant materials' },
} as const

export type PhotoKey = keyof typeof photos

export const images = {
  hero: {
    desktop: photos.heroRemedies.src,
    mobile: photos.ayurvedaBowls.src,
    alt: photos.heroRemedies.alt,
  },
  collections: {
    'digestive-health-detox': photos.fenugreek,
    'male-stamina-kits': photos.ashwagandhaRoot,
    'mens-vitamins-supplements': photos.herbalCapsules,
    'womens-supplements': photos.shatavariFlowers,
    combos: photos.ayurvedaBowls,
  },
  ingredients: {
    ashwagandha: photos.ashwagandhaSpoons,
    shilajit: photos.shilajit,
    safedMusli: photos.safedMusli,
    gokshura: photos.gokshura,
    kaunchBeej: photos.kaunchBeej,
    shatavari: photos.shatavariPlant,
    turmeric: photos.turmericRootPowder,
  },
  brand: {
    packaging: photos.herbalOil,
    story: photos.mortarPestle,
  },
  productFallback: photos.ayurvedaBowls,
} as const
