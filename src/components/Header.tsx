import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown, Phone } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  {
    label: "Hizmetler",
    path: "/hizmetler",
    children: [
      { label: "Serinletme & Soğutma", path: "/hizmetler" },
      { label: "Sisleme & Nemlendirme", path: "/hizmetler" },
      { label: "Isıtma Sistemleri", path: "/hizmetler" },
    ],
  },
  {
    label: "Ürünler",
    path: "/urunler",
    children: [
      { label: "Vantilatörler", path: "/urunler" },
      { label: "Nozullar", path: "/urunler" },
      { label: "Pompalar", path: "/urunler" },
      { label: "Isıtıcılar", path: "/urunler" },
      { label: "Filtreler", path: "/urunler" },
    ],
  },
  { label: "Medya", path: "/medya" },
  { label: "Referanslar", path: "/referanslar" },
  { label: "İletişim", path: "/iletisim" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
        style={{
          background: scrolled
            ? "hsl(var(--surface))"
            : "rgba(255,255,255,0.8)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-light)",
          boxShadow: scrolled ? "var(--shadow-nav)" : "none",
        }}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/sitelogo.png"
              alt="Misting İzmir"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                        isActive(link.path)
                          ? "text-[var(--primary)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--primary)]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div
                        className="absolute top-full left-0 mt-1 py-2 rounded-xl min-w-[200px] nav-dropdown show"
                        style={{
                          background: "var(--surface-elevated)",
                          border: "1px solid var(--border)",
                          boxShadow: "var(--shadow-dropdown)",
                        }}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block px-5 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--overlay)] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-[15px] font-medium transition-colors link-underline ${
                      isActive(link.path)
                        ? "text-[var(--primary)] font-semibold"
                        : "text-[var(--text-secondary)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: "var(--surface-elevated)",
                border: "1px solid var(--border)",
              }}
              aria-label="Tema değiştir"
              title="Tema Değiştir"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-[var(--text-primary)]" />
              ) : (
                <Sun className="w-4 h-4 text-[var(--primary)]" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/iletisim"
              className="hidden md:flex btn-primary text-sm py-2 px-4"
            >
              <Phone className="w-4 h-4" />
              <span>Teklif Al</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "var(--surface-elevated)" }}
              aria-label="Menü"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-[var(--text-primary)]" />
              ) : (
                <Menu className="w-5 h-5 text-[var(--text-primary)]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] p-6 overflow-y-auto animate-fade-in-up"
            style={{
              background: "hsl(var(--background))",
              animation: "slideInRight 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "var(--surface-elevated)" }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.label ? null : link.label)
                        }
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-lg font-medium text-[var(--text-primary)]"
                        style={{ background: "var(--surface-elevated)" }}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              className="px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--primary)]"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                        isActive(link.path)
                          ? "text-[var(--primary)]"
                          : "text-[var(--text-primary)]"
                      }`}
                      style={{ background: isActive(link.path) ? "hsl(var(--overlay))" : "transparent" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-6 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
              <a
                href="tel:+905357440133"
                className="btn-primary w-full justify-center"
              >
                <Phone className="w-4 h-4" />
                <span>+90 535 744 0133</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
