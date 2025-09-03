import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KuwaitNews from "./pages/KuwaitNews";
import TelecomFiveG from "./pages/TelecomFiveG";
import BankingFintech from "./pages/BankingFintech";
import Cybersecurity from "./pages/Cybersecurity";
import Startups from "./pages/Startups";
import EnterpriseIT from "./pages/EnterpriseIT";
import Company from "./pages/Company";
import Jobs from "./pages/Jobs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kuwait-news" element={<KuwaitNews />} />
          <Route path="/telecom-5g" element={<TelecomFiveG />} />
          <Route path="/banking-fintech" element={<BankingFintech />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/startups" element={<Startups />} />
            <Route path="/enterprise-it" element={<EnterpriseIT />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/company/:slug" element={<Company />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
