import type { Bi } from "./madar-content";

export const trackUi = {
  trackTitle: {
    en: "Financial Literacy Track",
    ar: "مسار الثقافة المالية",
  },
  trackBlurb: {
    en: "Saving, digital property and markets — the UAE way.",
    ar: "الادخار والعقار الرقمي والأسواق — بالطريقة الإماراتية.",
  },
  free: { en: "Free", ar: "مجاني" },
  premium: { en: "Free now", ar: "مجاني الآن" },
  locked: { en: "Unlock with Premium", ar: "افتح المحتوى المميز" },
  module: { en: "Module", ar: "وحدة" },
  calcTitle: { en: "50/30/20 Budget Calculator", ar: "حاسبة الميزانية ٥٠/٣٠/٢٠" },
  calcSub: {
    en: "Enter your monthly income — AED or any currency.",
    ar: "أدخل دخلك الشهري بالدرهم أو بأي عملة.",
  },
  salary: {
    en: "Monthly income (AED / currency)",
    ar: "الدخل الشهري (الدرهم / العملة)",
  },
  currency: { en: "Currency", ar: "العملة" },
  promo: {
    en: "Launch Offer: Premium Access Free for a Limited Time",
    ar: "عرض الإطلاق: الوصول المميز مجاني لفترة محدودة",
  },
  disclaimer: {
    en: "Disclaimer: Madar app is strictly an educational platform. It does not provide direct financial advice. Investing involves risks, and all financial decisions remain entirely your own responsibility.",
    ar: "إخلاء مسؤولية: تطبيق مدار هو منصة تعليمية وتثقيفية فقط، ولا يقدم أي استشارات مالية مباشرة. الاستثمار ينطوي على مخاطر، وقراراتك المادية هي مسؤوليتك الكاملة.",
  },
  needs: { en: "Needs", ar: "الاحتياجات" },
  needsSub: { en: "Rent, bills, groceries", ar: "الإيجار والفواتير والتسوق" },
  wants: { en: "Wants", ar: "الرغبات" },
  wantsSub: { en: "Dining, travel, leisure", ar: "المطاعم والسفر والترفيه" },
  invest: { en: "Investments", ar: "الاستثمار" },
  investSub: { en: "Savings, ETFs, property", ar: "الادخار والصناديق والعقار" },
  aed: { en: "AED", ar: "درهم" },
  ctaTitle: { en: "Put your 20% to work", ar: "شغّل نسبة الـ٢٠٪" },
  openTrack: { en: "Open track", ar: "افتح المسار" },
} satisfies Record<string, Bi>;

export type TrackModule = {
  id: string;
  index: number;
  locked: boolean;
  title: Bi;
  points: Bi[];
};

export const trackModules: TrackModule[] = [
  {
    id: "saving",
    index: 1,
    locked: false,
    title: { en: "Smart Saving & Yield Accounts", ar: "الادخار الذكي وحسابات العوائد" },
    points: [
      {
        en: "Leverage the UAE National Bonds program for capital-protected savings and prize draws.",
        ar: "استفد من برنامج الصكوك الوطنية الإماراتية لادخار آمن مع فرص الفوز بجوائز مليونية.",
      },
      {
        en: "Open a high-yield digital savings account via modern Dubai banks like Wio Bank or Liv.",
        ar: "افتح حساب ادخار رقمي عالي العائد عبر بنوك دبي الحديثة مثل Wio Bank أو Liv.",
      },
    ],
  },
  {
    id: "property",
    index: 2,
    locked: false,
    title: { en: "Digital Real Estate Investment", ar: "الاستثمار العقاري الرقمي" },
    points: [
      {
        en: "Use platforms licensed by Dubai's RERA such as Stake or SmartCrowd to invest in properties starting from AED 500.",
        ar: "استخدم المنصات العقارية المرخصة من سلطة دبي لتنظيم العقاري (RERA) مثل منصة Stake أو SmartCrowd للاستثمار بمبالغ تبدأ من 500 درهم فقط.",
      },
    ],
  },
  {
    id: "stocks",
    index: 3,
    locked: false,
    title: { en: "Stocks & ETF Trading", ar: "الأسهم وتداول صناديق المؤشرات" },
    points: [
      {
        en: "Obtain your National Investor Number (NIN) from Dubai Financial Market (DFM) and trade via Sarwa or Baraka.",
        ar: "احصل على رقم المستثمر العالمي (NIN) من تطبيق سوق دبي المالي (DFM) واستثمر عبر تطبيقات Sarwa أو Baraka.",
      },
    ],
  },
];

export const platforms: { name: string; url: string; tag: Bi }[] = [
  {
    name: "National Bonds",
    url: "https://www.nationalbonds.ae",
    tag: { en: "Capital-protected saving", ar: "ادخار محمي رأس المال" },
  },
  {
    name: "Wio Bank",
    url: "https://www.wio.io",
    tag: { en: "High-yield account", ar: "حساب عالي العائد" },
  },
  {
    name: "Stake",
    url: "https://tinyurl.com", // exact complete affiliate URL — opened in new tab
    tag: { en: "Property from AED 500", ar: "عقار من ٥٠٠ درهم" },
  },
  {
    name: "Sarwa",
    url: "https://tinyurl.com", // exact complete affiliate URL — opened in new tab
    tag: { en: "ETFs & stocks", ar: "صناديق وأسهم" },
  },
];
