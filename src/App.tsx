
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import SuperAdmin from "./pages/SuperAdmin";
import SuperAdminCompanies from "./pages/SuperAdminCompanies";
import SuperAdminEmployees from "./pages/SuperAdminEmployees";
import SuperAdminSystemMetrics from "./pages/SuperAdminSystemMetrics";
import SuperAdminSubscriptions from "./pages/SuperAdminSubscriptions";
import SuperAdminAuditLogs from "./pages/SuperAdminAuditLogs";
import SuperAdminSecurity from "./pages/SuperAdminSecurity";
import HRAdmin from "./pages/HRAdmin";
import HRAdminEmployees from "./pages/HRAdminEmployees";
import HRAdminAttendance from "./pages/HRAdminAttendance";
import HRAdminLeave from "./pages/HRAdminLeave";
import HRAdminPayroll from "./pages/HRAdminPayroll";
import HRAdminRecruitment from "./pages/HRAdminRecruitment";
import HRAdminCompliance from "./pages/HRAdminCompliance";
import HRAdminPerformance from "./pages/HRAdminPerformance";
import Employee from "./pages/Employee";
import EmployeeProfile from "./pages/EmployeeProfile";
import EmployeeAttendance from "./pages/EmployeeAttendance";
import EmployeeLeave from "./pages/EmployeeLeave";
import EmployeePayslips from "./pages/EmployeePayslips";
import EmployeeDocuments from "./pages/EmployeeDocuments";
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
          <Route path="/super-admin/employees" element={<SuperAdminEmployees />} />
          <Route path="/super-admin/system-metrics" element={<SuperAdminSystemMetrics />} />
          <Route path="/super-admin/subscriptions" element={<SuperAdminSubscriptions />} />
          <Route path="/super-admin/audit-logs" element={<SuperAdminAuditLogs />} />
          <Route path="/super-admin/security" element={<SuperAdminSecurity />} />
          
          {/* HR Admin Routes */}
          <Route path="/hr-admin" element={<HRAdmin />} />
          <Route path="/hr-admin/employees" element={<HRAdminEmployees />} />
          <Route path="/hr-admin/attendance" element={<HRAdminAttendance />} />
          <Route path="/hr-admin/leave" element={<HRAdminLeave />} />
          <Route path="/hr-admin/payroll" element={<HRAdminPayroll />} />
          <Route path="/hr-admin/recruitment" element={<HRAdminRecruitment />} />
          <Route path="/hr-admin/compliance" element={<HRAdminCompliance />} />
          <Route path="/hr-admin/performance" element={<HRAdminPerformance />} />
          
          {/* Employee Routes */}
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/profile" element={<EmployeeProfile />} />
          <Route path="/employee/attendance" element={<EmployeeAttendance />} />
          <Route path="/employee/leave" element={<EmployeeLeave />} />
          <Route path="/employee/payslips" element={<EmployeePayslips />} />
          <Route path="/employee/documents" element={<EmployeeDocuments />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
