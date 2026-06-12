import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Settings, CheckCircle, Clock } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    tag: "SERİNLETME & SOĞUTMA",
    title: "Açık Alan Serinletme ve Soğutma Sistemleri",
    desc: "Açık ve yarı açık alanlarda buharlı serinletme ve dış mekan soğutma çözümleri. Kafe, restoran, otel, bahçe ve etkinlik alanları için ideal sıcaklık düşürme sistemleri.",
    image: "/images/service-cooling.jpg",
    features: ["Mist Fan Sistemleri", "Yüksek Basınçlı Sisleme", "Dış Mekan Soğutma", "Ticari ve Endüstriyel Uygulamalar"],
    reversed: false,
  },
  {
    tag: "SİSLEME & NEMLENDİRME",
    title: "Endüstriyel Sisleme ve Nemlendirme Çözümleri",
    desc: "Üretim, sera ve depolama alanları için kontrollü nem ve sisleme çözümleri. Toz bastırma, koku giderim ve dezenfeksiyon uygulamaları.",
    image: "/images/service-misting.jpg",
    features: ["Toz Bastırma Sistemleri", "Koku Giderim", "Sera Nemlendirme", "Dezenfeksiyon Sisleme"],
    reversed: true,
  },
  {
    tag: "ISITMA SİSTEMLERİ",
    title: "Dış Mekan ve Endüstriyel Isıtma Sistemleri",
    desc: "Kafe, restoran, teras ve endüstriyel alanlar için verimli ısıtma çözümleri. Dış mekan konforu için profesyonel ısıtıcı sistemleri.",
    image: "/images/service-heating.jpg",
    features: ["Piramit Isıtıcılar", "Endüstriyel Isıtma", "Teras ve Bahçe Isıtma", "Verimli Enerji Çözümleri"],
    reversed: false,
  },
];

const steps = [
  { num: "01", icon: MapPin, title: "Keşif", desc: "Alan ölçüsü, altyapı ve kullanım yoğunluğu analiz edilir." },
  { num: "02", icon: Settings, title: "Sistem Seçimi", desc: "Pompa, nozul, hat, fan/ısıtıcı ve kontrol ekipmanı belirlenir." },
  { num: "03", icon: CheckCircle, title: "Uygulama", desc: "Montaj, test, performans kontrolü ve bakım planı ile teslim edilir." },
  { num: "04", icon: Clock, title: "Sürekli Destek", desc: "7/24 teknik destek ve periyodik bakım hizmetleri." },
];

export default function ServicesPage() {
  useScrollReveal(".scroll-reveal", 0.15);

  return (
    <>
      <title>Hizmetlerimiz | Serinletme, Sisleme, Nemlendirme - Misting İzmir</title>
      <meta name="description" content="Profesyonel serinletme ve soğutma, sisleme ve nemlendirme, ısıtma sistemleri hizmetlerimizi keşfedin. Keşif, projelendirme ve uygulama." />
      <meta name="keywords" content="serinletme izmir, sisleme hizmeti, nemlendirme sistemi, dış mekan soğutma, ısıtma sistemi" />

      {/* Page Header */}
      <section className="pt-28 pb-16 text-center" style={{ background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%)" }}>
        <div className="container-main scroll-reveal">
          <nav className="text-sm mb-4" style={{ color: "hsl(var(--text-muted))" }}>
            <Link to="/" className="hover:text-[var(--primary)] transition-colors">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span>Hizmetler</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "hsl(var(--text-primary))" }}>Hizmetlerimiz</h1>
          <p className="mt-4 max-w-[600px] mx-auto" style={{ color: "hsl(var(--text-secondary))" }}>
            Serinletme, sisleme, nemlendirme ve ısıtma çözümlerimizi keşfedin.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main space-y-16">
          {services.map((service) => (
            <div
              key={service.tag}
              className={`scroll-reveal grid lg:grid-cols-2 gap-10 items-center ${service.reversed ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`${service.reversed ? "lg:order-2" : "lg:order-1"}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={service.image} alt={service.title} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
                </div>
              </div>
              <div className={`${service.reversed ? "lg:order-1" : "lg:order-2"}`}>
                <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider text-white mb-4" style={{ background: "hsl(var(--primary))" }}>
                  {service.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "hsl(var(--text-primary))" }}>{service.title}</h3>
                <p className="mb-6 leading-relaxed" style={{ color: "hsl(var(--text-secondary))" }}>{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "hsl(var(--text-secondary))" }}>
                      <CheckCircle className="w-4 h-4 text-[var(--primary)] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/iletisim" className="btn-primary text-sm py-2 px-5">
                  Teklif Al
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding" style={{ background: "hsl(var(--surface))" }}>
        <div className="container-main">
          <SectionHeader tag="PROJE AKIŞI" title="Profesyonel Proje Sürecimiz" />

          <div className="mt-12 relative">
            {/* Connecting line - desktop */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5" style={{ background: "hsl(var(--border))" }} />

            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={step.num} className="scroll-reveal text-center relative" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10" style={{ background: "hsl(var(--primary))" }}>
                    <span className="text-white font-bold">{step.num}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "hsl(var(--overlay))" }}>
                    <step.icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--text-primary))" }}>{step.title}</h4>
                  <p className="text-sm" style={{ color: "hsl(var(--text-secondary))" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main">
          <div className="scroll-reveal rounded-3xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, var(--primary) 0%, #0077B6 100%)" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Hangi Hizmeti Arıyorsunuz?</h2>
            <p className="text-white/85 max-w-[500px] mx-auto mb-8">Size özel çözüm önerisi ve fiyat teklifi almak için bize ulaşın.</p>
            <Link to="/iletisim" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold transition-all hover:scale-105" style={{ background: "white", color: "hsl(var(--primary))" }}>
              Bize Ulaşın <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
