import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OriginSection from "@/components/OriginSection";
import ProductsSection from "@/components/ProductsSection";
import TrustBadges from "@/components/TrustBadges";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ProfessionalSection from "@/components/ProfessionalSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <OriginSection />
        <ProductsSection />
        <TrustBadges />
        <WhySection />
        <TestimonialsSection />
        <GallerySection />
        <ProfessionalSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
