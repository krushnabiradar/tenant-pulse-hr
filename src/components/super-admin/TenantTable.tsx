
import { useState } from "react";
import { 
  MoreHorizontal, 
  ArrowUpDown, 
  ChevronDown, 
  Check, 
  Building2,
  Users,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Tenant {
  id: number;
  name: string;
  industry: string;
  employees: number;
  plan: string;
  status: "active" | "inactive" | "pending";
  joinedDate: string;
}

const mockTenants: Tenant[] = [
  {
    id: 1,
    name: "Acme Corporation",
    industry: "Manufacturing",
    employees: 120,
    plan: "Enterprise",
    status: "active",
    joinedDate: "2023-10-15",
  },
  {
    id: 2,
    name: "Globex Industries",
    industry: "Technology",
    employees: 85,
    plan: "Professional",
    status: "active",
    joinedDate: "2023-11-22",
  },
  {
    id: 3,
    name: "Umbrella Corp",
    industry: "Pharmaceutical",
    employees: 210,
    plan: "Enterprise",
    status: "active",
    joinedDate: "2023-08-05",
  },
  {
    id: 4,
    name: "Stark Industries",
    industry: "Technology",
    employees: 150,
    plan: "Enterprise",
    status: "active",
    joinedDate: "2024-01-10",
  },
  {
    id: 5,
    name: "Cyberdyne Systems",
    industry: "Technology",
    employees: 45,
    plan: "Professional",
    status: "inactive",
    joinedDate: "2023-07-19",
  },
  {
    id: 6,
    name: "Soylent Corp",
    industry: "Food & Beverage",
    employees: 62,
    plan: "Standard",
    status: "pending",
    joinedDate: "2024-03-28",
  },
];

export default function TenantTable() {
  const [tenants] = useState<Tenant[]>(mockTenants);
  
  const getBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      case "inactive":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
      case "pending":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      default:
        return "";
    }
  };

  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">Companies</h3>
          <p className="text-sm text-muted-foreground">Manage tenant companies</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm" className="h-8">
            <Building2 className="mr-2 h-3.5 w-3.5" />
            Add Company
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center space-x-1">
                <span>Company</span>
                <ArrowUpDown className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>
              <div className="flex items-center space-x-1">
                <span>Employees</span>
                <ArrowUpDown className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>
              <div className="flex items-center space-x-1">
                <span>Joined</span>
                <ArrowUpDown className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((tenant) => (
            <TableRow key={tenant.id}>
              <TableCell className="font-medium">{tenant.name}</TableCell>
              <TableCell>{tenant.industry}</TableCell>
              <TableCell>{tenant.employees}</TableCell>
              <TableCell>{tenant.plan}</TableCell>
              <TableCell>
                <Badge variant="outline" className={getBadgeColor(tenant.status)}>
                  {tenant.status.charAt(0).toUpperCase() + tenant.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{new Date(tenant.joinedDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Edit company</DropdownMenuItem>
                    <DropdownMenuItem>Manage subscription</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Suspend account</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
