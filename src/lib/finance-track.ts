import type { Bi } from "./orbitflow-content";

const TINYURL_BASE = "https://tinyurl.com";
export const STAKE_URL = TINYURL_BASE + "/madar-stake";
export const SARWA_URL = "https://tinyurl.com/madar-invest";

export const trackUi = {
  trackTitle: {
    en: "Financial Literacy Track",
    ar: "مسار الثقافة المالية",
    hi: "वित्तीय साक्षरता ट्रैक",
    ur: "مالی خواندگی ٹریک",
  },
  trackBlurb: {
    en: "Saving, digital property and markets — the UAE way.",
    ar: "الادخار والعقار الرقمي والأسواق — بالطريقة الإماراتية.",
    hi: "बचत, डिजिटल प्रॉपर्टी और बाज़ार — यूएई के तरीके से।",
    ur: "بچت، ڈیجیٹل پراپرٹی اور مارکیٹس — یو اے ای کے انداز میں۔",
  },
  free: { en: "Free", ar: "مجاني", hi: "मुफ़्त", ur: "مفت" },
  premium: { en: "Free now", ar: "مجاني الآن", hi: "अभी मुफ़्त", ur: "ابھی مفت" },
  module: { en: "Module", ar: "وحدة", hi: "मॉड्यूल", ur: "ماڈیول" },
  calcTitle: {
    en: "50/30/20 Budget Calculator",
    ar: "حاسبة الميزانية ٥٠/٣٠/٢٠",
    hi: "50/30/20 बजट कैलकुलेटर",
    ur: "50/30/20 بجٹ کیلکولیٹر",
  },
  calcSub: {
    en: "Enter your monthly income — AED or any currency.",
    ar: "أدخل دخلك الشهري بالدرهم أو بأي عملة.",
    hi: "अपनी मासिक आय दर्ज करें — दिरहम या कोई भी मुद्रा।",
    ur: "اپنی ماہانہ آمدنی درج کریں — درہم یا کوئی بھی کرنسی۔",
  },
  salary: {
    en: "Monthly income (AED / currency)",
    ar: "الدخل الشهري (الدرهم / العملة)",
    hi: "मासिक आय (दिरहम / मुद्रा)",
    ur: "ماہانہ آمدنی (درہم / کرنسی)",
  },
  currency: { en: "Currency", ar: "العملة", hi: "मुद्रा", ur: "کرنسی" },
  promo: {
    en: "Launch Offer: Premium Access Free for a Limited Time",
    ar: "عرض الإطلاق: الوصول المميز مجاني لفترة محدودة",
    hi: "लॉन्च ऑफ़र: सीमित समय के लिए प्रीमियम एक्सेस मुफ़्त",
    ur: "لانچ آفر: محدود وقت کے لیے پریمیم رسائی مفت",
  },
  disclaimer: {
    en: "Disclaimer: OrbitFlow app is strictly an educational platform. It does not provide direct financial advice. Investing involves risks, and all financial decisions remain entirely your own responsibility.",
    ar: "إخلاء مسؤولية: تطبيق أوربت فلو هو منصة تعليمية وتثقيفية فقط، ولا يقدم أي استشارات مالية مباشرة. الاستثمار ينطوي على مخاطر، وقراراتك المادية هي مسؤوليتك الكاملة.",
    hi: "अस्वीकरण: OrbitFlow केवल एक शैक्षिक प्लेटफ़ॉर्म है। यह प्रत्यक्ष वित्तीय सलाह नहीं देता। निवेश में जोखिम है और सभी वित्तीय निर्णय पूरी तरह आपकी ज़िम्मेदारी हैं।",
    ur: "ڈس کلیمر: OrbitFlow صرف ایک تعلیمی پلیٹ فارم ہے۔ یہ براہِ راست مالی مشورہ نہیں دیتا۔ سرمایہ کاری میں خطرہ ہے اور تمام مالی فیصلے مکمل طور پر آپ کی ذمہ داری ہیں۔",
  },
  needs: { en: "Needs", ar: "الاحتياجات", hi: "ज़रूरतें", ur: "ضروریات" },
  needsSub: {
    en: "Rent, bills, groceries",
    ar: "الإيجار والفواتير والتسوق",
    hi: "किराया, बिल, राशन",
    ur: "کرایہ، بل، راشن",
  },
  wants: { en: "Wants", ar: "الرغبات", hi: "इच्छाएँ", ur: "خواہشات" },
  wantsSub: {
    en: "Dining, travel, leisure",
    ar: "المطاعم والسفر والترفيه",
    hi: "खाना, यात्रा, मनोरंजन",
    ur: "کھانا، سفر، تفریح",
  },
  invest: { en: "Investments", ar: "الاستثمار", hi: "निवेश", ur: "سرمایہ کاری" },
  investSub: {
    en: "Savings, ETFs, property",
    ar: "الادخار والصناديق والعقار",
    hi: "बचत, ETF, प्रॉपर्टी",
    ur: "بچت، ETFs، پراپرٹی",
  },
  aed: { en: "AED", ar: "درهم", hi: "AED", ur: "AED" },
  ctaTitle: {
    en: "Put your 20% to work",
    ar: "شغّل نسبة الـ٢٠٪",
    hi: "अपने 20% को काम पर लगाएँ",
    ur: "اپنے 20% کو کام پر لگائیں",
  },
  investWarn: {
    en: "⚠️ Don't leave this money idle in a zero-interest account! Put your 20% to work in global stocks or Dubai real estate — starting from just 50 AED — via the regulated platforms below:",
    ar: "⚠️ لا تترك هذه الأموال مجمدة في حساب بلا فائدة! استثمر نسبة الـ٢٠٪ في أسهم عالمية أو عقارات دبي بمبالغ تبدأ من ٥٠ درهمًا عبر المنصات المرخصة أدناه:",
    hi: "⚠️ इस पैसे को बिना ब्याज वाले खाते में बेकार न छोड़ें! अपने 20% को ग्लोबल स्टॉक्स या दुबई रियल एस्टेट में लगाएँ — सिर्फ़ 50 दिरहम से शुरू — नीचे दिए रेग्युलेटेड प्लेटफ़ॉर्म के ज़रिए:",
    ur: "⚠️ اس رقم کو بلا سود اکاؤنٹ میں بے کار نہ چھوڑیں! اپنے 20% کو عالمی اسٹاکس یا دبئی رئیل اسٹیٹ میں لگائیں — صرف 50 درہم سے شروع — نیچے دیے گئے ریگولیٹڈ پلیٹ فارمز کے ذریعے:",
  },
  openTrack: { en: "Open track", ar: "افتح المسار", hi: "ट्रैक खोलें", ur: "ٹریک کھولیں" },
} satisfies Record<string, Bi>;

