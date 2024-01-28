import { BlogCard } from "@/components/ui/blogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import blogCardData from "../../fakeData/blogCardFakeData.json";
import { LeftBlogCard } from "@/components/ui/leftBlogCard";

export default function Home() {
  return (
    <div className="flex-1 w-full flex flex-col">
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
          <Button className="bg-purple-600 hover:bg-purple-900 px-4 py-6">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="mt-14 gap-4 w-full flex flex-1 flex-col">
        <p className="font-medium text-xl ">Recent blog posts</p>
        <div className=" flex">
          <div className="flex-1 w-1/2 ">
            <BlogCard blogCard={blogCardData[0]} />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <div>
              <LeftBlogCard blogCard={blogCardData[0]} />
            </div>
            <div>
              <LeftBlogCard blogCard={blogCardData[0]} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-col mt-24">
        <p className="font-medium text-xl mb-5">All blog post</p>

        <div className="grid grid-cols-3 ">
          {blogCardData.map((blogCard, i) => (
            <BlogCard blogCard={blogCardData[i]} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
