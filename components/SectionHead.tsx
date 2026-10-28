export default function SectionHead({ index, label, title }: { index: string; label: string; title: React.ReactNode }) {
  return (
    <div className="section-head reveal">
      <p className="eyebrow mono">
        <span>{index}</span> / {label}
      </p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
