export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-18%] top-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#081026] via-transparent to-transparent opacity-90" />
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(171,87,255,0.12),_transparent_15%),radial-gradient(circle_at_80%_20%,_rgba(82,164,255,0.1),_transparent_18%)]" />
    </div>
  );
}
