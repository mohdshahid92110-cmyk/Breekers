"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { WORKSPACES, type Workspace } from "@/lib/workspaces";

function CapabilityCard({ w, className }: { w: Workspace; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const Icon = w.icon;

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <Link
      ref={ref}
      href={w.href}
      onMouseMove={onMove}
      className={cn(
        "group glass glow-border relative flex flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(320px circle at var(--x,50%) var(--y,50%), ${w.color}29, transparent 70%)` }}
      />
      <div className="relative flex items-start justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl"
          style={{ background: `${w.color}22`, color: w.color }}
        >
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-mute transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
          aria-hidden
        />
      </div>
      <h3 className="relative mt-6 font-display text-xl font-semibold">{w.name}</h3>
      <p className="relative mt-2 flex-1 leading-relaxed text-mute">{w.description}</p>
      <ul className="relative mt-5 flex flex-wrap gap-2">
        {w.tags.map((t) => (
          <li key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-mute">
            {t}
          </li>
        ))}
      </ul>
    </Link>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        title="Five workspaces, one assistant"
        body="Each workspace is built for a kind of work. The central assistant will hand your request to the right one."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-6">
        <CapabilityCard w={WORKSPACES[0]} className="md:col-span-4" />
        <CapabilityCard w={WORKSPACES[1]} className="md:col-span-2" />
        <CapabilityCard w={WORKSPACES[2]} className="md:col-span-2" />
        <CapabilityCard w={WORKSPACES[3]} className="md:col-span-2" />
        <CapabilityCard w={WORKSPACES[4]} className="md:col-span-2" />
      </div>
    </section>
  );
}
