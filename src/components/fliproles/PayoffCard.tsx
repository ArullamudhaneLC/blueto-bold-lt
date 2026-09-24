import { Heart, Share2 } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { payoffStep } from '../../content/fliproles';

// Illustrated megaphone. Sound waves ripple out of the mouth on the same beat as the shout.
const Megaphone = () => (
  <svg viewBox="0 0 220 170" className="h-full w-full overflow-visible" aria-hidden>
    <g className="origin-[40px_95px] animate-shout">
      {/* handle */}
      <path
        d="M62 108 L70 138 a6 6 0 0 0 7 4 l8-2 a6 6 0 0 0 4-7 L83 112"
        fill="rgb(255 255 255 / 0.18)"
        stroke="white"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* cone */}
      <path
        d="M34 78 h22 L122 42 a4 4 0 0 1 6 3.5 v99 a4 4 0 0 1-6 3.5 L56 112 H34 a8 8 0 0 1-8-8 V86 a8 8 0 0 1 8-8 Z"
        fill="rgb(255 255 255 / 0.22)"
        stroke="white"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <ellipse cx="128" cy="95" rx="9" ry="50" fill="white" opacity="0.95" />
      {/* sound waves */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${146 + i * 18} ${70 - i * 14} q${14 + i * 5} ${25 + i * 14} 0 ${50 + i * 28}`}
          fill="none"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          className="origin-[128px_95px] animate-wave"
          style={{ animationDelay: `${1.6 + i * 0.15}s` }}
        />
      ))}
    </g>
  </svg>
);

// Word-of-mouth bubbles — illustrative, not claims.
const bubbles = [
  {
    content: <span className="hand text-xl">“You have to try this place!”</span>,
    className: 'left-0 top-2 sm:-left-6',
    r: '-5deg',
    delay: '0s',
  },
  {
    content: (
      <span className="inline-flex items-center gap-1.5 text-sm font-bold">
        <Heart className="h-4 w-4 fill-brand-500 text-brand-500" /> Shared
      </span>
    ),
    className: 'bottom-12 left-0 sm:bottom-6',
    r: '4deg',
    delay: '0.8s',
  },
  {
    content: (
      <span className="inline-flex items-center gap-1.5 text-sm font-bold">
        <Share2 className="h-4 w-4 text-brand-600" /> #nammachennai
      </span>
    ),
    className: 'bottom-0 right-0 sm:bottom-auto sm:top-8',
    r: '6deg',
    delay: '1.6s',
  },
];

// Step 5 of "How it works": the payoff for hosting, styled as an announcement.
const PayoffCard = () => (
  <Reveal as="li" delay={320} className="sm:col-span-2 lg:col-span-4">
    <div className="relative isolate grid items-center gap-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-900 p-8 text-white shadow-[0_30px_60px_-30px_rgb(var(--brand-600)/0.8)] sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:p-12">
      {/* Glow and dot texture */}
      <div
        className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-white/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 left-1/4 -z-10 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.15] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]"
        aria-hidden
      />

      <div>
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-extrabold text-brand-700">
            5
          </span>
          <span className="hand text-2xl text-white/90">and the best bit…</span>
        </div>
        <h3 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {payoffStep.title}
        </h3>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">{payoffStep.body}</p>
      </div>

      <div className="relative mx-auto h-56 w-full max-w-sm sm:h-64">
        <div className="absolute inset-x-8 inset-y-6">
          <Megaphone />
        </div>
        {bubbles.map((b) => (
          <div
            key={b.delay}
            className={`absolute animate-float rounded-2xl bg-white px-4 py-2 text-ink shadow-xl ${b.className}`}
            style={{ ['--r' as string]: b.r, animationDelay: b.delay }}
          >
            {b.content}
          </div>
        ))}
      </div>
    </div>
  </Reveal>
);

export default PayoffCard;
