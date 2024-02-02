import React from "react";
import { LoginButton } from "../auth/LoginButton";
import Link from "next/link";
import { getAuthSession } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UserProfile } from "../auth/UserProfile";

export const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className=" flex border-b border-b-accent fixed top-0 bg-background w-full z-20 justify-center">
      <div
        className="flex flex-row justify-between items-center py-2 "
        style={{ width: "87.3%" }}
      >
        <Link href="/">
          <h1 className="text-2xl font-bold mr-auto">Zenith Blog</h1>
        </Link>

        {session?.user ? (
          <UserProfile />
        ) : (
          <div className="flex gap-2">
            <LoginButton
              link="/auth/login"
              className="bg-slate-100 hover:bg-slate-300 "
            >
              Log in
            </LoginButton>
            <LoginButton
              link="/auth/signup"
              className="bg-purple-600 hover:bg-purple-900 text-white  "
            >
              Sign up
            </LoginButton>
          </div>
        )}
      </div>
    </header>
  );
};
