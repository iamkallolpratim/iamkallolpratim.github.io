import SectionHead from "./SectionHead";
import { experience, profile } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHead a={`${profile.years} Years of`} b="Experience" />

      <ul className="rows">
        {experience.map((job) => (
          <li key={job.company} className="row exp reveal">
            <div className="row-body">
              <span className="row-title">
                {job.company}
                {job.current && <span className="chip chip-active">Current</span>}
              </span>
              <span className="row-kicker">{job.role}</span>
              <span className="row-text">{job.summary}</span>
              <span className="chips">
                {job.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </span>
            </div>
            <span className="exp-period">{job.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
