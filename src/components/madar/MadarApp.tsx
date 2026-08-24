import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LangProvider, useLang } from "@/lib/lang";
import { paths } from "@/lib/madar-content";
import { TopBar } from "./TopBar";
import { Splash } from "./Splash";
import { Home } from "./Home";
import { PathScreen } from "./PathScreen";

type Screen = { name: "splash" } | { name: "home" } | { name: "path"; id: string };

function Shell() {
  const { dir } = useLang();
  const [screen, setScreen] = useState<Screen>({ name: "splash" });
  const activePath =
    screen.name === "path" ? paths.find((p) => p.id === screen.id) : undefined;

  return (
    <div dir={dir} className="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col">
      <TopBar />
      <AnimatePresence mode="wait">
        <motion.main
          key={screen.name + (screen.name === "path" ? screen.id : "")}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-1 flex-col"
        >
          {screen.name === "splash" && <Splash onStart={() => setScreen({ name: "home" })} />}
          {screen.name === "home" && (
            <Home onOpenPath={(id) => setScreen({ name: "path", id })} />
          )}
          {activePath && (
            <PathScreen path={activePath} onExit={() => setScreen({ name: "home" })} />
          )}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export function MadarApp() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  );
}
