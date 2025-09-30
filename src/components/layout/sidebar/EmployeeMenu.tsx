import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  FileText,
  UserCheck,
} from "lucide-react";

export type EmployeeMenuItem = {
  title: string;
  url: string;
  icon: React.ElementType;
};

export const getEmployeeMenuItems = (): EmployeeMenuItem[] => {
  return [
    {
      title: "Dashboard",
      url: "/employee",
      icon: BarChart3,
    },
    {
      title: "My Profile",
      url: "/employee/profile",
      icon: UserCheck,
    },
    {
      title: "Attendance",
      url: "/employee/attendance",
      icon: CalendarDays,
    },
    {
      title: "Leave Requests",
      url: "/employee/leave",
      icon: ClipboardList,
    },
    {
      title: "Documents",
      url: "/employee/documents",
      icon: FileText,
    },
  ];
};
