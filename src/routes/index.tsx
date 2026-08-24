import { createFileRoute } from "@tanstack/react-router";
import { MadarApp } from "@/components/madar/MadarApp";

const title = "Madar — Expand your horizons in 5 minutes";
const description =
  "Madar is a bilingual (EN/العربية) micro-learning app: five-minute lessons on AI for business, financial literacy and agile leadership.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MadarApp,
});
