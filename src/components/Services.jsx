import { motion } from 'framer-motion';
import { Activity, BarChart3, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Health Systems',
    desc: 'Design, assess, and strengthen service delivery, financing, and governance for resilient systems.',
    href: '#health-systems',
  },
  {
    icon: BarChart3,
    title: 'Health Economics',
    desc: 'Costing, CEAs, fiscal space analysis, and strategic purchasing to optimize value for money.',
    href: '#health-economics',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    desc: 'Data engineering, dashboards, and advanced analytics that translate into decisions.',
    href: '#analytics',
  },
  {
    icon: Shield,
    title: 'Policy Advisory',
    desc: 'Evidence synthesis, guideline development, and policy design with measurable outcomes.',
    href: '#policy',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(203,213,225,0.05),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-white sm:text-4xl">Advisory Services</h2>
          <p className="mt-3 text-cream/80">We combine deep sector expertise with rigorous analytics to deliver pragmatic, scalable solutions.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.a
              key={s.title}
              href={s.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-900/0 via-red-900/0 to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-amber-100 ring-1 ring-white/10 shadow-inner">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="relative font-semibold text-white">{s.title}</h3>
              <p className="relative mt-2 text-sm text-cream/80">{s.desc}</p>
              <div className="relative mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-amber-100">Learn more</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-cream/90 ring-1 ring-white/10">Open</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
