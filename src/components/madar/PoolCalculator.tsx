import { useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, Share2, TrendingUp, Users } from "lucide-react";
import { useLang } from "@/lib/lang";
import { poolUi, trackUi } from "@/lib/finance-track";

const TARGET = 500;
const ANNUAL_RATE = 0.06;

export function PoolCalculator() {
  const { t, lang } = useLang();
  const [people, setPeople] = useState(5);
  const [share, setShare] = useState(100);
  const [copied, setCopied] = useState(false);

  const perMonth = people * share;
  const months = perMonth > 0 ? Math.ceil(TARGET / perMonth) : 0;
  const yearTotal = perMonth * 12;

  const fmt = (n: number) =>
    new Intl.NumberFormat(lang === "ar" ? "ar-AE" : "en-AE", {
      maximumFractionDigits: 0,
    }).format(Math.round(n));

  // Illustrative compounding of AED 100/month at a stated assumed rate.
  const monthly = 100;
  const r = ANNUAL_RATE / 12;
  const years = [1, 2, 3, 4, 5].map((y) => {
    const n = y * 12;
    const value = monthly * ((Math.pow(1 + r, n) - 1) / r);
    return { y, contributed: monthly * n, value };
  });
  const max = years[years.length - 1]!.value;

  const onShare = async () => {
    const text = `${t(poolUi.title)} — OrbitFlow: ${window.location.origin}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="surface-card mt-5 rounded-3xl p-5">
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5 text-primary" />
        <h3 className="font-display text-base font-bold">{t(poolUi.title)}</h3>
      </div>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t(poolUi.sub)}</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {t(poolUi.people)}
          </label>
          <input
            type="number"
            min={2}
            max={10}
            value={people}
            onChange={(e) =>
              setPeople(Math.min(10, Math.max(2, Number(e.target.value) || 2)))
            }
            className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-lg font-bold outline-none transition-colors focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {t(poolUi.share)}
          </label>
          <input
            type="number"
            min={0}
            value={share}
            onChange={(e) => setShare(Math.max(0, Number(e.target.value) || 0))}
            className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-lg font-bold outline-none transition-colors focus:border-primary"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {[
          { label: poolUi.perMonth, value: `${fmt(perMonth)} ${t(trackUi.aed)}` },
          { label: poolUi.monthsToTarget, value: months ? `${months}` : "—" },
          { label: poolUi.yearTotal, value: `${fmt(yearTotal)} ${t(trackUi.aed)}` },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl border border-border/70 p-3">
            <p className="text-[10px] leading-tight text-muted-foreground">{t(s.label)}</p>
            <p className="mt-1.5 font-display text-base font-bold text-primary">{s.value}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {t(poolUi.steps)}
      </p>
      <ol className="mt-3 space-y-3">
        {[poolUi.step1, poolUi.step2, poolUi.step3].map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">
              {i + 1}
            </span>
            <p className="text-[13px] leading-relaxed text-muted-foreground">{t(s)}</p>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex gap-3 rounded-2xl border border-destructive/40 bg-destructive/10 p-4">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
        <p className="text-[12px] leading-relaxed text-foreground/90">{t(poolUi.warning)}</p>
      </div>

      <div className="mt-6 rounded-2xl border border-border/70 p-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <h4 className="font-display text-sm font-bold">{t(poolUi.growthTitle)}</h4>
        </div>
        <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
          {t(poolUi.growthSub)}
        </p>

        <div className="mt-4 space-y-2.5">
          {years.map((row) => (
            <div key={row.y}>
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[11px] text-muted-foreground">
                  {t(poolUi.year)} {row.y}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {t(poolUi.contributed)} {fmt(row.contributed)} ·{" "}
                  <span className="font-bold text-primary">
                    {t(poolUi.projected)} {fmt(row.value)} {t(trackUi.aed)}
                  </span>
                </p>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(row.value / max) * 100}%` }}
                  transition={{ duration: 0.5, delay: row.y * 0.05 }}
                  className="h-full rounded-full bg-primary/70"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onShare}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/20 active:scale-[0.98]"
      >
        <Share2 className="h-4 w-4" />
        {copied ? t(poolUi.copied) : t(poolUi.share_)}
      </button>
    </section>
  );
}
