import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { StudioUploadModal } from "../studio-upload-modal";

export const StudioNavbar = () => {
  return (
    <nav
      className="z-50 fixed top-0 left-0 right-0
                  h-16 bg-white flex items-center
                  px-2 pr-5 border-b shadow-sm"
    >
      <main className="flex items-center gap-4 w-full">
        {/* menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />

          <Link href={"/"}>
            <section className="flex items-center p-4 gap-1">
              <Image src={"/youtube.svg"} alt="logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">Studio</p>
            </section>
          </Link>
        </div>

        <span className="flex-1" />

        {/* auth button */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </main>
    </nav>
  );
};
