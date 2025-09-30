import DashboardLayout from "@/components/layout/DashboardLayout";
import LeaveRequestsSummary from "@/components/hr-admin/LeaveRequestsSummary";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HRAdminLeave = () => {
  const { toast } = useToast();

  const handleApprove = () => {
    toast({
      title: "Leave Approved",
      description: "The leave request has been approved and the employee has been notified.",
    });
  };

  const handleReject = () => {
    toast({
      title: "Leave Rejected",
      description: "The leave request has been rejected and the employee has been notified.",
    });
  };

  const leaveRequests = [
    { id: 1, employee: "John Doe", type: "Annual Leave", from: "2024-02-01", to: "2024-02-05", days: 5, status: "pending", reason: "Family vacation" },
    { id: 2, employee: "Jane Smith", type: "Sick Leave", from: "2024-01-28", to: "2024-01-29", days: 2, status: "pending", reason: "Medical appointment" },
    { id: 3, employee: "Bob Johnson", type: "Personal Leave", from: "2024-02-10", to: "2024-02-10", days: 1, status: "approved", reason: "Personal matters" },
  ];

  return (
    <DashboardLayout variant="hr-admin" title="Leave Management">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <h1 className="text-2xl font-bold">Leave Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Approved Today</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Leave requests approved</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">On Leave Today</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Employees on leave</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Urgent</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Require immediate action</p>
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
            <Card>
              <CardHeader>
                <CardTitle>Pending Leave Requests</CardTitle>
                <CardDescription>Review and process pending leave applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveRequests.filter(r => r.status === 'pending').map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{request.employee}</p>
                        <p className="text-sm text-muted-foreground">
                          {request.type} • {request.from} to {request.to} ({request.days} days)
                        </p>
                        <p className="text-sm">Reason: {request.reason}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={handleReject}>
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                        <Button size="sm" onClick={handleApprove}>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approved">
            <LeaveRequestsSummary />
          </TabsContent>

          <TabsContent value="rejected">
            <Card>
              <CardHeader>
                <CardTitle>Rejected Requests</CardTitle>
                <CardDescription>Previously rejected leave applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">No rejected requests to display.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>All Leave Requests</CardTitle>
                <CardDescription>Complete history of all leave requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{request.employee}</p>
                        <p className="text-sm text-muted-foreground">
                          {request.type} • {request.from} to {request.to} ({request.days} days)
                        </p>
                      </div>
                      <Badge variant={request.status === 'approved' ? 'default' : request.status === 'pending' ? 'secondary' : 'destructive'}>
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