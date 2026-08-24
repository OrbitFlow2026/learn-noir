import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, PartyPopper, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { ui, type Path } from "@/lib/madar-content";

type Stage = "cards" | "quiz" | "done";

export function PathScreen({ path, onExit }: { path: Path; onExit: () => void }) {
  const { t, dir } = useLang();
  const [stage, setStage] = useState<Stage>("cards");
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);

  const total = path.cards.length;
  const rtl = dir === "rtl";
  const selected = path.quiz?.options.find((o) => o.id === picked) ?? null;

  const go = (delta: number) => {
    const next = index + delta;
    if (next < 0) return;
    if (next >= total) {
      setStage("quiz");
      return;
    }
    setIndex(next);
  };

  return (
    <div className="bg-hero flex flex-1 flex-col px-5 pb-10 pt-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className={`h-3.5 w-3.5 ${rtl ? "rotate-180" : ""}`} />
          {t(ui.back)}
        </button>
        <p className="truncate font-display text-sm font-bold">{t(path.title)}</p>
      </div>

      <div className="mt-4 flex gap-1.5">
        {path.cards.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              stage !== "cards" || i <= index ? "bg-teal" : "bg-muted"
            }`}
          />
        ))}
        <div
          className={`h-1 flex-1 rounded-full ${stage === "cards" ? "bg-muted" : "bg-teal"}`}
        />
      </div>

      <AnimatePresence mode="wait">
        {stage === "cards" && (
          <motion.div
            key={`card-${index}`}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(rtl ? -1 : 1);
              else if (info.offset.x > 60) go(rtl ? 1 : -1);
            }}
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="surface-card mt-6 flex-1 cursor-grab touch-pan-y rounded-[2rem] p-7 active:cursor-grabbing"
          >
            <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              {t(path.cards[index].tag)}
            </span>
            <h2 className="mt-5 text-2xl font-bold leading-snug">
              {t(path.cards[index].title)}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {t(path.cards[index].body)}
            </p>
            <p className="mt-8 text-xs text-muted-foreground/70">{t(ui.swipeHint)}</p>
          </motion.div>
        )}

        {stage === "quiz" && path.quiz && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            className="mt-6 flex-1"
          >
            <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              {t(ui.quiz)}
            </span>
            <h2 className="mt-5 text-xl font-bold leading-snug">{t(path.quiz.question)}</h2>

            <div className="mt-6 space-y-3">
              {path.quiz.options.map((option) => {
                const isPicked = picked === option.id;
                const state = !isPicked ? "idle" : option.correct ? "right" : "wrong";
                return (
                  <motion.button
                    key={option.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPicked(option.id)}
                    className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-start text-sm font-medium transition-colors ${
                      state === "idle"
                        ? "surface-card border-border"
                        : state === "right"
                          ? "border-success bg-success/15 text-success"
                          : "border-destructive bg-destructive/15 text-destructive"
                    }`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold uppercase">
                      {state === "idle" ? (
                        option.id
                      ) : state === "right" ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <X className="h-3.5 w-3.5" />
                      )}
                    </span>
                    {t(option.text)}
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {selected && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-5 rounded-2xl border p-4 text-sm ${
                    selected.correct
                      ? "border-success/40 bg-success/10 text-success"
                      : "border-destructive/40 bg-destructive/10 text-destructive"
                  }`}
                >
                  {t(selected.feedback)}
                </motion.div>
              )}
            </AnimatePresence>

            {selected && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => (selected.correct ? setStage("done") : setPicked(null))}
                className="bg-teal mt-6 w-full rounded-2xl px-6 py-4 font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
              >
                {selected.correct ? t(ui.finish) : t(ui.tryAgain)}
              </motion.button>
            )}
          </motion.div>
        )}

        {stage === "done" && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 flex flex-1 flex-col items-center justify-center text-center"
          >
            <PartyPopper className="h-12 w-12 text-primary" />
            <h2 className="mt-5 text-2xl font-bold">{t(ui.completeTitle)}</h2>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t(ui.completeBody)}</p>
            <button
              onClick={onExit}
              className="bg-teal mt-8 w-full max-w-xs rounded-2xl px-6 py-4 font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
            >
              {t(ui.backHome)}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {stage === "cards" && (
        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            className="rounded-full border border-border p-3 text-muted-foreground disabled:opacity-30"
            aria-label={t(ui.prev)}
          >
            <ArrowLeft className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} />
          </button>
          <div className="flex gap-2">
            {path.cards.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="bg-teal flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-primary-foreground"
          >
            {index === total - 1 ? t(ui.takeQuiz) : t(ui.next)}
            <ArrowRight className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </div>
  );
}
