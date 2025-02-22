import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavbar } from "../components/home-navbar";
import { HomeSidebar } from "../components/home-sidebar";

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="w-full flex">
        <HomeNavbar />
        <HomeSidebar />
        <div className="flex-1 min-h-screen pt-[4rem]">
          <main className="overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
