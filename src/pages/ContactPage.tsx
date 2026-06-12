import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ContactPage() {
  useScrollReveal(".scroll-reveal", 0.15);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Teklif Al", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.phone && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <title>İletişim | Misting İzmir - Keşif ve Teklif</title>
      <meta name="description" content="Misting İzmir iletişim bilgileri. Teklif almak ve teknik destek için bize ulaşın. +90 535 744 0133" />
      <meta name="keywords" content="misting izmir iletişim, serinletme teklif, sisleme fiyat" />

      {/* Page Header */}
      <section className="pt-28 pb-16 text-center" style={{ background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%)" }}>
        <div className="container-main scroll-reveal">
          <nav className="text-sm mb-4" style={{ color: "hsl(var(--text-muted))" }}>
            <Link to="/" className="hover:text-[var(--primary)] transition-colors">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span>İletişim</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "hsl(var(--text-primary))" }}>İletişim</h1>
          <p className="mt-4 max-w-[600px] mx-auto" style={{ color: "hsl(var(--text-secondary))" }}>
            Keşif, projelendirme, ürün seçimi ve teknik destek için bize ulaşın.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div
              className="scroll-reveal rounded-2xl p-8 text-center card-hover"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "hsl(var(--overlay))" }}>
                <Phone className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--text-primary))" }}>Telefon & WhatsApp</h4>
              <div className="space-y-1 text-sm" style={{ color: "hsl(var(--text-secondary))" }}>
                <a href="tel:+905357440133" className="block hover:text-[var(--primary)] transition-colors">+90 535 744 0133</a>
                <a href="tel:+905401212716" className="block hover:text-[var(--primary)] transition-colors">+90 540 121 2716</a>
              </div>
              <a
                href="https://wa.me/905357440133"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:scale-105"
                style={{ background: "#25D366" }}
              >
                WhatsApp'tan Yazın
              </a>
            </div>

            {/* Email */}
            <div
              className="scroll-reveal rounded-2xl p-8 text-center card-hover"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-card)",
                animationDelay: "0.15s",
              }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "hsl(var(--overlay))" }}>
                <Mail className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--text-primary))" }}>E-posta</h4>
              <a href="mailto:mistingizmir@gmail.com" className="text-sm hover:text-[var(--primary)] transition-colors" style={{ color: "hsl(var(--text-secondary))" }}>
                mistingizmir@gmail.com
              </a>
            </div>

            {/* Location */}
            <div
              className="scroll-reveal rounded-2xl p-8 text-center card-hover"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-card)",
                animationDelay: "0.3s",
              }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "hsl(var(--overlay))" }}>
                <MapPin className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: "hsl(var(--text-primary))" }}>Konum</h4>
              <p className="text-sm" style={{ color: "hsl(var(--text-secondary))" }}>İzmir, Türkiye</p>
              <a
                href="https://maps.google.com/?q=İzmir,Türkiye"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all hover:scale-105"
                style={{ borderColor: "hsl(var(--primary))", color: "hsl(var(--primary))" }}
              >
                Haritada Gör
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding" style={{ background: "hsl(var(--surface))" }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Info */}
            <div className="scroll-reveal">
              <SectionHeader tag="BİZE ULAŞIN" title="Teklif ve Bilgi Talebi" align="left" />
              <p className="mt-4 leading-relaxed" style={{ color: "hsl(var(--text-secondary))" }}>
                Aşağıdaki formu doldurarak bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--primary)]" />
                  <div>
                    <p className="text-sm font-medium" style={{ color: "hsl(var(--text-primary))" }}>Çalışma Saatleri</p>
                    <p className="text-sm" style={{ color: "hsl(var(--text-secondary))" }}>Pazartesi - Cuma: 08:00 - 18:00</p>
                    <p className="text-sm" style={{ color: "hsl(var(--text-secondary))" }}>Cumartesi: 09:00 - 14:00</p>
                    <p className="text-sm" style={{ color: "hsl(var(--text-secondary))" }}>Pazar: Kapalı (Acil durumlar için ulaşılabilir)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div
              className="scroll-reveal rounded-2xl p-6 md:p-8"
              style={{
                background: "hsl(var(--background))",
                border: "1px solid var(--border-light)",
                animationDelay: "0.2s",
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#10B981" }}>
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "hsl(var(--text-primary))" }}>
                    Mesajınız Gönderildi!
                  </h3>
                  <p style={{ color: "hsl(var(--text-secondary))" }}>
                    En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--text-primary))" }}>Ad Soyad *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Adınız ve Soyadınız"
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all"
                      style={{ background: "hsl(var(--card))", border: "1.5px solid var(--border)", color: "hsl(var(--text-primary))" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--text-primary))" }}>E-posta *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="E-posta adresiniz"
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all"
                      style={{ background: "hsl(var(--card))", border: "1.5px solid var(--border)", color: "hsl(var(--text-primary))" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--text-primary))" }}>Telefon *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Telefon numaranız"
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all"
                      style={{ background: "hsl(var(--card))", border: "1.5px solid var(--border)", color: "hsl(var(--text-primary))" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--text-primary))" }}>Konu</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all"
                      style={{ background: "hsl(var(--card))", border: "1.5px solid var(--border)", color: "hsl(var(--text-primary))" }}
                    >
                      <option>Teklif Al</option>
                      <option>Bilgi Talebi</option>
                      <option>Teknik Destek</option>
                      <option>Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--text-primary))" }}>Mesaj *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all resize-none"
                      style={{ background: "hsl(var(--card))", border: "1.5px solid var(--border)", color: "hsl(var(--text-primary))" }}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-4 h-4" />
                    <span>Gönder</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full" style={{ height: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312615.7512913257!2d26.8046631!3d38.4175917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a7b2e1a7%3A0x68cc62d5c9735956!2sİzmir!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "var(--map-filter, none)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Misting İzmir Konum"
        />
      </section>
    </>
  );
}
