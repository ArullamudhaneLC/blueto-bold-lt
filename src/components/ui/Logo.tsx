import React from 'react';
import { Link } from 'react-router-dom';

// Official Split B lockup from marketing/logo — the brand rules forbid redrawing or re-spacing it.
// The artwork carries its own clear space, so the negative margin aligns it with the page edge.
export const BluetoLogo: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <Link to="/" className="-ml-[7px] inline-flex shrink-0" aria-label="Blueto Tech home">
    <img
      src={light ? '/brand/logo-dark.svg' : '/brand/logo.svg'}
      alt="Blueto Tech"
      width={250}
      height={56}
      className="h-10 w-auto sm:h-11 lg:h-12"
    />
  </Link>
);

// Artwork from tryout/marketing/logo/mark.svg — keep the path in sync with the master.
export const FlipRolesIcon: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 100 100" className={className} role="img" aria-label="FlipRoles">
    <rect width="100" height="100" rx="24" fill="#b4491f" />
    <path d="M31,26 H69 V40 H47 V47 H66 V61 H47 V74 H31 Z" fill="#ffffff" />
  </svg>
);

export const FlipRolesMark: React.FC<{ className?: string; light?: boolean }> = ({
  className = '',
  light = false,
}) => (
  <span className={`inline-flex items-center gap-2 ${className}`}>
    <FlipRolesIcon className="h-8 w-8" />
    <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
      FlipRoles
    </span>
  </span>
);
