import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Health Systems', href: '#services' },
      { label: 'Health Economics', href: '#services' },
      { label: 'Data & Analytics', href: '#services' },
      { label: 'Policy Advisory', href: '#services' },
    ],
  },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Resources', href: '#resources' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-slate-900/70 shadow-lg' : 'bg-transparent backdrop-blur-sm'
    }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-red-900/80 shadow shadow-red-900/30 ring-1 ring-white/10" />
            <span className="text-base font-semibold tracking-tight text-cream/90">AxiHealth Advisory</span>
          </a>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <a
                  href={item.href}
                  onMouseEnter={() => item.children && setServicesOpen(true)}
                  onMouseLeave={() => item.children && setServicesOpen(false)}
                  className="text-sm/6 text-cream/80 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </a>
                {item.children && servicesOpen && (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute left-1/2 -translate-x-1/2 mt-3 min-w-[560px] rounded-2xl bg-slate-800/90 backdrop-blur-xl p-4 shadow-2xl ring-1 ring-white/10 grid grid-cols-2 gap-3"
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="group rounded-xl p-4 bg-white/5 hover:bg-white/10 transition-colors ring-1 ring-white/10"
                      >
                        <p className="text-sm font-semibold text-white group-hover:text-cream">{child.label}</p>
                        <p className="mt-1 text-xs text-cream/70">Explore how we help organizations transform with evidence-based approaches.</p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right action */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-red-900/80 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-900/30 ring-1 ring-white/10 hover:translate-y-[-1px] transition-transform"
            >
              <Phone className="h-4 w-4" /> Contact
            </a>
          </div>

          {/* Mobile */}
          <button
            aria-label="Open Menu"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/90 ring-1 ring-white/10 bg-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <a href={item.href} className="block rounded-lg px-3 py-2 text-cream/90 hover:bg-white/10 ring-1 ring-white/10">
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-3 space-y-1">
                    {item.children.map((c) => (
                      <a key={c.label} href={c.href} className="block rounded-lg px-3 py-2 text-cream/80 hover:bg-white/10">
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-red-900/80 px-4 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/10">
              <Phone className="h-4 w-4" /> Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

