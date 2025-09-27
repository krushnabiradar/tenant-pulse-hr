
import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";

interface AppSidebarHeaderProps {
  title: string;
  subtitle: string;
}

export const AppSidebarHeader = ({ title, subtitle }: AppSidebarHeaderProps) => {
  const { state } = useSidebar();
  
  return (
    <SidebarHeader className="p-4 border-b">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          {state === "collapsed" ? (
            <SidebarTrigger />
          ) : (
            <>
              <div className="h-8 w-8 rounded-md bg-primary-700 flex items-center justify-center text-white font-bold text-lg">
                TP
              </div>
              <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-xs text-muted-foreground">{subtitle}</p>
              </div>
            </>
          )}
        </div>
        {state === "expanded" && (
          <SidebarTrigger />
        )}
      </div>
    </SidebarHeader>
  );
};
