import { useEffect, useRef } from 'react';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/8/8e/World_Health_Organization_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/1f/UNICEF_Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/0/09/USAID-Identity.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3c/World_Bank_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8f/Gates_Foundation_logo.svg',
];

export default function Partners() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let start = 0;
    let raf;

    const step = () => {
      start -= 0.5; // speed
      el.style.transform = `translateX(${start}px)`;
      if (Math.abs(start) > el.scrollWidth / 2) start = 0;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative w-full bg-cream" aria-label="Partners">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-medium tracking-wider text-slate-500">TRUSTED BY GLOBAL INSTITUTIONS</p>
        <div className="relative overflow-hidden rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-cream/0 via-cream/40 to-cream/0" />
          <div className="flex items-center gap-12 will-change-transform" ref={containerRef}>
            {[...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Partner logo"
                className="h-10 w-auto opacity-80 saturate-0 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
