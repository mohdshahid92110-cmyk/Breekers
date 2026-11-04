"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { demoRoute, type RouteResult } from "@/lib/router";
import { WORKSPACES, getWorkspace } from "@/lib/workspaces";

const EXAMPLES = [
  "Fix the bug in my React component",
  "Logo for a mountain bike brand",
  "Every Monday, summarise my tickets",
  "Teach me the basics of probability",
];

function RouterDemo() {
  const [prompt, setPrompt] = useState(EXAMPLES[0]);
  const [result, setResult] = useState<RouteResult>(() => demoRoute(EXAMPLES[0]));

  const run = (text: string) => {
    setPrompt(text);
    setResult(demoRoute(text));
  };
  const target = getWorkspace(result.workspace)!;

  return (
    <div className="glass glow-border rounded-3xl p-5 shadow-[0_0_80px_-30px_rgba(139,92,246,.8)] sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-base font-semibold">See how requests get routed</h2>
        <Badge>Demo: keyword matching, no AI model</Badge>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (prompt.trim()) run(prompt);
        }}
        className="flex gap-2"
      >
        <label htmlFor="route-input" className="sr-only">Type a request</label>
        <input
          id="route-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type a request"
          className="min-w-0 flex-1 rounded-full border border-white/10 bg-ink/70 px-4 py-2.5 text-sm placeholder:text-mute/70 focus:border-brand-violet/70 focus:outline-none"
        />
        <Button type="submit" size="icon" aria-label="Route this request">
          <Send className="h-4 w-4" />
        </Button>
      </form>

      <div className="mt-3 flex flex-wrap gap-2">
        {EXAMPLES.map((ex) => (
          <button
            key={ex}
            type="button"
            onClick={() => run(ex)}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-mute transition-colors hover:border-brand-cyan/40 hover:text-white"
          >
            {ex}
          </button>
        ))}
      </div>

      <ul className="mt-5 space-y-2" aria-label="Workspaces">
        {WORKSPACES.map((w) => {
          const active = w.id === result.workspace;
          const Icon = w.icon;
          return (
            <li
              key={w.id}
              className="flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-300"
              style={{
                borderColor: active ? w.color : "rgba(255,255,255,.06)",
                background: active ? `${w.color}1f` : "transparent",
                boxShadow: active ? `0 0 28px -10px ${w.color}` : "none",
                opacity: active ? 1 : 0.55,
              }}
            >
              <Icon className="h-5 w-5 shrink-0" style={{ color: w.color }} aria-hidden />
              <span className="flex-1 text-sm font-medium">{w.name}</span>
              <AnimatePresence>
                {active && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="grid h-5 w-5 place-items-center rounded-full"
                    style={{ background: w.color }}
                  >
                    <Check className="h-3 w-3 text-ink" aria-label="Selected" />
                  </motion.span>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      <p aria-live="polite" className="mt-4 text-sm text-mute">
        {result.matched ? (
          <>Matched “{result.matched}”, so this goes to <span className="text-white">{target.name}</span>.</>
        ) : (
          <>No specific match, so this stays with <span className="text-white">{target.name}</span>.</>
        )}{" "}
        <Link href={target.href} className="text-brand-cyan underline-offset-4 hover:underline">
          Open workspace
        </Link>
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.05fr_.95fr] lg:pt-40">
      <div>
        <div className="animate-rise" style={{ animationDelay: "0ms" }}>
          <Badge className="border-brand-violet/30 bg-brand-violet/10 text-violet-200">
            Think Beyond. Create Anything.
          </Badge>
        </div>
        <h1
          className="animate-rise mt-6 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "90ms" }}
        >
          One Intelligence.
          <span className="text-gradient block pb-2">Endless Possibilities.</span>
        </h1>
        <p
          className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-mute"
          style={{ animationDelay: "180ms" }}
        >
          Chat, code, create and automate. Everything you need to turn your ideas into reality, powered by AI.
        </p>
        <div className="animate-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "270ms" }}>
          <Button asChild size="lg">
            <Link href="/app">
              Start Creating <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#capabilities">Explore Features</Link>
          </Button>
        </div>
      </div>

      <div className="animate-rise" style={{ animationDelay: "360ms" }}>
        <RouterDemo />
      </div>
    </section>
  );
}
