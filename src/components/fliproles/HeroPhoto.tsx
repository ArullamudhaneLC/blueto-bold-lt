type Props = {
  alt: string;
  sticker: string; // handwritten note on the bottom-right sticker
  delay?: number; // entrance delay in ms
};

// The tilted, framed café photo with floating stickers used at the top of FlipRoles pages.
const HeroPhoto = ({ alt, sticker, delay = 200 }: Props) => (
  <div className="enter relative mx-auto w-full max-w-lg" style={{ animationDelay: `${delay}ms` }}>
    <div className="rotate-2 overflow-hidden rounded-[2rem] border-[6px] border-white shadow-[0_40px_80px_-40px_rgb(var(--ink)/0.5)] transition duration-700 hover:rotate-0">
      <img
        src="/images/fliproles-tryout.jpg"
        alt={alt}
        width={1620}
        height={971}
        fetchPriority="high"
        decoding="async"
        className="aspect-[4/3] w-full object-cover object-[54%_center] sm:aspect-square"
      />
    </div>

    <div
      className="absolute -left-3 bottom-10 animate-float rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-10 sm:bottom-auto sm:top-8"
      style={{ ['--r' as string]: '-6deg' }}
    >
      <div className="font-display text-3xl font-extrabold leading-none text-accent">90</div>
      <div className="text-xs font-bold uppercase tracking-wider text-ink-soft">minutes</div>
    </div>

    <div
      className="absolute -bottom-5 -right-2 animate-float rounded-full bg-ink px-5 py-3 text-white shadow-lg xl:-right-8"
      style={{ ['--r' as string]: '4deg', animationDelay: '1.2s' }}
    >
      <span className="hand text-2xl">{sticker}</span>
    </div>
  </div>
);

export default HeroPhoto;
