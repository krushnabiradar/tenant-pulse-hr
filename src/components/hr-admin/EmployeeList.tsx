
import { User, Mail, Phone, Search } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Mock employee data
const employees = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    position: "Senior Developer", 
    department: "Engineering",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    status: "Active"
  },
  { 
    id: 2, 
    name: "Samantha Williams", 
    position: "Marketing Manager", 
    department: "Marketing",
    email: "samantha.w@example.com",
    phone: "+1 (555) 234-5678",
    status: "Active"
  },
  { 
    id: 3, 
    name: "Michael Chen", 
    position: "UX Designer", 
    department: "Design",
    email: "michael.chen@example.com",
    phone: "+1 (555) 345-6789",
    status: "Active"
  },
  { 
    id: 4, 
    name: "Jessica Taylor", 
    position: "Product Manager", 
    department: "Product",
    email: "jessica.t@example.com",
    phone: "+1 (555) 456-7890",
    status: "On Leave"
  },
  { 
    id: 5, 
    name: "David Rodriguez", 
    position: "QA Engineer", 
    department: "Engineering",
    email: "david.r@example.com",
    phone: "+1 (555) 567-8901",
    status: "Active"
  }
];

const EmployeeList = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Employee List</CardTitle>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search employees..."
            className="pl-8"
          />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Mail className="mr-1 h-3 w-3" />
                      {employee.email}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Phone className="mr-1 h-3 w-3" />
                      {employee.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    employee.status === "Active" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-amber-100 text-amber-800"
                  }`}>
                    {employee.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EmployeeList;
