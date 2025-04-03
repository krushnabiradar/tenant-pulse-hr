
import { SidebarFooter } from "@/components/ui/sidebar";

interface AppSidebarFooterProps {
  version: string;
}

export const AppSidebarFooter = ({ version }: AppSidebarFooterProps) => {
  return (
    <SidebarFooter className="p-4">
      <p className="text-xs text-center text-muted-foreground">
        TenantPulse HRMS {version}
      </p>
    </SidebarFooter>
  );
};
