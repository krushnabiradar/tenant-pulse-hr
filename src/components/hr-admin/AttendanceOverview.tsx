
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DonutChart, Legend } from "@/components/ui/chart";

const attendanceData = [
  { label: "Present", value: 84, color: "#22c55e" },
  { label: "Late", value: 12, color: "#eab308" },
  { label: "Absent", value: 4, color: "#ef4444" },
  { label: "On Leave", value: 8, color: "#3b82f6" }
];

const AttendanceOverview = () => {
  const totalValue = attendanceData.reduce((acc, item) => acc + item.value, 0);
  const formattedData = attendanceData.map(item => ({
    ...item,
    formatted: `${item.value}`
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Attendance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <div className="h-60 w-60">
            <DonutChart data={formattedData} />
          </div>
        </div>
        <div className="mt-4">
          <Legend
            data={formattedData}
            className="grid grid-cols-2 gap-4"
            labels={({ color, label }) => (
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm font-medium">{label}</span>
              </div>
            )}
            values={({ value }) => (
              <div className="text-sm font-medium">{value}</div>
            )}
          />
        </div>
        <div className="mt-4 text-xs text-center text-muted-foreground">
          Today's attendance: 108/124 employees
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceOverview;
