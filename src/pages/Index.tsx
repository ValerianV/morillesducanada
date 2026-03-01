import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const OriginSection = lazy(() => import("@/components/OriginSection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const TrustBadges = lazy(() => import("@/components/TrustBadges"));
const WhySection = lazy(() => import("@/components/WhySection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const ProfessionalSection = lazy(() => import("@/components/ProfessionalSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const FloatingCTA = lazy(() => import("@/components/FloatingCTA"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={null}>
          <OriginSection />
          <ProductsSection />
          <TrustBadges />
          <WhySection />
          <ProcessSection />
          <GallerySection />
          <ProfessionalSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <FloatingCTA />
      </Suspense>
    </div>
  );
};

export default Index;
