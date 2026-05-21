// 16x16 pixel art avatar of a hooded coder. Drawn as SVG rects.
const P = {
  bg: "transparent",
  hood: "var(--color-primary)",
  hoodShade: "color-mix(in oklab, var(--color-primary) 65%, black)",
  skin: "oklch(0.78 0.09 60)",
  skinShade: "oklch(0.65 0.1 50)",
  eye: "var(--color-accent)",
  shirt: "var(--color-foreground)",
  outline: "var(--color-border)",
};

// 16x16 grid. " " = none, letters map to palette keys.
const SPRITE = [
  "................",
  ".....OOOOOO.....",
  "....OhhhhhhO....",
  "...OhhhhhhhhO...",
  "..OhhSSSSSShhO..",
  "..OhSkkkkkkShO..",
  "..OhSkEkkEkShO..",
  "..OhSkkkkkkShO..",
  "..OhSSkkkkSShO..",
  "...OhhSSSShhO...",
  "....OhhhhhhO....",
  "...OttttttttO...",
  "..OtttttttttO...",
  "..OtttttttttO...",
  "..OttttOOttttO..",
  "..OOOOO..OOOOO..",
];

const COLORS: Record<string, string> = {
  O: P.outline,
  h: P.hood,
  H: P.hoodShade,
  S: P.skinShade,
  k: P.skin,
  E: P.eye,
  t: P.shirt,
};

export function PixelAvatar({ size = 256, className = "" }: { size?: number; className?: string }) {
  const cells = 16;
  const unit = 1;
  return (
    <svg
      viewBox={`0 0 ${cells} ${cells}`}
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={className}
      style={{ imageRendering: "pixelated" }}
      aria-label="Pixel art avatar of an AI student"
    >
      {SPRITE.map((row, y) =>
        row.split("").map((c, x) => {
          const fill = COLORS[c];
          if (!fill) return null;
          return <rect key={`${x}-${y}`} x={x} y={y} width={unit} height={unit} fill={fill} />;
        })
      )}
    </svg>
  );
}
