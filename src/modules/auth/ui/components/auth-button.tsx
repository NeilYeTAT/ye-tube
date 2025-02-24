"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Clapperboard, UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  // TODO: Add different auth states
  return (
    <>
      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
            {/* Add menu items for studio and use profile */}
            <UserButton.Link
              label="Studio"
              href="/studio"
              labelIcon={<Clapperboard className="size-4" />}
            ></UserButton.Link>
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="px-4 py-2 text-sm font-medium text-blue-600
                  rounded-full shadow-none
                hover:text-blue-500 border-blue-500 
      "
          >
            <UserCircleIcon />
            AuthButton
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
