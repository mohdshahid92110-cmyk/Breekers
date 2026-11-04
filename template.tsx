/** Re-mounts on every navigation, which replays the CSS page-in animation. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-pagein">{children}</div>;
}
