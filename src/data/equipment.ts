import { EquipmentCategory } from "@/types/equipment";

const placeholder = "/images/equipment-placeholder.svg";

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "forklifts",
    title: "الرافعات الشوكية",
    products: [
      {
        id: "forklift-3t",
        name: "رافعة شوكية 3 طن",
        description: "مناسبة للمخازن وأعمال التحميل اليومية بكفاءة عالية.",
        badge: "رافعات شوكية",
        image: placeholder,
        availability: "متوفر",
      },
      {
        id: "forklift-diesel",
        name: "رافعة شوكية ديزل",
        description: "قدرة تحمل قوية للمواقع الصناعية المفتوحة.",
        badge: "رافعات شوكية",
        image: placeholder,
        availability: "متوفر",
      },
    ],
  },
  {
    id: "scissor-lifts",
    title: "الرافعات المقصية",
    products: [
      {
        id: "scissor-electric",
        name: "رافعة مقصية كهربائية",
        description: "حل آمن وهادئ لأعمال الصيانة والرفع الداخلي.",
        badge: "رافعات مقصية",
        image: placeholder,
        availability: "متوفر",
      },
      {
        id: "scissor-diesel",
        name: "رافعة مقصية ديزل",
        description: "أداء ممتاز على الأرضيات الوعرة والمواقع الخارجية.",
        badge: "رافعات مقصية",
        image: placeholder,
        availability: "متوفر",
      },
    ],
  },
  {
    id: "cranes",
    title: "الرافعات",
    products: [
      {
        id: "telescopic-crane",
        name: "رافعة تلسكوبية",
        description: "مدى وصول طويل لعمليات الرفع الدقيقة.",
        badge: "رافعات",
        image: placeholder,
        availability: "متوفر",
      },
      {
        id: "mobile-crane",
        name: "ونش متنقل",
        description: "مرونة عالية للتنقل بين مواقع المشاريع.",
        badge: "رافعات",
        image: placeholder,
        availability: "متوفر",
      },
      {
        id: "lifting-crane",
        name: "كرين رفع",
        description: "قدرات رفع ثقيلة للمشاريع الإنشائية الكبيرة.",
        badge: "رافعات",
        image: placeholder,
        availability: "متوفر",
      },
    ],
  },
  {
    id: "loaders",
    title: "الشيولات",
    products: [
      {
        id: "cat-loader",
        name: "شيول كاتربلر",
        description: "معدّة قوية لأعمال الردم والتحميل الثقيلة.",
        badge: "شيولات",
        image: placeholder,
        availability: "متوفر",
      },
      {
        id: "bobcat-loader",
        name: "بوبكات",
        description: "مناسب للأعمال السريعة والمساحات الضيقة.",
        badge: "شيولات",
        image: placeholder,
        availability: "متوفر",
      },
    ],
  },
  {
    id: "excavators",
    title: "الحفارات",
    products: [
      {
        id: "tracked-excavator",
        name: "حفار جنزير",
        description: "أداء موثوق في الحفر العميق وتسوية الأرض.",
        badge: "حفارات",
        image: placeholder,
        availability: "متوفر",
      },
      {
        id: "wheeled-excavator",
        name: "حفار بعجلات",
        description: "سهولة تنقل بين مناطق العمل بسرعة وكفاءة.",
        badge: "حفارات",
        image: placeholder,
        availability: "متوفر",
      },
    ],
  },
  {
    id: "compressors",
    title: "الضواغط",
    products: [
      {
        id: "air-compressor",
        name: "ضاغط هواء",
        description: "ضغط ثابت لتشغيل المعدات الهوائية في الموقع.",
        badge: "ضواغط",
        image: placeholder,
        availability: "متوفر",
      },
      {
        id: "soil-compactor",
        name: "دكاك تربة",
        description: "كفاءة عالية في دمك التربة والطرق.",
        badge: "ضواغط",
        image: placeholder,
        availability: "متوفر",
      },
    ],
  },
  {
    id: "heavy-machinery",
    title: "المعدات الثقيلة",
    products: [
      {
        id: "dump-truck",
        name: "قلاب نقل",
        description: "قدرة نقل كبيرة للمواد والركام في المشاريع.",
        badge: "معدات ثقيلة",
        image: placeholder,
        availability: "متوفر",
      },
      {
        id: "concrete-mixer",
        name: "خلاطة خرسانة",
        description: "خلط متجانس بجودة ثابتة لأعمال البناء.",
        badge: "معدات ثقيلة",
        image: placeholder,
        availability: "متوفر",
      },
    ],
  },
  {
    id: "misc",
    title: "معدات متنوعة",
    products: [
      {
        id: "generator",
        name: "مولد كهرباء",
        description: "طاقة موثوقة للمواقع الإنشائية على مدار الساعة.",
        badge: "معدات متنوعة",
        image: placeholder,
        availability: "متوفر",
      },
      {
        id: "lighting-tower",
        name: "برج إضاءة",
        description: "إنارة قوية وآمنة للعمل الليلي في الموقع.",
        badge: "معدات متنوعة",
        image: placeholder,
        availability: "متوفر",
      },
    ],
  },
];
