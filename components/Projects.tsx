import SectionHead from "./SectionHead";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHead a="Open Source" b="Projects" />

      <ul className="rows">
        {projects.map((p) => (
          <li key={p.name} className="reveal">
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="row project"
              style={{ "--accent": p.accent } as React.CSSProperties}
            >
              <span className="project-thumb" aria-hidden>
                <span>{p.name}</span>
              </span>
              <span className="row-body">
                <span className="row-title">{p.name}</span>
                <span className="row-kicker">{p.headline}</span>
                <span className="row-text">{p.description}</span>
                <span className="chips">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </span>
              </span>
              <span className="row-arrow">
                <ArrowUpRight />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
