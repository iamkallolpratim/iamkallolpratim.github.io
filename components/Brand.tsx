import { Fragment } from "react";

// CSS-only Thoughtworks wordmark: a pink slash followed by lowercase bold text.
export function Thoughtworks() {
  return (
    <span className="tw">
      <span className="tw-slash" aria-hidden />
      <span>thoughtworks</span>
    </span>
  );
}

// Renders text with every "ThoughtWorks" swapped for the wordmark.
export function withBrand(text: string) {
  const parts = text.split(/thoughtworks/i);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <Thoughtworks />}
    </Fragment>
  ));
}
