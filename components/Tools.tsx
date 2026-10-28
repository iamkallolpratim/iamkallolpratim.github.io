import SectionHead from "./SectionHead";
import { skills } from "@/lib/data";

export default function Tools() {
  return (
    <section id="tools" className="section">
      <SectionHead a="Tools &" b="Technologies" />

      <div className="tool-groups">
        {skills.map((g, gi) => (
          <div key={g.group} className="reveal">
            <p className="label">{g.group}</p>
            <ul className="tools">
              {g.items.map((s) => (
                <li key={s} className="tool">
                  <span className={`tool-mark tone-${gi % 2 ? "lime" : "vermilion"}`} aria-hidden>
                    {s.replace(/[^A-Za-z0-9]/g, "").slice(0, 2)}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
