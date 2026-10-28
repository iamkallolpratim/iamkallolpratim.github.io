import { profile, socials } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <div className="contact card reveal">
        <p className="eyebrow mono">
          <span>05</span> / Contact
        </p>
        <h2 className="contact-title">
          Let&apos;s build the <span className="grad-text">future</span>.
        </h2>
        <p className="muted contact-sub">
          Always up for conversations about AI systems, architecture, open source or a good game of chess.
        </p>
        <a href="https://www.linkedin.com/in/kallolpratim" className="btn btn-primary" target="_blank" rel="noreferrer">
          Say hello on LinkedIn <span aria-hidden>→</span>
        </a>

        <ul className="socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="social spot">
                <span className="social-label">{s.label}</span>
                <span className="mono muted">{s.handle}</span>
                <span className="social-arrow" aria-hidden>
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="footer mono">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js · Hosted on GitHub Pages</span>
      </footer>
    </section>
  );
}
