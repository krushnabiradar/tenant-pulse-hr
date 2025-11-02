
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const leaveBalances = [
  { type: "Annual Leave", used: 5, total: 20, color: "bg-blue-500" },
  { type: "Sick Leave", used: 2, total: 10, color: "bg-amber-500" },
  { type: "Personal Leave", used: 1, total: 5, color: "bg-purple-500" },
];

const LeaveRequestCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Leave Balances</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaveBalances.map((leave) => (
            <div key={leave.type} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{leave.type}</span>
                <span className="font-medium">
                  {leave.used}/{leave.total} days
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div 
                  className={`h-full ${leave.color}`} 
                  style={{ width: `${(leave.used / leave.total) * 100}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full gap-2">
          <Button className="flex-1" variant="outline">View History</Button>
          <Button className="flex-1">Request Leave</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LeaveRequestCard;
