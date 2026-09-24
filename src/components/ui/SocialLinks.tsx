import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { fliproles } from '../../config/company';

const links = [
  { label: 'Instagram', href: fliproles.social.instagram, icon: Instagram },
  { label: 'LinkedIn', href: fliproles.social.linkedin, icon: Linkedin },
  { label: 'Facebook', href: fliproles.social.facebook, icon: Facebook },
].filter((l) => l.href);

export const hasFlipRolesSocial = links.length > 0;

// FlipRoles' official profiles. Renders nothing until at least one link is configured.
const SocialLinks: React.FC<{ light?: boolean }> = ({ light = false }) => {
  if (!hasFlipRolesSocial) return null;
  return (
    <div className="flex gap-2">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`FlipRoles on ${label}`}
          className={`grid h-10 w-10 place-items-center rounded-full border transition ${
            light
              ? 'border-white/15 text-ink-faint hover:border-white/40 hover:text-white'
              : 'border-line bg-white text-ink-soft hover:border-brand-300 hover:text-brand-600'
          }`}
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
