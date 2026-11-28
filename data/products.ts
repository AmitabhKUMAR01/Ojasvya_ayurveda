import type { Product } from '@/types/product'

const P = '/images/products'

export const products: Product[] = [
  {
    id: 'prod_001',
    slug: 'madhurex-churna',
    title: 'Madhurex Churna — Diabetic Powder',
    shortTitle: 'Madhurex Churna',
    collections: ['digestive-health-detox', 'mens-vitamins-supplements'],
    price: 1150,
    compareAtPrice: 1400,
    images: [
      {
        src: `${P}/madhurex-churna-jar-and-label-details.jpg`,
        alt: 'Madhurex Churna 200g jar — front, side and back view showing Ojasvya Ayurveda Diabetic Powder',
      },
      {
        src: `${P}/madhurex-churna-product-benefits-collage.jpg`,
        alt: 'Madhurex Churna box and jar collage showing benefits: Balances Blood Sugar, Boosts Metabolism, Enhances Energy',
      },
    ],
    stock: 75,
    rating: 4.7,
    reviewCount: 142,
    tags: ['diabetic', 'churna', 'blood-sugar', 'ayurvedic-powder', 'diabetes', 'natural'],
    shortDescription:
      'An Ayurvedic proprietary diabetic powder with 8 natural herbs — traditionally used to support healthy blood sugar levels, metabolism, and energy. Net Wt. 200 gm.',
    fullDescription:
      'Madhurex Churna is an Ayurvedic Proprietary Medicine crafted by Ojasvya Ayurveda to support healthy blood sugar levels naturally. Each 100g contains a precise blend of 8 powerful herbs including Amla, Gurmar, Bel, Neem, Karela, Jamun, Methi, and Giloy — all traditionally revered in Ayurveda for their role in supporting metabolic wellness.\n\nThe formulation helps in balancing blood sugar, boosting metabolism, and enhancing energy — making it ideal for individuals seeking natural support for their blood sugar concerns.\n\nManufactured by Ojasvya Ayurveda, Bareilly.\n\nDisclaimer: These statements have not been evaluated by any regulatory authority. Not intended to diagnose, treat, cure, or prevent any disease. Please consult a qualified Ayurvedic practitioner before use.',
    benefits: [
      'Traditionally used to support healthy blood sugar levels',
      'May help boost metabolism naturally',
      'May support sustained energy and vitality',
      '100% Natural — No Added Preservatives',
      'Ayurvedic formulation — Safe & Effective',
      'Made in India with classical Ayurvedic herbs',
    ],
    ingredients: [
      {
        name: 'Amla (Phyllanthus emblica)',
        nameHindi: 'आँवला',
        description: 'Rich in Vitamin C; traditionally used to support metabolism and blood sugar balance. 12.5g per 100g.',
      },
      {
        name: 'Gurmar (Gymnema sylvestre)',
        nameHindi: 'गुड़मार',
        description: 'Known as "Sugar Destroyer" in Ayurveda; traditionally used to support healthy glucose metabolism. 12.5g per 100g.',
      },
      {
        name: 'Bel (Aegle marmelos)',
        nameHindi: 'बेल',
        description: 'Traditionally used in Ayurveda to support digestive health and blood sugar regulation. 12.5g per 100g.',
      },
      {
        name: 'Neem (Azadirachta indica)',
        nameHindi: 'नीम',
        description: 'A classical Ayurvedic herb traditionally used for its blood-purifying and metabolic support properties. 12.5g per 100g.',
      },
      {
        name: 'Karela (Momordica charantia)',
        nameHindi: 'करेला',
        description: 'Bitter melon — traditionally used in Ayurveda to support healthy blood sugar levels. 12.5g per 100g.',
      },
      {
        name: 'Jamun (Syzygium cumini)',
        nameHindi: 'जामुन',
        description: 'Seeds traditionally used to support healthy glucose metabolism. 12.5g per 100g.',
      },
      {
        name: 'Methi (Trigonella foenum-graecum)',
        nameHindi: 'मेथी',
        description: 'Fenugreek seeds traditionally used to support healthy blood sugar and cholesterol levels. 12.5g per 100g.',
      },
      {
        name: 'Giloy (Tinospora cordifolia)',
        nameHindi: 'गिलोय',
        description: 'A classical Ayurvedic Rasayana traditionally used to support immunity and metabolic health. 12.5g per 100g.',
      },
    ],
    howToUse:
      'Take 1 to 2 teaspoons twice a day or as directed by the physician. Best taken with warm water before meals.',
    faq: [
      {
        question: 'What is the net weight of Madhurex Churna?',
        answer: 'Each jar contains 200 grams of Madhurex Churna Diabetic Powder.',
      },
      {
        question: 'Can diabetic patients use this along with their medication?',
        answer:
          'This is an Ayurvedic Proprietary Medicine. Please consult your doctor or Ayurvedic practitioner before combining with existing medications.',
      },
      {
        question: 'How long does one jar last?',
        answer:
          'At 1–2 teaspoons twice daily (approx. 5–10g per day), one 200g jar typically lasts 20–40 days.',
      },
      {
        question: 'Does this have any preservatives?',
        answer: 'No. Madhurex Churna contains no added preservatives. It is 100% natural.',
      },
    ],
    isCombo: false,
    createdAt: '2026-10-01',
    bestSellerRank: 3,
  },

  {
    id: 'prod_002',
    slug: 'madhurex-capsules',
    title: 'Madhurex Capsules — For Healthy Blood Sugar',
    shortTitle: 'Madhurex Capsules',
    collections: ['digestive-health-detox', 'mens-vitamins-supplements'],
    price: 399,
    compareAtPrice: 499,
    images: [
      {
        src: `${P}/madhurex-capsules-bottle-and-capsules.jpg`,
        alt: 'Madhurex Capsules bottle with loose capsules — Ojasvya Ayurveda Diabetes Control, 30 capsules',
      },
      {
        src: `${P}/madhurex-capsules-box-and-bottle.jpg`,
        alt: 'Madhurex Capsules box and bottle — front, side, back views showing Ojasvya Ayurveda branding',
      },
      {
        src: `${P}/madhurex-capsules-single-bottle-front.jpg`,
        alt: 'Madhurex Capsules single bottle front view with capsules and natural herbs in background',
      },
      {
        src: `${P}/madhurex-capsules-front-side-back-views.jpg`,
        alt: 'Madhurex Capsules multi-angle product view — front, side and back of bottle',
      },
    ],
    stock: 90,
    rating: 4.8,
    reviewCount: 198,
    tags: ['diabetic', 'capsule', 'blood-sugar', 'diabetes', 'ayurvedic', 'natural'],
    shortDescription:
      'Premium Ayurvedic capsules for healthy blood sugar with 7 potent herbs. Supports pancreatic health. 30 capsules per bottle. Chemical-free.',
    fullDescription:
      'Madhurex Capsules by Ojasvya Ayurveda is a premium Ayurvedic formulation crafted to support healthy blood sugar levels. This natural blend of 7 potent herbs — Methi seed, Gurmar, Jamun guthli, Giloy, Ashwagandha, Haldi, and Karela — works synergistically to promote overall well-being and balanced glucose levels.\n\nKey highlights: Natural Ingredients | Supports Pancreatic Health | Chemical-Free | Holistic Health\n\nEach bottle contains 30 capsules.\n\nManufactured by Ojasvya Ayurveda, Bareilly.\n\nDisclaimer: This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Always consult your healthcare provider before use.',
    benefits: [
      'Helps maintain healthy glucose levels naturally',
      'Supports normal pancreatic function',
      'Free from artificial colours, chemicals and additives',
      'Convenient capsule form for precise dosing',
      'Contains classical herbs like Ashwagandha, Giloy and Gurmar',
      'Enhances general health and vitality',
    ],
    ingredients: [
      {
        name: 'Methi Seed (Trigonella foenum-graecum)',
        nameHindi: 'मेथी',
        description: 'Fenugreek seeds traditionally used to support healthy blood sugar and insulin function.',
      },
      {
        name: 'Gurmar (Gymnema sylvestre)',
        nameHindi: 'गुड़मार',
        description: '"Sugar Destroyer" — classically used to support glucose metabolism.',
      },
      {
        name: 'Jamun Guthli (Syzygium cumini)',
        nameHindi: 'जामुन गुठली',
        description: 'Jamun seed traditionally used to support healthy glycemic response.',
      },
      {
        name: 'Giloy (Tinospora cordifolia)',
        nameHindi: 'गिलोय',
        description: 'Classical Ayurvedic Rasayana supporting immunity and metabolic health.',
      },
      {
        name: 'Ashwagandha (Withania somnifera)',
        nameHindi: 'अश्वगंधा',
        description: 'Adaptogenic herb traditionally used to support energy, immunity and stress management.',
      },
      {
        name: 'Haldi (Curcuma longa)',
        nameHindi: 'हल्दी',
        description: 'Turmeric — classically used for its anti-inflammatory and metabolic support properties.',
      },
      {
        name: 'Karela (Momordica charantia)',
        nameHindi: 'करेला',
        description: 'Bitter melon traditionally used for blood sugar management.',
      },
    ],
    howToUse:
      'Take one capsule 3 times daily at regular intervals with water or milk. Store in a cool, dark and dry place. Keep out of reach of children.',
    faq: [
      {
        question: 'How many capsules are in one bottle?',
        answer: 'Each bottle of Madhurex Capsules contains 30 capsules.',
      },
      {
        question: 'How long does one bottle last?',
        answer:
          'At 3 capsules per day (recommended), one bottle lasts about 10 days. For a 30-day supply, we recommend buying 3 bottles.',
      },
      {
        question: 'Can I take Madhurex Capsules with Madhurex Churna?',
        answer:
          'Please consult your Ayurvedic practitioner or physician before combining products for personalized guidance. A Madhurex Combo Pack is also available.',
      },
      {
        question: 'Are there any side effects?',
        answer:
          'Madhurex Capsules are chemical-free with no known side effects when used as directed. Discontinue and consult a doctor if you experience any discomfort.',
      },
    ],
    isCombo: false,
    createdAt: '2026-10-01',
    bestSellerRank: 2,
  },

  {
    id: 'prod_003',
    slug: 'madhurex-combo-pack',
    title: 'Madhurex Combo Pack — Capsules + Powder',
    shortTitle: 'Madhurex Combo Pack',
    collections: ['combos', 'digestive-health-detox'],
    price: 1600,
    compareAtPrice: 2114,
    images: [
      {
        src: `${P}/madhurex-capsules-box-and-bottle.jpg`,
        alt: 'Madhurex Capsules packaging — part of the Madhurex Combo Pack',
      },
      {
        src: `${P}/madhurex-churna-product-benefits-collage.jpg`,
        alt: 'Madhurex Churna jar and benefits — part of the Madhurex Combo Pack',
      },
      {
        src: `${P}/madhurex-capsules-bottle-and-capsules.jpg`,
        alt: 'Madhurex Capsules bottle with capsules',
      },
      {
        src: `${P}/madhurex-churna-jar-and-label-details.jpg`,
        alt: 'Madhurex Churna jar label details',
      },
    ],
    stock: 40,
    rating: 4.9,
    reviewCount: 86,
    tags: ['combo', 'diabetic', 'blood-sugar', 'capsules', 'churna', 'value-pack'],
    shortDescription:
      'Complete Madhurex Combo: 1 pack Madhurex Powder 200g + 1 pack Madhurex 30 Capsules. Synergistic Ayurvedic support for healthy blood sugar.',
    fullDescription:
      'The Madhurex Combo Pack offers a synergistic blend of our best-selling Madhurex products, designed to support healthy blood sugar levels and promote overall well-being. This comprehensive package combines Madhurex Capsules and Madhurex Powder, featuring potent herbs that work harmoniously to balance glucose levels naturally.\n\nPackage includes: 1 × Madhurex Powder 200gm + 1 × Madhurex 30 Capsules.\n\nKey features: Natural Ingredients | Supports Pancreatic Health | Chemical-Free | Holistic Health | Safe and Effective\n\nDisclaimer: This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Always consult your healthcare provider before use.',
    benefits: [
      'Complete dual approach — powder + capsules',
      'Helps maintain healthy glucose levels naturally',
      'Supports normal pancreatic function',
      'Chemical-free Ayurvedic formulation',
      'Better value than buying both separately',
      'Enhances general health and vitality',
    ],
    ingredients: [
      {
        name: 'Madhurex Capsules blend',
        description: 'Methi, Gurmar, Jamun guthli, Giloy, Ashwagandha, Haldi and Karela.',
      },
      {
        name: 'Madhurex Churna blend',
        description: 'Amla, Gurmar, Bel, Neem, Karela, Jamun, Methi and Giloy.',
      },
    ],
    howToUse:
      'Follow the individual dosage for each product as printed on the labels, or as directed by your physician. Store both products in a cool, dry place.',
    faq: [
      {
        question: 'What is included in the combo pack?',
        answer: 'You get 1 pack of Madhurex Powder (200gm) and 1 pack of Madhurex Capsules (30 capsules).',
      },
      {
        question: 'How much do I save with the combo?',
        answer:
          'Buying the combo costs less than purchasing Madhurex Capsules and Madhurex Churna separately at MRP.',
      },
      {
        question: 'Is this suitable for long-term use?',
        answer:
          'Please consult your Ayurvedic practitioner for personalized long-term guidance.',
      },
    ],
    isCombo: true,
    createdAt: '2026-10-01',
    bestSellerRank: 1,
  },

  {
    id: 'prod_004',
    slug: 'livirex-ds-syrup',
    title: 'Livirex DX Syrup — Liver Support',
    shortTitle: 'Livirex DX Syrup',
    collections: ['digestive-health-detox'],
    price: 180,
    compareAtPrice: 215,
    images: [
      {
        src: `${P}/livirex-ds-syrup-bottle-and-box-front.jpg`,
        alt: 'Livirex DS Liver Syrup 210ml amber bottle and green box — Ojasvya Ayurveda',
      },
      {
        src: `${P}/livirex-ds-syrup-packaging-and-benefits.jpg`,
        alt: 'Livirex DS Syrup packaging and benefits — Protects Liver Cells, Improves Liver Function, Detoxification, Supports Appetite',
      },
      {
        src: `${P}/livirex-ds-syrup-product-image-collage.jpg`,
        alt: 'Livirex DS Syrup product collage with liver health benefits and herbal ingredients',
      },
      {
        src: `${P}/livirex-ds-syrup-two-bottles-and-box.jpg`,
        alt: 'Livirex DS Syrup — two bottles and packaging box arrangement',
      },
    ],
    stock: 60,
    rating: 4.7,
    reviewCount: 163,
    tags: ['liver', 'syrup', 'detox', 'liver-health', 'digestive', 'herbal'],
    shortDescription:
      'Ojasvya Ayurveda Livirex DX Syrup — protects the liver, enhances liver function and supports liver health. Herbal liver tonic. Dosage: 5ml twice daily.',
    fullDescription:
      'Livirex DX Syrup by Ojasvya Ayurveda is a powerful herbal liver tonic formulated to protect the liver, enhance liver function and support overall liver health.\n\nKey benefits: May help protect the liver against various hepatotoxins; can help improve appetite, digestion and assimilation; supports weight management and healthy growth; acts as a supportive adjuvant during prolonged illness and recovery; may assist in reducing fat build-up in the liver caused by dietary and lifestyle challenges.\n\nEach 10ml contains distilled extracts of: Bhuyamalaki 500mg, Kalimirch 500mg, Kalmegh 500mg, Kutki 500mg, Sharpunkha 500mg, Bhangra 500mg, Punarnava 500mg, Rohitak 500mg, Vidanga 500mg, Kasni 500mg, Pitpapra 500mg, Chitrakmool 500mg, Pippali 200mg, Haritaki 200mg, Ajwain 200mg, Kutaj 200mg, Saunf 200mg.\n\nManufactured by Ojasvya Ayurveda, Bareilly.\n\nDisclaimer: These statements have not been evaluated by any regulatory authority. Not intended to diagnose, treat, cure, or prevent any disease.',
    benefits: [
      'May help protect the liver against hepatotoxins',
      'Can help improve appetite, digestion and assimilation',
      'Supports weight management and healthy growth',
      'Supportive adjuvant during prolonged illness and recovery',
      'May assist in reducing dietary/lifestyle-related fat build-up in the liver',
      'Classical multi-herb Ayurvedic liver tonic',
    ],
    ingredients: [
      { name: 'Bhuyamalaki (Phyllanthus urinaria)', nameHindi: 'भुयामलकी', description: 'Classically used for liver support. 500mg per 10ml.' },
      { name: 'Kalimirch (Black Pepper)', nameHindi: 'कालीमिर्च', description: 'Traditional bioenhancer. 500mg per 10ml.' },
      { name: 'Kalmegh (Andrographis paniculata)', nameHindi: 'कालमेघ', description: 'Classical liver tonic herb. 500mg per 10ml.' },
      { name: 'Kutki (Picrorhiza kurroa)', nameHindi: 'कुटकी', description: 'Potent classical Ayurvedic liver herb. 500mg per 10ml.' },
      { name: 'Sharpunkha (Tephrosia purpurea)', nameHindi: 'शरपुंखा', description: 'Traditionally used for liver and spleen support. 500mg per 10ml.' },
      { name: 'Bhangra (Eclipta alba)', nameHindi: 'भंगरा', description: 'Classical herb for liver health. 500mg per 10ml.' },
      { name: 'Punarnava (Boerhavia diffusa)', nameHindi: 'पुनर्नवा', description: 'Classical liver and kidney tonic. 500mg per 10ml.' },
      { name: 'Rohitak (Tecomella undulata)', nameHindi: 'रोहितक', description: 'Traditional herb used for liver support. 500mg per 10ml.' },
      { name: 'Vidanga (Embelia ribes)', nameHindi: 'विडंग', description: 'Digestive and liver support. 500mg per 10ml.' },
      { name: 'Kasni (Cichorium intybus)', nameHindi: 'कासनी', description: 'Chicory — traditional liver tonic. 500mg per 10ml.' },
      { name: 'Pitpapra (Fumaria indica)', nameHindi: 'पितपापड़ा', description: 'Traditionally used for liver and blood purification. 500mg per 10ml.' },
      { name: 'Chitrakmool (Plumbago zeylanica)', nameHindi: 'चित्रकमूल', description: 'Classical digestive and metabolic herb. 500mg per 10ml.' },
      { name: 'Pippali (Piper longum)', nameHindi: 'पिप्पली', description: 'Long pepper — classical bioenhancer. 200mg per 10ml.' },
      { name: 'Haritaki (Terminalia chebula)', nameHindi: 'हरीतकी', description: 'Triphala fruit for liver and digestive health. 200mg per 10ml.' },
      { name: 'Ajwain (Trachyspermum ammi)', nameHindi: 'अजवाइन', description: 'Carom seeds for digestive support. 200mg per 10ml.' },
      { name: 'Kutaj (Holarrhena antidysenterica)', nameHindi: 'कुटज', description: 'Classical digestive herb. 200mg per 10ml.' },
      { name: 'Saunf (Foeniculum vulgare)', nameHindi: 'सौंफ', description: 'Fennel for digestion and natural flavouring. 200mg per 10ml.' },
    ],
    howToUse:
      'Dosage: 5ml twice daily, or as directed by a physician. Shake the bottle well before use. Read the label carefully before use. Store in a cool and dry place, away from direct sunlight. Do not refrigerate. Keep out of the reach of children.',
    faq: [
      {
        question: 'What is the recommended dosage?',
        answer: '5ml twice daily, or as directed by your physician. Shake well before use.',
      },
      {
        question: 'Should I refrigerate Livirex DX?',
        answer: 'No. Store in a cool and dry place away from direct sunlight. Do not refrigerate.',
      },
      {
        question: 'Can I take Livirex DX if I have a liver condition?',
        answer:
          'Please consult your doctor or Ayurvedic practitioner before use if you have an existing liver condition or are on medication.',
      },
      {
        question: 'Is it safe for daily long-term use?',
        answer:
          'Livirex DX is made from classical herbal extracts. For long-term use guidance, please consult your Ayurvedic practitioner.',
      },
    ],
    isCombo: false,
    createdAt: '2026-10-01',
    bestSellerRank: 4,
  },

  {
    id: 'prod_005',
    slug: 'moringa-powder',
    title: 'Ojasvya Moringa Powder — Nature\'s Daily Nutrition',
    shortTitle: 'Moringa Powder',
    collections: ['mens-vitamins-supplements', 'womens-supplements', 'male-stamina-kits'],
    price: 550,
    compareAtPrice: 600,
    images: [
      {
        src: `${P}/moringa-powder-jar-front.jpg`,
        alt: 'Ojasvya Moringa Powder jar — Nature\'s Daily Nutrition, bright green powder with black lid',
      },
      {
        src: `${P}/moringa-powder-box-and-jar.jpg`,
        alt: 'Ojasvya Moringa Powder retail box and jar — Bareilly, Uttar Pradesh',
      },
      {
        src: `${P}/moringa-powder-benefits-collage.jpg`,
        alt: 'Moringa Powder benefits collage — immunity, energy, digestion, healthy skin and hair',
      },
      {
        src: `${P}/moringa-powder-hero.jpg`,
        alt: 'Moringa Powder hero shot with fresh moringa leaves and wooden bowl of powder',
      },
      {
        src: `${P}/moringa-powder-usage.jpg`,
        alt: 'Get the power of Moringa in every sip — powder poured into a green drink',
      },
      {
        src: `${P}/moringa-powder-lifestyle.jpg`,
        alt: 'Moringa Powder lifestyle image — superfood for a healthier life',
      },
    ],
    stock: 80,
    rating: 4.8,
    reviewCount: 124,
    tags: ['moringa', 'superfood', 'powder', 'immunity', 'energy', 'skin-hair', 'fssai'],
    shortDescription:
      '100% pure Moringa powder — Nature\'s Daily Nutrition. Boosts immunity, increases energy, supports overall health. Nourish skin & hair from within. FSSAI compliant.',
    fullDescription:
      'Ojasvya Moringa Powder is Nature\'s Daily Nutrition — a 100% pure Moringa Oleifera leaf powder crafted to nourish skin and hair from within for youthful glow and thickness, while supporting everyday vitality.\n\nKey benefits on the pack: Boosts Immunity | Increases Energy | Supports Overall Health | Rich in Vitamins & Minerals.\n\nAlso traditionally valued for better digestion and healthy skin & hair. Ideal as a daily superfood mix in water, smoothies, or food.\n\nIngredients: 100% Moringa Powder.\n\nManufactured by Ojasvya Ayurveda, Bareilly, Uttar Pradesh 243001. Email: Ojasvyaayurveda@gmail.com.\n\nDisclaimer: This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your healthcare provider before use.',
    benefits: [
      'Boosts immunity',
      'Increases energy',
      'Supports overall health and vitality',
      'Rich in vitamins and minerals',
      'Supports better digestion',
      'Nourishes skin and hair from within',
      '100% pure Moringa powder — no fillers',
    ],
    ingredients: [
      {
        name: 'Moringa Oleifera Leaf Powder',
        nameHindi: 'सहजन / मोरिंगा',
        description:
          '100% pure dried Moringa leaf powder — a nutrient-dense superfood traditionally used to support energy, immunity and overall wellness.',
      },
    ],
    howToUse:
      'Mix 1 teaspoon of Moringa Powder in a glass of water, juice, smoothie or warm milk once or twice daily, or as directed by your healthcare provider. Store in a cool, dry place. Keep the jar tightly closed.',
    faq: [
      {
        question: 'Is this 100% pure Moringa?',
        answer: 'Yes. The product contains 100% Moringa Powder with no artificial colours, fillers or additives listed on the pack.',
      },
      {
        question: 'How should I take Moringa Powder?',
        answer:
          'Mix one teaspoon in water, juice, smoothie or food daily. Start with a smaller amount if you are new to Moringa.',
      },
      {
        question: 'Can both men and women use it?',
        answer:
          'Yes. Moringa is a daily nutrition powder suitable for adults. Pregnant or nursing women and anyone on medication should consult a doctor first.',
      },
      {
        question: 'Does it have FSSAI marking?',
        answer: 'Yes. The packaging displays the FSSAI mark.',
      },
    ],
    isCombo: false,
    createdAt: '2026-11-24',
    bestSellerRank: 5,
  },

  {
    id: 'prod_006',
    slug: 'beetroot-powder',
    title: "Ojasvya Beetroot Powder — Nature's Daily Nutrition",
    shortTitle: 'Beetroot Powder',
    collections: ['mens-vitamins-supplements', 'womens-supplements', 'digestive-health-detox'],
    price: 499,
    compareAtPrice: 550,
    images: [
      {
        src: `${P}/beetroot-powder-jar-front.jpg`,
        alt: 'Ojasvya Beetroot Powder jar — Pure & Natural, bright magenta powder with black lid',
      },
      {
        src: `${P}/beetroot-powder-benefits-collage.jpg`,
        alt: 'Beetroot Powder benefits collage — blood circulation, immunity, energy, heart health, skin glow',
      },
      {
        src: `${P}/beetroot-powder-packaging-and-usage.jpg`,
        alt: 'Beetroot Powder box, jar and smoothie usage — add to smoothie, juice or recipes',
      },
      {
        src: `${P}/beetroot-powder-hero.jpg`,
        alt: 'Ojasvya Beetroot Powder hero shot with fresh beetroots and wooden bowl of powder',
      },
      {
        src: `${P}/beetroot-powder-lifestyle.jpg`,
        alt: 'Beetroot Powder lifestyle image — healthy you naturally',
      },
    ],
    stock: 85,
    rating: 4.7,
    reviewCount: 108,
    tags: ['beetroot', 'powder', 'blood', 'heart', 'immunity', 'energy', 'skin', 'hair', 'natural'],
    shortDescription:
      "100% natural plant-based Beetroot Powder — Nature's Daily Nutrition. Supports healthy blood, heart health, immunity and energy. Nourish skin & hair from within.",
    fullDescription:
      "Ojasvya Beetroot Powder is Nature's Daily Nutrition — a pure & natural plant-based beetroot powder crafted to nourish skin and hair from within for youthful glow and thickness, while supporting everyday vitality.\n\nKey benefits: Improves Blood Circulation | Boosts Immunity | Increases Energy | Supports Heart Health | Enhances Skin Glow.\n\nAlso valued for purifying blood, better digestion, glowing skin and strong hair. Ideal as a daily mix in smoothies, juice or recipes.\n\nIngredients: 100% Beetroot Powder.\n\nApprox. nutrition per 100g (as on pack): Energy 340 Kcal | Protein 13g | Carbohydrates 70g | Dietary Fiber 20g | Total Fat 1.0g | Trans Fat 0g | Iron 0.80 mg | Calcium 16 mg.\n\nPacked & Marketed by Ojasvya Ayurveda, Bareilly, Uttar Pradesh 243001. Email: Ojasvyaayurveda@gmail.com. Store in a cool, dry & hygienic place.\n\nDisclaimer: This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your healthcare provider before use.",
    benefits: [
      'Improves blood circulation',
      'Supports heart health',
      'Boosts immunity',
      'Increases energy naturally',
      'Enhances skin glow',
      'Nourishes skin and hair from within',
      'Supports better digestion',
      '100% natural plant-based — Pure & Natural',
    ],
    ingredients: [
      {
        name: 'Beetroot (Beta vulgaris) Powder',
        nameHindi: 'चुकंदर',
        description:
          '100% pure beetroot powder — traditionally used as a nutrient-rich daily nutrition powder to support healthy blood, energy, heart wellness and skin-hair nourishment.',
      },
    ],
    howToUse:
      'Mix 1 teaspoon of Beetroot Powder in a glass of water, juice, smoothie or recipes once or twice daily, or as directed by your healthcare provider. Store in a cool, dry and hygienic place. Keep the jar tightly closed.',
    faq: [
      {
        question: 'Is this 100% pure Beetroot Powder?',
        answer:
          'Yes. The product is marked Pure & Natural / 100% Natural Plant Based and lists Beetroot Powder as the ingredient.',
      },
      {
        question: 'How should I take Beetroot Powder?',
        answer:
          'Mix one teaspoon in water, juice, smoothie or food daily. Start with a smaller amount if you are new to beetroot powder.',
      },
      {
        question: 'Can both men and women use it?',
        answer:
          'Yes. Beetroot Powder is a daily nutrition powder suitable for adults. Pregnant or nursing women and anyone on medication should consult a doctor first.',
      },
      {
        question: 'How should I store it?',
        answer: 'Store in a cool, dry and hygienic place with the jar tightly closed.',
      },
    ],
    isCombo: false,
    createdAt: '2026-11-24',
    bestSellerRank: 6,
  },

  {
    id: 'prod_007',
    slug: 'aloe-vera-juice',
    title: 'Ojasvya Aloe Vera Juice — 500 ml',
    shortTitle: 'Aloe Vera Juice',
    collections: ['digestive-health-detox', 'womens-supplements'],
    price: 650,
    compareAtPrice: 750,
    images: [
      {
        src: `${P}/aloe-vera-juice-bottle-front.jpg`,
        alt: 'Ojasvya Aloe Vera Juice 500ml bottle — Glowing Skin & Healthy Hair',
      },
      {
        src: `${P}/aloe-vera-juice-benefits-and-bottle.jpg`,
        alt: 'Ojasvya Aloe Vera Juice benefits — Detoxifies Body, Improves Digestion, Enhances Immunity, Nourishes Skin & Hair',
      },
    ],
    stock: 100,
    rating: 4.6,
    reviewCount: 97,
    tags: ['aloe-vera', 'juice', 'detox', 'digestion', 'immunity', 'skin', 'hair', 'natural'],
    shortDescription:
      'Ojasvya Aloe Vera Juice 500ml — Nature\'s goodness for a healthier you. Detoxifies body, improves digestion, enhances immunity, nourishes skin & hair. 100% Natural.',
    fullDescription:
      'Ojasvya Aloe Vera Juice (500 ml) brings Nature\'s goodness for a healthier you — with a focus on glowing skin and healthy hair.\n\nHighlighted benefits: Detoxifies Body | Improves Digestion | Enhances Immunity | Nourishes Skin & Hair. Marked 100% Natural on the pack.\n\nIdeal as a daily wellness drink for those seeking gentle herbal support for digestion, detox and skin-hair nourishment.\n\nManufactured by Ojasvya Ayurveda.\n\nDisclaimer: This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your healthcare provider before use.',
    benefits: [
      'Detoxifies the body',
      'Improves digestion',
      'Enhances immunity',
      'Nourishes skin and hair',
      'Supports glowing skin & healthy hair',
      '100% Natural',
    ],
    ingredients: [
      {
        name: 'Aloe Vera (Aloe barbadensis) Juice',
        nameHindi: 'एलोवेरा',
        description:
          'Fresh Aloe Vera juice traditionally used to support digestion, detoxification, immunity and skin-hair nourishment.',
      },
    ],
    howToUse:
      'Take 15–30 ml of Aloe Vera Juice mixed with an equal quantity of water, once or twice daily before meals, or as directed by your physician. Shake well before use. Refrigerate after opening and consume within the period mentioned on the label. Keep out of reach of children.',
    faq: [
      {
        question: 'What is the pack size?',
        answer: 'Each bottle contains 500 ml of Ojasvya Aloe Vera Juice.',
      },
      {
        question: 'How should I take it?',
        answer:
          'Typically 15–30 ml with an equal amount of water, once or twice daily before meals. Follow the label or your physician\'s advice.',
      },
      {
        question: 'Is it only for skin and hair?',
        answer:
          'No. The product also highlights detoxification, digestion and immunity support, along with skin and hair nourishment.',
      },
      {
        question: 'Should I refrigerate it?',
        answer:
          'Shake well before use. After opening, store as directed on the label — typically refrigerate and use within the stated period.',
      },
    ],
    isCombo: false,
    createdAt: '2026-11-24',
    bestSellerRank: 7,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
export function getProductsByCollection(collection: string): Product[] {
  return products.filter((p) => p.collections.includes(collection as Collection))
}
export function getFeaturedProducts(limit = 8): Product[] {
  return products
    .filter((p) => p.bestSellerRank !== undefined)
    .sort((a, b) => (a.bestSellerRank ?? 99) - (b.bestSellerRank ?? 99))
    .slice(0, limit)
}
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.collections.some((c) => product.collections.includes(c)))
    .slice(0, limit)
}
export function getComboProducts(limit = 4): Product[] {
  return products.filter((p) => p.isCombo).slice(0, limit)
}
export function getAllProducts(): Product[] {
  return products
}
export function getMaxPrice(): number {
  return Math.max(...products.map((p) => p.price))
}

type Collection =
  | 'digestive-health-detox'
  | 'male-stamina-kits'
  | 'mens-vitamins-supplements'
  | 'womens-supplements'
  | 'combos'
