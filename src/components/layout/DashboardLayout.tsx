
import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import DashboardHeader from "./DashboardHeader";

interface DashboardLayoutProps {
  variant: "super-admin" | "hr-admin" | "employee";
  children: ReactNode;
  title: string;
}

export default function DashboardLayout({ variant, children, title }: DashboardLayoutProps) {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: variant === "super-admin" ? "System Admin" : 
           variant === "hr-admin" ? "HR Manager" : "Employee",
    email: "admin@tenantpulse.com",
    role: variant === "super-admin" ? "Super Administrator" : 
          variant === "hr-admin" ? "HR Administrator" : "Employee",
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar variant={variant} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader title={title} user={user} />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
