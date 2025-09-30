import LeaveRequestsSummary from "@/components/hr-admin/LeaveRequestsSummary";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, Calendar, CheckCircle, Clock } from "lucide-react";

const HRAdminLeave = () => {
  const { toast } = useToast();

  const handleApprove = () => {
    toast({
      title: "Leave Approved",
      description:
        "The leave request has been approved and the employee has been notified.",
    });
  };

  const handleReject = () => {
    toast({
      title: "Leave Rejected",
      description:
        "The leave request has been rejected and the employee has been notified.",
    });
  };

  const leaveRequests = [
    {
      id: 1,
      employee: "John Doe",
      type: "Annual Leave",
      from: "2025-10-05",
      to: "2025-10-10",
      days: 5,
      status: "pending",
      reason: "Family vacation",
    },
    {
      id: 2,
      employee: "Jane Smith",
      type: "Sick Leave",
      from: "2025-10-01",
      to: "2025-10-02",
      days: 2,
      status: "approved",
      reason: "Medical appointment",
    },
    {
      id: 3,
      employee: "Bob Johnson",
      type: "Personal Leave",
      from: "2025-10-01",
      to: "2025-10-01",
      days: 1,
      status: "approved",
      reason: "Personal matters",
    },
    {
      id: 4,
      employee: "Sarah Wilson",
      type: "Annual Leave",
      from: "2025-10-01",
      to: "2025-10-03",
      days: 3,
      status: "approved",
      reason: "Wedding anniversary",
    },
    {
      id: 5,
      employee: "Mike Brown",
      type: "Sick Leave",
      from: "2025-10-01",
      to: "2025-10-01",
      days: 1,
      status: "pending",
      reason: "Feeling unwell",
    },
    {
      id: 6,
      employee: "Emily Davis",
      type: "Personal Leave",
      from: "2025-09-30",
      to: "2025-10-02",
      days: 3,
      status: "rejected",
      reason: "Family emergency",
    },
    {
      id: 7,
      employee: "Tom Wilson",
      type: "Annual Leave",
      from: "2025-10-01",
      to: "2025-10-07",
      days: 7,
      status: "pending",
      reason: "Vacation",
    },
    {
      id: 8,
      employee: "Lisa Anderson",
      type: "Sick Leave",
      from: "2025-10-01",
      to: "2025-10-02",
      days: 2,
      status: "approved",
      reason: "Doctor's appointment",
    },
    {
      id: 9,
      employee: "James Martin",
      type: "Personal Leave",
      from: "2025-10-02",
      to: "2025-10-02",
      days: 1,
      status: "pending",
      reason: "Personal matters",
    },
    {
      id: 10,
      employee: "Amy Chen",
      type: "Annual Leave",
      from: "2025-10-01",
      to: "2025-10-04",
      days: 4,
      status: "approved",
      reason: "Family reunion",
    },
  ];

  return (
    <DashboardLayout variant="hr-admin" title="Leave Management">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <h1 className="text-2xl font-bold">Leave Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Requests
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Approved Today
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Leave requests approved
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                On Leave Today
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">
                Employees on leave
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Urgent</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                Require immediate action
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="all">All Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <LeaveRequestsSummary />
          </TabsContent>

          <TabsContent value="approved">
            <Card>
              <CardHeader>
                <CardTitle>Approved Requests</CardTitle>
                <CardDescription>
                  Previously approved leave applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveRequests
                    .filter((r) => r.status === "approved")
                    .map((request) => (
                      <div
                        key={request.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="space-y-1">
                          <p className="font-medium">{request.employee}</p>
                          <p className="text-sm text-muted-foreground">
                            {request.type} • {request.from} to {request.to} (
                            {request.days} days)
                          </p>
                          <p className="text-sm">Reason: {request.reason}</p>
                        </div>
                        <Badge variant="destructive">{request.status}</Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rejected">
            <Card>
              <CardHeader>
                <CardTitle>Rejected Requests</CardTitle>
                <CardDescription>
                  Previously rejected leave applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveRequests
                    .filter((r) => r.status === "rejected")
                    .map((request) => (
                      <div
                        key={request.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="space-y-1">
                          <p className="font-medium">{request.employee}</p>
                          <p className="text-sm text-muted-foreground">
                            {request.type} • {request.from} to {request.to} (
                            {request.days} days)
                          </p>
                          <p className="text-sm">Reason: {request.reason}</p>
                        </div>
                        <Badge variant="destructive">{request.status}</Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>All Leave Requests</CardTitle>
                <CardDescription>
                  Complete history of all leave requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{request.employee}</p>
                        <p className="text-sm text-muted-foreground">
                          {request.type} • {request.from} to {request.to} (
                          {request.days} days)
                        </p>
                      </div>
                      <Badge
                        variant={
                          request.status === "approved"
                            ? "default"
                            : request.status === "pending"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default HRAdminLeave;
