import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900" id="home">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays should not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900"></div>
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-red-900/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl/0"
          >
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-amber-100 ring-1 ring-white/15">
              Evidence-led. Impact-driven.
            </span>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Demystifying Opinions in Health Systems & Economics
            </h1>
            <p className="mt-4 max-w-2xl text-base text-cream/80 md:text-lg">
              We partner with ministries, multilaterals, and NGOs to translate complex data into clear, actionable policy and investment decisions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-red-900 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-red-900/30 ring-1 ring-white/10 transition-transform hover:translate-y-[-1px]"
              >
                Request a Proposal
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Right visual placeholder for alignment; Spline is the background cover */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="h-[52vh] w-full lg:h-[70vh]"
          />
        </div>
      </div>
    </section>
  );
}
