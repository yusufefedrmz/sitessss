import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useState, useEffect, useRef } from "react";

/* Animated Counter */
function useCountUp(end: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);
  return { ref, count };
}

function StatItem({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{count}{suffix}</div>
      <div className="text-white/80 text-sm md:text-base">{label}</div>
    </div>
  );
}

const references = [
  "Vestel", "Arçelik", "Beko", "Turkish Airlines",
  "McDonald's", "Burger King", "Starbucks",
  "Efes Pilsen", "Tuborg", "Coca-Cola",
  "İpragaz", "Aygaz", "Opet",
  "Aksa Enerji", "Enerjisa",
  "Selçuk Üniversitesi", "Ege Üniversitesi", "Dokuz Eylül Üniversitesi",
  "Özsüt", "Kahve Dünyası",
  "Big Chefs", "Kitchenette",
  "Soyak İnşaat", "Emlak Konut",
  "Swissôtel", "HSH Hotel",
  "İzmir Büyükşehir", "Karşıyaka Belediyesi", "Bornova Belediyesi",
  "Adnan Menderes Havalimanı",
];

export default function ReferencesPage() {
  useScrollReveal(".scroll-reveal", 0.15);

  return (
    <>
      <title>Referanslarımız | Misting İzmir Müşterileri</title>
      <meta name="description" content="Bize güvenen değerli iş ortaklarımız ve kurumsal müşterilerimiz. 100+ başarılı proje referansı." />

      {/* Page Header */}
      <section className="pt-28 pb-16 text-center" style={{ background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%)" }}>
        <div className="container-main scroll-reveal">
          <nav className="text-sm mb-4" style={{ color: "hsl(var(--text-muted))" }}>
            <Link to="/" className="hover:text-[var(--primary)] transition-colors">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span>Referanslar</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "hsl(var(--text-primary))" }}>Referanslarımız</h1>
          <p className="mt-4 max-w-[600px] mx-auto" style={{ color: "hsl(var(--text-secondary))" }}>
            Bize güvenen değerli iş ortaklarımız ve müşterilerimiz.
          </p>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main">
          <SectionHeader tag="İŞ ORTAKLARIMIZ" title="Bize Güvenen Değerli Markalar" />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {references.map((name, i) => (
              <div
                key={name}
                className="scroll-reveal grayscale-hover rounded-2xl flex items-center justify-center p-6 h-[100px] md:h-[120px]"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid var(--border-light)",
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                <span className="text-sm md:text-base font-semibold text-center" style={{ color: "hsl(var(--text-primary))" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20" style={{ background: "linear-gradient(135deg, #0077B6 0%, #005A8C 100%)" }}>
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem end={15} suffix="+" label="Yıllık Deneyim" />
            <StatItem end={100} suffix="+" label="Tamamlanan Proje" />
            <StatItem end={30} suffix="+" label="Kurumsal Müşteri" />
            <StatItem end={50} suffix="+" label="Sektör Referansı" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "hsl(var(--surface))" }}>
        <div className="container-main">
          <div className="scroll-reveal rounded-3xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, var(--primary) 0%, #0077B6 100%)" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Siz De Referanslarımız Arasında Yer Alın</h2>
            <p className="text-white/85 max-w-[500px] mx-auto mb-8">Profesyonel misting çözümleri işletmeniz için hemen başlayalım.</p>
            <Link to="/iletisim" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold transition-all hover:scale-105" style={{ background: "white", color: "hsl(var(--primary))" }}>
              Hemen Başlayın <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
