import {
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export const StudioSIdebarHeader = () => {
  const { user } = useUser();
  const { state } = useSidebar();

  if (!user) {
    return (
      <SidebarHeader className="flex items-center justify-center pb-4">
        <Skeleton className="size-28 rounded-full" />

        <section className="flex flex-col items-center mt-2 gap-1">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-24" />
        </section>
      </SidebarHeader>
    );
  }

  if (state === "collapsed") {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={"Your Profile"} asChild>
          <Link href={"/user/current"}>
            <UserAvatar
              imageUrl={user.imageUrl}
              name={user.fullName || "user name"}
              size={"xs"}
            />
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarHeader className="flex items-center justify-center pb-4">
      <Link href={"/users/current"}>
        <UserAvatar
          imageUrl={user.imageUrl}
          name={user.fullName ?? "user"}
          className="size-28 hover:opacity-80 transition-opacity"
        />
      </Link>

      <section className="flex flex-col items-center mt-2">
        <p>Your Profile</p>
        <p className="text-xs text-muted-foreground">
          {user.fullName || "user full name"}
        </p>
      </section>
    </SidebarHeader>
  );
};
