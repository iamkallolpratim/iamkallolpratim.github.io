const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Open Source" },
  { href: "#skills", label: "Stack" },
];

export default function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav glass">
        <a href="#top" className="nav-logo" aria-label="Back to top">
          <span className="logo-mark">K</span>
          <span className="nav-name">kallol.dev</span>
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-sm btn-primary">
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
