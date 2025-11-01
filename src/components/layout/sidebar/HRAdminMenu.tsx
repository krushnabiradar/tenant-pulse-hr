import { BarChart3, CalendarDays, ClipboardList, Users } from "lucide-react";

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
  ];
};
