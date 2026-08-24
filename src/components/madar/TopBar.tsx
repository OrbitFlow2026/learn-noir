import { Languages } from "lucide-react";
import logo from "@/assets/madar-logo.png";
import { useLang } from "@/lib/lang";
import { ui } from "@/lib/madar-content";

export function TopBar() {
  const { t, toggle, lang } = useLang();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-border/60 bg-background/80 px-5 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Madar" width={28} height={28} className="h-7 w-7" />
        <span className="font-display text-lg font-bold tracking-tight">
          {lang === "ar" ? "مدار" : "Madar"}
        </span>
      </div>
      <button
        onClick={toggle}
        aria-label="Toggle language"
        className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary transition-all hover:bg-primary/20 active:scale-95"
      >
        <Languages className="h-4 w-4" />
        {t(ui.langLabel)}
      </button>
    </header>
  );
}
