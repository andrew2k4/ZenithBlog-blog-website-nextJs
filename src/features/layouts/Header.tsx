"use client";

import React from "react";
import { LoginButton } from "./auth/LoginButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const pathName = usePathname();

  return (
    <nav className=" flex border-b border-b-accent fixed top-0 bg-background w-full z-20 justify-center">
      <div className="flex justify-between py-2 " style={{ width: "87.3%" }}>
        <h2 className="text-2xl font-bold mr-auto">Zenith Blog</h2>
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
      </div>
    </nav>
  );
};
