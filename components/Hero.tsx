import { focus, profile, projects, skills } from "@/lib/data";
import { ArrowRight, LayersIcon, LayoutIcon } from "./Icons";

const toolCount = skills.reduce((n, g) => n + g.items.length, 0);

const stats = [
  { value: profile.years, label: ["Years of", "experience"] },
  { value: projects.length, label: ["Open-source", "projects"] },
  { value: toolCount, label: ["Technologies", "in my stack"] },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <h1 className="display reveal">
        <span className="display-a">{profile.headline[0]}</span>
        <span className="display-b">{profile.headline[1]}</span>
      </h1>

      <p className="hero-sub reveal">{profile.tagline}</p>

      <dl className="stats reveal">
        {stats.map((s) => (
          <div key={s.label.join(" ")}>
            <dd>+{String(s.value).padStart(2, "0")}</dd>
            <dt>
              {s.label[0]}
              <br />
              {s.label[1]}
            </dt>
          </div>
        ))}
      </dl>

      <div className="focus reveal">
        {focus.map((f, i) => (
          <a key={f.title} href={f.href} className={`focus-card focus-${f.tone}`}>
            {f.tone === "vermilion" ? <Squiggle /> : <ZigZag />}
            <span className="focus-icon">{i === 0 ? <LayersIcon size={34} /> : <LayoutIcon size={34} />}</span>
            <span className="focus-title">{f.title}</span>
            <span className="focus-arrow">
              <ArrowRight size={18} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Squiggle() {
  return (
    <svg className="focus-bg" viewBox="0 0 300 240" preserveAspectRatio="none" aria-hidden>
      <path d="M-10 210 C 80 170, 140 230, 190 150 S 160 20, 230 10 S 320 40, 310 -10" />
      <path d="M-10 120 C 60 90, 120 140, 170 90" />
    </svg>
  );
}

function ZigZag() {
  return (
    <svg className="focus-bg" viewBox="0 0 366 240" preserveAspectRatio="none" aria-hidden>
      <path d="M-10 160 L60 40 L80 240 L170 20 L200 220 L270 0 L300 200 L380 60" />
    </svg>
  );
}
