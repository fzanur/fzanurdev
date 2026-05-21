import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { PixelAvatar } from "@/components/pixel-avatar";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fiza Noor — AI Student & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Fiza Noor, a 2nd-year Artificial Intelligence student at UET Lahore building neural networks, full-stack web apps, and digital systems.",
      },
      { property: "og:title", content: "Fiza Noor — AI Student & Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "AI undergraduate at UET Lahore. Python, TensorFlow, MERN stack, and HDL.",
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
  { label: "~/skills", href: "#skills" },
  { label: "~/certs", href: "#certs" },
  { label: "~/contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "MNIST_CLASSIFIER",
    tag: "DEEP LEARNING",
    desc: "Neural network built with TensorFlow and Keras that classifies handwritten digits with 97.76% test accuracy on 10,000 unseen images. Trained on 60,000 samples using Dense and Dropout layers, with full evaluation through confusion matrices and error-analysis plots.",
    tech: ["TensorFlow", "Keras", "Scikit-learn", "Matplotlib"],
    link: "https://github.com/fzanur/mnist-classifier",
    linkLabel: "VIEW REPO",
  },
  {
    title: "COLLEGE_MGMT_SYSTEM",
    tag: "FULL-STACK",
    desc: "End-to-end college management platform built on the MERN stack. Features role-based access control, student record management, and a fully responsive interface. Deployed publicly to demonstrate complete full-stack development capability.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://dsft86.csb.app",
    linkLabel: "LIVE DEMO",
  },
  {
    title: "DOUBLY_LINKED_LIST",
    tag: "DSA / C++",
    desc: "Complete C++ implementation of a doubly linked list supporting insertion, deletion, and bidirectional traversal. Demonstrates strong pointer manipulation, low-level memory management, and object-oriented design principles.",
    tech: ["C++", "OOP", "Pointers"],
    link: "https://github.com/fzanur",
    linkLabel: "GITHUB",
  },
  {
    title: "4BIT_MULTIPLIER",
    tag: "DIGITAL LOGIC",
    desc: "Designed and implemented a 4-bit multiplier module in Hardware Description Language. Simulated and functionally verified the circuit in Vivado as part of digital systems design coursework.",
    tech: ["HDL", "Vivado", "Verilog"],
    link: "https://github.com/fzanur",
    linkLabel: "GITHUB",
  },
];

const SKILL_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "LANGUAGES",
    items: ["Python", "C", "C++", "JavaScript", "HTML", "CSS / Tailwind", "Markdown"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "FRAMEWORKS",
    items: ["MongoDB", "Express", "React", "Node.js", "SQLite"],
  },
  {
    title: "CONCEPTS",
    items: ["Neural Networks", "Data Structures & Algorithms", "OOP", "AI Fundamentals"],
  },
  {
    title: "TOOLS / DESIGN",
    items: ["Git", "GitHub", "VS Code", "Visual Studio", "Figma", "Canva", "Linux"],
  },
  {
    title: "HARDWARE / NETWORKING",
    items: ["Digital Systems Design", "Vivado (HDL)", "Computer Networks", "Wireshark"],
  },
];

const CERTS = [
  {
    name: "AI Automation",
    org: "Credly",
    href: "https://credsverse.com/credentials/31f7d6e5-26b3-4cc9-90cd-3b0f9623f35f",
  },
  {
    name: "Computer Networks",
    org: "DevTown",
    href: "https://cert.devtown.in/verify/EV4JR",
  },
  {
    name: "Wireshark Basics",
    org: "DevTown",
    href: "https://cert.devtown.in/verify/ZPP7UO",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground scanlines">
      <TopBar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Certs />
      <Contact />
      <Footer />
    </div>
  );
}

function TopBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-4 border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="pixel text-xs sm:text-sm text-primary text-glow">
          FIZA.NOOR<span className="blink">_</span>
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
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden pixel-border bg-card px-3 py-2 pixel text-[10px]"
          >
            {open ? "X" : "≡"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t-4 border-border bg-card">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="pixel text-[10px] px-2 py-3 border-b border-border/40 last:border-b-0 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const lines = [
    "$ whoami",
    "> fiza noor — ai undergraduate, uet lahore",
    "$ cat ~/.focus",
    "> machine learning · full-stack · open source",
    "$ ./load_portfolio --mode=pixel",
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
          <p className="pixel text-[10px] text-accent">// PORTFOLIO_v1.0 — LAHORE, PK</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl leading-tight">
            <span className="text-primary text-glow">FIZA</span>{" "}
            <span className="text-foreground">NOOR</span>
          </h1>
          <p className="pixel text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
            ARTIFICIAL INTELLIGENCE UNDERGRADUATE.
            <br />
            BUILDING NEURAL NETWORKS, WEB PLATFORMS, AND DIGITAL SYSTEMS.
          </p>

          <div className="pixel-border bg-card p-4 sm:p-5 font-mono text-base sm:text-lg leading-relaxed">
            {typed.map((l, i) => (
              <div
                key={i}
                className={l.startsWith("$") ? "text-primary" : "text-foreground/85"}
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
              GET IN TOUCH
            </a>
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <div className="pixel-border-thick bg-card p-4 float-y">
            <PixelAvatar size={240} />
            <div className="mt-3 text-center pixel text-[9px] text-muted-foreground">
              UET LAHORE // AI '29
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
      <span className="pixel text-[10px] text-muted-foreground hidden sm:block">[READY]</span>
    </div>
  );
}

function About() {
  const stats = [
    { k: "PROGRAM", v: "B.Sc. AI" },
    { k: "SEMESTER", v: "03 / 08" },
    { k: "UNIVERSITY", v: "UET" },
    { k: "LOCATION", v: "LAHORE" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader tag="ABOUT.txt" title="> profile_summary" />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-lg leading-relaxed">
          <p>
            I'm a motivated second-year{" "}
            <span className="text-primary">Artificial Intelligence</span> student at the
            University of Engineering and Technology, Lahore, with hands-on experience in
            Python, C++, and full-stack web development.
          </p>
          <p>
            My focus is on building practical, AI-driven solutions while continuously expanding
            my skill set through real-world projects, professional certifications, and
            open-source contributions. I enjoy working across the stack — from training neural
            networks and designing digital circuits to shipping responsive web applications.
          </p>
          <p>
            Current interests:{" "}
            <span className="text-accent">machine learning, LLM agents, full-stack
            engineering,</span> and contributing to open-source projects.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 content-start">
          {stats.map((s) => (
            <div key={s.k} className="pixel-border bg-card p-4 text-center">
              <div className="pixel text-[9px] text-muted-foreground">{s.k}</div>
              <div className="pixel text-xs sm:text-sm text-primary mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader tag="EDUCATION.log" title="> academic_record" />
      <div className="pixel-border bg-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg text-primary">
              UNIVERSITY OF ENGINEERING AND TECHNOLOGY (UET), LAHORE
            </h3>
            <p className="mt-2 text-lg">
              Bachelor of Science in Artificial Intelligence
            </p>
            <p className="pixel text-[10px] text-muted-foreground mt-2">
              CURRENTLY IN 3RD SEMESTER
            </p>
          </div>
          <span className="pixel text-[10px] px-3 py-2 bg-accent text-accent-foreground">
            2025 — 2029
          </span>
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
            className="group pixel-border bg-card p-5 transition-transform hover:-translate-y-1 flex flex-col"
          >
            <header className="flex items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg text-primary">{p.title}</h3>
              <span className="pixel text-[9px] px-2 py-1 bg-accent text-accent-foreground whitespace-nowrap">
                {p.tag}
              </span>
            </header>
            <p className="mt-3 text-lg leading-relaxed text-foreground/90 flex-1">{p.desc}</p>
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
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pixel text-[10px] text-muted-foreground group-hover:text-primary transition-colors"
            >
              ▶ {p.linkLabel} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader tag="SKILLS.cfg" title="> technical_loadout" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} className="pixel-border bg-card p-5">
            <h3 className="pixel text-[10px] text-accent mb-4">/ {g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="pixel text-[9px] px-2 py-1 bg-secondary text-secondary-foreground"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader tag="EXPERIENCE.log" title="> work_history" />
      <div className="pixel-border bg-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg text-primary">
              FREELANCE CONTENT WRITER
            </h3>
            <p className="pixel text-[10px] text-muted-foreground mt-2">
              SELF-EMPLOYED · REMOTE
            </p>
          </div>
          <span className="pixel text-[10px] px-3 py-2 bg-accent text-accent-foreground">
            2024 — PRESENT
          </span>
        </div>
        <ul className="mt-5 space-y-3 text-lg leading-relaxed">
          <li className="flex gap-3">
            <span className="text-primary pixel text-xs mt-1">▸</span>
            <span>
              Wrote engaging blog posts and articles across diverse topics for a range of
              international clients.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary pixel text-xs mt-1">▸</span>
            <span>
              Developed strong research, storytelling, and audience-engagement skills tailored
              to client briefs and brand voice.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Certs() {
  return (
    <section id="certs" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader tag="CERTS.dat" title="> verified_credentials" />
      <div className="grid gap-4 md:grid-cols-3">
        {CERTS.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border bg-card p-5 hover:bg-secondary transition-colors block"
          >
            <div className="pixel text-[9px] text-accent">★ CERTIFIED</div>
            <h3 className="mt-3 text-base text-primary">{c.name}</h3>
            <p className="pixel text-[10px] text-muted-foreground mt-3">
              ISSUED BY {c.org.toUpperCase()}
            </p>
            <p className="pixel text-[9px] text-muted-foreground mt-3">▶ VERIFY →</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "EMAIL", value: "fizanoor2005@gmail.com", href: "mailto:fizanoor2005@gmail.com" },
    { label: "PHONE", value: "+92 329 4236683", href: "tel:+923294236683" },
    { label: "GITHUB", value: "github.com/fzanur", href: "https://github.com/fzanur" },
    { label: "LINKEDIN", value: "linkedin.com/in/fiza-noor", href: "https://linkedin.com/in/fiza-noor-70b797323" },
    { label: "GOOGLE DEV", value: "me.developers.google.com/fzanur", href: "https://me.developers.google.com/u/fzanur" },
    { label: "LOCATION", value: "Lahore, Pakistan", href: "#" },
  ];
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeader tag="CONTACT.sh" title="> open_channel" />
      <div className="pixel-border-thick bg-card p-6 sm:p-8">
        <p className="text-lg leading-relaxed">
          I'm open to internships, collaborations on machine learning and full-stack projects,
          and opportunities to contribute to open source. Reach out through any of the channels
          below — I'd be happy to connect.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="pixel-border bg-background px-4 py-3 hover:bg-secondary transition-colors"
            >
              <div className="pixel text-[9px] text-accent">/ {l.label}</div>
              <div className="pixel text-[10px] mt-2 text-foreground break-all">{l.value}</div>
            </a>
          ))}
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
          © 2026 FIZA NOOR — ALL RIGHTS RESERVED
        </p>
        <p className="pixel text-[9px] text-muted-foreground">
          BUILT WITH REACT · TAILWIND · PIXEL LOVE
        </p>
      </div>
    </footer>
  );
}
