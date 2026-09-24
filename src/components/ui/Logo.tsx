import React from 'react';
import { Link } from 'react-router-dom';

export const BluetoLogo: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Blueto Tech home">
    <span
      className={`relative grid h-9 w-9 place-items-center rounded-xl font-display text-xl ${
        light ? 'bg-paper text-ink' : 'bg-ink text-paper'
      }`}
    >
      B
      <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-brand-600" />
    </span>
    <span className="leading-none">
      <span
        className={`block font-display text-lg font-medium ${light ? 'text-paper' : 'text-ink'}`}
      >
        Blueto Tech
      </span>
      <span
        className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] ${
          light ? 'text-ink-faint' : 'text-ink-soft'
        }`}
      >
        Pvt Ltd
      </span>
    </span>
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
