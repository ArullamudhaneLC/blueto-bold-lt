// Shop-facing FlipRoles copy. Every claim here is taken from the app's own
// Pricing, Host agreement and About pages — keep it in step with those.

import {
  BadgeIndianRupee,
  Camera,
  CalendarCheck,
  Coffee,
  Croissant,
  Flower2,
  HandHeart,
  Palette,
  Scissors,
  ShieldCheck,
  Sprout,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';

export const steps = [
  {
    title: 'List your shop',
    body: 'Tell us what you do. We review every shop by hand before its slots go live.',
  },
  {
    title: 'Post a slot',
    body: 'Describe exactly what a visitor would do and learn, pick a date, and set how many can come.',
  },
  {
    title: 'Choose who comes',
    body: 'People apply with a line about why they are curious. You read them and pick.',
  },
  {
    title: 'Host the tryout',
    body: 'They turn up, you show them the work, they go home. Both sides say how it went.',
  },
];

// Seeker-side journey, as on the FlipRoles posters.
export const seekerSteps = [
  { title: 'Browse roles', body: 'Real one-off tryouts at small shops near you.' },
  { title: 'Book your slot', body: 'Pick a date, say why you’re curious. The shop says yes.' },
  {
    title: 'Live it for real',
    body: 'Show up, do the work, guided by a real pro. Go home with a story.',
  },
];

// Colourful role tiles. `note` is set in the handwritten face.
export const roles: {
  role: string;
  note: string;
  icon: LucideIcon;
  tone: string;
  accent: string;
}[] = [
  {
    role: 'Barista',
    note: 'pull your first espresso',
    icon: Coffee,
    tone: 'bg-clay-100',
    accent: 'text-clay-700',
  },
  {
    role: 'Baker',
    note: 'shape a loaf at 7 am',
    icon: Croissant,
    tone: 'bg-butter-100',
    accent: 'text-butter-700',
  },
  {
    role: 'Florist',
    note: 'build a real bouquet',
    icon: Flower2,
    tone: 'bg-moss-100',
    accent: 'text-moss-800',
  },
  {
    role: 'Potter',
    note: 'a turn at the wheel',
    icon: Palette,
    tone: 'bg-sky-100',
    accent: 'text-sky-700',
  },
  {
    role: 'Gardener',
    note: 'repot, water, sell',
    icon: Sprout,
    tone: 'bg-moss-100',
    accent: 'text-moss-800',
  },
  {
    role: 'Stylist',
    note: 'watch, then try',
    icon: Scissors,
    tone: 'bg-clay-100',
    accent: 'text-clay-700',
  },
];

export const marqueeRoles = [
  'Barista',
  'Baker',
  'Potter',
  'Florist',
  'Chef',
  'Photographer',
  'Gardener',
  'Stylist',
  'Artist',
  'Mechanic',
];

export const shopTypes: { label: string; icon: LucideIcon }[] = [
  { label: 'Cafés', icon: Coffee },
  { label: 'Bakeries', icon: Croissant },
  { label: 'Florists', icon: Flower2 },
  { label: 'Plant nurseries', icon: Sprout },
  { label: 'Pottery studios', icon: Palette },
  { label: 'Salons', icon: Scissors },
];

export const benefits: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Free to list',
    body: 'Listing your shop, posting slots, reading applications and choosing who comes cost nothing. No subscription, no listing fee.',
    icon: BadgeIndianRupee,
  },
  {
    title: 'You choose who comes',
    body: 'Nobody turns up unannounced. Every visitor is someone you picked from their application.',
    icon: UserCheck,
  },
  {
    title: 'New people through your door',
    body: 'Visitors are curious locals who picked your shop because of what you make — the kind of people who come back.',
    icon: HandHeart,
  },
  {
    title: 'A chance to be featured',
    body: 'Tryouts make great reels. From time to time we film one and feature the shop on FlipRoles’ own channels — with your permission.',
    icon: Camera,
  },
];

export const pricedTryout = {
  title: 'Or set a price, and get paid',
  points: [
    'A tryout costs you a morning, materials and attention. You can set a price that reflects that.',
    'FlipRoles collects from the visitor and holds it until the tryout has happened.',
    'Tax comes out first, we keep a share, and the rest goes to your UPI or bank account.',
    'If someone books and doesn’t turn up, you still get your full share — you held the morning open.',
  ],
};

export const rules: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'An experience, not a job',
    body: 'Tryouts are short and clearly unpaid. Nobody is hired, and nobody becomes your employee.',
    icon: ShieldCheck,
  },
  {
    title: 'Only what the slot says',
    body: 'Visitors do what you described — nothing more. No dangerous equipment, no unsupervised cash, never left alone.',
    icon: CalendarCheck,
  },
];

export const faqs = [
  {
    q: 'How long is a tryout?',
    a: 'You decide per slot. We recommend about 90 minutes — long enough to do something real, short enough to fit around a working day.',
  },
  {
    q: 'Do I have to pay anything?',
    a: 'No. Listing, posting slots and choosing visitors are free, and we take nothing from a free tryout. We only take a share when you choose to charge for one.',
  },
  {
    q: 'Do I pay the visitor?',
    a: 'No. A tryout is an experience, not work. Visitors are never paid wages. A few shops choose to offer a small stipend instead of charging — that is up to you.',
  },
  {
    q: 'Who are the visitors?',
    a: 'Curious people in Chennai — students, people thinking about a change of career, or someone who has always wanted to pull an espresso shot. You read every application before saying yes.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'Cancel from your dashboard. Every visitor is refunded in full automatically. Doing it often means we stop listing you.',
  },
  {
    q: 'Who am I actually dealing with?',
    a: 'FlipRoles is a product of Blueto Tech Pvt Ltd, a private limited company registered in Tamil Nadu. On paid tryouts, the company is the party that pays you.',
  },
];
