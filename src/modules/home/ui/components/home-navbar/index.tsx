import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <nav
      className="z-50 fixed top-0 left-0 right-0
                  h-16 bg-white flex items-center
                  px-2 pr-5"
    >
      <main className="flex items-center gap-4 w-full">
        {/* menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />

          <Link href={"/"}>
            <section className="flex items-center p-4 gap-1">
              <Image src={"/youtube.svg"} alt="logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">YeTube</p>
            </section>
          </Link>
        </div>
        {/* search bar */}
        <div className="flex flex-1 justify-center max-w-[720px] m-auto">
          <SearchInput />
        </div>

        {/* auth button */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <AuthButton />
        </div>
      </main>
    </nav>
  );
};
