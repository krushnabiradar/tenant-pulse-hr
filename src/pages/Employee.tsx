
import DashboardLayout from "@/components/layout/DashboardLayout";
import AttendanceCard from "@/components/employee/AttendanceCard";
import PayslipCard from "@/components/employee/PayslipCard";
import LeaveRequestCard from "@/components/employee/LeaveRequestCard";
import PerformanceCard from "@/components/employee/PerformanceCard";
import AnnouncementsCard from "@/components/employee/AnnouncementsCard";

const Employee = () => {
  return (
    <DashboardLayout variant="employee" title="Employee Dashboard">
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Welcome, John</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top row */}
          <AttendanceCard />
          <LeaveRequestCard />
          
          {/* Middle row - full width */}
          <div className="col-span-1 md:col-span-2">
            <PayslipCard />
          </div>
          
          {/* Bottom row */}
          <PerformanceCard />
          <AnnouncementsCard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Employee;
