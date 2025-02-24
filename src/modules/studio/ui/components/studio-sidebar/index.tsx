"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { LogOut, Video } from "lucide-react";
import { usePathname } from "next/navigation";
import { StudioSIdebarHeader } from "./studio-sidebar-header";

export const StudioSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar className="pt-16 z-40" collapsible="icon">
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarMenu>
            <StudioSIdebarHeader />
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={"Exit studio"}
                asChild
                isActive={pathname === "/studio"}
              >
                <Link href={"/studio"}>
                  <Video className="size-5" />
                  <span className="text-sm">Content</span>
                </Link>
              </SidebarMenuButton>

              <Separator />

              <SidebarMenuButton tooltip={"Exit studio"} asChild>
                <Link href={"/"}>
                  <LogOut className="size-5" />
                  <span className="text-sm">Exit studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
