import AttendanceOverview from "@/components/hr-admin/AttendanceOverview";
import LeaveRequestsSummary from "@/components/hr-admin/LeaveRequestsSummary";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/super-admin/StatsCard";
import { CalendarDays, ClipboardList, DollarSign, Users } from "lucide-react";

const HRAdmin = () => {
  return (
    <DashboardLayout variant="hr-admin" title="HR Admin Dashboard">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
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

        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 overflow-x-auto">
            <LeaveRequestsSummary />
          </div>
          <div className="lg:col-span-4">
            <AttendanceOverview />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HRAdmin;
