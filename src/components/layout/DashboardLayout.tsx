
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
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full overflow-hidden">
        <AppSidebar variant={variant} />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <DashboardHeader title={title} user={user} />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
