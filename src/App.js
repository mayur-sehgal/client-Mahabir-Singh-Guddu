import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import LegacySection from "./components/LegactSection";
import HonoursSection from "./components/HonoursSection";
import GallerySection from "./components/GallerySection";

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/legacy" element={<LegacySection />} />
        <Route path="/honours" element={<HonoursSection />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}
