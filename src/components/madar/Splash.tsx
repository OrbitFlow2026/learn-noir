import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/madar-logo.png";
import { useLang } from "@/lib/lang";
import { ui } from "@/lib/madar-content";

export function Splash({ onStart }: { onStart: () => void }) {
  const { t, lang, dir } = useLang();

  return (
    <div className="bg-hero flex min-h-[100dvh] flex-col items-center justify-center px-7 text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="relative"
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-3xl" />
        <img src={logo} alt="Madar logo" width={140} height={140} className="h-32 w-32" />
      </motion.div>

      <motion.h1
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-gradient-teal mt-7 text-5xl font-bold"
      >
        {lang === "ar" ? "مدار" : "Madar"}
      </motion.h1>

      <motion.p
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.28 }}
        className="mt-3 max-w-xs text-balance text-base text-muted-foreground"
      >
        {t(ui.slogan)}
      </motion.p>

      <motion.button
        initial={{ y: 22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.42 }}
        whileTap={{ scale: 0.96 }}
        onClick={onStart}
        className="bg-teal mt-12 flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl px-6 py-4 font-display text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
      >
        {t(ui.getStarted)}
        <ArrowRight className={`h-5 w-5 ${dir === "rtl" ? "rotate-180" : ""}`} />
      </motion.button>
    </div>
  );
}
