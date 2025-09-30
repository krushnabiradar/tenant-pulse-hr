import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/super-admin/StatsCard";
import SubscriptionCard from "@/components/super-admin/SubscriptionCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building2, CreditCard, Layers, Users } from "lucide-react";

const SuperAdmin = () => {
  const subscriptions = [
    {
      id: 1,
      company: "Acme Corp",
      plan: "Enterprise",
      amount: "$999",
      status: "Active",
      nextBilling: "2024-02-01",
    },
    {
      id: 2,
      company: "Tech Co",
      plan: "Professional",
      amount: "$499",
      status: "Active",
      nextBilling: "2024-02-15",
    },
    {
      id: 3,
      company: "Startup Inc",
      plan: "Starter",
      amount: "$99",
      status: "Trial",
      nextBilling: "2024-01-25",
    },
    {
      id: 4,
      company: "Global Ltd",
      plan: "Enterprise",
      amount: "$999",
      status: "Past Due",
      nextBilling: "2024-01-10",
    },
  ];
  return (
    <DashboardLayout variant="super-admin" title="Super Admin Dashboard">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
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

        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Details</CardTitle>
                <CardDescription>
                  Manage and monitor all active subscriptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Next Billing</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscriptions.map((sub) => (
                      <TableRow key={sub.id}>
                        <TableCell className="font-medium">
                          {sub.company}
                        </TableCell>
                        <TableCell>{sub.plan}</TableCell>
                        <TableCell>{sub.amount}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              sub.status === "Active"
                                ? "default"
                                : sub.status === "Trial"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {sub.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{sub.nextBilling}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            Manage
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-4">
            <SubscriptionCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdmin;
