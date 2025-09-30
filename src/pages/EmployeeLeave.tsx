import LeaveRequestCard from "@/components/employee/LeaveRequestCard";
import LeaveRequestDialog from "@/components/employee/LeaveRequestDialog";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";
import { useState } from "react";

const EmployeeLeave = () => {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmitRequest = () => {
    setIsRequestOpen(false);
    toast({
      title: "Leave Request Submitted",
      description: "Your leave request has been sent for approval.",
    });
  };

  return (
    <DashboardLayout variant="employee" title="Leave Management">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Leave Management</h1>
          <LeaveRequestDialog
            open={isRequestOpen}
            onOpenChange={setIsRequestOpen}
            trigger={
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Request Leave
              </Button>
            }
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LeaveRequestCard />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Leave Balance</CardTitle>
              <CardDescription>Your available leave days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Annual Leave</span>
                  <span className="font-medium">12 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Sick Leave</span>
                  <span className="font-medium">5 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Personal Leave</span>
                  <span className="font-medium">3 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeLeave;
