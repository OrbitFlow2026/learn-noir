import { createFileRoute } from "@tanstack/react-router";
import { OrbitFlowApp } from "@/components/madar/MadarApp";

const title = "OrbitFlow — Learn in 5 Minutes";
const description =
  "OrbitFlow is a bilingual micro-learning app with five-minute lessons on AI, financial literacy and agile leadership.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrbitFlowApp,
});
