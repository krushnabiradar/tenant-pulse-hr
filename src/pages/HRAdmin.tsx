
import { CalendarDays, ClipboardList, DollarSign, FileText, Users } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/super-admin/StatsCard";
import EmployeeList from "@/components/hr-admin/EmployeeList";
import AttendanceOverview from "@/components/hr-admin/AttendanceOverview";
import LeaveRequestsSummary from "@/components/hr-admin/LeaveRequestsSummary";
import PayrollStatus from "@/components/hr-admin/PayrollStatus";
import RecruitmentProgress from "@/components/hr-admin/RecruitmentProgress";
import ComplianceDocuments from "@/components/hr-admin/ComplianceDocuments";

const HRAdmin = () => {
  return (
    <DashboardLayout variant="hr-admin" title="HR Admin Dashboard">
      <div className="p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Employees"
            value="124"
            icon={<Users className="h-4 w-4" />}
            trend={{ value: 3, isPositive: true }}
            description="Active employees"
          />
          <StatsCard
            title="Attendance Today"
            value="98%"
            icon={<CalendarDays className="h-4 w-4" />}
            trend={{ value: 2, isPositive: true }}
          />
          <StatsCard
            title="Leave Requests"
            value="8"
            icon={<ClipboardList className="h-4 w-4" />}
            description="Pending approval"
          />
          <StatsCard
            title="Payroll Status"
            value="$48,500"
            icon={<DollarSign className="h-4 w-4" />}
            description="Next run: May 1"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <EmployeeList />
          </div>
          <div className="md:col-span-4">
            <AttendanceOverview />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <LeaveRequestsSummary />
          </div>
          <div className="md:col-span-6">
            <PayrollStatus />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <RecruitmentProgress />
          </div>
          <div className="md:col-span-6">
            <ComplianceDocuments />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HRAdmin;
