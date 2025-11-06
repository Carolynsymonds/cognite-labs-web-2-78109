import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
import Approach from "./pages/companies/Approach";
import Advantage from "./pages/companies/Advantage";
import Solutions from "./pages/companies/Solutions";
import CaseStudies from "./pages/companies/CaseStudies";
import Path from "./pages/talent/Path";
import Profile from "./pages/talent/Profile";
import SkillsLab from "./pages/talent/SkillsLab";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/companies/approach" element={<Approach />} />
              <Route path="/companies/advantage" element={<Advantage />} />
              <Route path="/companies/solutions" element={<Solutions />} />
              <Route path="/companies/case-studies" element={<CaseStudies />} />
              <Route path="/talent/path" element={<Path />} />
              <Route path="/talent/profile" element={<Profile />} />
              <Route path="/talent/skills-lab" element={<SkillsLab />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
