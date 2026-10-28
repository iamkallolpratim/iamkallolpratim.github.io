import { profile, socials } from "@/lib/data";
import { withBrand } from "./Brand";
import { FlameIcon, GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./Icons";

const socialIcons: Record<string, (p: { size?: number }) => React.ReactElement> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  "X / Twitter": TwitterIcon,
  Instagram: InstagramIcon,
};

export default function ProfileCard() {
  return (
    <aside className="profile reveal">
      <svg className="profile-arc arc-top" viewBox="0 0 200 120" aria-hidden>
        <path d="M2 2 C 20 90, 150 110, 196 0" />
      </svg>
      <svg className="profile-arc arc-bottom" viewBox="0 0 140 90" aria-hidden>
        <path d="M2 88 C 60 90, 110 60, 138 2" />
      </svg>

      <div className="profile-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={profile.avatar} alt={profile.name} width={240} height={284} />
      </div>

      <h2 className="profile-name">{profile.name}</h2>

      <span className="profile-badge" aria-hidden>
        <FlameIcon size={18} />
      </span>

      <p className="profile-bio">{withBrand(profile.bio)}</p>

      <ul className="profile-socials">
        {socials.map((s) => {
          const Icon = socialIcons[s.label];
          return (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <Icon size={22} />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
