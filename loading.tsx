import { Logo } from "@/components/logo";

export default function Loading() {
  return (
    <div role="status" className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center gap-5">
        <Logo size={56} showWord={false} />
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-drift rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan" />
        </div>
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
