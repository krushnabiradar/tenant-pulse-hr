
import { FileText, CheckCircle, AlertCircle, Upload } from "lucide-react";
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

// Mock compliance documents data
const complianceDocuments = [
  {
    id: 1,
    name: "Employee Handbook",
    status: "Up to date",
    lastUpdated: "Jan 15, 2025",
    expiryDate: "Dec 31, 2025",
    isValid: true
  },
  {
    id: 2,
    name: "Health & Safety Policy",
    status: "Up to date",
    lastUpdated: "Feb 28, 2025",
    expiryDate: "Feb 28, 2026",
    isValid: true
  },
  {
    id: 3,
    name: "Data Protection Policy",
    status: "Expiring soon",
    lastUpdated: "May 10, 2024",
    expiryDate: "May 10, 2025",
    isValid: true,
    isExpiringSoon: true
  },
  {
    id: 4,
    name: "ISO 9001 Certification",
    status: "Expired",
    lastUpdated: "Mar 1, 2024",
    expiryDate: "Mar 1, 2025",
    isValid: false
  },
];

const ComplianceDocuments = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Compliance & Documents</CardTitle>
        <Button variant="outline" size="sm">
          <Upload className="mr-1 h-4 w-4" />
          Upload Document
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Expires</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {complianceDocuments.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <div className="flex items-center">
                    <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{doc.name}</div>
                      <div className="text-xs text-muted-foreground">Updated: {doc.lastUpdated}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {doc.isValid ? (
                    doc.isExpiringSoon ? (
                      <div className="flex items-center text-amber-600">
                        <AlertCircle className="mr-1 h-3 w-3" />
                        <span>{doc.status}</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        <span>{doc.status}</span>
                      </div>
                    )
                  ) : (
                    <div className="flex items-center text-red-600">
                      <AlertCircle className="mr-1 h-3 w-3" />
                      <span>{doc.status}</span>
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  <div className={`text-sm ${!doc.isValid ? "text-red-600 font-medium" : doc.isExpiringSoon ? "text-amber-600 font-medium" : ""}`}>
                    {doc.expiryDate}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-end mt-4">
          <Button variant="outline" size="sm" className="text-xs">
            View All Documents
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComplianceDocuments;
