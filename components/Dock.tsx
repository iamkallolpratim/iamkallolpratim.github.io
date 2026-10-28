import { BriefcaseIcon, EditIcon, FolderIcon, HomeIcon, WrenchIcon } from "./Icons";

const items = [
  { href: "#top", label: "Home", Icon: HomeIcon },
  { href: "#projects", label: "Projects", Icon: FolderIcon },
  { href: "#experience", label: "Experience", Icon: BriefcaseIcon },
  { href: "#tools", label: "Tools", Icon: WrenchIcon },
  { href: "#contact", label: "Contact", Icon: EditIcon },
];

export default function Dock() {
  return (
    <nav className="dock" aria-label="Sections">
      {items.map(({ href, label, Icon }) => (
        <a key={href} href={href} className="dock-item" aria-label={label}>
          <Icon />
          <span className="dock-tip">{label}</span>
        </a>
      ))}
    </nav>
  );
}
