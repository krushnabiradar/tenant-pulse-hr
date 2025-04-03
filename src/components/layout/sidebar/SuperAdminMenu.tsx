
import { BarChart3, Building2, ClipboardList, CreditCard, Layers, ShieldAlert, Users } from "lucide-react";

export type SuperAdminMenuItem = {
  title: string;
  url: string;
  icon: React.ElementType;
};

export const getSuperAdminMenuItems = (): SuperAdminMenuItem[] => {
  return [
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
  ];
};
