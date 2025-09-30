import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCheck, Target, TrendingUp, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const HRAdminPerformance = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const { toast } = useToast();

  const handleStartReview = () => {
    setIsReviewOpen(false);
    toast({
      title: "Review Started",
      description: "Performance review cycle has been initiated.",
    });
  };

  const topPerformers = [
    { id: 1, name: "Alice Johnson", department: "Engineering", score: 95, improvement: "+12%" },
    { id: 2, name: "Bob Smith", department: "Sales", score: 92, improvement: "+8%" },
    { id: 3, name: "Carol White", department: "Marketing", score: 90, improvement: "+15%" },
  ];

  return (
    <DashboardLayout variant="hr-admin" title="Performance Management">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Performance Management</h1>
          <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserCheck className="h-4 w-4 mr-2" />
                Start Review Cycle
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Start Performance Review</DialogTitle>
                <DialogDescription>
                  Configure the performance review cycle
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="reviewType">Review Type</Label>
                  <Select>
                    <SelectTrigger id="reviewType">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="annual">Annual Review</SelectItem>
                      <SelectItem value="quarterly">Quarterly Review</SelectItem>
                      <SelectItem value="midyear">Mid-Year Review</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reviewPeriod">Review Period</Label>
                  <Select>
                    <SelectTrigger id="reviewPeriod">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024q1">Q1 2024</SelectItem>
                      <SelectItem value="2024q2">Q2 2024</SelectItem>
                      <SelectItem value="2024">Full Year 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="instructions">Instructions for Reviewers</Label>
                  <Textarea 
                    id="instructions" 
                    placeholder="Enter any special instructions..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsReviewOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleStartReview}>Start Review</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Reviews Completed</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground">This quarter</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82%</div>
              <p className="text-xs text-muted-foreground">+5% from last quarter</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Goals Achieved</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">Of set objectives</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">Due this week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="topperformers">Top Performers</TabsTrigger>
            <TabsTrigger value="improvement">Needs Improvement</TabsTrigger>
            <TabsTrigger value="goals">Goals & Objectives</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Department-wise performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Engineering</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Sales</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Marketing</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>HR</span>
                      <span className="font-medium">88%</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "88%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="topperformers">
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Employees exceeding expectations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((performer) => (
                    <div key={performer.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{performer.name}</p>
                        <p className="text-sm text-muted-foreground">{performer.department}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{performer.score}%</p>
                        <p className="text-sm text-green-600">{performer.improvement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="improvement">
            <Card>
              <CardHeader>
                <CardTitle>Needs Improvement</CardTitle>
                <CardDescription>Employees requiring additional support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">No employees currently flagged for improvement plans.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals">
            <Card>
              <CardHeader>
                <CardTitle>Goals & Objectives</CardTitle>
                <CardDescription>Company-wide goal tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Customer Satisfaction</p>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }} />
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Revenue Growth</p>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "75%" }} />
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Employee Retention</p>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default HRAdminPerformance;