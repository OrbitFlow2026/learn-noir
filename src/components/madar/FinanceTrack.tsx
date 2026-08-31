import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Sparkles, Wallet, Play, GraduationCap } from "lucide-react";
import { useLang } from "@/lib/lang";
import { ui } from "@/lib/orbitflow-content";
import { platforms, trackUi } from "@/lib/finance-track";
import { PoolCalculator } from "./PoolCalculator";

const microLessons = [
  {
    id: "lesson-1",
    index: 1,
    title: { ar: "شرح حسابات التوفير الذكية والعوائد في الإمارات", en: "Smart Saving & High-Yield Accounts in UAE" },
    videoUrl: "https://youtube.com", 
    platform: "Wio Bank",
    points: {
      ar: ["كيف تستغل برامج التوفير الرقمية بعوائد تصل لـ 5% سنوياً.", "حماية رأس المال بالكامل عبر البنوك الرقمية الحديثة في دبي."],
      en: ["How to leverage digital saving programs with up to 5% annual yields.", "Full capital protection via modern digital banks in Dubai."]
    }
  },
  {
    id: "lesson-2",
    index: 2,
    title: { ar: "أسرار الاستثمار العقاري الرقمي بمبالغ مصغرة", en: "Digital Real Estate Investment Masterclass" },
    videoUrl: "https://youtube.com", 
    platform: "Stake",
    points: {
      ar: ["شراء حصص عقارية حقيقية في دبي تبدأ من 500 درهم فقط.", "الحصول على عائد إيجاري شهري يوزع تلقائياً على المحفظة."],
      en: ["Buy real fractional real estate shares in Dubai starting from 500 AED.", "Earn monthly rental income distributed automatically to your wallet."]
    }
  },
  {
    id: "lesson-3",
    index: 3,
    title: { ar: "طريقة التداول في الأسهم العالمية والحصول على NIN", en: "Global Stocks Trading & Getting Your NIN" },
    videoUrl: "https://youtube.com", 
    platform: "Sarwa",
    points: {
      ar: ["طريقة استخراج رقم المستثمر الوطني (NIN) من سوق دبي المالي.", "استثمار الـ 20% المخصصة للمستقبل في صناديق استثمارية عالمية مرخصة."],
      en: ["How to obtain your National Investor Number (NIN) from DFM.", "Invest your 20% future budget into globally regulated ETFs via Sarwa."]
    }
  }
];

