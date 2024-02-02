"use client";
import { useEffect, useState } from "react";

import { BlogCard } from "@/components/blog/blogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import blogCardData from "../../fakeData/blogCardFakeData.json";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  let { width } = useWindowDimensions();
  if (!width) return;

  return (
    <main className="flex-1 w-full flex flex-col">
      <section className="flex flex-col justify-center items-center mt-28 gap-2">
        <h6 className="text-purple-700 font-bold">Our blog</h6>
        <h1 className="text-5xl">
          Stories <span>and</span> interviews
        </h1>
        <h2 className="text-muted-foreground mt-5">
          Subscribe to learn about new product features, the latest in
          technology, and updates
        </h2>
        <div className="flex w-full justify-center items-center space-x-2 mt-8">
          <Input placeholder="Enter your email" className="max-w-80 py-5" />
          <Button className="bg-purple-600 hover:bg-purple-900 px-4 py-6">
            Subscribe
          </Button>
        </div>
      </section>

      <section className="mt-14 gap-4 w-full flex flex-1 flex-col">
        <p className="font-medium text-xl ">Recent blog posts</p>
        {width < 1574 ? (
          <Carousel
            setApi={setApi}
            className="w-full "
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <BlogCard blogCard={blogCardData[0]} left={false} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {width > 768 ? (
              <>
                <CarouselNext />
                <CarouselPrevious />
              </>
            ) : (
              ""
            )}
          </Carousel>
        ) : (
          <div className=" flex">
            <div className="flex-1 w-1/2 ">
              <BlogCard blogCard={blogCardData[0]} left={false} />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <BlogCard left={true} blogCard={blogCardData[0]} />
              <BlogCard left={true} blogCard={blogCardData[6]} />
            </div>
          </div>
        )}
      </section>

      <section className="flex gap-4 flex-col mt-24">
        <p className="font-medium text-xl mb-5">All blog post</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {blogCardData.map((blogCard, i) => (
            <Link href="/blog" key={i}>
              <BlogCard blogCard={blogCard} key={i} left={false} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
