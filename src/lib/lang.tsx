import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Bi, Lang } from "./orbitflow-content";
import { langMeta } from "./orbitflow-content";

type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  toggle: () => void;
  setLang: (lang: Lang) => void;
  t: (value: Bi) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const dir: "rtl" | "ltr" = langMeta.find((m) => m.code === lang)?.dir ?? "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const toggle = useCallback(
    () =>
      setLang((l) => {
        const i = langMeta.findIndex((m) => m.code === l);
        return langMeta[(i + 1) % langMeta.length]!.code;
      }),
    [],
  );
  const t = useCallback((value: Bi) => value[lang] ?? value.en, [lang]);

  const value = useMemo(
    () => ({ lang, dir, toggle, setLang, t }),
    [lang, dir, toggle, t],
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
