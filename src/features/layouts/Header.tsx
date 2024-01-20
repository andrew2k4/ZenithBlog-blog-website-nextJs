import { Button } from "@/components/ui/button";
import React from "react";

export const Header = () => {
  return (
    <header className=" flex border-b border-b-accent fixed top-0 bg-background w-full z-20 justify-center">
      <div className="flex justify-between py-2 " style={{ width: "87.3%" }}>
        <h2 className="text-2xl font-bold mr-auto">Zenith Blog</h2>
        <div className="flex gap-2">
          <Button variant="secondary" className="bg-slate-300 text-black">
            Log in
          </Button>
          <Button className="bg-purple-700 hover:bg-gradient-to-r from-violet-500 to-purple-500  ">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};
