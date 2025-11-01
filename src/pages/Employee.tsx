import AnnouncementsCard from "@/components/employee/AnnouncementsCard";
import AttendanceCard from "@/components/employee/AttendanceCard";
import LeaveRequestCard from "@/components/employee/LeaveRequestCard";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Employee = () => {
  return (
    <DashboardLayout variant="employee" title="Employee Dashboard">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold">Welcome, John</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Top row */}
          <AttendanceCard />
          <LeaveRequestCard />

          {/* Bottom row */}
          <AnnouncementsCard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Employee;
