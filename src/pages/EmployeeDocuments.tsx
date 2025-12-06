import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, File, Upload } from "lucide-react";

const EmployeeDocuments = () => {
  const documents = [
    {
      name: "Employment Contract",
      type: "PDF",
      size: "245 KB",
      date: "2022-01-15",
    },
    {
      name: "Company Handbook",
      type: "PDF",
      size: "1.2 MB",
      date: "2024-01-01",
    },
    { name: "Tax Form W-4", type: "PDF", size: "180 KB", date: "2023-12-15" },
    {
      name: "ID Verification",
      type: "PDF",
      size: "520 KB",
      date: "2022-01-10",
    },
  ];

  return (
    <DashboardLayout variant="employee" title="My Documents">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <div className="flex justify-end items-center">
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Document
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Company Documents</CardTitle>
            <CardDescription>Important documents and forms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <File className="h-10 w-10 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {doc.type} • {doc.size} • {doc.date}
                      </p>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeDocuments;
