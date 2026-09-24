import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { BluetoLogo } from '../ui/Logo';
import SocialLinks, { hasFlipRolesSocial } from '../ui/SocialLinks';
import { company, fliproles } from '../../config/company';

type FooterLink = { name: string; to?: string; href?: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Products',
    links: [
      { name: 'FlipRoles', to: '/fliproles' },
      { name: 'BluEduVerse', to: '/products/school-management' },
      { name: `${fliproles.appDomain} ↗`, href: fliproles.appUrl },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', to: '/#about' },
      { name: 'Contact', to: '/#contact' },
      { name: 'List your shop', to: '/fliproles#onboard' },
    ],
  },
];

const Footer: React.FC = () => {
  const registration = [
    company.cin && `CIN ${company.cin}`,
    company.gstin && `GSTIN ${company.gstin}`,
    company.dpiit && `DPIIT ${company.dpiit}`,
  ].filter(Boolean);

  return (
    <footer className="bg-ink text-ink-faint">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <BluetoLogo light />
          <p className="mt-5 text-sm leading-relaxed">{company.tagline}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" /> {company.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${company.phoneTel}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" /> {company.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                <span className="block text-xs uppercase tracking-wider text-ink-soft">
                  Registered office
                </span>
                {company.registeredAddress.join(', ')}
              </span>
            </li>
          </ul>
          {hasFlipRolesSocial && (
            <div className="mt-8">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Follow FlipRoles
              </div>
              <SocialLinks light />
            </div>
          )}
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {col.links.map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.to ?? '/'} className="hover:text-white">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div>
              © {new Date().getFullYear()} {company.legalName}
              {registration.length > 0 && <span> · {registration.join(' · ')}</span>}
            </div>
            <div>FlipRoles™ is a trademark of {company.legalName}.</div>
          </div>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
