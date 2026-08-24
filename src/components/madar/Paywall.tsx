import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Crown, Sparkles, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { payUi, plans } from "@/lib/finance-track";

export function Paywall({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLang();
  const [plan, setPlan] = useState("year");
  const [done, setDone] = useState(false);

  const close = () => {
    onClose();
    setTimeout(() => setDone(false), 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
          className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 p-4 backdrop-blur-sm sm:items-center"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="surface-card relative w-full max-w-md rounded-[2rem] p-6"
          >
            <button
              onClick={close}
              aria-label={t(payUi.close)}
              className="absolute end-4 top-4 rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div key="offer" exit={{ opacity: 0, scale: 0.97 }}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15">
                    <Crown className="h-6 w-6 text-primary" />
                  </span>
                  <h2 className="mt-4 text-xl font-bold leading-snug">
                    {t(payUi.title)}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(payUi.subtitle)}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {plans.map((p) => {
                      const active = plan === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setPlan(p.id)}
                          className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-start transition-colors ${
                            active
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/40"
                          }`}
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                              active ? "border-primary bg-primary" : "border-border"
                            }`}
                          >
                            {active && (
                              <Check className="h-3 w-3 text-primary-foreground" />
                            )}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-display text-base font-bold">
                              {t(p.price)}
                            </span>
                            <span className="block text-[11px] text-muted-foreground">
                              {t(p.period)}
                            </span>
                          </span>
                          {p.badge && (
                            <span className="shrink-0 rounded-full bg-success/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-success">
                              {t(p.badge)}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <ul className="mt-5 space-y-2">
                    {payUi.perks.map((perk, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" />
                        {t(perk)}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setDone(true)}
                    className="bg-teal mt-6 w-full rounded-2xl px-6 py-4 font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
                  >
                    {t(payUi.cta)}
                  </motion.button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground/70">
                    {t(payUi.note)}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.15, 1] }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-success/15"
                  >
                    <Check className="h-10 w-10 text-success" />
                  </motion.span>
                  <h2 className="mt-5 text-xl font-bold">{t(payUi.successTitle)}</h2>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    {t(payUi.successBody)}
                  </p>
                  <button
                    onClick={close}
                    className="bg-teal mt-7 w-full rounded-2xl px-6 py-4 font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
                  >
                    {t(payUi.successCta)}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
