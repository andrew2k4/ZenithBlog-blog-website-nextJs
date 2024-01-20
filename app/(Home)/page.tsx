import { BlogCard } from "@/components/ui/blogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 w-full ">
      <div className="flex flex-col justify-center items-center mt-28 gap-2">
        <p className="text-purple-700 font-bold">Our blog</p>
        <p className="text-5xl">
          Stories <span>and</span> interviews
        </p>
        <p className="text-muted-foreground mt-5">
          Subscribe to learn about new product features, the latest in
          technology, and updates
        </p>
        <div className="flex w-full justify-center items-center space-x-2 mt-8">
          <Input placeholder="Enter your email" className="max-w-80 py-5" />
          <Button className="bg-purple-700 px-4 py-6">Subscribe</Button>
        </div>
      </div>
      <div className="mt-14 gap-4">
        <p className="font-medium text-xl">Recent blog posts</p>
        <BlogCard />
      </div>
    </div>
  );
}
