type Props = {
  items: string[];
  label: string; // accessible name, since the moving copy is decorative
};

// Brand-colour scrolling banner, as on the posters. The list is rendered twice so the loop
// is seamless; the second copy is hidden from screen readers.
const Marquee = ({ items, label }: Props) => (
  <div
    className="-rotate-1 overflow-hidden bg-brand-600 py-3 text-white sm:py-4"
    aria-label={label}
  >
    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center font-display text-xl font-extrabold tracking-tight sm:text-3xl"
            >
              <span className="px-4 sm:px-6">{item}</span>
              <span className="text-brand-300">✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
