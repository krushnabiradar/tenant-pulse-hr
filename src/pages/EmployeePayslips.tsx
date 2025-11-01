import PayslipCard from "@/components/employee/PayslipCard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EmployeePayslips = () => {
  const payslips = [
    {
      month: "January 2024",
      date: "2024-01-31",
      amount: "$5,000",
      status: "Paid",
    },
    {
      month: "December 2023",
      date: "2023-12-31",
      amount: "$5,000",
      status: "Paid",
    },
    {
      month: "November 2023",
      date: "2023-11-30",
      amount: "$5,000",
      status: "Paid",
    },
  ];

  return (
    <DashboardLayout variant="employee" title="My Payslips">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <h1 className="text-2xl font-bold">My Payslips</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PayslipCard />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Year to Date</CardTitle>
              <CardDescription>2024 Summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Gross Earnings</span>
                  <span className="font-medium">$60,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Deductions</span>
                  <span className="font-medium">$12,000</span>
                </div>
                <div className="flex justify-between pt-3 border-t">
                  <span className="font-medium">Net Pay</span>
                  <span className="font-bold">$48,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployeePayslips;
