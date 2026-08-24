export type Lang = "en" | "ar";

export type Bi = { en: string; ar: string };

export const ui = {
  slogan: {
    en: "Expand your horizons in 5 minutes",
    ar: "وسّع آفاقك في ٥ دقائق",
  },
  getStarted: { en: "Get Started", ar: "ابدأ الآن" },
  greeting: { en: "Good morning, Wishah", ar: "صباح الخير، وشاح" },
  greetingSub: {
    en: "Your daily 5 minutes are ready.",
    ar: "جلستك اليومية جاهزة، ٥ دقائق فقط.",
  },
  streak: { en: "3 Day Streak", ar: "٣ أيام متتالية" },
  streakSub: { en: "Keep the orbit going", ar: "حافظ على استمراريتك" },
  learningPaths: { en: "Learning Paths", ar: "المسارات التعليمية" },
  lessons: { en: "lessons", ar: "دروس" },
  min: { en: "min", ar: "دقيقة" },
  start: { en: "Start", ar: "ابدأ" },
  soon: { en: "Coming soon", ar: "قريبًا" },
  back: { en: "Back", ar: "رجوع" },
  next: { en: "Next", ar: "التالي" },
  prev: { en: "Previous", ar: "السابق" },
  takeQuiz: { en: "Take the quiz", ar: "ابدأ الاختبار" },
  quiz: { en: "Quick check", ar: "اختبار سريع" },
  swipeHint: { en: "Swipe or tap to continue", ar: "اسحب أو اضغط للمتابعة" },
  tryAgain: { en: "Try again", ar: "حاول مرة أخرى" },
  finish: { en: "Finish lesson", ar: "إنهاء الدرس" },
  completeTitle: { en: "Lesson complete", ar: "أكملت الدرس" },
  completeBody: {
    en: "Your streak is safe. Come back tomorrow for the next 5 minutes.",
    ar: "تم حفظ سلسلتك. عد غدًا لخمس دقائق جديدة.",
  },
  backHome: { en: "Back to home", ar: "العودة للرئيسية" },
  langLabel: { en: "العربية", ar: "EN" },
} satisfies Record<string, Bi>;

export type Card = { title: Bi; body: Bi; tag: Bi };

export type Path = {
  id: string;
  title: Bi;
  blurb: Bi;
  minutes: number;
  available: boolean;
  cards: Card[];
  quiz?: {
    question: Bi;
    options: { id: string; text: Bi; correct: boolean; feedback: Bi }[];
  };
};

