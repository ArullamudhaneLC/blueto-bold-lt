import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  GraduationCap,
  HeartPulse,
  Medal,
  MessagesSquare,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import EnquiryForm, { type Field } from '../components/ui/EnquiryForm';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import { company } from '../config/company';
import { usePageMeta } from '../hooks/usePageMeta';

// Modules as they appear in the BluEduVerse app itself.
const modules: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'AI Academic Coach',
    body: 'Reads each student’s grades across terms and writes plain-language suggestions — what is going well, and where to focus next.',
    icon: Bot,
  },
  {
    title: 'Grades & term comparison',
    body: 'Subject-wise marks, overall percentage and class rank, compared term on term so progress is visible at a glance.',
    icon: GraduationCap,
  },
  {
    title: 'Talent Board',
    body: 'Brings academics, sports and extracurricular activities together, so strengths outside the classroom are noticed too.',
    icon: Sparkles,
  },
  {
    title: 'Goals & growth',
    body: 'Students set targets with their teachers and follow their own growth against them through the year.',
    icon: Target,
  },
  {
    title: 'Attendance & health',
    body: 'Daily attendance and health records kept in one place, instead of registers and loose files.',
    icon: CalendarCheck,
  },
  {
    title: 'PTM outcomes',
    body: 'What was discussed at each parent–teacher meeting, recorded and followed up — not forgotten by the next one.',
    icon: MessagesSquare,
  },
];

const fields: Field[] = [
  { name: 'school', label: 'School name', required: true, half: true },
  { name: 'city', label: 'City', required: true, half: true },
  { name: 'name', label: 'Your name', required: true, half: true },
  { name: 'role', label: 'Your role', placeholder: 'e.g. Principal', half: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, half: true },
  { name: 'students', label: 'Number of students', half: true },
];

const audiences: { title: string; body: string; icon: LucideIcon }[] = [
  {
    icon: TrendingUp,
    title: 'For students',
    body: 'A clear picture of where they stand and what to do next.',
  },
  {
    icon: HeartPulse,
    title: 'For parents',
    body: 'Progress, attendance and health without waiting for the report card.',
  },
  {
    icon: Medal,
    title: 'For schools',
    body: 'Less paperwork, and a record that follows each child year to year.',
  },
];

const SchoolProductPage = () => {
  usePageMeta(
    'BluEduVerse — school management with an AI digital diary',
    'Grades, attendance, health and parent–teacher meetings in one place, with an AI coach for every student.',
  );

  return (
    <>
      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div
          className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand-100 blur-3xl"
          aria-hidden
        />
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow enter">
              <GraduationCap className="h-4 w-4" /> For schools
            </span>
            <h1 className="heading-xl enter mt-6" style={{ animationDelay: '90ms' }}>
              BluEduVerse — see every student <span className="squiggle text-accent">whole</span>.
            </h1>
            <p
              className="enter mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-ink-soft"
              style={{ animationDelay: '180ms' }}
            >
              A school management system with an AI digital diary. Grades, attendance, health,
              achievements and parent–teacher meetings in one place — with an AI coach that turns
              the numbers into advice a student can act on.
            </p>
            <div
              className="enter mt-10 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: '270ms' }}
            >
              <a href="#demo" className="btn-primary">
                Book a demo <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/" className="btn-secondary">
                More from {company.brand}
              </Link>
            </div>
          </div>

          <figure
            className="enter mt-16 overflow-hidden rounded-t-3xl border border-b-0 border-line bg-white p-2 shadow-[0_30px_80px_-40px_rgba(28,25,23,0.4)] sm:p-3"
            style={{ animationDelay: '360ms' }}
          >
            <img
              src="/images/blueduverse-grades.jpg"
              alt="BluEduVerse academic performance screen with the AI Academic Coach"
              width={2000}
              height={1049}
              decoding="async"
              className="w-full rounded-t-2xl"
            />
          </figure>
        </div>
      </section>

      <section className="border-t border-line bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What’s inside"
            title="Everything a class teacher tracks, in one place."
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(({ title, body, icon: Icon }, i) => (
              <Reveal key={title} delay={(i % 3) * 80}>
                <div className="h-full rounded-3xl border border-line bg-paper p-5 sm:p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-20px_rgba(28,25,23,0.3)]">
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-5 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-white sm:py-20 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100}>
              <Icon className="h-6 w-6 text-accent-soft" />
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-faint">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="demo" className="py-14 sm:py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="Book a demo"
            title="See it with your own school’s data."
            intro="We will walk you through BluEduVerse and talk about what your school needs. No commitment."
          />
          <Reveal delay={120} className="rounded-3xl border border-line bg-white p-5 sm:p-9">
            <EnquiryForm
              fields={fields}
              subject="BluEduVerse demo request"
              submitLabel="Request a demo"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default SchoolProductPage;
