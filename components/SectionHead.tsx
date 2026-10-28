export default function SectionHead({ a, b }: { a: string; b: string }) {
  return (
    <h2 className="display display-sm reveal">
      <span className="display-a">{a}</span>
      <span className="display-b">{b}</span>
    </h2>
  );
}
