import React from 'react';
import { Clock, Mail, Phone } from 'lucide-react';
import EnquiryForm, { type Field } from '../ui/EnquiryForm';
import { company } from '../../config/company';
import Reveal from '../ui/Reveal';

const fields: Field[] = [
  { name: 'name', label: 'Your name', required: true, half: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, half: true },
  { name: 'org', label: 'Business or organisation', half: true },
  {
    name: 'topic',
    label: 'About',
    type: 'select',
    options: ['FlipRoles', 'BluEduVerse', 'Custom software', 'Something else'],
    half: true,
  },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
];

const Contact: React.FC = () => (
  <section id="contact" className="py-14 sm:py-20 lg:py-28">
    <div className="container-page grid gap-10 sm:gap-14 lg:grid-cols-[1fr_1.3fr]">
      <Reveal>
        <span className="eyebrow">Contact</span>
        <h2 className="heading-lg mt-4">Talk to a person.</h2>
        <p className="mt-6 max-w-md text-base leading-relaxed sm:text-lg text-ink-soft">
          Messages reach the team directly — not a ticketing system. We aim to reply the same day.
        </p>

        <ul className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          <li>
            <a href={`tel:${company.phoneTel}`} className="group flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sand text-ink">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-ink-soft">Call</span>
                <span className="font-semibold group-hover:text-brand-600">
                  {company.phoneDisplay}
                </span>
              </span>
            </a>
          </li>
          <li>
            <a href={`mailto:${company.email}`} className="group flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sand text-ink">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-ink-soft">Email</span>
                <span className="font-semibold group-hover:text-brand-600">{company.email}</span>
              </span>
            </a>
          </li>
          <li className="flex items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-sand text-ink">
              <Clock className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm text-ink-soft">Hours</span>
              <span className="font-semibold">{company.hours}</span>
            </span>
          </li>
        </ul>
      </Reveal>

      <Reveal delay={120} className="rounded-3xl border border-line bg-white p-5 sm:p-9">
        <EnquiryForm
          fields={fields}
          subject="Enquiry from the Blueto Tech website"
          submitLabel="Send enquiry"
        />
      </Reveal>
    </div>
  </section>
);

export default Contact;
