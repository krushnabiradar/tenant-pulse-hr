import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, UserPlus, TrendingUp } from "lucide-react";

const HRAdminRecruitment = () => {
  const jobOpenings = [
    { id: 1, title: "Senior Developer", department: "Engineering", applicants: 24, status: "Active" },
    { id: 2, title: "Marketing Manager", department: "Marketing", applicants: 18, status: "Active" },
    { id: 3, title: "HR Coordinator", department: "Human Resources", applicants: 12, status: "On Hold" },
    { id: 4, title: "Product Designer", department: "Design", applicants: 31, status: "Active" },
  ];

  const recentApplicants = [
    { name: "John Smith", position: "Senior Developer", status: "Interview Scheduled", date: "2024-01-15" },
    { name: "Sarah Johnson", position: "Marketing Manager", status: "Under Review", date: "2024-01-14" },
    { name: "Mike Wilson", position: "Product Designer", status: "Shortlisted", date: "2024-01-13" },
  ];

  return (
    <DashboardLayout variant="hr-admin" title="Recruitment">
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Openings</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Offers Made</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Job Openings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Active Job Openings</CardTitle>
            <Button>Post New Job</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.department}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{job.applicants}</p>
                      <p className="text-xs text-muted-foreground">Applicants</p>
                    </div>
                    <Badge variant={job.status === "Active" ? "default" : "secondary"}>
                      {job.status}
                    </Badge>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Applicants */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Applicants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplicants.map((applicant, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold">{applicant.name}</h3>
                    <p className="text-sm text-muted-foreground">{applicant.position}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge variant="outline">{applicant.status}</Badge>
                      <p className="text-xs text-muted-foreground mt-1">{applicant.date}</p>
                    </div>
                    <Button variant="outline" size="sm">Review</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HRAdminRecruitment;
