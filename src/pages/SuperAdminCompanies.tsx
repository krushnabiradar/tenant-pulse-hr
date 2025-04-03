
import DashboardLayout from "@/components/layout/DashboardLayout";
import TenantTable from "@/components/super-admin/TenantTable";

const SuperAdminCompanies = () => {
  return (
    <DashboardLayout variant="super-admin" title="Company Management">
      <div className="p-6 space-y-6">
        <TenantTable />
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminCompanies;
