import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import SectionPage from "./pages/SectionPage";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Nav />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<SectionPage section="about" />} />
          <Route path="/work" element={<SectionPage section="work" />} />
          <Route path="/contact" element={<SectionPage section="contact" />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
