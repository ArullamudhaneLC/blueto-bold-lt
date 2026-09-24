import { ArrowRight, ArrowUpRight, Check, ChevronDown, Mail, Phone } from 'lucide-react';
import PayoffCard from '../components/fliproles/PayoffCard';
import EnquiryForm, { type Field } from '../components/ui/EnquiryForm';
import HeroPhoto from '../components/fliproles/HeroPhoto';
import Marquee from '../components/ui/Marquee';
import { FlipRolesMark } from '../components/ui/Logo';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import SocialLinks, { hasFlipRolesSocial } from '../components/ui/SocialLinks';
import { company, fliproles } from '../config/company';
import { benefits, faqs, pricedTryout, rules, shopTypes, steps } from '../content/fliproles';
import { usePageMeta } from '../hooks/usePageMeta';

const onboardFields: Field[] = [
  { name: 'shop', label: 'Shop name', required: true, half: true },
  {
    name: 'type',
    label: 'Type of shop',
    type: 'select',
    required: true,
    options: [...shopTypes.map((s) => s.label), 'Other'],
    half: true,
  },
  {
    name: 'area',
    label: `Area in ${fliproles.city}`,
    placeholder: 'e.g. Adyar',
    required: true,
    half: true,
  },
  { name: 'owner', label: 'Your name', required: true, half: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, half: true },
  { name: 'instagram', label: 'Shop Instagram', placeholder: '@yourshop', half: true },
  {
    name: 'idea',
    label: 'What could a visitor try at your shop?',
    type: 'textarea',
    placeholder: 'e.g. Make a cappuccino, help open the shop, serve a customer…',
  },
];

const FlipRolesPage = () => {
  usePageMeta(
    'FlipRoles for shops',
    `Host a 90-minute tryout at your ${fliproles.city} shop. Free to list, you choose who comes.`,
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand-100 blur-3xl"
          aria-hidden
        />
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="enter">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <FlipRolesMark />
                <span className="text-sm text-ink-mute">a product of {company.legalName}</span>
              </div>
              <p className="hand mt-8 text-2xl text-accent sm:text-3xl">for shop owners ✎</p>
            </div>
            <h1 className="heading-xl enter mt-3" style={{ animationDelay: '90ms' }}>
              Let them try
              <br />
              <span className="squiggle text-accent">your</span> job.
            </h1>
            <div className="enter" style={{ animationDelay: '180ms' }}>
              <p className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">
                90 minutes. Free to list.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Curious people in {fliproles.city} want to know what it is like to be a barista, a
                baker, a florist. FlipRoles™ lets them find out — at your shop, with you. You choose
                who comes.
              </p>
            </div>
            <div
              className="enter mt-10 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: '270ms' }}
            >
              <a href="#onboard" className="btn-primary">
                List your shop <ArrowRight className="h-4 w-4" />
              </a>
              {fliproles.appUrl && (
                <a
                  href={fliproles.appUrl}
                  className="btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit {fliproles.appDomain} <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
          <HeroPhoto
            alt="A café owner guides a smiling visitor as she pours her first latte"
            sticker="free to list!"
          />
        </div>
      </section>

      {/* Shop types */}
      <Marquee items={shopTypes.map((s) => s.label)} label="Shops FlipRoles is made for" />

      {/* How it works */}
      <section id="how" className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps you control — and one that grows your business."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-20px_rgba(28,25,23,0.3)]">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-600 text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </Reveal>
            ))}
            <PayoffCard />
          </ol>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="For your shop" title="What you get from hosting." tone="dark" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
            {benefits.map(({ title, body, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 80} className="bg-ink p-8">
                <Icon className="h-6 w-6 text-accent-soft" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-faint">{body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6 grid gap-8 rounded-3xl bg-brand-600 p-8 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {pricedTryout.title}
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-brand-50">
              {pricedTryout.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Rules */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="Clear rules"
            title="Safe for you, fair for them."
            intro={`Every shop signs a short host agreement with ${company.legalName} before its slots go live. It is written to be read, not skipped.`}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {rules.map(({ title, body, icon: Icon }, i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="rounded-3xl border border-line bg-white p-7"
              >
                <Icon className="h-6 w-6 text-moss-600" />
                <h3 className="mt-5 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-sand/60 py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Questions" title="What shop owners ask us." />
          <Reveal
            delay={100}
            className="divide-y divide-line rounded-3xl border border-line bg-white"
          >
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 sm:p-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold transition hover:text-accent">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-ink-mute transition duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Onboard */}
      <section id="onboard" className="py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="List your shop"
              title="Tell us about your shop."
              intro="We will call you, visit if you like, and set up your first slot together. There is no cost and no commitment."
            />
            <Reveal delay={100}>
              <ul className="mt-10 space-y-4 text-sm">
                <li>
                  <a
                    href={`tel:${fliproles.phoneTel}`}
                    className="inline-flex items-center gap-3 font-semibold hover:text-accent"
                  >
                    <Phone className="h-4 w-4" /> {fliproles.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${fliproles.email}`}
                    className="inline-flex items-center gap-3 font-semibold hover:text-accent"
                  >
                    <Mail className="h-4 w-4" /> {fliproles.email}
                  </a>
                </li>
              </ul>
              {hasFlipRolesSocial && (
                <div className="mt-8">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    Follow FlipRoles
                  </div>
                  <SocialLinks />
                </div>
              )}
            </Reveal>
          </div>
          <Reveal delay={120} className="rounded-3xl border border-line bg-white p-6 sm:p-9">
            <EnquiryForm
              fields={onboardFields}
              subject="I'd like to list my shop on FlipRoles"
              submitLabel="Send"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default FlipRolesPage;
