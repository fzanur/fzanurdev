import { useTheme } from "./theme-provider";

const options: { value: "light" | "dark" | "system"; icon: string; label: string }[] = [
  { value: "light", icon: "☀", label: "LIGHT" },
  { value: "dark", icon: "☾", label: "DARK" },
  { value: "system", icon: "▦", label: "AUTO" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="inline-flex items-center gap-0 pixel-border bg-card p-1">
      {options.map((o) => {
        const active = theme === o.value;
        return (
          <button
            key={o.value}
            onClick={() => setTheme(o.value)}
            aria-label={`Switch to ${o.label} theme`}
            className={`pixel text-[10px] px-2 py-1.5 transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-secondary"
            }`}
          >
            <span aria-hidden className="mr-1">{o.icon}</span>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
