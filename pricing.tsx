import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    note: "For trying things out",
    features: ["Access to all five workspaces", "Limited daily requests", "Saved history for 7 days"],
    cta: { label: "Try the preview", href: "/app", disabled: false },
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    note: "per month, for individuals",
    features: ["Higher usage limits", "Full history and search", "Priority access to new tools", "Unlimited automations"],
    cta: { label: "Coming soon", href: "#", disabled: true },
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "for teams and organisations",
    features: ["Shared workspaces and roles", "Single sign-on", "Admin controls and audit logs", "Dedicated support"],
    cta: { label: "Contact us", href: "/info/contact", disabled: false },
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        title="Pricing"
        body="Preview pricing. Payments are not enabled yet, and plans may change before launch."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={cn(
              "glass glow-border flex flex-col rounded-3xl p-7",
              p.featured && "bg-brand-violet/10 shadow-[0_0_70px_-25px_rgba(139,92,246,.9)] md:-translate-y-3",
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              {p.featured && <Badge className="border-brand-violet/40 text-violet-200">Most popular</Badge>}
            </div>
            <p className="mt-5 font-display text-4xl font-semibold">{p.price}</p>
            <p className="mt-1 text-sm text-mute">{p.note}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            {p.cta.disabled ? (
              <Button className="mt-8" variant="outline" disabled>{p.cta.label}</Button>
            ) : (
              <Button asChild className="mt-8" variant={p.featured ? "default" : "outline"}>
                <Link href={p.cta.href}>{p.cta.label}</Link>
              </Button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
