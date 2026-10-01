import type { PhotoKey } from '@/lib/images'

// CC BY / CC BY-SA require visible attribution; keep this list in sync with lib/images.ts.
export interface ImageCredit {
  author: string
  license: string
  licenseUrl: string
  source: string
}

const BY2 = { license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/' }
const BY4 = { license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' }
const BYSA4 = { license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' }
const CC0 = { license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/' }
const W = 'https://commons.wikimedia.org/wiki/File:'

export const imageCredits: Record<PhotoKey, ImageCredit> = {
  heroRemedies: { author: 'formulatehealth', ...BY2, source: `${W}Natural_Remedies_-_Ayurvedic_Medicine_-_Turmeric,_Fenugreek,_Ashwagandha_and_Boswellia.jpg` },
  ayurvedaBowls: { author: 'formulatehealth', ...BY2, source: `${W}Ayurveda_-_Turmeric,_Boswellia,_Ashwagandha_and_Fenugreek_-_50191955812.jpg` },
  ashwagandhaRoot: { author: 'formulatehealth', ...BY2, source: `${W}Ashwagandha_Root.jpg` },
  ashwagandhaSpoons: { author: 'formulatehealth', ...BY2, source: `${W}Ashwagandha_Powder_and_Root_on_Spoons_-_50191697031.jpg` },
  ashwagandhaRoots: { author: 'Piyush Kothari', ...BYSA4, source: `${W}Ashwagandha_Roots.jpg` },
  turmericRootPowder: { author: 'formulatehealth', ...BY2, source: `${W}Turmeric_Root_and_Turmeric_Powder.jpg` },
  turmericSpoon: { author: 'formulatehealth', ...BY2, source: `${W}Turmeric_Powder_on_a_Spoon_-_Black_Background.jpg` },
  shatavariFlowers: { author: 'Forestowlet', ...CC0, source: `${W}Shatavari_01.JPG` },
  shatavariPlant: { author: 'Forestowlet', ...CC0, source: `${W}Shatavari_02.JPG` },
  shilajit: { author: 'Valentin', ...BYSA4, source: `${W}Purified_Shilajit,_Mumio.jpg` },
  kaunchBeej: { author: 'Lalithamba from India', ...BY2, source: `${W}Mucuna_pruriens_(L.)_DC_-_Flickr_-_lalithamba.jpg` },
  gokshura: { author: 'Obsidian Soul', ...CC0, source: `${W}Tribulus_terrestris_growing_on_a_beach_(Philippines)_1.jpg` },
  safedMusli: { author: 'Salil Kumar Mukherjee', ...BYSA4, source: `${W}Dried_Safed_Musli_tubers.jpg` },
  amla: { author: 'Krish Dulal', ...BYSA4, source: `${W}Phyllanthus_emblica_fruit_01.jpg` },
  fenugreek: { author: 'formulatehealth', ...BY2, source: `${W}Fenugreek_in_a_Heart_Shaped_Dish_(50191695161).jpg` },
  fennel: { author: 'Jeeheon Cho', ...BY2, source: `${W}Saunf_or_Fennel_seeds_used_as_an_after-mint_in_India.jpg` },
  cinnamonPowder: { author: 'formulatehealth', ...BY2, source: `${W}Ground_Cinnamon_Powder_and_a_Cinnamon_Stick.jpg` },
  mortarPestle: { author: 'Harvinder Chandigarh', ...BY4, source: `${W}Indian_Kundi_Sota_traditional_manual_mortar_and_pestle.jpg` },
  herbalOil: { author: 'formulatehealth', ...BY2, source: `${W}Rosemary_Oil_in_a_bottle_and_rosemary_herb.jpg` },
  herbalOilDropper: { author: 'formulatehealth', ...BY2, source: `${W}Taking_rosemary_oil_from_a_bottle.jpg` },
  herbalCapsules: { author: 'formulatehealth', ...BY2, source: `${W}Health_Supplements_-_Nutraceuticals_-_50191152323.jpg` },
  resinBowl: { author: 'formulatehealth', ...BY2, source: `${W}Boswellia_Resin_in_a_grey_bowl_-_50191148388.jpg` },
  herbMarket: { author: 'Vis M', ...BYSA4, source: `${W}Ayurvedic_plant_materials.jpg` },
}
