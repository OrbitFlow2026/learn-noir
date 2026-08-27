import { Languages } from "lucide-react";
import logo from "@/assets/orbitflow-logo.png";
import { useLang } from "@/lib/lang";
import { langMeta } from "@/lib/orbitflow-content";

export function TopBar() {
  const { lang, setLang } = useLang();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-border/60 bg-background/80 px-5 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <img src={logo} alt="OrbitFlow" width={28} height={28} className="h-7 w-7" />
        <span className="font-display text-lg font-bold tracking-tight">
          {lang === "ar" ? "أوربت فلو" : "OrbitFlow"}
        </span>
      </div>
      <div className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 p-1">
        <Languages className="ms-1.5 h-3.5 w-3.5 shrink-0 text-primary" />
        {langMeta.map((m) => (
          <button
            key={m.code}
            onClick={() => setLang(m.code)}
            aria-label={`Switch language to ${m.label}`}
            aria-pressed={lang === m.code}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all active:scale-95 ${
              lang === m.code
                ? "bg-primary/25 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </header>
  );
}