export const poolUi = {
  title: {
    en: "Group Pool Calculator",
    ar: "حاسبة التجمع الاستثماري",
    hi: "ग्रुप पूल कैलकुलेटर",
    ur: "گروپ پول کیلکولیٹر",
  },
  sub: {
    en: "Work out how a group of friends or roommates could reach the AED 500 minimum for a fractional property share.",
    ar: "احسب كيف يمكن لمجموعة أصدقاء أو زملاء سكن الوصول إلى الحد الأدنى ٥٠٠ درهم لحصة عقارية جزئية.",
    hi: "देखें कि दोस्तों या रूममेट्स का समूह फ्रैक्शनल प्रॉपर्टी शेयर के लिए AED 500 की न्यूनतम राशि तक कैसे पहुँच सकता है।",
    ur: "دیکھیں کہ دوستوں یا روم میٹس کا گروپ فریکشنل پراپرٹی شیئر کے لیے AED 500 کی کم از کم رقم تک کیسے پہنچ سکتا ہے۔",
  },
  people: { en: "People in the group", ar: "عدد الأشخاص", hi: "समूह में लोग", ur: "گروپ میں افراد" },
  share: {
    en: "Monthly share per person (AED)",
    ar: "الحصة الشهرية للفرد (درهم)",
    hi: "प्रति व्यक्ति मासिक हिस्सा (AED)",
    ur: "فی فرد ماہانہ حصہ (AED)",
  },
  perMonth: { en: "Pooled per month", ar: "المجمّع شهريًا", hi: "प्रति माह जमा", ur: "ماہانہ جمع" },
  monthsToTarget: {
    en: "Months to reach AED 500",
    ar: "الأشهر للوصول إلى ٥٠٠ درهم",
    hi: "AED 500 तक पहुँचने में महीने",
    ur: "AED 500 تک پہنچنے میں مہینے",
  },
  yearTotal: {
    en: "Pooled after 12 months",
    ar: "المجمّع بعد ١٢ شهرًا",
    hi: "12 महीनों बाद कुल जमा",
    ur: "12 مہینوں بعد کل جمع",
  },
  steps: {
    en: "How a group pool works",
    ar: "كيف يعمل التجمع",
    hi: "ग्रुप पूल कैसे काम करता है",
    ur: "گروپ پول کیسے کام کرتا ہے",
  },
  step1: {
    en: "One person opens the investment account in their own name — legally, the asset belongs to that account holder alone.",
    ar: "يفتح شخص واحد الحساب الاستثماري باسمه — قانونيًا يملك الأصل صاحب الحساب وحده.",
    hi: "एक व्यक्ति अपने नाम से निवेश खाता खोलता है — कानूनी रूप से संपत्ति केवल उसी खाताधारक की होती है।",
    ur: "ایک شخص اپنے نام سے سرمایہ کاری اکاؤنٹ کھولتا ہے — قانوناً اثاثہ صرف اسی اکاؤنٹ ہولڈر کا ہوتا ہے۔",
  },
  step2: {
    en: "The group agrees the monthly share and keeps a written record of every contribution.",
    ar: "تتفق المجموعة على الحصة الشهرية وتحتفظ بسجل مكتوب لكل مساهمة.",
    hi: "समूह मासिक हिस्सा तय करता है और हर योगदान का लिखित रिकॉर्ड रखता है।",
    ur: "گروپ ماہانہ حصہ طے کرتا ہے اور ہر رقم کا تحریری ریکارڈ رکھتا ہے۔",
  },
  step3: {
    en: "Any rental income is distributed according to that written agreement.",
    ar: "يُوزَّع أي دخل إيجاري وفق ذلك الاتفاق المكتوب.",
    hi: "कोई भी किराया आय उसी लिखित समझौते के अनुसार बाँटी जाती है।",
    ur: "کوئی بھی کرایہ آمدنی اسی تحریری معاہدے کے مطابق تقسیم ہوتی ہے۔",
  },
  warning: {
    en: "Important risk: informal money pools have no legal protection in the UAE. Only the account holder owns the asset, and you rely entirely on their honesty. Returns and rental income are never guaranteed — property values can fall. Consider each person opening their own account instead.",
    ar: "تحذير مهم: التجمعات المالية غير الرسمية لا تتمتع بأي حماية قانونية في الإمارات. صاحب الحساب وحده يملك الأصل، وأنت تعتمد كليًا على أمانته. العوائد والإيجار غير مضمونة، وقيمة العقار قد تنخفض. يُفضّل أن يفتح كل شخص حسابه الخاص.",
    hi: "महत्वपूर्ण जोखिम: यूएई में अनौपचारिक मनी पूल को कोई कानूनी संरक्षण नहीं है। संपत्ति केवल खाताधारक की होती है और आप पूरी तरह उसकी ईमानदारी पर निर्भर होते हैं। रिटर्न और किराया कभी गारंटीड नहीं — संपत्ति के दाम गिर भी सकते हैं। बेहतर है कि हर व्यक्ति अपना अलग खाता खोले।",
    ur: "اہم خطرہ: یو اے ای میں غیر رسمی منی پول کو کوئی قانونی تحفظ حاصل نہیں۔ اثاثہ صرف اکاؤنٹ ہولڈر کا ہوتا ہے اور آپ مکمل طور پر اس کی دیانت پر انحصار کرتے ہیں۔ منافع اور کرایہ کبھی ضمانتی نہیں — پراپرٹی کی قیمت گر بھی سکتی ہے۔ بہتر ہے ہر شخص اپنا الگ اکاؤنٹ کھولے۔",
  },
  growthTitle: {
    en: "What AED 100 a month could look like",
    ar: "كيف قد تبدو ١٠٠ درهم شهريًا",
    hi: "हर महीने AED 100 कैसा दिख सकता है",
    ur: "ہر ماہ AED 100 کیسا دکھ سکتا ہے",
  },
  growthSub: {
    en: "Illustration only, not a forecast. Assumes a 6% annual return, which is an assumption — not a promise. Real returns may be higher, lower, or negative.",
    ar: "مثال توضيحي فقط وليس توقعًا. يفترض عائدًا سنويًا ٦٪ وهو افتراض لا وعد. العائد الحقيقي قد يكون أعلى أو أقل أو سالبًا.",
    hi: "केवल उदाहरण, भविष्यवाणी नहीं। 6% वार्षिक रिटर्न मान लिया गया है — यह अनुमान है, वादा नहीं। असली रिटर्न ज़्यादा, कम या ऋणात्मक हो सकता है।",
    ur: "صرف مثال، پیش گوئی نہیں۔ 6% سالانہ منافع فرض کیا گیا ہے — یہ مفروضہ ہے، وعدہ نہیں۔ اصل منافع زیادہ، کم یا منفی ہو سکتا ہے۔",
  },
  contributed: { en: "You put in", ar: "ما دفعته", hi: "आपने डाला", ur: "آپ نے ڈالا" },
  projected: {
    en: "Illustrative value",
    ar: "القيمة التوضيحية",
    hi: "उदाहरण मूल्य",
    ur: "مثالی مالیت",
  },
  year: { en: "Year", ar: "سنة", hi: "वर्ष", ur: "سال" },
  share_: { en: "Share this tool", ar: "شارك الأداة", hi: "यह टूल साझा करें", ur: "یہ ٹول شیئر کریں" },
  copied: { en: "Link copied", ar: "تم نسخ الرابط", hi: "लिंक कॉपी हुआ", ur: "لنک کاپی ہو گیا" },
} satisfies Record<string, Bi>;


