import SectionHead from "./SectionHead";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHead index="01" label="About" title={<>Engineering with <span className="grad-text">intent</span>.</>} />

      <div className="bento">
        <article className="card spot b-wide reveal">
          {profile.about.map((p) => (
            <p key={p} className="lead">
              {p}
            </p>
          ))}
        </article>

        <article className="card spot b-stat reveal">
          <span className="big-num grad-text">{profile.years}</span>
          <p className="muted">years designing, building and leading software teams</p>
        </article>

        <article className="card spot reveal">
          <p className="eyebrow mono">{"> whoami"}</p>
          <ul className="term">
            <li>💻 I love coding.</li>
            <li>🚀 I get high on GitHub.</li>
            <li>⚡ Terminal is my best friend.</li>
          </ul>
        </article>

        <article className="card spot b-wide2 reveal">
          <p className="eyebrow mono">{"> off_the_clock"}</p>
          <p className="muted">
            When I&apos;m not coding I usually travel, read, take pictures, cook, listen to music and play games. And I
            love chess — have a game?
          </p>
        </article>
      </div>
    </section>
  );
}
