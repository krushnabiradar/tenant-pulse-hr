
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PerformanceCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Performance Overview</CardTitle>
          <Button variant="outline" size="sm">View Details</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium">Next Review</h4>
              <span className="text-sm">June 15, 2025</span>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium">Last Review Score</h4>
              <span className="inline-flex items-center justify-center rounded-full text-xs font-medium bg-green-100 text-green-800 px-2.5 py-0.5">
                4.5/5.0
              </span>
            </div>
          </div>
          
          <div className="space-y-2 pt-2 border-t">
            <h4 className="text-sm font-medium">Recent Feedback</h4>
            <div className="rounded-lg bg-muted p-3">
              <p className="text-sm italic">
                "Great job on the recent project. Your leadership skills and attention to detail were outstanding."
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                - Team Manager, March 25, 2025
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceCard;
