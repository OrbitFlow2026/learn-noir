import { motion } from "motion/react";
import { ChevronRight, Flame, Lock, PiggyBank } from "lucide-react";
import { useLang } from "@/lib/lang";
import { paths, ui } from "@/lib/madar-content";
import { trackUi } from "@/lib/finance-track";

export function Home({
  onOpenPath,
  onOpenTrack,
}: {
  onOpenPath: (id: string) => void;
  onOpenTrack: () => void;
}) {
  const { t, dir } = useLang();

  return (
    <div className="bg-hero flex-1 px-5 pb-16 pt-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold">{t(ui.greeting)}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t(ui.greetingSub)}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="surface-card mt-6 flex items-center gap-4 rounded-3xl p-5"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-3xl">
          🔥
        </div>
        <div className="min-w-0">
          <p className="font-display text-lg font-bold">{t(ui.streak)}</p>
          <p className="text-xs text-muted-foreground">{t(ui.streakSub)}</p>
        </div>
        <Flame className="ms-auto h-6 w-6 shrink-0 text-primary" />
      </motion.div>

      <div className="mt-4 flex gap-1.5">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i < 3 ? "bg-teal" : "bg-muted"}`}
          />
        ))}
      </div>

      <h2 className="mt-9 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {t(ui.learningPaths)}
      </h2>

      <div className="mt-4 space-y-3">
        {paths.map((path, i) => (
          <motion.button
            key={path.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 + i * 0.08 }}
            whileTap={{ scale: path.available ? 0.98 : 1 }}
            disabled={!path.available}
            onClick={() => onOpenPath(path.id)}
            className={`surface-card flex w-full items-center gap-4 rounded-3xl p-5 text-start transition-colors ${
              path.available ? "hover:border-primary/50" : "opacity-60"
            }`}
          >
            <div className="min-w-0 flex-1">
              <p className="font-display text-base font-bold">{t(path.title)}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {t(path.blurb)}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-primary">
                {path.available
                  ? `${path.cards.length} ${t(ui.lessons)} · ${path.minutes} ${t(ui.min)}`
                  : t(ui.soon)}
              </p>
            </div>
            {path.available ? (
              <ChevronRight
                className={`h-5 w-5 shrink-0 text-primary ${dir === "rtl" ? "rotate-180" : ""}`}
              />
            ) : (
              <Lock className="h-5 w-5 shrink-0 text-muted-foreground" />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
