import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";

interface AttendanceCardProps {
  workingHours?: string;
}

const AttendanceCard = ({
  workingHours = "9:00 AM - 5:00 PM",
}: AttendanceCardProps) => {
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [punchInTime, setPunchInTime] = useState<string | null>(null);
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handlePunch = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (isPunchedIn) {
      // Punch out logic
      setIsPunchedIn(false);
    } else {
      // Punch in logic
      setIsPunchedIn(true);
      setPunchInTime(formattedTime);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Today's Attendance</CardTitle>
          <Calendar className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{currentDate}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Working Hours</p>
              <p className="text-sm text-muted-foreground">{workingHours}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Status</p>
              <p
                className={`text-sm ${
                  isPunchedIn ? "text-green-500" : "text-amber-500"
                }`}
              >
                {isPunchedIn ? "Punched In" : "Not Punched In"}
              </p>
            </div>
          </div>
          {isPunchedIn && punchInTime && (
            <div className="mt-2">
              <p className="text-sm font-medium">Punch In Time</p>
              <p className="text-sm text-muted-foreground">{punchInTime}</p>
            </div>
          )}
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Working Hours Today
                </span>
              </div>
              <span className="font-bold text-lg">8h 30m</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handlePunch}
          className="w-full"
          variant={isPunchedIn ? "outline" : "default"}
        >
          {isPunchedIn ? "Punch Out" : "Punch In"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AttendanceCard;
