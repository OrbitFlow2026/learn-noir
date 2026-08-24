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
  premium: { en: "Premium", ar: "مميز" },
  locked: { en: "Unlock with Premium", ar: "افتح المحتوى المميز" },
  module: { en: "Module", ar: "وحدة" },
  calcTitle: { en: "50/30/20 Budget Calculator", ar: "حاسبة الميزانية ٥٠/٣٠/٢٠" },
  calcSub: {
    en: "Enter your monthly salary in AED.",
    ar: "أدخل راتبك الشهري بالدرهم.",
  },
  salary: { en: "Monthly salary (AED)", ar: "الراتب الشهري (درهم)" },
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
    locked: true,
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
    locked: true,
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
    url: "https://getstake.com",
    tag: { en: "Property from AED 500", ar: "عقار من ٥٠٠ درهم" },
  },
  {
    name: "Sarwa",
    url: "https://www.sarwa.co",
    tag: { en: "ETFs & stocks", ar: "صناديق وأسهم" },
  },
];
