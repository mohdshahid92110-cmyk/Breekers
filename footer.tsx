import Link from "next/link";
import { Logo } from "@/components/logo";

const LINKS = [
  { label: "About", href: "/info/about" },
  { label: "Features", href: "/#why" },
  { label: "Contact", href: "/info/contact" },
  { label: "Privacy Policy", href: "/info/privacy" },
  { label: "Terms", href: "/info/terms" },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-mute">Think Beyond. Create Anything.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-mute">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-10 text-xs text-mute/70">
        © {new Date().getFullYear()} Breekers. Early preview: AI features are not connected yet.
      </p>
    </footer>
  );
}
