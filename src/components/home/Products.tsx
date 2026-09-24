import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { FlipRolesIcon } from '../ui/Logo';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const products = [
  {
    name: 'FlipRoles',
    kind: 'Marketplace',
    status: 'Onboarding shops in Chennai',
    description:
      'Short, supervised tryouts at small shops. Visitors discover a kind of work; shops meet curious new people.',
    to: '/fliproles',
    icon: <FlipRolesIcon className="h-11 w-11" />,
    featured: true,
  },
  {
    name: 'BluEduVerse',
    kind: 'School management',
    status: 'Available for schools',
    description:
      'A school management system with an AI digital diary — grades, attendance, health and parent–teacher meetings, with an AI coach for every student.',
    to: '/products/school-management',
    icon: (
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-sand text-ink">
        <GraduationCap className="h-5 w-5" />
      </span>
    ),
  },
];

const Products: React.FC = () => (
  <section id="products" className="py-14 sm:py-20 lg:py-28">
    <div className="container-page">
      <SectionHeading eyebrow="Products" title="Software we build and run ourselves." />

      <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <Link
              to={p.to}
              className={`group flex h-full flex-col rounded-3xl border p-6 sm:p-8 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(28,25,23,0.3)] ${
                p.featured ? 'border-brand-200 bg-brand-50' : 'border-line bg-white'
              }`}
            >
              <div className="flex items-start justify-between">
                {p.icon}
                <ArrowUpRight className="h-5 w-5 text-ink-faint transition group-hover:text-ink" />
              </div>
              <div className="mt-10 text-xs font-semibold uppercase tracking-wider text-ink-mute">
                {p.kind}
              </div>
              <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.description}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-moss-600" />
                {p.status}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
