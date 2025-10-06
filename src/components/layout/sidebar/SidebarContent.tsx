import { Link, useLocation } from "react-router-dom";
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
interface SidebarContentProps {
  menuItems: Array<{
    title: string;
    url: string;
    icon: React.ElementType;
  }>;
}
export const AppSidebarContent = ({
  menuItems
}: SidebarContentProps) => {
  const location = useLocation();
  return <SidebarContent>
      <SidebarGroup>
        
        <SidebarGroupContent>
          <SidebarMenu>
            {menuItems.map(item => <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className={cn(location.pathname === item.url && "bg-accent text-accent-foreground")}>
                  <Link to={item.url}>
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>)}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>;
};