export const paths: Path[] = [
  {
    id: "ai",
    title: { en: "AI for Business", ar: "الذكاء الاصطناعي في الأعمال" },
    blurb: {
      en: "Use generative AI as a daily working partner.",
      ar: "استخدم الذكاء الاصطناعي التوليدي كشريك عمل يومي.",
    },
    minutes: 5,
    available: true,
    cards: [
      {
        tag: { en: "Foundations", ar: "الأساسيات" },
        title: { en: "Generative AI, simply", ar: "الذكاء الاصطناعي التوليدي ببساطة" },
        body: {
          en: "Generative AI creates new text, images and code by predicting what should come next. It is not a search engine — it is a reasoning assistant that drafts, summarises and rewrites at speed.",
          ar: "ينتج الذكاء الاصطناعي التوليدي نصوصًا وصورًا وأكوادًا جديدة عبر توقع ما يجب أن يأتي لاحقًا. إنه ليس محرك بحث، بل مساعد يصيغ ويلخص ويعيد الكتابة بسرعة عالية.",
        },
      },
      {
        tag: { en: "Skill", ar: "المهارة" },
        title: { en: "Prompt engineering", ar: "هندسة الأوامر" },
        body: {
          en: "A strong prompt has three parts: a role, a context and a format. \"Act as a market analyst, review this Q3 data, return five bullet insights\" beats \"analyse this\" every time.",
          ar: "الأمر القوي يتكوّن من ثلاثة أجزاء: دور، وسياق، وصيغة مخرجات. «تصرّف كمحلل سوق، راجع بيانات الربع الثالث، وأعطني خمس نقاط» أفضل دائمًا من «حلّل هذا».",
        },
      },
      {
        tag: { en: "Impact", ar: "الأثر" },
        title: { en: "Productivity at work", ar: "الإنتاجية في مكان العمل" },
        body: {
          en: "Delegate the first draft, never the final decision. Teams that automate meeting notes, reports and email triage reclaim around one working day each week.",
          ar: "فوّض المسودة الأولى، ولا تفوّض القرار النهائي. الفرق التي تؤتمت محاضر الاجتماعات والتقارير وفرز البريد توفّر ما يقارب يوم عمل كامل أسبوعيًا.",
        },
      },
    ],
    quiz: {
      question: {
        en: "To get the most accurate report from AI, which prompt is best?",
        ar: "للحصول على أدق تقرير من الذكاء الاصطناعي، أي أمر هو الأفضل؟",
      },
      options: [
        {
          id: "a",
          text: { en: "\"Write a report\"", ar: "«اكتب تقريرًا»" },
          correct: false,
          feedback: {
            en: "Too generic! No role, no context, no format — the model has to guess.",
            ar: "عام جدًا! لا دور ولا سياق ولا صيغة، فيضطر النموذج إلى التخمين.",
          },
        },
        {
          id: "b",
          text: {
            en: "\"Act as a Dubai market expert and analyse...\"",
            ar: "«تصرّف كخبير في سوق دبي وحلّل...»",
          },
          correct: true,
          feedback: {
            en: "Correct! Role + context + clear task gives the model everything it needs.",
            ar: "إجابة صحيحة! الدور والسياق والمهمة الواضحة تمنح النموذج كل ما يحتاجه.",
          },
        },
      ],
    },
  },
  {
    id: "finance",
    title: { en: "Financial Literacy", ar: "الثقافة المالية والاستثمار" },
    blurb: {
      en: "Build wealth in the Gulf with small, repeatable moves.",
      ar: "ابنِ ثروتك في الخليج بخطوات صغيرة ومتكررة.",
    },
    minutes: 5,
    available: true,
    cards: [
      {
        tag: { en: "Mindset", ar: "العقلية" },
        title: { en: "Wealth building in Dubai", ar: "بناء الثروة في دبي" },
        body: {
          en: "A tax-free salary is an opportunity, not a result. Wealth here is built by paying yourself first: automate 20% of income out of your current account on payday.",
          ar: "الراتب المعفى من الضريبة فرصة وليس نتيجة. تُبنى الثروة هنا بأن تدفع لنفسك أولًا: حوّل ٢٠٪ من دخلك تلقائيًا يوم الراتب.",
        },
      },
      {
        tag: { en: "Property", ar: "العقار" },
        title: { en: "Fractional real estate", ar: "العقار المجزّأ" },
        body: {
          en: "Regulated platforms let you own a slice of a rented Dubai apartment from a few thousand dirhams, earning proportional rent without a mortgage or maintenance.",
          ar: "تتيح المنصات المرخّصة تملّك حصة من شقة مؤجرة في دبي بمبلغ بضعة آلاف من الدراهم، مع عائد إيجاري متناسب دون رهن أو صيانة.",
        },
      },
      {
        tag: { en: "Markets", ar: "الأسواق" },
        title: { en: "Automated index funds (ETFs)", ar: "صناديق المؤشرات الآلية" },
        body: {
          en: "A low-cost global ETF spreads your money across thousands of companies. Set a monthly standing order and let compounding, not timing, do the work.",
          ar: "صندوق المؤشرات العالمي منخفض التكلفة يوزّع أموالك على آلاف الشركات. اضبط اقتطاعًا شهريًا ثابتًا ودع التراكم — لا التوقيت — يقوم بالعمل.",
        },
      },
    ],
    quiz: {
      question: {
        en: "Best way for expats to start investing with low capital?",
        ar: "ما أفضل طريقة للمقيمين لبدء الاستثمار برأس مال صغير؟",
      },
      options: [
        {
          id: "a",
          text: {
            en: "Buy a luxury off-plan apartment",
            ar: "شراء شقة فاخرة على الخارطة",
          },
          correct: false,
          feedback: {
            en: "Risky start — high entry cost, illiquid, and payments continue even if plans change.",
            ar: "بداية محفوفة بالمخاطر: تكلفة دخول مرتفعة وسيولة منخفضة والتزامات دفع مستمرة.",
          },
        },
        {
          id: "b",
          text: {
            en: "Monthly fixed allocation into low-cost ETFs",
            ar: "اقتطاع شهري ثابت في صناديق مؤشرات منخفضة التكلفة",
          },
          correct: true,
          feedback: {
            en: "Correct! Small, automatic and diversified — the proven way to start.",
            ar: "إجابة صحيحة! مبالغ صغيرة وتلقائية ومتنوعة، وهي الطريقة الأثبت للبدء.",
          },
        },
      ],
    },
  },
  {
    id: "agile",
    title: { en: "Agile Leadership", ar: "القيادة الرشيقة وإدارة المشاريع" },
    blurb: {
      en: "Lead teams that ship in short, confident cycles.",
      ar: "قُد فرقًا تنجز في دورات قصيرة وواثقة.",
    },
    minutes: 5,
    available: false,
    cards: [],
  },
];
