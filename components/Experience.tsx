import SectionHead from "./SectionHead";
import { experience, profile } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHead
        index="02"
        label="Experience"
        title={
          <>
            {profile.years} years, <span className="grad-text">one trajectory</span>.
          </>
        }
      />

      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className={`tl-item reveal${job.current ? " is-current" : ""}`}>
            <span className="tl-dot" aria-hidden />
            <div className="card spot tl-card">
              <div className="tl-top">
                <p className="mono tl-period">
                  {job.current && <span className="pulse" />}
                  {job.period}
                </p>
                {job.current && <span className="badge">Current</span>}
              </div>
              <h3 className="tl-company">{job.company}</h3>
              <p className="tl-role">{job.role}</p>
              <p className="muted">{job.summary}</p>
              <ul className="tags">
                {job.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
