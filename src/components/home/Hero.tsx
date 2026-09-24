import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles, Store } from 'lucide-react';
import { company, fliproles } from '../../config/company';

// Staggered page-load entrance for hero elements.
const enter = (ms: number) => ({ className: 'enter', style: { animationDelay: `${ms}ms` } });

const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
    {/* Soft brand glow */}
    <div
      className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-brand-100 blur-3xl"
      aria-hidden
    />

    <div className="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <div {...enter(0)}>
          <p className="hand text-2xl text-accent sm:text-3xl">
            made in {fliproles.city}, for the curious ✎
          </p>
        </div>

        <h1 className="heading-xl enter mt-4" style={{ animationDelay: '90ms' }}>
          Try a job
          <br />
          <span className="squiggle text-accent">for a day.</span>
        </h1>

        <p
          className="enter mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          style={{ animationDelay: '180ms' }}
        >
          Barista. Baker. Potter. Florist. Step behind the counter of a real {fliproles.city} shop
          for about 90 minutes.{' '}
          <strong className="text-ink">No CV. No experience. Just curiosity.</strong>
        </p>

        {/* Two doors: seekers and shops */}
        <div
          className="enter mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          style={{ animationDelay: '270ms' }}
        >
          <a
            href="#try"
            className="group flex items-center justify-between gap-4 rounded-2xl bg-brand-600 p-5 text-white shadow-[0_14px_30px_-12px_rgb(var(--brand-600)/0.7)] transition duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-[0_22px_40px_-14px_rgb(var(--brand-600)/0.8)]"
          >
            <span className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 shrink-0 transition duration-500 group-hover:rotate-12 group-hover:scale-110" />
              <span>
                <span className="block text-sm text-brand-100">I’m curious</span>
                <span className="block text-lg font-extrabold">I want to try one</span>
              </span>
            </span>
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <Link
            to="/fliproles"
            className="group flex items-center justify-between gap-4 rounded-2xl border-2 border-ink bg-white p-5 transition duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white"
          >
            <span className="flex items-center gap-3">
              <Store className="h-6 w-6 shrink-0" />
              <span>
                <span className="block text-sm text-ink-mute group-hover:text-ink-faint">
                  I own a shop
                </span>
                <span className="block text-lg font-extrabold">Host a tryout</span>
              </span>
            </span>
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>

        {/* First-screen trust signals — all verifiable */}
        <ul
          className="enter mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft"
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

      {/* Photo with stickers */}
      <div className="enter relative mx-auto w-full max-w-lg" style={{ animationDelay: '200ms' }}>
        <div className="rotate-2 overflow-hidden rounded-[2rem] border-[6px] border-white shadow-[0_40px_80px_-40px_rgba(28,25,23,0.5)] transition duration-700 hover:rotate-0">
          <img
            src="/images/fliproles-cafe.jpg"
            alt="A café owner says “Try my job for one day!” and a visitor replies “Okay! I’ll do it!”"
            width={1600}
            height={1280}
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-[60%_center] sm:aspect-[5/5]"
          />
        </div>

        <div
          className="absolute -left-4 top-8 animate-float rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-10"
          style={{ ['--r' as string]: '-6deg' }}
        >
          <div className="text-3xl font-extrabold leading-none text-accent">90</div>
          <div className="text-xs font-bold uppercase tracking-wider text-ink-soft">minutes</div>
        </div>

        <div
          className="absolute -bottom-5 -right-2 animate-float rounded-full bg-ink px-5 py-3 text-white shadow-lg xl:-right-8"
          style={{ ['--r' as string]: '4deg', animationDelay: '1.2s' }}
        >
          <span className="hand text-2xl">no CV needed!</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
