import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { PixelAvatar } from "@/components/pixel-avatar";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mika Chen — AI student & pixel hacker" },
      {
        name: "description",
        content:
          "Portfolio of Mika Chen, a 2nd-year AI undergrad building neural networks, tiny LLMs and pixel-art experiments.",
      },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

const NAV = [
  { label: "~/about", href: "#about" },
  { label: "~/projects", href: "#projects" },
  { label: "~/stack", href: "#stack" },
  { label: "~/contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "MICRO_GPT.py",
    tag: "NLP",
    desc: "A 12M-param transformer trained from scratch on classic sci-fi novels. Generates eerie short stories.",
    tech: ["PyTorch", "CUDA", "wandb"],
    accent: "primary",
  },
  {
    title: "PIXEL_DIFFUSER",
    tag: "VISION",
    desc: "Tiny diffusion model that hallucinates 32x32 game sprites. Trained on a hand-labeled NES dataset.",
    tech: ["JAX", "Flax", "Numpy"],
    accent: "magenta",
  },
  {
    title: "STUDY_BUDDY_RAG",
    tag: "AGENTS",
    desc: "Retrieval-augmented tutor that ingests my lecture PDFs and quizzes me before exams. Saved my linear algebra grade.",
    tech: ["LangChain", "FAISS", "FastAPI"],
    accent: "amber",
  },
  {
    title: "DUNGEON_RL",
    tag: "RL",
    desc: "PPO agent learning to escape procedurally generated dungeons. Beats me 73% of the time. Rude.",
    tech: ["Gymnasium", "PyTorch", "Stable-Baselines3"],
    accent: "primary",
  },
];

const STACK = [
  "PYTHON", "PYTORCH", "JAX", "NUMPY", "PANDAS", "SKLEARN",
  "HUGGINGFACE", "DOCKER", "LINUX", "GIT", "CUDA", "TYPESCRIPT",
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground scanlines">
      <TopBar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="pixel text-xs sm:text-sm text-primary text-glow">
          MIKA.exe<span className="blink">_</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="pixel text-[10px] px-3 py-2 hover:bg-secondary hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

function Hero() {
  const lines = [
    "$ whoami",
    "> mika chen — ai undergrad, year 2/4",
    "$ cat ~/.status",
    "> training models. losing to gradient descent.",
    "$ ./launch_portfolio --mode=pixel",
  ];
  const [typed, setTyped] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped((t) => {
        if (i >= lines.length) {
          clearInterval(id);
          return t;
        }
        const next = [...t, lines[i]];
        i++;
        return next;
      });
    }, 450);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="top" className="relative crt-grid">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_auto] md:py-24 items-center">
        <div className="space-y-6">
          <p className="pixel text-[10px] text-accent">// PORTFOLIO_v0.2.6 — BUILD 2026</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl leading-tight">
            <span className="text-primary text-glow">MIKA</span>{" "}
            <span className="text-foreground">CHEN</span>
          </h1>
          <p className="pixel text-[11px] sm:text-xs text-muted-foreground">
            2ND-YEAR ARTIFICIAL INTELLIGENCE STUDENT.
            <br />
            BUILDS NEURAL NETS, TRAINS TINY LLMS, COLLECTS BUGS.
          </p>

          <div className="pixel-border bg-card p-4 sm:p-5 font-mono text-base sm:text-lg leading-relaxed">
            {typed.map((l, i) => (
              <div
                key={i}
                className={
                  l.startsWith("$")
                    ? "text-primary"
                    : "text-foreground/85"
                }
              >
                {l}
              </div>
            ))}
            <span className="text-primary blink">█</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="pixel text-[10px] bg-primary text-primary-foreground px-5 py-3 pixel-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform"
            >
              ▶ VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="pixel text-[10px] bg-card text-foreground px-5 py-3 pixel-border hover:bg-secondary transition-colors"
            >
              SEND MESSAGE
            </a>
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <div className="pixel-border-thick bg-card p-4 float-y">
            <PixelAvatar size={240} />
            <div className="mt-3 text-center pixel text-[9px] text-muted-foreground">
              PLAYER_01 // LV.20
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between border-b-4 border-border pb-3">
      <div>
        <p className="pixel text-[10px] text-accent">// {tag}</p>
        <h2 className="mt-2 text-xl sm:text-2xl">{title}</h2>
      </div>
      <span className="pixel text-[10px] text-muted-foreground hidden sm:block">[ESC]</span>
    </div>
  );
}

