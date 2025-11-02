
import { BarChart3, Briefcase, CalendarDays, ClipboardList, DollarSign, FileText, UserCheck, Users } from "lucide-react";

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
      title: "Payroll",
      url: "/hr-admin/payroll",
      icon: DollarSign,
    },
    {
      title: "Recruitment",
      url: "/hr-admin/recruitment",
      icon: Briefcase,
    },
    {
      title: "Compliance",
      url: "/hr-admin/compliance",
      icon: FileText,
    },
    {
      title: "Performance",
      url: "/hr-admin/performance",
      icon: UserCheck,
    },
  ];
};
