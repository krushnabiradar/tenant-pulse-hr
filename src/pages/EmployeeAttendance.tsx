import DashboardLayout from "@/components/layout/DashboardLayout";
import AttendanceCard from "@/components/employee/AttendanceCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Clock, LogIn, LogOut, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EmployeeAttendance = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const handleCheckIn = () => {
    toast({
      title: "Checked In",
      description: "You have successfully checked in at 9:00 AM.",
    });
  };

  const handleCheckOut = () => {
    toast({
      title: "Checked Out",
      description: "You have successfully checked out at 6:00 PM.",
    });
  };

  const attendanceHistory = [
    { date: "2024-01-25", checkIn: "9:00 AM", checkOut: "6:30 PM", status: "Present", hours: "9.5" },
    { date: "2024-01-24", checkIn: "8:45 AM", checkOut: "6:15 PM", status: "Present", hours: "9.5" },
    { date: "2024-01-23", checkIn: "9:15 AM", checkOut: "7:00 PM", status: "Late", hours: "9.75" },
    { date: "2024-01-22", checkIn: "-", checkOut: "-", status: "Leave", hours: "-" },
    { date: "2024-01-21", checkIn: "9:00 AM", checkOut: "6:00 PM", status: "Present", hours: "9" },
  ];

  return (
    <DashboardLayout variant="employee" title="My Attendance">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <h1 className="text-2xl font-bold">My Attendance</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <AttendanceCard />
            
            <Card>
              <CardHeader>
                <CardTitle>Today's Status</CardTitle>
                <CardDescription>Your attendance for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <LogIn className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">Check In</p>
                        <p className="font-medium">9:00 AM</p>
                      </div>
                    </div>
                    <Button size="sm" onClick={handleCheckIn}>Check In</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <LogOut className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-sm text-muted-foreground">Check Out</p>
                        <p className="font-medium">Not yet</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" onClick={handleCheckOut}>Check Out</Button>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Working Hours Today</span>
                    </div>
                    <span className="font-bold text-lg">8h 30m</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance History</CardTitle>
                <CardDescription>Your recent attendance records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Date</th>
                        <th className="text-left py-2">Check In</th>
                        <th className="text-left py-2">Check Out</th>
                        <th className="text-left py-2">Hours</th>
                        <th className="text-left py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceHistory.map((record, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3">{record.date}</td>
                          <td className="py-3">{record.checkIn}</td>
                          <td className="py-3">{record.checkOut}</td>
                          <td className="py-3">{record.hours}</td>
                          <td className="py-3">
                            <Badge 
                              variant={
                                record.status === "Present" ? "default" :
                                record.status === "Late" ? "secondary" :
                                "outline"
                              }
                            >
                              {record.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Calendar</CardTitle>
                <CardDescription>View your attendance by date</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Summary</CardTitle>
                <CardDescription>January 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Days Present</span>
                    <span className="font-medium">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Days Absent</span>
                    <span className="font-medium">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Days on Leave</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Late Arrivals</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Hours</span>
                    <span className="font-medium">162 hrs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeAttendance;