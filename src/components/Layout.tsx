import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { ThemeProvider } from "../hooks/useTheme";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Layout() {
  useScrollReveal(".scroll-reveal", 0.15);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-[100dvh]">
        <Header />
        <main className="flex-1 pt-[72px]">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
