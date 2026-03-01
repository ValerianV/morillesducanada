import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OriginSection from "@/components/OriginSection";
import ProductsSection from "@/components/ProductsSection";
import WhySection from "@/components/WhySection";
import GallerySection from "@/components/GallerySection";
import ProfessionalSection from "@/components/ProfessionalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OriginSection />
      <ProductsSection />
      <WhySection />
      <GallerySection />
      <ProfessionalSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
