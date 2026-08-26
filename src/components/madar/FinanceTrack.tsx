import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, PiggyBank, Sparkles } from "lucide-react";
import { useLang } from "@/lib/lang";
import { ui } from "@/lib/orbitflow-content";
import { platforms, trackModules, trackUi } from "@/lib/finance-track";

function BudgetCalculator() {
  const { t, lang } = useLang();
  const [salary, setSalary] = useState("");
  const value = Number(salary.replace(/[^\d.]/g, "")) || 0;

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
    <section className="surface-card mt-5 rounded-3xl p-5">
      <div className="flex items-center gap-2">
        <PiggyBank className="h-5 w-5 text-primary" />
        <h3 className="font-display text-base font-bold">{t(trackUi.calcTitle)}</h3>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{t(trackUi.calcSub)}</p>

      <label className="mt-4 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {t(trackUi.salary)}
      </label>
      <input
        inputMode="numeric"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="15000"
        className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-lg font-bold text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
      />

      <div className="mt-5 space-y-3">
        {rows.map((row) => (
          <div key={row.pct} className="rounded-2xl border border-border/70 p-4">
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
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {t(trackUi.ctaTitle)}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group rounded-2xl border border-primary/30 bg-primary/10 p-3 shadow-[var(--shadow-panel)] transition-all hover:border-primary/70 hover:bg-primary/20 hover:shadow-[var(--shadow-glow)] active:scale-[0.98]"
          >
            <span className="flex items-center gap-1 text-sm font-bold text-primary">
              {p.name}
              <ArrowUpRight className="h-3.5 w-3.5" />
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
  const { t, dir } = useLang();
  const rtl = dir === "rtl";

  return (
    <div className="bg-hero flex-1 px-5 pb-16 pt-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className={`h-3.5 w-3.5 ${rtl ? "rotate-180" : ""}`} />
          {t(ui.back)}
        </button>
        <p className="truncate font-display text-sm font-bold">{t(trackUi.trackTitle)}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 flex items-center gap-2 rounded-2xl border border-primary/40 bg-primary/10 px-4 py-2.5"
      >
        <Sparkles className="h-4 w-4 shrink-0 text-primary" />
        <p className="text-[11px] font-semibold leading-snug text-primary">
          {t(trackUi.promo)}
        </p>
      </motion.div>

      <h1 className="mt-6 text-2xl font-bold leading-snug">{t(trackUi.trackTitle)}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{t(trackUi.trackBlurb)}</p>

      <div className="mt-6 space-y-3">
        {trackModules.map((m, i) => (
          <motion.article
            key={m.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i }}
            className="surface-card rounded-3xl p-5"
          >
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {t(trackUi.module)} {m.index}
                </p>
                <h2 className="mt-1 font-display text-base font-bold leading-snug">
                  {t(m.title)}
                </h2>
              </div>
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-success/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-success">
                <Sparkles className="h-3 w-3" />
                {t(trackUi.free)}
              </span>
            </div>

            <ul className="mt-4 space-y-3">
              {m.points.map((point, pi) => (
                <li key={pi} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {t(point)}
                  </p>
                </li>
              ))}
            </ul>
            {m.platform && (() => {
              const platform = platforms.find((item) => item.name === m.platform);
              if (!platform) return null;
              return (
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-bold text-primary transition-colors hover:border-primary/70 hover:bg-primary/20"
                >
                  <span>{platform.name}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              );
            })()}
          </motion.article>
        ))}
      </div>

      <BudgetCalculator />

      <p className="mx-auto mt-8 max-w-sm text-center text-[10px] leading-relaxed text-muted-foreground/70">
        {t(trackUi.disclaimer)}
      </p>
    </div>
  );
}
