export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label="JN Glass & Mirror home">
      <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/60 bg-primary/15 font-display text-lg font-extrabold text-silver shadow-glow">JN</span>
      <span className="font-display leading-tight">
        <span className="block text-base font-bold text-silver-gradient">JN GLASS</span>
        <span className="block text-[10px] tracking-[0.3em] text-muted-foreground">& MIRROR</span>
      </span>
    </a>
  );
}
