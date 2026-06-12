import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import MediaPage from "./pages/MediaPage";
import ReferencesPage from "./pages/ReferencesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/hizmetler" element={<ServicesPage />} />
        <Route path="/urunler" element={<ProductsPage />} />
        <Route path="/medya" element={<MediaPage />} />
        <Route path="/referanslar" element={<ReferencesPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
