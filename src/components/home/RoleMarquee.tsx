import React from 'react';
import { marqueeRoles } from '../../content/fliproles';

// Terracotta ticker of roles, as on the posters. Duplicated once so the loop is seamless.
const RoleMarquee: React.FC = () => (
  <div
    className="-rotate-1 overflow-hidden bg-brand-600 py-4 text-white"
    aria-label="Roles you can try"
  >
    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
          {marqueeRoles.map((role) => (
            <li
              key={role}
              className="flex items-center text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              <span className="px-6">{role}</span>
              <span className="text-brand-300">✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default RoleMarquee;
