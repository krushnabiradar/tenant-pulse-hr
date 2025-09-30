import DashboardLayout from "@/components/layout/DashboardLayout";
import SubscriptionCard from "@/components/super-admin/SubscriptionCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, CreditCard, AlertCircle } from "lucide-react";

const SuperAdminSubscriptions = () => {
  const subscriptions = [
    { id: 1, company: "Acme Corp", plan: "Enterprise", amount: "$999", status: "Active", nextBilling: "2024-02-01" },
    { id: 2, company: "Tech Co", plan: "Professional", amount: "$499", status: "Active", nextBilling: "2024-02-15" },
    { id: 3, company: "Startup Inc", plan: "Starter", amount: "$99", status: "Trial", nextBilling: "2024-01-25" },
    { id: 4, company: "Global Ltd", plan: "Enterprise", amount: "$999", status: "Past Due", nextBilling: "2024-01-10" },
  ];

  return (
    <DashboardLayout variant="super-admin" title="Subscription Management">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <h1 className="text-2xl font-bold">Subscription Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground">8 new this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+24%</div>
              <p className="text-xs text-muted-foreground">Year over year</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Past Due</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Details</CardTitle>
                <CardDescription>Manage and monitor all active subscriptions</CardDescription>
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
                        <TableCell className="font-medium">{sub.company}</TableCell>
                        <TableCell>{sub.plan}</TableCell>
                        <TableCell>{sub.amount}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              sub.status === "Active" ? "default" : 
                              sub.status === "Trial" ? "secondary" : 
                              "destructive"
                            }
                          >
                            {sub.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{sub.nextBilling}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">Manage</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <SubscriptionCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminSubscriptions;