import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/globals.css';

/**
 * Main App Component
 * Orchestrates all sections and layout
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner text="Loading Portfolio..." />;
  }

  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Certificates Section */}
        <CertificatesSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
