import React from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
};

// The one heading pattern used by every section: eyebrow, title, optional intro.
const SectionHeading: React.FC<Props> = ({
  eyebrow,
  title,
  intro,
  tone = 'light',
  className = '',
}) => (
  <Reveal className={`max-w-2xl ${className}`}>
    {eyebrow && (
      <span className={`eyebrow ${tone === 'dark' ? '!text-accent-soft' : ''}`}>{eyebrow}</span>
    )}
    <h2 className={`heading-lg ${eyebrow ? 'mt-4' : ''}`}>{title}</h2>
    {intro && (
      <p
        className={`mt-6 text-base leading-relaxed sm:text-lg ${tone === 'dark' ? 'text-ink-faint' : 'text-ink-soft'}`}
      >
        {intro}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
