import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import StatsAndCase from './components/StatsAndCase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-cream" style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Services />
        <StatsAndCase />
      </main>
      <Footer />
    </div>
  );
}
