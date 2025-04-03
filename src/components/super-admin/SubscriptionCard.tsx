
import { DonutChart, Legend } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockData = [
  { label: "Enterprise", value: 35, color: "#2563EB" },
  { label: "Professional", value: 45, color: "#10B981" },
  { label: "Standard", value: 15, color: "#F59E0B" },
  { label: "Free Trial", value: 5, color: "#6B7280" },
];

export default function SubscriptionCard() {
  const totalValue = mockData.reduce((acc, item) => acc + item.value, 0);
  const formattedData = mockData.map(item => ({
    ...item,
    formatted: `${Math.round((item.value / totalValue) * 100)}%`
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Plans</CardTitle>
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
      </CardContent>
    </Card>
  );
}
