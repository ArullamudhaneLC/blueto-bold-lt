import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { roles, seekerSteps } from '../../content/fliproles';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const shopPoints = [
  'Free to list — no subscription, no fee',
  'You read every application and choose who comes',
  'Set a price if you like — we pay you after the tryout',
  'Every shop reviewed by hand, host agreement in writing',
  'Visitors spread the word — your shop gets talked about',
];

// Home-page FlipRoles story: role tiles, then the two sides of the counter.
const FlipRolesSpotlight: React.FC = () => (
  <>
    {/* What would you try? */}
    <section id="roles" className="py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="heading-lg max-w-2xl">
            What would <span className="text-accent">you</span> try for a day?
          </h2>
          <p className="hand text-2xl text-ink-soft">pick one. or all of them →</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {roles.map(({ role, note, icon: Icon, tone, accent }, i) => (
            <Reveal key={role} delay={i * 70}>
              <div
                className={`${tone} group relative flex h-full min-h-[11rem] flex-col justify-between rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-20px_rgba(28,25,23,0.35)] sm:min-h-[13rem] sm:p-8 ${
                  i % 2 ? 'hover:rotate-1' : 'hover:-rotate-1'
                }`}
              >
                <Icon
                  className={`h-9 w-9 transition duration-500 group-hover:-rotate-6 group-hover:scale-110 sm:h-11 sm:w-11 ${accent}`}
                  strokeWidth={1.75}
                />
                <div>
                  <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">{role}</div>
                  <div className={`hand mt-1 text-xl leading-tight sm:text-2xl ${accent}`}>
                    {note}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Two sides of the counter */}
    <section id="fliproles" className="pb-20 lg:pb-28">
      <div className="container-page">
        <SectionHeading eyebrow="How FlipRoles works" title="Two sides of the counter." />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Seekers */}
          <Reveal>
            <div className="flex h-full flex-col rounded-[2rem] border border-line bg-white p-8 sm:p-10">
              <p className="hand text-2xl text-accent">if you’re curious…</p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight">Try it</h3>
              <ol className="mt-8 flex-1 space-y-6">
                {seekerSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 font-extrabold text-white">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-bold">{s.title}</span>
                      <span className="block text-ink-soft">{s.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <a href="#try" className="btn-primary mt-10 self-start">
                Tell me when slots open <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* Shops */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-[2rem] bg-ink p-8 text-white sm:p-10">
              <p className="hand text-2xl text-accent-soft">if you run a shop…</p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight">Host it</h3>
              <ul className="mt-8 flex-1 space-y-5">
                {shopPoints.map((p) => (
                  <li key={p} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10">
                      <Check className="h-4 w-4 text-brand-400" />
                    </span>
                    <span className="pt-1.5 text-white/85">{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/fliproles"
                className="mt-10 inline-flex items-center gap-2 self-start rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-brand-100"
              >
                FlipRoles for shops <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default FlipRolesSpotlight;
