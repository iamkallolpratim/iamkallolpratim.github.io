import SectionHead from "./SectionHead";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHead
        index="04"
        label="Stack"
        title={
          <>
            Tools of the <span className="grad-text">trade</span>.
          </>
        }
      />
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} className="card spot reveal">
            <p className="eyebrow mono">{g.group}</p>
            <ul className="pills">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
