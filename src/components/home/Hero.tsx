import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles, Store } from 'lucide-react';
import HeroPhoto from '../fliproles/HeroPhoto';
import { FlipRolesIcon } from '../ui/Logo';
import { company, fliproles } from '../../config/company';

// Staggered page-load entrance for hero elements.
const enter = (ms: number) => ({ className: 'enter', style: { animationDelay: `${ms}ms` } });

const Hero: React.FC = () => (
  <section
    id="home"

    className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24"
  >
    {/* Soft brand glow */}
    <div
      className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-brand-100 blur-3xl"
      aria-hidden
    />

    <div className="container-page grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <div {...enter(0)}>
          <Link
            to="/fliproles"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white py-1 pl-1 pr-4 text-sm font-semibold shadow-sm transition hover:border-brand-300"
          >
            <FlipRolesIcon className="h-7 w-7" />
            FlipRoles™
            <span className="font-normal text-ink-mute">by {company.brand}</span>
            <ArrowRight className="h-3.5 w-3.5 text-ink-mute transition group-hover:translate-x-0.5" />
          </Link>
          <p className="hand mt-5 text-xl text-accent sm:mt-6 sm:text-3xl">
            made in {fliproles.city}, for the curious ✎
          </p>
        </div>

        <h1 className="heading-xl enter mt-4" style={{ animationDelay: '90ms' }}>
          Try a job
          <br />
          <span className="squiggle text-accent">for a day.</span>
        </h1>

        <p
          className="enter mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-8 sm:text-xl"
          style={{ animationDelay: '180ms' }}
        >
          Barista. Baker. Potter. Florist. Step behind the counter of a real {fliproles.city} shop
          for about 90 minutes.{' '}
          <strong className="text-ink">No CV. No experience. Just curiosity.</strong>
        </p>

        {/* Two doors: seekers and shops */}
        <div
          className="enter mt-7 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          style={{ animationDelay: '270ms' }}
        >
          <a
            href="#try"
            className="group flex items-center justify-between gap-4 rounded-2xl bg-brand-600 p-4 text-white sm:p-5 shadow-[0_14px_30px_-12px_rgb(var(--brand-600)/0.7)] transition duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-[0_22px_40px_-14px_rgb(var(--brand-600)/0.8)]"
          >
            <span className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 shrink-0 transition duration-500 group-hover:rotate-12 group-hover:scale-110" />
              <span>
                <span className="block text-sm text-brand-100">I’m curious</span>
                <span className="block text-base font-extrabold sm:text-lg">I want to try one</span>
              </span>
            </span>
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <Link
            to="/fliproles"
            className="group flex items-center justify-between gap-4 rounded-2xl border-2 border-ink bg-white p-4 transition sm:p-5 duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white"
          >
            <span className="flex items-center gap-3">
              <Store className="h-6 w-6 shrink-0" />
              <span>
                <span className="block text-sm text-ink-mute group-hover:text-ink-faint">
                  I own a shop
                </span>
                <span className="block text-base font-extrabold sm:text-lg">Host a tryout</span>
              </span>
            </span>
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>

        {/* First-screen trust signals — all verifiable */}
        <ul
          className="enter mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-soft sm:mt-8 sm:text-sm"
          style={{ animationDelay: '360ms' }}
        >
          <li className="inline-flex items-center gap-1.5">
            <BadgeCheck className="h-4 w-4 text-moss-600" />
            {company.legalName} · registered {company.founded}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-moss-600" />
            Every shop checked by hand
          </li>
        </ul>
      </div>

      <HeroPhoto
        alt="A café owner guides a smiling visitor as she pours her first latte"
        sticker="no CV needed!"
      />
    </div>
  </section>
);

export default Hero;
