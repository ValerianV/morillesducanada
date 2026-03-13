import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { I18nProvider } from "@/i18n/context";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Auth = lazy(() => import("./pages/Auth"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const CGV = lazy(() => import("./pages/CGV"));
const Livraison = lazy(() => import("./pages/Livraison"));
const Recettes = lazy(() => import("./pages/Recettes"));
const RecetteDetail = lazy(() => import("./pages/RecetteDetail"));
const Profil = lazy(() => import("./pages/Profil"));
const GuideMorellesDeFeu = lazy(() => import("./pages/GuideMorellesDeFeu"));
const PreOrder = lazy(() => import("./pages/PreOrder"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const PreOrderSuccess = lazy(() => import("./pages/PreOrderSuccess"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <I18nProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/cgv" element={<CGV />} />
                <Route path="/livraison" element={<Livraison />} />
                <Route path="/recettes" element={<Recettes />} />
                <Route path="/recettes/:slug" element={<RecetteDetail />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/guide-morilles-de-feu" element={<GuideMorellesDeFeu />} />
                <Route path="/pre-commande" element={<PreOrder />} />
                <Route path="/paiement-reussi" element={<PaymentSuccess />} />
                <Route path="/precommande-confirmee" element={<PreOrderSuccess />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </I18nProvider>
  </HelmetProvider>
);

export default App;
