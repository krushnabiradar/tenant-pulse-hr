import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, CheckCircle, FileText } from "lucide-react";

const HRAdminCompliance = () => {
  const complianceMetrics = [
    { id: 1, category: "Employee Documentation", status: 95, color: "text-green-600" },
    { id: 2, category: "Training Certifications", status: 88, color: "text-green-600" },
    { id: 3, category: "Safety Protocols", status: 72, color: "text-yellow-600" },
    { id: 4, category: "Policy Acknowledgments", status: 65, color: "text-red-600" },
  ];

  const upcomingDeadlines = [
    { task: "Annual Safety Training", dueDate: "2024-02-15", priority: "High", daysLeft: 10 },
    { task: "Benefits Enrollment Review", dueDate: "2024-02-28", priority: "Medium", daysLeft: 23 },
    { task: "Performance Review Completion", dueDate: "2024-03-15", priority: "High", daysLeft: 38 },
    { task: "Payroll Tax Filing", dueDate: "2024-03-31", priority: "Critical", daysLeft: 54 },
  ];

  const recentAlerts = [
    { message: "5 employees need updated I-9 forms", severity: "warning", date: "2024-01-20" },
    { message: "3 safety certifications expiring soon", severity: "warning", date: "2024-01-19" },
    { message: "Annual compliance audit scheduled", severity: "info", date: "2024-01-18" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "destructive";
      case "High": return "default";
      case "Medium": return "secondary";
      default: return "outline";
    }
  };

  return (
    <DashboardLayout variant="hr-admin" title="Compliance">
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Compliance</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82%</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Issues</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Needs attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documents</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">Total records</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border rounded-lg"
                >
                  <AlertTriangle className={`h-5 w-5 ${alert.severity === "warning" ? "text-yellow-500" : "text-blue-500"}`} />
                  <div className="flex-1">
                    <p className="font-medium">{alert.message}</p>
                    <p className="text-sm text-muted-foreground">{alert.date}</p>
                  </div>
                  <Button variant="outline" size="sm">Review</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Compliance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Compliance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {complianceMetrics.map((metric) => (
                <div key={metric.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{metric.category}</span>
                    <span className={`font-bold ${metric.color}`}>{metric.status}%</span>
                  </div>
                  <Progress value={metric.status} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold">{deadline.task}</h3>
                    <p className="text-sm text-muted-foreground">Due: {deadline.dueDate}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{deadline.daysLeft}</p>
                      <p className="text-xs text-muted-foreground">days left</p>
                    </div>
                    <Badge variant={getPriorityColor(deadline.priority)}>
                      {deadline.priority}
                    </Badge>
                    <Button variant="outline" size="sm">View</Button>
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

export default HRAdminCompliance;
