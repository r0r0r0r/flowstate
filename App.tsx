import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { USPSection, EmergencyBanner, GallerySection, BlogSection, ServiceAreasSection, WhyChooseUsSection } from './components/ExtraSections';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <USPSection />
        <Services />
        <About />
        <WhyChooseUsSection />
        <EmergencyBanner />
        <GallerySection />
        <Testimonials />
        <Pricing />
        <BlogSection />
        <ServiceAreasSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;