
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import SuperAdmin from "./pages/SuperAdmin";
import SuperAdminCompanies from "./pages/SuperAdminCompanies";
import HRAdmin from "./pages/HRAdmin";
import Employee from "./pages/Employee";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Super Admin Routes */}
          <Route path="/super-admin" element={<SuperAdmin />} />
          <Route path="/super-admin/companies" element={<SuperAdminCompanies />} />
          
          {/* HR Admin Routes */}
          <Route path="/hr-admin" element={<HRAdmin />} />
          
          {/* Employee Routes */}
          <Route path="/employee" element={<Employee />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
