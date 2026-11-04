"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/#capabilities" },
  { label: "Features", href: "/#why" },
  { label: "Pricing", href: "/#pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="Breekers home" className="rounded-lg">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-mute transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost">
            <Link href="/app">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/app">Get Started</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="space-y-1 px-5 pb-5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-mute hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2 pt-2">
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/app" onClick={() => setOpen(false)}>Sign in</Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link href="/app" onClick={() => setOpen(false)}>Get Started</Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
