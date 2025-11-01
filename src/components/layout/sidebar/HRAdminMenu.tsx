import { BarChart3, CalendarDays, ClipboardList, Users, Briefcase, DollarSign, Shield } from "lucide-react";

export type HRAdminMenuItem = {
  title: string;
  url: string;
  icon: React.ElementType;
};

export const getHRAdminMenuItems = (): HRAdminMenuItem[] => {
  return [
    {
      title: "Dashboard",
      url: "/hr-admin",
      icon: BarChart3,
    },
    {
      title: "Employees",
      url: "/hr-admin/employees",
      icon: Users,
    },
    {
      title: "Attendance",
      url: "/hr-admin/attendance",
      icon: CalendarDays,
    },
    {
      title: "Leave Management",
      url: "/hr-admin/leave",
      icon: ClipboardList,
    },
    {
      title: "Recruitment",
      url: "/hr-admin/recruitment",
      icon: Briefcase,
    },
    {
      title: "Payroll",
      url: "/hr-admin/payroll",
      icon: DollarSign,
    },
    {
      title: "Compliance",
      url: "/hr-admin/compliance",
      icon: Shield,
    },
  ];
};
