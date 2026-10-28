const words = [
  "Generative AI",
  "Software Architecture",
  "RAG Pipelines",
  "AI Governance",
  "Agents",
  "Voice AI",
  "Full-Stack",
  "Team Leadership",
  "Open Source",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i} className="marquee-item">
            {w}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
