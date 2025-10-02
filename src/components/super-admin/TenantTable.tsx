
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  MoreHorizontal, 
  ArrowUpDown, 
  ChevronDown, 
  Check, 
  Building2,
  Users,
  Calendar
} from "lucide-react";
import AddCompanyDialog from "./AddCompanyDialog";
import companiesData from "@/data/companies.json";
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

const mockTenants: Tenant[] = companiesData.map(company => ({
  id: company.id,
  name: company.name,
  industry: company.industry,
  employees: company.employees,
  plan: company.plan,
  status: company.status as "active" | "inactive" | "pending",
  joinedDate: company.joinedDate,
}));

export default function TenantTable() {
  const [tenants] = useState<Tenant[]>(mockTenants);
  const navigate = useNavigate();
  
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
          <AddCompanyDialog />
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
                    <DropdownMenuItem onClick={() => navigate(`/super-admin/companies/${tenant.id}`)}>
                      View details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate(`/super-admin/companies/${tenant.id}/edit`)}>
                      Edit company
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate(`/super-admin/companies/${tenant.id}/subscription`)}>
                      Manage subscription
                    </DropdownMenuItem>
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
