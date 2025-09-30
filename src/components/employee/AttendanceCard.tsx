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
  const [punchInTime, setPunchInTime] = useState<Date | null>(null);
  const [punchOutTime, setPunchOutTime] = useState<Date | null>(null);
  const [totalWorkingHours, setTotalWorkingHours] = useState<string>("0h 0m");

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Reset attendance data if it's a new day
  useState(() => {
    const lastPunchDate = punchInTime?.toLocaleDateString();
    const today = new Date().toLocaleDateString();

    if (lastPunchDate && lastPunchDate !== today) {
      setIsPunchedIn(false);
      setPunchInTime(null);
      setPunchOutTime(null);
      setTotalWorkingHours("0h 0m");
    }
  });

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const calculateWorkingHours = (start: Date, end: Date) => {
    const diff = end.getTime() - start.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const handlePunch = () => {
    const now = new Date();

    if (isPunchedIn) {
      // Punch out logic
      setPunchOutTime(now);
      setIsPunchedIn(false);
      if (punchInTime) {
        setTotalWorkingHours(calculateWorkingHours(punchInTime, now));
      }
    } else {
      // Punch in logic
      setIsPunchedIn(true);
      setPunchInTime(now);
      setPunchOutTime(null);
      setTotalWorkingHours("0h 0m");
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
          <div className="space-y-2 mt-2">
            {punchInTime && (
              <div>
                <p className="text-sm font-medium">Punch In Time</p>
                <p className="text-sm text-muted-foreground">
                  {formatTime(punchInTime)}
                </p>
              </div>
            )}
            {punchOutTime && (
              <div>
                <p className="text-sm font-medium">Punch Out Time</p>
                <p className="text-sm text-muted-foreground">
                  {formatTime(punchOutTime)}
                </p>
              </div>
            )}
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Working Hours Today
                </span>
              </div>
              <span className="font-bold text-lg">{totalWorkingHours}</span>
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
