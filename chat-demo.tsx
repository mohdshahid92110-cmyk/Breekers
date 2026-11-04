"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

interface Script {
  id: string;
  label: string;
  color: string;
  user: string;
  reply: string;
  code?: string;
  image?: boolean;
}

const SCRIPTS: Script[] = [
  {
    id: "chat",
    label: "Chat",
    color: "#8B5CF6",
    user: "Compare server rendering and static generation for a marketing site.",
    reply:
      "For a mostly fixed marketing site, static generation is the better fit: pages are built once, served from a CDN and load fastest. Use server rendering only for pages that change per visitor, like a dashboard.",
  },
  {
    id: "code",
    label: "Code",
    color: "#22D3EE",
    user: "Why does my useEffect run twice in development?",
    reply:
      "React Strict Mode mounts, unmounts and remounts components in development to expose missing cleanup. Production runs it once. Return a cleanup function so the double run is harmless:",
    code: "useEffect(() => {\n  const id = subscribe(topic);\n  return () => unsubscribe(id);\n}, [topic]);",
  },
  {
    id: "image",
    label: "Image",
    color: "#C084FC",
    user: "A glass hexagon floating above a violet nebula, studio lighting.",
    reply: "Image Studio would return a set of variations for this prompt. This tile is a placeholder, since no images are generated in this demo.",
    image: true,
  },
  {
    id: "automation",
    label: "Automate",
    color: "#6366F1",
    user: "Every Monday at 9, summarise new support tickets and post them to Slack.",
    reply:
      "Draft plan for your approval: 1) Trigger weekly, Monday 09:00. 2) Fetch tickets from the last 7 days. 3) Summarise by topic. 4) Post to #support. Nothing runs until you approve it.",
  },
];

export function ChatDemo() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0); // 0 idle, 1 user, 2 typing, 3 reply
  const reduce = useReducedMotion();
  const s = SCRIPTS[active];

  useEffect(() => {
    if (reduce) {
      setStep(3);
      return;
    }
    setStep(0);
    const t = [
      setTimeout(() => setStep(1), 250),
      setTimeout(() => setStep(2), 900),
      setTimeout(() => setStep(3), 2300),
    ];
    return () => t.forEach(clearTimeout);
  }, [active, reduce]);

  return (
    <section id="demo" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        title="A look at how it will feel"
        body="Pick a workspace to play a sample conversation. These are scripted examples, not live AI responses."
      />

      <div className="glass glow-border mt-12 overflow-hidden rounded-3xl">
        <div role="tablist" aria-label="Sample conversations" className="flex gap-1 overflow-x-auto border-b border-white/10 p-2">
          {SCRIPTS.map((sc, i) => (
            <button
              key={sc.id}
              role="tab"
              id={`tab-${sc.id}`}
              aria-selected={i === active}
              aria-controls="demo-panel"
              onClick={() => setActive(i)}
              className={cn(
                "relative whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors",
                i === active ? "text-white" : "text-mute hover:text-white",
              )}
            >
              {i === active && (
                <motion.span
                  layoutId="demo-tab"
                  className="absolute inset-0 rounded-full"
                  style={{ background: `${sc.color}2b`, boxShadow: `inset 0 0 0 1px ${sc.color}66` }}
                />
              )}
              <span className="relative">{sc.label}</span>
            </button>
          ))}
          <Badge className="ml-auto self-center">Sample only</Badge>
        </div>

        <div
          id="demo-panel"
          role="tabpanel"
          aria-labelledby={`tab-${s.id}`}
          aria-live="polite"
          className="flex min-h-[22rem] flex-col gap-4 p-5 sm:p-8"
        >
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-gradient-to-r from-brand-violet to-brand-indigo px-4 py-3 text-sm sm:text-base"
            >
              {s.user}
            </motion.div>
          )}
          {step === 2 && (
            <div className="glass flex w-16 items-center justify-center gap-1 rounded-2xl rounded-bl-md py-4" aria-label="Assistant is typing">
              {[0, 1, 2].map((d) => (
                <span key={d} className="h-1.5 w-1.5 animate-dot rounded-full bg-mute" style={{ animationDelay: `${d * 160}ms` }} />
              ))}
            </div>
          )}
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass max-w-[90%] space-y-3 self-start rounded-2xl rounded-bl-md px-4 py-3 text-sm leading-relaxed sm:text-base"
            >
              <p>{s.reply}</p>
              {s.code && (
                <pre className="overflow-x-auto rounded-xl bg-ink/80 p-4 text-xs text-brand-cyan sm:text-sm">
                  <code>{s.code}</code>
                </pre>
              )}
              {s.image && (
                <div
                  className="grid aspect-[16/9] w-full max-w-sm place-items-center rounded-xl text-xs text-white/70"
                  style={{ background: "radial-gradient(circle at 30% 30%, #8B5CF6, #11111B 70%)" }}
                >
                  Placeholder, not generated
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
