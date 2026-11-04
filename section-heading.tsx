export function SectionHeading({ title, body }: { title: string; body: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-mute">{body}</p>
    </div>
  );
}
