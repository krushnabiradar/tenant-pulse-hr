
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from "recharts";

const attendanceData = [
  { name: "Present", value: 84, color: "#22c55e" },
  { name: "Late", value: 12, color: "#eab308" },
  { name: "Absent", value: 4, color: "#ef4444" },
  { name: "On Leave", value: 8, color: "#3b82f6" }
];

const AttendanceOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Attendance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={attendanceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {attendanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} employees`, null]} 
                contentStyle={{ 
                  borderRadius: '0.375rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              />
              <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                formatter={(value, entry, index) => (
                  <span className="text-sm">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-xs text-center text-muted-foreground">
          Today's attendance: 108/124 employees
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceOverview;
