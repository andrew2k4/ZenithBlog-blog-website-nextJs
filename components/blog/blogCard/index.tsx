"use client";

import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

type blogCardProps = {
  name: string;
  date: string;
  image: string;
  title: string;
  description: string;
  tag: string[];
};

export const BlogCard = ({
  blogCard,
  left,
}: {
  blogCard: blogCardProps;
  left: boolean;
}) => {
  return (
    <div
      className={clsx(
        "flex gap-5  hover:bg-slate-50 p-4 rounded-lg w-full  overflow-hidden transition-transform transform-gpu hover:scale-95",
        !left ? " flex-1 flex-col " : "flex-row"
      )}
    >
      <Image
        src={blogCard.image}
        alt={blogCard.title}
        className="object-cover rounded p-0 m-0 w-full"
        width={800}
        height={600}
        style={
          !left ? { aspectRatio: "18/7" } : { aspectRatio: "7/5", width: "50%" }
        }
        priority
      />
      <div
        className={clsx(
          "flex flex-col",
          !left ? "gap-5" : " gap-3 flex-1 w-1/2"
        )}
      >
        <div className="flex w-full items-center m-0 p-0">
          <h3 className="text-purple-700 text-sm font-semibold ">
            {blogCard.name}
          </h3>
          <div className="h-2 w-2 bg-purple-700 rounded-full mx-1" />
          <p className="text-purple-700 text-sm font-semibold ">
            {blogCard.date}
          </p>
        </div>
        <div className=" flex justify-between items-center ">
          <h1 className="font-semibold text-xl">{blogCard.title}</h1>
          <ArrowUpRight size={24} className="font-semibold" />
        </div>

        <h2 className="text-muted-foreground line-clamp-4">
          {blogCard.description}
        </h2>
        <div className="flex justify-start w-full gap-6 mt-4">
          {blogCard.tag.slice(0, 2).map((b, i) => (
            <Badge
              variant="outline"
              className="bg-slate-100 py-1 px-3 rounded-full text-sky-900 font-medium"
              key={i}
            >
              {b}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
