import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import EnquiryForm, { type Field } from '../ui/EnquiryForm';
import { roles } from '../../content/fliproles';
import { fliproles } from '../../config/company';
import Reveal from '../ui/Reveal';

const fields: Field[] = [
  { name: 'name', label: 'Your name', required: true, half: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, half: true },
  {
    name: 'role',
    label: 'What would you try first?',
    type: 'select',
    options: [...roles.map((r) => r.role), 'Something else'],
    half: true,
  },
  { name: 'area', label: `Area in ${fliproles.city}`, placeholder: 'e.g. Velachery', half: true },
];

// Seekers can't book yet (the app isn't live), so collect interest honestly.
const SeekerSignup: React.FC = () => (
  <section
    id="try"

    className="relative overflow-hidden bg-brand-600 py-20 text-white lg:py-28"
  >
    <div
      className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-500 blur-3xl"
      aria-hidden
    />
    <div className="container-page relative grid items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_1.2fr]">
      <Reveal>
        <p className="hand text-2xl sm:text-3xl text-brand-100">psst — slots are opening soon</p>
        <h2 className="heading-lg mt-3">Be first in line.</h2>
        <p className="mt-6 max-w-md text-base leading-relaxed sm:text-lg text-brand-50">
          We’re signing up the first shops in {fliproles.city} right now. Leave your number and
          we’ll tell you the moment there’s a slot you’d love.
        </p>
        <a
          href={fliproles.appUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-bold text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
        >
          Or see what’s open on {fliproles.appDomain} <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>
      <Reveal delay={120} className="rounded-[2rem] bg-white p-6 text-ink shadow-2xl sm:p-9">
        <EnquiryForm
          fields={fields}
          subject="FlipRoles — tell me when slots open"
          submitLabel="Keep me posted"
          successMessage="You’re on the list! We’ll call you when a slot opens near you."
        />
      </Reveal>
    </div>
  </section>
);

export default SeekerSignup;
