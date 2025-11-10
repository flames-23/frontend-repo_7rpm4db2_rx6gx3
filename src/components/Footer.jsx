import { useState } from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      // Newsletter collection: Supabase REST insert
      const url = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/newsletter`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          Prefer: 'return=representation',
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('Thanks! Please check your inbox.');
      setEmail('');
    } catch (err) {
      setStatus('Could not subscribe right now.');
    }
  };

  return (
    <footer id="contact" className="w-full bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-red-900/80 ring-1 ring-white/10" />
              <p className="text-lg font-semibold text-white">AxiHealth Advisory</p>
            </div>
            <p className="mt-3 text-sm text-cream/80">Independent consultancy unlocking better health outcomes through rigorous evidence and practical delivery.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#team" className="hover:text-white">Team</a></li>
              <li><a href="#resources" className="hover:text-white">Resources</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li>hello@axihealth.org</li>
              <li>+1 (202) 555-0199</li>
              <li>Washington, DC</li>
            </ul>
            <div className="mt-4 flex items-center gap-3 text-cream/80">
              <a aria-label="LinkedIn" href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
              <a aria-label="Twitter" href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a aria-label="Email" href="mailto:hello@axihealth.org" className="hover:text-white"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Newsletter</p>
            <p className="mt-2 text-sm text-cream/80">Insights on health systems and economics, monthly.</p>
            <form onSubmit={submit} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@organization.org"
                className="flex-1 rounded-xl bg-white/5 px-3 py-2 text-sm text-white ring-1 ring-white/10 placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-red-900/60"
              />
              <button type="submit" className="rounded-xl bg-red-900 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:translate-y-[-1px] transition-transform">
                Subscribe
              </button>
            </form>
            {status && <p className="mt-2 text-xs text-amber-100">{status}</p>}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-cream/70">© {new Date().getFullYear()} AxiHealth Advisory. All rights reserved.</div>
      </div>
    </footer>
  );
}