function About() {
  const stats = [
    { k: "YEAR", v: "02/04" },
    { k: "GPA", v: "3.87" },
    { k: "COFFEE", v: "∞ ml" },
    { k: "BUGS", v: "404" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader tag="ABOUT.txt" title="> who_is_this_person" />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-lg leading-relaxed">
          <p>
            Hi, I'm Mika. I'm halfway through a B.Sc. in{" "}
            <span className="text-primary">Artificial Intelligence</span> at a university
            that gives me too much coursework and not enough GPU hours.
          </p>
          <p>
            I spend my days reading papers I half-understand, fine-tuning small models on my
            laptop until the fans scream, and turning every assignment into an excuse to build
            something weird. I like systems that are <span className="text-accent">small,
            transparent, and a little chaotic</span> — kind of like me at 2am before a deadline.
          </p>
          <p>
            Currently obsessed with: mechanistic interpretability, retrieval-augmented agents,
            and figuring out how to fit a transformer inside a Game Boy.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 content-start">
          {stats.map((s) => (
            <div key={s.k} className="pixel-border bg-card p-4 text-center">
              <div className="pixel text-[9px] text-muted-foreground">{s.k}</div>
              <div className="pixel text-sm sm:text-base text-primary mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader tag="PROJECTS/" title="> ls -la ./builds" />
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="group pixel-border bg-card p-5 transition-transform hover:-translate-y-1"
          >
            <header className="flex items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg text-primary">{p.title}</h3>
              <span
                className="pixel text-[9px] px-2 py-1 bg-accent text-accent-foreground"
              >
                {p.tag}
              </span>
            </header>
            <p className="mt-3 text-lg leading-relaxed text-foreground/90">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="pixel text-[9px] px-2 py-1 bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 pixel text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
              ▶ PRESS_START_TO_VIEW
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader tag="STACK.cfg" title="> equipped_items" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {STACK.map((s, i) => (
          <div
            key={s}
            className="pixel-border bg-card px-3 py-4 text-center hover:bg-secondary transition-colors"
          >
            <div className="pixel text-[9px] text-muted-foreground">SLOT_{String(i + 1).padStart(2, "0")}</div>
            <div className="pixel text-[10px] sm:text-xs mt-2 text-primary">{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader tag="CONTACT.sh" title="> open_dialog --player=you" />
      <div className="pixel-border-thick bg-card p-6 sm:p-8">
        <p className="text-lg leading-relaxed">
          Want to collab on a weird ML side project, swap paper recommendations, or offer me an
          internship where I get to touch a real H100? I'd love to hear from you.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          <a href="mailto:mika@example.dev" className="pixel-border bg-background px-4 py-3 pixel text-[10px] hover:bg-secondary transition-colors text-center">
            ✉ MIKA@EXAMPLE.DEV
          </a>
          <a href="https://github.com" className="pixel-border bg-background px-4 py-3 pixel text-[10px] hover:bg-secondary transition-colors text-center">
            ⚙ GITHUB
          </a>
          <a href="https://linkedin.com" className="pixel-border bg-background px-4 py-3 pixel text-[10px] hover:bg-secondary transition-colors text-center">
            ⌬ LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-4 border-border mt-10">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center justify-between gap-3">
        <p className="pixel text-[9px] text-muted-foreground">
          © 2026 MIKA.CHEN — COMPILED WITH ☕ AND PANIC
        </p>
        <p className="pixel text-[9px] text-muted-foreground">
          PRESS <span className="text-primary">[F5]</span> TO REPLAY
        </p>
      </div>
    </footer>
  );
}
