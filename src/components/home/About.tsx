import React from 'react';
import { Building2, MapPin, Users } from 'lucide-react';
import { company, fliproles } from '../../config/company';
import Reveal from '../ui/Reveal';

const principles = [
  {
    icon: Users,
    title: 'We meet the people we build for',
    body: `Every FlipRoles shop is reviewed by hand, and we grow only as fast as we can keep meeting the people hosting.`,
  },
  {
    icon: Building2,
    title: 'A real company behind every product',
    body: `${company.legalName} is the contracting party, the one that pays shops, and the one you can hold to account.`,
  },
  {
    icon: MapPin,
    title: 'Local first',
    body: `Registered in ${company.state}, starting in ${fliproles.city}. We would rather do one city properly than ten badly.`,
  },
];

const About: React.FC = () => {
  const facts = [
    { label: 'Registered name', value: company.legalName },
    { label: 'Company type', value: 'Private limited company' },
    { label: 'CIN', value: company.cin },
    { label: 'GSTIN', value: company.gstin },
    { label: 'Startup India (DPIIT)', value: company.dpiit },
    { label: 'Founded', value: company.founded },
    { label: 'Registered office', value: company.registeredAddress.join(', ') },
  ].filter((f) => f.value);

  return (
    <section id="about" className="border-y border-line bg-sand/60 py-20 lg:py-28">
      <div className="container-page grid gap-16 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <span className="eyebrow">About</span>
          <h2 className="heading-lg mt-4">Small, early, and deliberately so.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {company.brand} is a software company from {company.state}. We build products for local
            businesses and the people around them — and FlipRoles is where our attention is right
            now.
          </p>

          {company.founder.name && (
            <figure className="mt-10 max-w-xl border-l-2 border-brand-600 pl-6">
              {company.founder.note && (
                <blockquote className="text-xl font-semibold leading-relaxed tracking-tight text-ink">
                  “{company.founder.note}”
                </blockquote>
              )}
              <figcaption className="mt-5 flex items-center gap-4">
                {company.founder.photo && (
                  <img
                    src={company.founder.photo}
                    alt={company.founder.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <span>
                  <span className="block font-semibold">{company.founder.name}</span>
                  <span className="block text-sm text-ink-soft">
                    {company.founder.role}, {company.legalName}
                  </span>
                </span>
              </figcaption>
            </figure>
          )}

          <div className="mt-12 space-y-8">
            {principles.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="self-start lg:sticky lg:top-28">
          <aside className="rounded-3xl border border-line bg-white p-7 sm:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">
              Company details
            </h3>
            <dl className="mt-6 divide-y divide-line">
              {facts.map((f) => (
                <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="text-sm text-ink-soft">{f.label}</dt>
                  <dd className="text-sm font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-ink-mute">
              These are public records — anyone can check them on the Ministry of Corporate Affairs
              and GST portals.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
