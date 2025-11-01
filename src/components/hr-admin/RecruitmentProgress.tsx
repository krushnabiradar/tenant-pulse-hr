
import { Briefcase } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// Mock job postings data
const jobPostings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    applicants: 24,
    openDate: "Mar 15, 2025",
    status: "In Progress",
    progress: 60
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    applicants: 18,
    openDate: "Mar 22, 2025",
    status: "In Progress",
    progress: 40
  },
  {
    id: 3,
    title: "Product Marketing Manager",
    department: "Marketing",
    applicants: 12,
    openDate: "Apr 1, 2025",
    status: "New",
    progress: 20
  }
];

const RecruitmentProgress = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Recruitment Progress</CardTitle>
        <Button variant="outline" size="sm">
          <Briefcase className="mr-1 h-4 w-4" />
          New Job Posting
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Position</TableHead>
              <TableHead>Applicants</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobPostings.map((job) => (
              <TableRow key={job.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{job.title}</div>
                    <div className="text-xs text-muted-foreground">{job.department} • Posted on {job.openDate}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-medium">{job.applicants}</div>
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className={job.progress < 30 ? "text-blue-600" : job.progress < 70 ? "text-amber-600" : "text-green-600"}>
                        {job.status}
                      </span>
                      <span>{job.progress}%</span>
                    </div>
                    <Progress value={job.progress} className="h-1" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-end mt-4">
          <Button variant="outline" size="sm" className="text-xs">
            View All Positions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecruitmentProgress;
