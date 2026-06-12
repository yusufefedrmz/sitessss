import { Link } from "react-router-dom";
import { FileText, Camera, Play, Calendar } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const categories = [
  {
    image: "/images/media-blog.jpg",
    icon: FileText,
    title: "Blog",
    desc: "Misting, serinletme ve nemlendirme hakkında teknik bilgiler, sektör haberleri ve uygulama örnekleri.",
    count: "12 Yazı",
  },
  {
    image: "/images/media-gallery.jpg",
    icon: Camera,
    title: "Fotoğraf Galeri",
    desc: "Tamamlanan projelerden, ürün görsellerinden ve saha uygulamalarından fotoğraflar.",
    count: "48 Fotoğraf",
  },
  {
    image: "/images/media-video.jpg",
    icon: Play,
    title: "Video Galeri",
    desc: "Misting sistemleri kurulum, çalışma ve uygulama videoları.",
    count: "15 Video",
  },
];

const featured = [
  {
    image: "/images/featured-1.jpg",
    type: "Blog",
    icon: FileText,
    title: "Misting Sistemleri Nasıl Çalışır?",
    desc: "Yüksek basınçlı sisleme sistemlerinin çalışma prensibi ve uygulama alanları.",
    date: "12 Haziran 2025",
  },
  {
    image: "/images/featured-2.jpg",
    type: "Fotoğraf",
    icon: Camera,
    title: "Kafe Terası Serinletme Projesi",
    desc: "İzmir'de tamamlanan kafe terası misting sistem kurulumu.",
    date: "8 Haziran 2025",
  },
  {
    image: "/images/featured-3.jpg",
    type: "Video",
    icon: Play,
    title: "Endüstriyel Sisleme Sistemi Kurulumu",
    desc: "Fabrika içi nemlendirme ve toz bastırma sistemi kurulum videosu.",
    date: "5 Haziran 2025",
  },
];

export default function MediaPage() {
  useScrollReveal(".scroll-reveal", 0.15);

  return (
    <>
      <title>Medya Merkezi | Blog, Galeri ve Videolar - Misting İzmir</title>
      <meta name="description" content="Misting ve serinletme hakkında blog yazıları, proje fotoğrafları ve video içerikler." />

      {/* Page Header */}
      <section className="pt-28 pb-16 text-center" style={{ background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-elevated) 100%)" }}>
        <div className="container-main scroll-reveal">
          <nav className="text-sm mb-4" style={{ color: "hsl(var(--text-muted))" }}>
            <Link to="/" className="hover:text-[var(--primary)] transition-colors">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span>Medya</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "hsl(var(--text-primary))" }}>Medya Merkezi</h1>
          <p className="mt-4 max-w-[600px] mx-auto" style={{ color: "hsl(var(--text-secondary))" }}>
            Blog yazılarımız, fotoğraf galerimiz ve video içeriklerimiz.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding" style={{ background: "hsl(var(--background))" }}>
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className="scroll-reveal card-hover rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-card)",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                      <cat.icon className="w-7 h-7 text-[var(--primary)]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold" style={{ color: "hsl(var(--text-primary))" }}>{cat.title}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: "hsl(var(--primary))" }}>{cat.count}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--text-secondary))" }}>{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)]">
                    İncele →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section-padding" style={{ background: "hsl(var(--surface))" }}>
        <div className="container-main">
          <SectionHeader tag="ÖNE ÇIKANLAR" title="Son Paylaşılan İçerikler" />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((item, i) => (
              <div
                key={item.title}
                className="scroll-reveal card-hover rounded-2xl overflow-hidden"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-card)",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" loading="lazy" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1" style={{ background: "hsl(var(--primary))" }}>
                    <item.icon className="w-3 h-3" /> {item.type}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--text-primary))" }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "hsl(var(--text-secondary))" }}>{item.desc}</p>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "hsl(var(--text-muted))" }}>
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
