import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function useCountUp(target, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const start = performance.now();
            const animate = (t) => {
              const p = Math.min(1, (t - start) / duration);
              setValue(Math.floor(p * target));
              if (p < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

export default function StatsAndCase() {
  const stats = [
    { label: 'Projects', target: 120 },
    { label: 'Countries', target: 35 },
    { label: 'Clients', target: 60 },
    { label: 'Experts', target: 24 },
  ];

  const counters = stats.map((s) => useCountUp(s.target));

  return (
    <section id="projects" className="w-full bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Counters */}
        <div className="grid gap-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} ref={counters[i].ref} className="text-center">
              <p className="font-serif text-4xl text-white">
                {counters[i].value}
                {s.label === 'Countries' ? '+' : ''}
              </p>
              <p className="mt-1 text-sm text-cream/80">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Featured case study */}
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl ring-1 ring-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop"
              alt="Case study visual"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
          >
            <h3 className="font-serif text-2xl text-white">Strategic Purchasing Reform in East Africa</h3>
            <p className="mt-2 text-cream/80">
              We supported the Ministry of Health to design and implement a national strategic purchasing framework, aligning provider incentives with quality and efficiency.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/5 p-3 text-center ring-1 ring-white/10">
                <p className="text-xl font-semibold text-white">18%</p>
                <p className="text-xs text-cream/80">Efficiency gain</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3 text-center ring-1 ring-white/10">
                <p className="text-xl font-semibold text-white">+2.4M</p>
                <p className="text-xs text-cream/80">People covered</p>
              </div>
            </div>
            <a href="#" className="mt-6 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15">Read full case</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
