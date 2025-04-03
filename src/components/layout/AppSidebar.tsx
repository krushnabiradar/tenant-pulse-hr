
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { getSuperAdminMenuItems } from "./sidebar/SuperAdminMenu";
import { getHRAdminMenuItems } from "./sidebar/HRAdminMenu";
import { getEmployeeMenuItems } from "./sidebar/EmployeeMenu";
import { AppSidebarHeader } from "./sidebar/SidebarHeader";
import { AppSidebarContent } from "./sidebar/SidebarContent";
import { AppSidebarFooter } from "./sidebar/SidebarFooter";

interface SidebarProps {
  variant: "super-admin" | "hr-admin" | "employee";
}

export function AppSidebar({ variant }: SidebarProps) {
  const [menuItems, setMenuItems] = useState<Array<{ title: string; url: string; icon: React.ElementType }>>([]);

  useEffect(() => {
    if (variant === "super-admin") {
      setMenuItems(getSuperAdminMenuItems());
    } else if (variant === "hr-admin") {
      setMenuItems(getHRAdminMenuItems());
    } else {
      setMenuItems(getEmployeeMenuItems());
    }
  }, [variant]);

  const variantTitle = {
    "super-admin": "System Admin",
    "hr-admin": "HR Admin",
    "employee": "Employee Portal"
  };

  return (
    <Sidebar>
      <AppSidebarHeader title="TenantPulse" subtitle={variantTitle[variant]} />
      <AppSidebarContent menuItems={menuItems} />
      <AppSidebarFooter version="v1.0" />
    </Sidebar>
  );
}
