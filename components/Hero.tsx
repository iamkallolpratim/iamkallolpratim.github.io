import { profile, projects } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero-copy">
        <h1 className="hero-title reveal">
          Hi, I&apos;m {profile.firstName}.
          <br />
          <span className="grad-text">I build what&apos;s next.</span>
        </h1>

        <p className="hero-sub reveal">{profile.tagline}</p>

        <div className="hero-cta reveal">
          <a href="#projects" className="btn btn-primary">
            Explore open source <span aria-hidden>→</span>
          </a>
          <a href="https://github.com/iamkallolpratim" className="btn btn-ghost" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <dl className="hero-stats reveal">
          <div>
            <dt>Years shipping</dt>
            <dd>{profile.years}+</dd>
          </div>
          <div>
            <dt>Open-source builds</dt>
            <dd>{String(projects.length).padStart(2, "0")}</dd>
          </div>
          <div>
            <dt>Now</dt>
            <dd className="dd-text">{profile.company}</dd>
          </div>
        </dl>
      </div>

      <div className="hero-visual reveal" aria-hidden>
        <div className="orbit orbit-1" />
        <div className="orbit orbit-2" />
        <div className="orbit orbit-3" />
        <div className="avatar-ring">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profile.avatar} alt="" className="avatar" width={320} height={320} />
        </div>
        <div className="float-tag ft-1 glass">
          <span className="mono">{"// role"}</span>
          {profile.role}
        </div>
        <div className="float-tag ft-2 glass">
          <span className="mono">{"// focus"}</span>
          AI systems · Architecture
        </div>
        <div className="float-tag ft-3 glass">
          <span className="mono">{"// base"}</span>
          {profile.location}
        </div>
      </div>
    </section>
  );
}
