
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockData = [
  {
    date: "Jan",
    "API Calls": 5000,
    "Active Users": 2300,
    "Server Load": 1400,
  },
  {
    date: "Feb",
    "API Calls": 6800,
    "Active Users": 2900,
    "Server Load": 1700,
  },
  {
    date: "Mar",
    "API Calls": 8200,
    "Active Users": 3500,
    "Server Load": 2100,
  },
  {
    date: "Apr",
    "API Calls": 7500,
    "Active Users": 3200,
    "Server Load": 1900,
  },
  {
    date: "May",
    "API Calls": 9200,
    "Active Users": 4100,
    "Server Load": 2600,
  },
  {
    date: "Jun",
    "API Calls": 11000,
    "Active Users": 4800,
    "Server Load": 3200,
  },
  {
    date: "Jul",
    "API Calls": 10500,
    "Active Users": 5100,
    "Server Load": 2900,
  },
];

export default function SystemMetricsChart() {
  const [timeRange, setTimeRange] = useState("last-6-months");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle>System Metrics</CardTitle>
        <Select defaultValue={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-7-days">Last 7 days</SelectItem>
            <SelectItem value="last-30-days">Last 30 days</SelectItem>
            <SelectItem value="last-6-months">Last 6 months</SelectItem>
            <SelectItem value="last-year">Last year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={mockData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="API Calls"
                stackId="1"
                stroke="#2563EB"
                fill="#3B82F6"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="Active Users"
                stackId="2"
                stroke="#10B981"
                fill="#34D399"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="Server Load"
                stackId="3"
                stroke="#F59E0B"
                fill="#FBBF24"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
