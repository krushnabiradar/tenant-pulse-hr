
import { Building2, Users, Layers, Clock, CreditCard } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/super-admin/StatsCard";
import TenantTable from "@/components/super-admin/TenantTable";
import SystemMetricsChart from "@/components/super-admin/SystemMetricsChart";
import AuditLogTable from "@/components/super-admin/AuditLogTable";
import SubscriptionCard from "@/components/super-admin/SubscriptionCard";

const SuperAdmin = () => {
  return (
    <DashboardLayout variant="super-admin" title="Super Admin Dashboard">
      <div className="p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Companies"
            value="42"
            icon={<Building2 className="h-4 w-4" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Total Employees"
            value="1,872"
            icon={<Users className="h-4 w-4" />}
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="System Uptime"
            value="99.98%"
            icon={<Layers className="h-4 w-4" />}
            description="Last 30 days"
          />
          <StatsCard
            title="Monthly Revenue"
            value="$42,580"
            icon={<CreditCard className="h-4 w-4" />}
            trend={{ value: 5, isPositive: true }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <SystemMetricsChart />
          </div>
          <div className="md:col-span-4">
            <SubscriptionCard />
          </div>
        </div>

        <TenantTable />

        <AuditLogTable />
      </div>
    </DashboardLayout>
  );
};

export default SuperAdmin;
