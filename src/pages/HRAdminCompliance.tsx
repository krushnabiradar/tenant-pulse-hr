import DashboardLayout from "@/components/layout/DashboardLayout";
import ComplianceDocuments from "@/components/hr-admin/ComplianceDocuments";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Shield, AlertTriangle, CheckCircle, Upload } from "lucide-react";

const HRAdminCompliance = () => {
  const complianceItems = [
    { id: 1, item: "Employee Handbook", status: "Updated", lastReview: "2024-01-15", nextReview: "2024-07-15" },
    { id: 2, item: "GDPR Compliance", status: "Compliant", lastReview: "2024-01-01", nextReview: "2024-04-01" },
    { id: 3, item: "Safety Training Records", status: "Pending", lastReview: "2023-12-01", nextReview: "2024-02-01" },
    { id: 4, item: "Tax Documentation", status: "Updated", lastReview: "2024-01-20", nextReview: "2024-03-31" },
  ];

  return (
    <DashboardLayout variant="hr-admin" title="Compliance Management">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Compliance & Documentation</h1>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Document
          </Button>
        </div>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Compliance Alert</AlertTitle>
          <AlertDescription>
            2 compliance items require your attention. Safety Training Records need to be updated by February 1, 2024.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Above industry standard</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Documents</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">Active documents</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Compliant</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">Regulations met</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
                <CardDescription>Overview of compliance items and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{item.item}</p>
                        <p className="text-sm text-muted-foreground">
                          Last Review: {item.lastReview} • Next: {item.nextReview}
                        </p>
                      </div>
                      <Badge 
                        variant={
                          item.status === "Updated" || item.status === "Compliant" ? "default" : 
                          "secondary"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <ComplianceDocuments />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HRAdminCompliance;