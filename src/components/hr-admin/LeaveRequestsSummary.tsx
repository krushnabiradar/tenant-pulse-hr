
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Mock leave request data
const leaveRequests = [
  {
    id: 1,
    employeeName: "Jessica Taylor",
    type: "Sick Leave",
    startDate: "Apr 20, 2025",
    endDate: "Apr 22, 2025",
    status: "Pending"
  },
  {
    id: 2,
    employeeName: "Michael Chen",
    type: "Vacation",
    startDate: "May 5, 2025",
    endDate: "May 12, 2025",
    status: "Pending"
  },
  {
    id: 3,
    employeeName: "Sarah Johnson",
    type: "Personal",
    startDate: "Apr 27, 2025",
    endDate: "Apr 28, 2025",
    status: "Pending"
  },
  {
    id: 4,
    employeeName: "David Rodriguez",
    type: "Family Emergency",
    startDate: "Apr 25, 2025",
    endDate: "Apr 26, 2025",
    status: "Pending"
  }
];

const LeaveRequestsSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Leave Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaveRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.employeeName}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>
                  <div className="flex items-center text-xs">
                    <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                    {request.startDate} - {request.endDate}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline" className="h-8 border-green-500 text-green-600 hover:text-green-700 hover:bg-green-50">
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 border-red-500 text-red-600 hover:text-red-700 hover:bg-red-50">
                      Deny
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-end mt-4">
          <Button variant="outline" size="sm" className="text-xs">
            View All Requests
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaveRequestsSummary;
