import { SidebarProvider } from "@/components/ui/sidebar";
import { StudioNavbar } from "../components/studio-navbar";
import { StudioSidebar } from "../components/studio-sidebar";

export const StudioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="w-full flex">
        <StudioNavbar />
        <StudioSidebar />
        <div className="flex-1 min-h-screen pt-[4rem]">
          <main className="overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
