import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <h1 className="font-display text-4xl font-semibold">That page doesn’t exist</h1>
        <p className="mt-3 text-mute">The link may be old or mistyped. Head back and pick a workspace.</p>
        <Button asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
