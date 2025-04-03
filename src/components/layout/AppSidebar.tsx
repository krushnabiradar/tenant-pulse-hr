
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Building2,
  ClipboardList,
  CreditCard,
  Layers,
  ShieldAlert,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface SidebarProps {
  variant: "super-admin" | "hr-admin" | "employee";
}

export function AppSidebar({ variant }: SidebarProps) {
  const [menuItems, setMenuItems] = useState<Array<{ title: string; url: string; icon: React.ElementType }>>([]);
  const location = useLocation();

  useEffect(() => {
    if (variant === "super-admin") {
      setMenuItems([
        {
          title: "Dashboard",
          url: "/super-admin",
          icon: BarChart3,
        },
        {
          title: "Companies",
          url: "/super-admin/companies",
          icon: Building2,
        },
        {
          title: "Employees",
          url: "/super-admin/employees",
          icon: Users,
        },
        {
          title: "System Metrics",
          url: "/super-admin/system-metrics",
          icon: Layers,
        },
        {
          title: "Subscriptions",
          url: "/super-admin/subscriptions",
          icon: CreditCard,
        },
        {
          title: "Audit Logs",
          url: "/super-admin/audit-logs",
          icon: ClipboardList,
        },
        {
          title: "Security",
          url: "/super-admin/security",
          icon: ShieldAlert,
        },
      ]);
    } else if (variant === "hr-admin") {
      setMenuItems([
        {
          title: "Dashboard",
          url: "/hr-admin",
          icon: BarChart3,
        },
        // Add HR admin menu items later
      ]);
    } else {
      setMenuItems([
        {
          title: "Dashboard",
          url: "/employee",
          icon: BarChart3,
        },
        // Add employee menu items later
      ]);
    }
  }, [variant]);

  const variantTitle = {
    "super-admin": "System Admin",
    "hr-admin": "HR Admin",
    "employee": "Employee Portal"
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary-700 flex items-center justify-center text-white font-bold text-lg">
              TP
            </div>
            <div>
              <h3 className="font-bold text-lg">TenantPulse</h3>
              <p className="text-xs text-muted-foreground">{variantTitle[variant]}</p>
            </div>
          </div>
          <SidebarTrigger className="hidden md:flex" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={cn(
                    location.pathname === item.url && "bg-accent text-accent-foreground"
                  )}>
                    <Link to={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <p className="text-xs text-center text-muted-foreground">
          TenantPulse HRMS v1.0
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
