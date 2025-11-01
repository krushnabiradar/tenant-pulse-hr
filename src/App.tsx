import { ThemeProvider } from "@/components/theme-provider";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth";
import Employee from "./pages/Employee";
import EmployeeAttendance from "./pages/EmployeeAttendance";
import EmployeeDocuments from "./pages/EmployeeDocuments";
import EmployeeLeave from "./pages/EmployeeLeave";
import EmployeeProfile from "./pages/EmployeeProfile";
import HRAdmin from "./pages/HRAdmin";
import HRAdminAttendance from "./pages/HRAdminAttendance";
import HRAdminEmployees from "./pages/HRAdminEmployees";
import HRAdminLeave from "./pages/HRAdminLeave";
import HRAdminRecruitment from "./pages/HRAdminRecruitment";
import HRAdminPayroll from "./pages/HRAdminPayroll";
import HRAdminCompliance from "./pages/HRAdminCompliance";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SuperAdmin from "./pages/SuperAdmin";
import SuperAdminAuditLogs from "./pages/SuperAdminAuditLogs";
import SuperAdminCompanies from "./pages/SuperAdminCompanies";
import SuperAdminCompanyDetails from "./pages/SuperAdminCompanyDetails";
import SuperAdminCompanyEdit from "./pages/SuperAdminCompanyEdit";
import SuperAdminCompanySubscription from "./pages/SuperAdminCompanySubscription";
import SuperAdminEmployees from "./pages/SuperAdminEmployees";
import SuperAdminSubscriptions from "./pages/SuperAdminSubscriptions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="hr-app-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />

            {/* Super Admin Routes */}
            <Route path="/super-admin" element={<SuperAdmin />} />
            <Route
              path="/super-admin/companies"
              element={<SuperAdminCompanies />}
            />
            <Route
              path="/super-admin/companies/:id"
              element={<SuperAdminCompanyDetails />}
            />
            <Route
              path="/super-admin/companies/:id/edit"
              element={<SuperAdminCompanyEdit />}
            />
            <Route
              path="/super-admin/companies/:id/subscription"
              element={<SuperAdminCompanySubscription />}
            />
            <Route
              path="/super-admin/users"
              element={<SuperAdminEmployees />}
            />
            <Route
              path="/super-admin/subscriptions"
              element={<SuperAdminSubscriptions />}
            />
            <Route
              path="/super-admin/audit-logs"
              element={<SuperAdminAuditLogs />}
            />

            {/* HR Admin Routes */}
            <Route path="/hr-admin" element={<HRAdmin />} />
            <Route path="/hr-admin/employees" element={<HRAdminEmployees />} />
            <Route
              path="/hr-admin/attendance"
              element={<HRAdminAttendance />}
            />
            <Route path="/hr-admin/leave" element={<HRAdminLeave />} />
            <Route path="/hr-admin/recruitment" element={<HRAdminRecruitment />} />
            <Route path="/hr-admin/payroll" element={<HRAdminPayroll />} />
            <Route path="/hr-admin/compliance" element={<HRAdminCompliance />} />

            {/* Employee Routes */}
            <Route path="/employee" element={<Employee />} />
            <Route path="/employee/profile" element={<EmployeeProfile />} />
            <Route
              path="/employee/attendance"
              element={<EmployeeAttendance />}
            />
            <Route path="/employee/leave" element={<EmployeeLeave />} />
            <Route path="/employee/documents" element={<EmployeeDocuments />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