function BudgetCalculator() {
  const { t, lang } = useLang();
  const [salary, setSalary] = useState("10,000");
  const value = Number(salary.replace(/[^\d.]/g, "")) || 0;

  const onSalaryChange = (raw: string) => {
    const digits = raw.replace(/[^\d]/g, "").slice(0, 12);
    setSalary(digits ? Number(digits).toLocaleString("en-US") : "");
  };

  const fmt = (n: number) =>
    new Intl.NumberFormat(lang === "ar" ? "ar-AE" : "en-AE", {
      maximumFractionDigits: 0,
    }).format(n);

  const rows = [
    { pct: 50, label: trackUi.needs, sub: trackUi.needsSub, bar: "bg-primary/60" },
    { pct: 30, label: trackUi.wants, sub: trackUi.wantsSub, bar: "bg-chart-2" },
    { pct: 20, label: trackUi.invest, sub: trackUi.investSub, bar: "bg-success" },
  ];

  return (
    <section className="surface-card mt-5 rounded-3xl p-5 border border-border/40">
      <div className="flex items-center gap-2">
        <Wallet className="h-5 w-5 text-primary" />
        <h3 className="font-display text-base font-bold">{t(trackUi.calcTitle)}</h3>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{t(trackUi.calcSub)}</p>

      <label className="mt-4 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {t(trackUi.salary)} (AED)
      </label>
      <input
        inputMode="numeric"
        value={salary}
        onChange={(e) => onSalaryChange(e.target.value)}
        placeholder="15,000"
        className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-xl font-bold text-foreground outline-none focus:border-primary transition-colors"
      />

      <div className="mt-5 space-y-3">
        {rows.map((row) => (
          <div key={row.pct} className="rounded-2xl border border-border/70 p-4 bg-background/30">
            <div className="flex items-baseline justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-bold">
                  {row.pct}% · {t(row.label)}
                </p>
                <p className="text-[11px] text-muted-foreground">{t(row.sub)}</p>
              </div>
              <p className="shrink-0 font-display text-lg font-bold text-primary">
                {fmt((value * row.pct) / 100)}{" "}
                <span className="text-[11px] font-semibold text-muted-foreground">
                  {t(trackUi.aed)}
                </span>
              </p>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                animate={{ width: `${row.pct}%` }}
                className={`h-full rounded-full ${row.bar}`}
              />
            </div>
            {row.pct === 20 && (
              <p className="mt-3 rounded-xl border border-primary/30 bg-primary/10 px-3 py-2.5 text-[11px] font-semibold leading-relaxed text-primary">
                {t(trackUi.investWarn)}
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {t(trackUi.ctaTitle)}
      </p>
      <div className="mt-3 grid grid-cols-1 gap-2.5">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col justify-center rounded-2xl border border-primary/30 bg-primary/10 p-4 shadow-sm transition-all hover:border-primary/70 hover:bg-primary/20 active:scale-[0.99]"
          >
            <span className="flex items-center justify-between text-sm font-bold text-primary">
              {p.cta ? t(p.cta) : p.name}
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="mt-0.5 block text-[11px] text-muted-foreground">
              {t(p.tag)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function FinanceTrack({ onExit }: { onExit: () => void }) {
  const { t, dir, lang } = useLang();
  const rtl = dir === "rtl";
  const currentLang = lang === "ar" ? "ar" : "en";

  return (
    <div className="bg-hero flex-1 px-5 pb-16 pt-4">
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className={`h-3.5 w-3.5 ${rtl ? "rotate-180" : ""}`} />
          {t(ui.back)}
        </button>
        <span className="flex items-center gap-1 text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
          <GraduationCap className="h-3.5 w-3.5" />
          OrbitFlow Nibble UAE
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 flex items-center gap-2 rounded-2xl border border-primary/40 bg-primary/10 px-4 py-2.5"
      >
        <Sparkles className="h-4 w-4 shrink-0 text-primary" />
        <p className="text-[11px] font-semibold leading-snug text-primary">
          {lang === "ar" ? "عرض الإطلاق: وصول مميز ومجاني بالكامل لفترة محدودة" : "Launch Offer: Premium Access Free for a Limited Time"}
        </p>
      </motion.div>

      <h1 className="mt-6 text-2xl font-bold leading-snug">
        {lang === "ar" ? "مسار دبي للثقافة المالية المصغرة" : "Dubai Micro-Financial Literacy Track"}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {lang === "ar" ? "تطوير المهارات، الادخار الذكي، والأسواق الرقمية — في أقل من دقيقة." : "Saving, digital property, and markets — the UAE way in under 1 minute."}
      </p>

      <div className="mt-6 space-y-4">
        {microLessons.map((m, i) => (
          <motion.article
            key={m.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i }}
            className="surface-card rounded-3xl p-5 border border-border/50"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {lang === "ar" ? `الدرس المصغر ${m.index}` : `Micro Lesson ${m.index}`}
                </p>
                <h2 className="mt-1 font-display text-base font-bold leading-snug">
                  {m.title[currentLang]}
                </h2>
              </div>
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-success/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-success">
                <Play className="h-2.5 w-2.5" />
                1 MIN
              </span>
            </div>

            <div className="mt-4 aspect-[9/16] max-w-[280px] mx-auto overflow-hidden rounded-2xl border border-border/80 bg-black/40 shadow-inner relative">
              <iframe
                src={m.videoUrl}
                title={m.title[currentLang]}
                className="w-full h-full absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <ul className="mt-4 space-y-2.5">
              {m.points[currentLang].map((point, pi) => (
                <li key={pi} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-[12px] leading-relaxed text-muted-foreground">
