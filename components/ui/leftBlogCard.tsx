"use client";

import Head from "next/head";
import Image from "next/image";
import React from "react";
import image from "./andrew.jpg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "./badge";

type blogCardProps = {
  name: string;
  date: string;
  title: string;
  image: string;
  description: string;
  tag: string[];
};

export const LeftBlogCard = ({ blogCard }: { blogCard: blogCardProps }) => {
  return (
    <Link href="/blog">
      <div className="flex gap-4 hover:bg-slate-50 p-4 rounded-lg w-full overflow-hidden transition-transform transform-gpu hover:scale-105">
        <Image
          src={blogCard.image}
          alt="alt"
          width={800}
          height={600}
          className="flex-1 rounded"
          style={{ aspectRatio: "7/5", width: "50%" }}
          priority
        />

        <div className=" flex gap-3 flex-col flex-1 w-1/2 ">
          <div className=" flex flex-1  flex-row items-center ">
            <p className="text-purple-700 text-sm font-semibold">
              {blogCard.name}
            </p>
            <div className="rounded-full w-1 h-1 bg-purple-700 mx-1" />
            <p className="text-purple-700 text-sm font-semibold">
              {blogCard.date}
            </p>
          </div>

          <div className=" flex justify-between items-center ">
            <p className="font-semibold text-xl">{blogCard.title}</p>
            <ArrowUpRight size={24} className="font-semibold" />
          </div>

          <p className="text-muted-foreground line-clamp-3">
            {blogCard.description}
          </p>
          <div className="flex justify-start  mt-4">
            <Badge className="bg-slate-100 py-1 px-3 rounded-full text-sky-900 font-medium">
              Design
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};
