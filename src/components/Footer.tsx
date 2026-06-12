import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "Hizmetler", path: "/hizmetler" },
  { label: "Ürünler", path: "/urunler" },
  { label: "Medya", path: "/medya" },
  { label: "Referanslar", path: "/referanslar" },
  { label: "İletişim", path: "/iletisim" },
];

const serviceLinks = [
  "Serinletme & Soğutma",
  "Sisleme & Nemlendirme",
  "Isıtma Sistemleri",
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "hsl(var(--surface))",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/sitelogo.png"
                alt="Misting İzmir"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              Misting İzmir, profesyonel misting, buharlı serinletme,
              nemlendirme ve endüstriyel çözümler sunan İzmir merkezli bir
              şirkettir.
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <Clock className="w-4 h-4 text-[var(--primary)]" />
              <span>Pzt-Cmt: 08:00 - 18:00</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold text-lg mb-4">
              Hızlı Linkler
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold text-lg mb-4">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/hizmetler"
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold text-lg mb-4">
              Bize Ulaşın
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                <div className="text-sm text-[var(--text-secondary)]">
                  <a
                    href="tel:+905357440133"
                    className="hover:text-[var(--primary)] transition-colors block"
                  >
                    +90 535 744 0133
                  </a>
                  <a
                    href="tel:+905401212716"
                    className="hover:text-[var(--primary)] transition-colors block"
                  >
                    +90 540 121 2716
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <a
                  href="mailto:mistingizmir@gmail.com"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                >
                  mistingizmir@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">
                  İzmir, Türkiye
                </span>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/905357440133"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:scale-105"
              style={{ background: "#25D366" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="container-main py-6"
        style={{ borderTop: "1px solid var(--border-light)" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)] text-center sm:text-left">
            © 2025 Misting İzmir. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-[var(--text-muted)] text-center sm:text-right">
            Profesyonel Misting &amp; Buharlı Serinletme Çözümleri
          </p>
        </div>
      </div>
    </footer>
  );
}
