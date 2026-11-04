import { Layers, Sparkles, Timer } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const POINTS = [
  {
    icon: Layers,
    title: "A unified AI workspace",
    body: "Chat, code, images, automations and lessons live in one place with one login. Switch tasks without copying context between tools.",
  },
  {
    icon: Sparkles,
    title: "Intelligent assistance",
    body: "Start with a plain request. The central assistant works out what you need and opens the workspace built for it.",
  },
  {
    icon: Timer,
    title: "Task automation you control",
    body: "Describe a repeating job in your own words. Breekers drafts the steps and waits for your approval before anything runs.",
  },
];

export function Why() {
  return (
    <section id="why" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[.9fr_1.1fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeading
          title="Why Breekers"
          body="Most AI tools do one thing well and leave you to stitch the rest together. Breekers is designed as a single place where the pieces already fit."
        />
      </div>
      <ul className="space-y-4">
        {POINTS.map(({ icon: Icon, title, body }) => (
          <li key={title} className="glass glow-border flex gap-5 rounded-3xl p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-violet/15 text-brand-violet">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-mute">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
