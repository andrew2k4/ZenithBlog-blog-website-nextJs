"use client";

import { LogIn } from "lucide-react";
import React, { useState } from "react";
import { useTransition } from "react";
import { Loader } from "@/components/ui/loader";
import Link from "next/link";
import clsx from "clsx";

export const LoginButton = ({
  link,
  children,
  className,
}: {
  link: string;
  children: string;
  className: string;
}) => {
  const [isPending, setIsPending] = useState<boolean>(false);
  return (
    <Link
      href={link}
      className={clsx(
        className,
        "flex-row flex  items-center text-sm font-bold py-2 px-4 rounded-lg "
      )}
      onClick={() => setIsPending(true)}
    >
      {isPending ? <Loader className="mr-2 h-4 w-4" /> : ""}
      {children}
    </Link>
  );
};
