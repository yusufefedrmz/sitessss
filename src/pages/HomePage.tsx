import { Link } from "react-router-dom";
import {
  Zap,
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Settings,
  MapPin,
  Shield,
  Fan,
  Droplet,
  Flame,
  Phone,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ---------- Animated Counter ---------- */
function useCountUp(end: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
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

import { useState, useEffect, useRef } from "react";

function StatItem({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-white/80 text-sm md:text-base">{label}</div>
    </div>
  );
}

/* ---------- Home Page ---------- */
export default function HomePage() {
  useScrollReveal(".scroll-reveal", 0.15);

  return (
    <>
      {/* SEO */}
      <title>Misting İzmir | Profesyonel Misting & Buharlı Serinletme Sistemleri</title>
      <meta
        name="description"
        content="İzmir merkezli profesyonel misting, buharlı serinletme, nemlendirme ve endüstriyel çözümler. Açık alan serinletme, sisleme sistemleri ve teknik destek."
      />
      <meta
        name="keywords"
        content="misting izmir, buharlı serinletme, sisleme sistemi, dış mekan soğutma, nemlendirme, endüstriyel sisleme"
      />

      {/* ====== HERO ====== */}
      <section className="hero-gradient min-h-[calc(100dvh-72px)] flex items-center">
        <div className="container-main py-12 md:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.1em] animate-fade-in-up"
                style={{ color: "hsl(var(--primary))", background: "hsl(var(--overlay))" }}
              >
                İZMİR'İN MİSTİNG UZMANI
              </span>

              <h1
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up"
                style={{ color: "hsl(var(--text-primary))", animationDelay: "0.1s" }}
              >
                Profesyonel Misting &amp; Buharlı Serinletme Çözümleri
              </h1>

              <p
                className="mt-5 text-base md:text-lg leading-relaxed max-w-[520px] mx-auto lg:mx-auto animate-fade-in-up"
                style={{ color: "hsl(var(--text-secondary))", animationDelay: "0.2s" }}
              >
                Açık alan ve endüstriyel serinletmede uzman marka. Yüksek
                basınçlı su hatları, nozul teknolojisi, mist fan sistemleri ve
                profesyonel saha uygulama deneyimiyle projeye özel çözümler
                sunuyoruz.
              </p>

              <div
                className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Link to="/iletisim" className="btn-primary">
                  <Zap className="w-4 h-4" />
                  <span>Ücretsiz Keşif Talebi</span>
                </Link>
                <Link to="/hizmetler" className="btn-secondary">
                  <span>Hizmetlerimiz</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div
                className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {[
                  { icon: Award, text: "15+ Yıllık Deneyim" },
                  { icon: CheckCircle, text: "100+ Projeyi Tamamladık" },
                  { icon: Clock, text: "7/24 Teknik Destek" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "hsl(var(--text-secondary))" }}
                  >
                    <item.icon className="w-4 h-4 text-[var(--primary)]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Hero Image */}
            <div
              className="order-1 lg:order-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-24 h-24 rounded-full animate-float"
                  style={{ background: "hsl(var(--overlay))" }}
                />
                <div
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full animate-float"
                  style={{
                    background: "hsl(var(--overlay))",
                    animationDelay: "2s",
                  }}
                />
                <img
                  src="/images/hero-misting.jpg"
                  alt="Profesyonel Misting Sistemi"
                  className="relative rounded-2xl shadow-2xl w-full object-cover animate-float"
                  style={{ animationDuration: "6s" }}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HAKKIMIZDA ÖNİZLEME ====== */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="scroll-reveal relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ background: "hsl(var(--primary))", opacity: 0.1 }}
              />
              <img
                src="/images/about-team.jpg"
                alt="Misting İzmir Ekibi"
                className="relative rounded-2xl shadow-lg w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="scroll-reveal">
              <SectionHeader
                tag="HAKKIMIZDA"
                title="Profesyonel Çözüm Ortağınız"
                align="left"
              />

              <h3
                className="mt-4 text-xl md:text-2xl font-semibold"
                style={{ color: "hsl(var(--text-primary))" }}
              >
                Projeye Özel Misting ve Serinletme Çözümleri
              </h3>

              <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                Bugün Misting İzmir olarak; kafe, restoran, otel, fabrika, depo,
                sera, hayvancılık tesisi, üretim alanı, açık etkinlik alanı ve
                endüstriyel tesisler başta olmak üzere birçok farklı sektöre
                özel projelendirme, ürün tedariki, montaj ve teknik destek
                hizmetleri sağlamaktayız.
              </p>

              <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                Geniş ürün yelpazemiz; yüksek basınçlı pompalar, nozullar,
                paslanmaz çelik bağlantı elemanları, fanlı serinletme
                sistemleri, sisleme hatları, nemlendirme ekipmanları ve
                profesyonel uygulama bileşenlerinden oluşmaktadır.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { icon: Settings, text: "Projelendirme" },
                  { icon: MapPin, text: "Yerinde Keşif" },
                  { icon: Award, text: "Premium Ürünler" },
                  { icon: Shield, text: "Teknik Destek" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "hsl(var(--overlay))" }}
                    >
                      <item.icon className="w-4 h-4 text-[var(--primary)]" />
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "hsl(var(--text-primary))" }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/hakkimizda" className="btn-secondary">
                  <span>Daha Fazla Bilgi</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HİZMETLER ====== */}
      <section className="section-padding" style={{ background: "hsl(var(--surface))" }}>
        <div className="container-main">
          <SectionHeader
            tag="HİZMETLERİMİZ"
            title="Kapsamlı Çözüm Hizmetlerimiz"
            description="Serinletme, sisleme, nemlendirme ve ısıtma alanlarında profesyonel hizmetler sunuyoruz."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/service-cooling.jpg",
                title: "Serinletme ve Soğutma",
                desc: "Açık ve yarı açık alanlarda buharlı serinletme ve dış mekan soğutma çözümleri. Kafe, restoran, otel ve etkinlik alanları için ideal.",
              },
              {
                image: "/images/service-misting.jpg",
                title: "Sisleme ve Nemlendirme",
                desc: "Üretim, sera ve depolama alanları için kontrollü nem ve sisleme çözümleri. Toz bastırma ve koku giderim uygulamaları.",
              },
              {
                image: "/images/service-heating.jpg",
                title: "Isıtma Sistemleri",
                desc: "Kafe, restoran, teras ve endüstriyel alanlar için verimli ısıtma çözümleri. Dış mekan konforu için profesyonel sistemler.",
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className="scroll-reveal card-hover rounded-2xl overflow-hidden"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-card)",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4
                    className="text-xl font-semibold mb-2"
                    style={{ color: "hsl(var(--text-primary))" }}
                  >
                    {service.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "hsl(var(--text-secondary))" }}
                  >
                    {service.desc}
                  </p>
                  <Link
                    to="/hizmetler"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:gap-2 transition-all"
                  >
                    Detaylı Bilgi <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center scroll-reveal">
            <Link to="/hizmetler" className="btn-primary">
              Tüm Hizmetlerimiz
            </Link>
          </div>
        </div>
      </section>

      {/* ====== ÜRÜNLER ====== */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main">
          <SectionHeader
            tag="ÜRÜNLERİMİZ"
            title="Endüstriyel Kalite Ürün Ailesi"
            description="Projeleriniz için en uygun misting ekipmanlarını sunuyoruz."
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Fan, title: "Vantilatörler", desc: "Mist fan ve endüstriyel vantilatör çözümleri" },
              { icon: Droplet, title: "Nozullar", desc: "Yüksek basınçlı sisleme ve nemlendirme nozulları" },
              { icon: Settings, title: "Pompalar", desc: "Alçak, orta ve yüksek basınç pompa grupları" },
              { icon: Flame, title: "Isıtıcılar", desc: "Dış mekan ve endüstriyel ısıtıcı sistemleri" },
              { icon: Shield, title: "Filtreler", desc: "Su filtreleme ve arıtma ekipmanları" },
            ].map((product, i) => (
              <div
                key={product.title}
                className="scroll-reveal card-hover rounded-2xl p-6 text-center"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-card)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "hsl(var(--overlay))" }}
                >
                  <product.icon className="w-8 h-8 text-[var(--primary)]" />
                </div>
                <h4
                  className="text-base font-semibold mb-2"
                  style={{ color: "hsl(var(--text-primary))" }}
                >
                  {product.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "hsl(var(--text-secondary))" }}
                >
                  {product.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center scroll-reveal">
            <Link to="/urunler" className="btn-primary">
              Tüm Ürünlerimiz
            </Link>
          </div>
        </div>
      </section>

      {/* ====== İSTATİSTİKLER ====== */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #0077B6 0%, #005A8C 100%)",
        }}
      >
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem end={15} suffix="+" label="Yıllık Deneyim" />
            <StatItem end={100} suffix="+" label="Tamamlanan Proje" />
            <StatItem end={500} suffix="+" label="Müşteri Memnuniyeti" />
            <StatItem end={50} suffix="+" label="Kurumsal Referans" />
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="section-padding" style={{ background: "hsl(var(--surface))" }}>
        <div className="container-main">
          <div
            className="scroll-reveal rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, #0077B6 100%)",
            }}
          >
            {/* Decorative ripples */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2" style={{ background: "white" }} />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-10 translate-x-1/3 translate-y-1/3" style={{ background: "white" }} />

            <h2 className="relative text-2xl md:text-3xl font-bold text-white mb-4">
              Projeniz için Ücretsiz Keşif Talebinde Bulunun
            </h2>
            <p className="relative text-white/85 max-w-[500px] mx-auto mb-8">
              Alanınıza özel çözüm önerisi ve fiyat teklifi almak için hemen
              bize ulaşın.
            </p>
            <div className="relative flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+905357440133"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] transition-all hover:scale-105"
                style={{ background: "white", color: "hsl(var(--primary))" }}
              >
                <Phone className="w-4 h-4" />
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905357440133"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[15px] transition-all hover:scale-105"
                style={{ background: "#25D366", color: "white" }}
              >
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
