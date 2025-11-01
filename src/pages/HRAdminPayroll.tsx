import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Users, Calendar } from "lucide-react";

const HRAdminPayroll = () => {
  const payrollSummary = [
    { month: "January 2024", totalAmount: "$450,000", employees: 150, status: "Processed" },
    { month: "December 2023", totalAmount: "$445,000", employees: 148, status: "Completed" },
    { month: "November 2023", totalAmount: "$442,000", employees: 147, status: "Completed" },
  ];

  const upcomingPayments = [
    { employee: "John Doe", department: "Engineering", amount: "$8,500", date: "2024-02-01" },
    { employee: "Jane Smith", department: "Marketing", amount: "$7,200", date: "2024-02-01" },
    { employee: "Mike Johnson", department: "Sales", amount: "$6,800", date: "2024-02-01" },
    { employee: "Sarah Williams", department: "HR", amount: "$7,500", date: "2024-02-01" },
  ];

  return (
    <DashboardLayout variant="hr-admin" title="Payroll Management">
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$450,000</div>
              <p className="text-xs text-muted-foreground">Current month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Employees Paid</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">150</div>
              <p className="text-xs text-muted-foreground">Active employees</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,000</div>
              <p className="text-xs text-muted-foreground">Per employee</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Payroll</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Feb 1</div>
              <p className="text-xs text-muted-foreground">In 5 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Payroll History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Payroll History</CardTitle>
            <Button>Generate Report</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payrollSummary.map((payroll, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold">{payroll.month}</h3>
                    <p className="text-sm text-muted-foreground">
                      {payroll.employees} employees
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold">{payroll.totalAmount}</p>
                      <Badge variant={payroll.status === "Processed" ? "default" : "secondary"}>
                        {payroll.status}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Payments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Payments</CardTitle>
            <Button variant="outline">Process Payroll</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingPayments.map((payment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold">{payment.employee}</h3>
                    <p className="text-sm text-muted-foreground">{payment.department}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg font-bold">{payment.amount}</p>
                      <p className="text-xs text-muted-foreground">{payment.date}</p>
                    </div>
                    <Button variant="outline" size="sm">Preview</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HRAdminPayroll;
