import { Link } from "react-router-dom";
import { Droplet, Home, Mail } from "lucide-react";

export default function NotFoundPage() {
  return (
    <>
      <title>Sayfa Bulunamadı | Misting İzmir</title>
      <meta name="robots" content="noindex" />

      <section
        className="min-h-[calc(100dvh-72px)] flex items-center justify-center"
        style={{ background: "hsl(var(--background))" }}
      >
        <div className="container-main text-center py-20">
          {/* 404 Number */}
          <div className="relative inline-block mb-6">
            <span
              className="text-[120px] md:text-[180px] font-bold leading-none animate-fade-in-up"
              style={{ color: "hsl(var(--primary))", opacity: 0.15 }}
            >
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <Droplet className="w-16 h-16 md:w-20 md:h-20 text-[var(--primary)] animate-pulse-slow" />
            </div>
          </div>

          <h1
            className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in-up"
            style={{ color: "hsl(var(--text-primary))", animationDelay: "0.1s" }}
          >
            Sayfa Bulunamadı
          </h1>
          <p
            className="max-w-[450px] mx-auto mb-8 animate-fade-in-up"
            style={{ color: "hsl(var(--text-secondary))", animationDelay: "0.2s" }}
          >
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
            dönerek devam edebilirsiniz.
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              <span>Ana Sayfaya Dön</span>
            </Link>
            <Link to="/iletisim" className="btn-secondary">
              <Mail className="w-4 h-4" />
              <span>İletişime Geç</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
