
import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

interface AppSidebarHeaderProps {
  title: string;
  subtitle: string;
}

export const AppSidebarHeader = ({ title, subtitle }: AppSidebarHeaderProps) => {
  return (
    <SidebarHeader className="p-4 flex items-center gap-2">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary-700 flex items-center justify-center text-white font-bold text-lg">
            TP
          </div>
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <SidebarTrigger className="hidden md:flex" />
      </div>
    </SidebarHeader>
  );
};
