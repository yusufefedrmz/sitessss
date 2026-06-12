import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Droplet, Shield, Award } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const products = [
  {
    image: "/images/product-fan.jpg",
    title: "Vantilatörler",
    desc: "Mist fan ve endüstriyel vantilatör çözümleri. Açık alan serinletme için profesyonel fan sistemleri.",
    specs: ["Mist Fan Sistemleri", "Endüstriyel Vantilatörler", "Portatif ve Sabit Modeller"],
  },
  {
    image: "/images/product-nozzle.jpg",
    title: "Nozullar",
    desc: "Yüksek basınçlı sisleme ve nemlendirme nozulları. Paslanmaz çelik, ultra dayanıklı.",
    specs: ["Paslanmaz Çelik Nozullar", "Anti Drip Özellik", "Farklı Sprey Açıları"],
  },
  {
    image: "/images/product-pump.jpg",
    title: "Pompalar",
    desc: "Alçak, orta ve yüksek basınç pompa grupları. Proje ihtiyacına göre kapasite seçimi.",
    specs: ["Yüksek Basınçlı Pompalar", "Otomatik Kontrol Sistemleri", "Farklı Kapasite Seçenekleri"],
  },
  {
    image: "/images/service-heating.jpg",
    title: "Isıtıcılar",
    desc: "Dış mekan ve endüstriyel ısıtıcı sistemleri. Piramit ve endüstriyel modeller.",
    specs: ["Piramit Isıtıcılar", "Endüstriyel Isıtıcılar", "Verimli Yakıt Sistemleri"],
  },
  {
    image: "/images/hero-misting.jpg",
    title: "Filtreler",
    desc: "Su filtreleme ve arıtma ekipmanları. Nozul ömrünü uzatan profesyonel filtre sistemleri.",
    specs: ["Kartuş Filtreler", "Kum Filtreleri", "Otomatik Yıkamalı Sistemler"],
  },
];

export default function ProductsPage() {
  useScrollReveal(".scroll-reveal", 0.15);

  return (
    <>
      <title>Ürünlerimiz | Misting Ekipmanları - Misting İzmir</title>
      <meta name="description" content="Yüksek basınçlı pompalar, nozullar, vantilatörler, ısıtıcılar ve filtreler. Endüstriyel kalitede misting ürün ailesi." />
      <meta name="keywords" content="misting pompası, sisleme nozulu, mist fan, dış mekan ısıtıcısı, su filtresi" />

      {/* Page Header */}
      <section className="pt-28 pb-16 text-center" style={{ background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%)" }}>
        <div className="container-main scroll-reveal">
          <nav className="text-sm mb-4" style={{ color: "hsl(var(--text-muted))" }}>
            <Link to="/" className="hover:text-[var(--primary)] transition-colors">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span>Ürünler</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "hsl(var(--text-primary))" }}>Ürünlerimiz</h1>
          <p className="mt-4 max-w-[600px] mx-auto" style={{ color: "hsl(var(--text-secondary))" }}>
            Endüstriyel kalitede misting ve serinletme ürün ailemizi keşfedin.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div
                key={product.title}
                className="scroll-reveal card-hover rounded-2xl overflow-hidden"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-card)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--text-primary))" }}>{product.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--text-secondary))" }}>{product.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {product.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs" style={{ color: "hsl(var(--text-secondary))" }}>
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link to="/iletisim" className="inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:gap-2 transition-all">
                    Detaylı Bilgi <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section-padding" style={{ background: "hsl(var(--surface))" }}>
        <div className="container-main">
          <SectionHeader tag="TEKNİK BİLGİLER" title="Profesyonel Teknik Özellikler" />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Droplet, title: "Basınç Değerleri", desc: "70 bar'a kadar yüksek basınçlı sistemler." },
              { icon: Shield, title: "Malzeme Kalitesi", desc: "316L paslanmaz çelik, korozyona dayanıklı." },
              { icon: Award, title: "Garanti", desc: "2 yıl garanti ve ömür boyu teknik destek." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="scroll-reveal rounded-2xl p-6 text-center"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid var(--border-light)",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "hsl(var(--overlay))" }}>
                  <item.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h4 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--text-primary))" }}>{item.title}</h4>
                <p className="text-sm" style={{ color: "hsl(var(--text-secondary))" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main">
          <div className="scroll-reveal rounded-3xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, var(--primary) 0%, #0077B6 100%)" }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ürün Teklifi Almak İster Misiniz?</h2>
            <p className="text-white/85 max-w-[500px] mx-auto mb-8">Size özel ürün önerisi ve fiyat teklifi almak için bize ulaşın.</p>
            <Link to="/iletisim" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold transition-all hover:scale-105" style={{ background: "white", color: "hsl(var(--primary))" }}>
              Bize Ulaşın <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
