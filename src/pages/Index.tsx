
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Users,
  UserCircle,
  ChevronRight,
  Briefcase,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex flex-col">
      <header className="border-b bg-white p-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary-700 flex items-center justify-center text-white font-bold text-lg">
              TP
            </div>
            <h1 className="font-bold text-xl">TenantPulse HRMS</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Welcome to TenantPulse HRMS</h1>
            <p className="text-lg text-muted-foreground">
              Multi-tenant HR Management System
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary-700" />
                  Super Admin
                </CardTitle>
                <CardDescription>System-wide control & management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Manage tenant companies, monitor system performance, and control subscriptions.
                </p>
                <Button 
                  variant="default"
                  className="w-full"
                  onClick={() => handleNavigation("/super-admin")}
                >
                  Access <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary-700" />
                  HR Admin
                </CardTitle>
                <CardDescription>Tenant-level HR management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Manage employees, attendance, payroll, and recruitment for your company.
                </p>
                <Button
                  variant="default" 
                  className="w-full"
                  onClick={() => handleNavigation("/hr-admin")}
                >
                  Access <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCircle className="h-5 w-5 text-primary-700" />
                  Employee
                </CardTitle>
                <CardDescription>Self-service employee portal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Manage your attendance, apply for leave, check payslips, and more.
                </p>
                <Button
                  variant="default" 
                  className="w-full"
                  onClick={() => handleNavigation("/employee")}
                >
                  Access <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white p-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          &copy; 2024 TenantPulse HRMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