export type TrackModule = {
  id: string;
  index: number;
  platform?: "National Bonds" | "Wio Bank" | "Stake" | "Sarwa";
  title: Bi;
  points: Bi[];
};

export const trackModules: TrackModule[] = [
  {
    id: "saving",
    index: 1,
    platform: "Wio Bank",
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
    platform: "Stake",
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
    platform: "Sarwa",
    title: { en: "Stocks & ETF Trading", ar: "الأسهم وتداول صناديق المؤشرات" },
    points: [
      {
        en: "Obtain your National Investor Number (NIN) from Dubai Financial Market (DFM) and trade via Sarwa or Baraka.",
        ar: "احصل على رقم المستثمر العالمي (NIN) من تطبيق سوق دبي المالي (DFM) واستثمر عبر تطبيقات Sarwa أو Baraka.",
      },
    ],
  },
];

export const platforms: { name: string; url: string; tag: Bi; cta?: Bi }[] = [
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
    url: STAKE_URL,
    cta: {
      en: "🏢 Invest in Dubai Real Estate",
      ar: "🏢 استثمر في عقارات دبي",
      hi: "🏢 दुबई रियल एस्टेट में निवेश करें",
      ur: "🏢 دبئی رئیل اسٹیٹ میں سرمایہ کاری کریں",
    },
    tag: {
      en: "Start from 500 AED · potential monthly rental income",
      ar: "ابدأ بـ٥٠٠ درهم · دخل إيجاري شهري محتمل",
      hi: "500 दिरहम से शुरू करें · संभावित मासिक किराया आय",
      ur: "500 درہم سے شروع کریں · ممکنہ ماہانہ کرایہ آمدنی",
    },
  },
  {
    name: "Sarwa",
    url: SARWA_URL,
    cta: {
      en: "📈 Invest in Stocks & Gold",
      ar: "📈 استثمر في الأسهم والذهب",
      hi: "📈 स्टॉक्स और गोल्ड में निवेश करें",
      ur: "📈 اسٹاکس اور گولڈ میں سرمایہ کاری کریں",
    },
    tag: {
      en: "Regulated by the DFSA · sign-up bonus offers may apply",
      ar: "مرخصة من سلطة دبي للخدمات المالية (DFSA) · قد تتوفر مكافآت تسجيل",
      hi: "DFSA द्वारा रेग्युलेटेड · साइन-अप बोनस ऑफ़र लागू हो सकते हैं",
      ur: "DFSA سے ریگولیٹڈ · سائن اپ بونس آفرز لاگو ہو سکتے ہیں",
    },
  },
];
