
import DashboardLayout from "@/components/layout/DashboardLayout";
import TenantTable from "@/components/super-admin/TenantTable";

const SuperAdminCompanies = () => {
  return (
    <DashboardLayout variant="super-admin" title="Company Management">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <div className="overflow-x-auto">
          <TenantTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminCompanies;
