import SectionHead from "./SectionHead";
import { profile, socials } from "@/lib/data";
import { ArrowUpRight } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHead a="Let's work" b="Together" />

      <p className="hero-sub reveal">
        Always up for conversations about AI systems, architecture, open source — or a good game of chess.
      </p>

      <ul className="contact-links reveal">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noreferrer" className="row contact-link">
              <span className="row-body">
                <span className="label">{s.label}</span>
                <span className="row-title">{s.handle}</span>
              </span>
              <span className="row-arrow">
                <ArrowUpRight />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js</span>
      </footer>
    </section>
  );
}
