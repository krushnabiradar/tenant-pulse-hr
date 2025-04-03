
import { useState } from "react";
import { Calendar, Clock, Search, User, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface AuditLog {
  id: number;
  user: string;
  action: string;
  targetType: string;
  targetId: string;
  timestamp: string;
  status: "success" | "warning" | "error";
}

const mockLogs: AuditLog[] = [
  {
    id: 1,
    user: "admin@tenantpulse.com",
    action: "Created company",
    targetType: "Company",
    targetId: "Acme Corporation",
    timestamp: "2024-04-02T09:12:34",
    status: "success",
  },
  {
    id: 2,
    user: "support@tenantpulse.com",
    action: "Updated plan",
    targetType: "Subscription",
    targetId: "Globex Industries",
    timestamp: "2024-04-02T11:45:22",
    status: "success",
  },
  {
    id: 3,
    user: "admin@tenantpulse.com",
    action: "Login attempt",
    targetType: "Authentication",
    targetId: "System",
    timestamp: "2024-04-02T08:30:45",
    status: "warning",
  },
  {
    id: 4,
    user: "system@tenantpulse.com",
    action: "API rate limit exceeded",
    targetType: "API",
    targetId: "Umbrella Corp",
    timestamp: "2024-04-02T14:22:12",
    status: "error",
  },
  {
    id: 5,
    user: "admin@tenantpulse.com",
    action: "Added user",
    targetType: "User",
    targetId: "hr@starkindustries.com",
    timestamp: "2024-04-02T16:05:33",
    status: "success",
  },
];

export default function AuditLogTable() {
  const [logs] = useState<AuditLog[]>(mockLogs);

  const getBadgeColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      case "warning":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100";
      case "error":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-lg font-semibold">Audit Logs</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Recent system activities and security events
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search logs..."
              className="pl-8 h-9"
            />
          </div>
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Resource</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate max-w-40">{log.user}</span>
                  </div>
                </TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">{log.targetType}</span>
                    <span>{log.targetId}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span>{new Date(log.timestamp).toLocaleDateString()}</span>
                    <Clock className="h-3 w-3 ml-2 text-muted-foreground" />
                    <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getBadgeColor(log.status)}>
                    {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
