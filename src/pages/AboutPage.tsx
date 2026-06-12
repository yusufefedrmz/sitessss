import { Link } from "react-router-dom";
import { Settings, Zap, Shield, MapPin, Award, Clock, Users, Package } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AboutPage() {
  useScrollReveal(".scroll-reveal", 0.15);

  return (
    <>
      <title>Hakkımızda | Misting İzmir - Profesyonel Serinletme Çözümleri</title>
      <meta name="description" content="Misting İzmir'in kurumsal hikayesi, yaklaşımı ve değerleri. 15+ yıllık deneyimle projeye özel misting ve serinletme çözümleri." />

      {/* Page Header */}
      <section
        className="pt-28 pb-16 text-center"
        style={{
          background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%)",
        }}
      >
        <div className="container-main scroll-reveal">
          <nav className="text-sm mb-4" style={{ color: "hsl(var(--text-muted))" }}>
            <Link to="/" className="hover:text-[var(--primary)] transition-colors">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span>Hakkımızda</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "hsl(var(--text-primary))" }}>
            Hakkımızda
          </h1>
          <p className="mt-4 max-w-[600px] mx-auto" style={{ color: "hsl(var(--text-secondary))" }}>
            Misting İzmir'in kurumsal hikayesi, yaklaşımı ve değerleri.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl" style={{ background: "hsl(var(--primary))", opacity: 0.1 }} />
              <img src="/images/about-team.jpg" alt="Misting İzmir Ekibi" className="relative rounded-2xl shadow-lg w-full object-cover" loading="lazy" />
            </div>
            <div className="scroll-reveal">
              <SectionHeader tag="BİZ KİMİZ?" title="Misting İzmir Hakkında" align="left" />
              <div className="mt-6 space-y-4" style={{ color: "hsl(var(--text-secondary))" }}>
                <p className="leading-relaxed">
                  Bugün Misting İzmir olarak; kafe, restoran, otel, fabrika, depo, sera, hayvancılık tesisi, üretim alanı, açık etkinlik alanı ve endüstriyel tesisler başta olmak üzere birçok farklı sektöre özel projelendirme, ürün tedariki, montaj ve teknik destek hizmetleri sağlamaktayız.
                </p>
                <p className="leading-relaxed">
                  2006 yılından bu yana hayata geçirdiğimiz birçok önemli projeye imza atmaktan ve bu projelerin sektörde, kullanıcılar nezdinde ve basında dikkatle takip edilmesinden gurur duymaktayız.
                </p>
                <p className="leading-relaxed">
                  Kurumsal faaliyetlerimizi, sektörün önde gelen markalarının yetkili çözüm ortağı olarak sürdürmekteyiz. Geniş ürün yelpazemiz; yüksek basınçlı pompalar, nozullar, paslanmaz çelik bağlantı elemanları, fanlı serinletme sistemleri, sisleme hatları, nemlendirme ekipmanları ve profesyonel uygulama bileşenlerinden oluşmaktadır.
                </p>
                <p className="leading-relaxed">
                  Pompalar hariç ürün gruplarımızın büyük bölümü, %100 yerli üretim anlayışıyla ve 1. sınıf paslanmaz çelik malzemeler kullanılarak üretilmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding" style={{ background: "hsl(var(--surface))" }}>
        <div className="container-main">
          <SectionHeader
            tag="YAKLAŞIMIMIZ"
            title="Standart Ürün Satışı Değil, Projeye Özel Çözüm"
            description="Alan ölçümü, kapasite ihtiyacı, kullanım yoğunluğu, basınç değeri, pompa/nozul seçimi ve borulama planı birlikte değerlendirilir."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { num: "01", icon: Settings, title: "Projelendirme", desc: "Kafe, restoran, otel, fabrika, depo, sera ve endüstriyel tesisler için ihtiyaca özel sistem kurgusu." },
              { num: "02", icon: Zap, title: "Ürün Gücü", desc: "Yüksek basınçlı pompalar, mikro nozullar, paslanmaz bağlantı elemanları ve profesyonel uygulama bileşenleri." },
              { num: "03", icon: Shield, title: "Teknik Destek", desc: "Keşif, montaj, devreye alma ve satış sonrası süreçlerde sürdürülebilir hizmet yaklaşımı." },
            ].map((item, i) => (
              <div
                key={item.num}
                className="scroll-reveal rounded-2xl p-8 text-center card-hover"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-card)",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                <span className="text-5xl font-bold text-[var(--primary)] opacity-30">{item.num}</span>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mt-4 mb-4" style={{ background: "hsl(var(--overlay))" }}>
                  <item.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h4 className="text-xl font-semibold mb-3" style={{ color: "hsl(var(--text-primary))" }}>{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--text-secondary))" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main">
          <SectionHeader
            tag="NEDEN BİZ?"
            title="Misting İzmir'i Seçmeniz İçin Nedenler"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: MapPin, title: "Yerinde Keşif", desc: "Alan, sıcaklık, kullanım yoğunluğu ve hat planına göre çözüm." },
              { icon: Settings, title: "Mühendislik Yaklaşımı", desc: "Pompa, filtre, nozul ve borulama yapısı projeye göre seçilir." },
              { icon: Award, title: "Premium Kalite", desc: "1. sınıf paslanmaz çelik malzemeler ve %100 yerli üretim." },
              { icon: Clock, title: "7/24 Destek", desc: "Satış öncesi ve sonrası sürekli teknik destek hizmeti." },
              { icon: Package, title: "Geniş Ürün Yelpazesi", desc: "Pompa, nozul, vantilatör, ısıtıcı ve filtre çözümleri tek çatı altında." },
              { icon: Users, title: "Sektör Deneyimi", desc: "15+ yıllık tecrübe ve 100+ başarıyla tamamlanan proje." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="scroll-reveal flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid var(--border-light)",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: "hsl(var(--overlay))" }}>
                  <item.icon className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1" style={{ color: "hsl(var(--text-primary))" }}>{item.title}</h4>
                  <p className="text-sm" style={{ color: "hsl(var(--text-secondary))" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: "hsl(var(--surface))" }}>
        <div className="container-main">
          <div
            className="scroll-reveal rounded-3xl p-8 md:p-12 text-center"
            style={{ background: "linear-gradient(135deg, var(--primary) 0%, #0077B6 100%)" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Projeye Özel Çözüm Almak İster Misiniz?
            </h2>
            <p className="text-white/85 max-w-[500px] mx-auto mb-8">
              Hemen bize ulaşın, alanınıza özel keşif ve fiyat teklifi alın.
            </p>
            <Link to="/iletisim" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold transition-all hover:scale-105" style={{ background: "white", color: "hsl(var(--primary))" }}>
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
