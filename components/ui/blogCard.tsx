import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "./badge";

type blogCardProps = {
  name: string;
  date: string;
  image: string;
  title: string;
  description: string;
  tag: string[];
};

export const BlogCard = ({ blogCard }: { blogCard: blogCardProps }) => {
  return (
    <Link href="/blog">
      <div className="flex-1 gap-5 flex flex-col hover:bg-slate-50 p-4 rounded-lg w-full  overflow-hidden transition-transform transform-gpu hover:scale-95">
        <Image
          src={blogCard.image}
          alt="alt"
          className="object-cover rounded p-0 m-0 w-full"
          width={800}
          height={600}
          style={{ aspectRatio: "18/7" }}
          priority={false}
        />
        <div className="flex w-full items-center m-0 p-0">
          <p className="text-purple-700 text-sm font-semibold ">
            {blogCard.name}
          </p>
          <div className="h-2 w-2 bg-purple-700 rounded-full mx-1" />
          <p className="text-purple-700 text-sm font-semibold ">
            {blogCard.date}
          </p>
        </div>
        <div className=" flex justify-between items-center ">
          <p className="font-semibold text-xl">{blogCard.title}</p>
          <ArrowUpRight size={24} className="font-semibold" />
        </div>

        <p className="text-muted-foreground line-clamp-4">
          {blogCard.description}
        </p>
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
    </Link>
  );
};
