"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HomeCarousel({
  items,
}: {
  items: { image: string; url: string; title: string; buttonCaption: string }[];
}) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <Carousel
      dir="ltr"
      plugins={[plugin.current]}
      className="mx-auto w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.title}>
            <Link href={item.url}>
              <div className="relative -m-1 flex aspect-16/6 items-center justify-center p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute top-1/2 left-16 w-1/3 -translate-y-1/2 transform md:left-32">
                  <h2
                    className={cn(
                      "text-primary mb-4 text-xl font-bold md:text-6xl",
                    )}
                  >
                    {item.title}
                  </h2>

                  <Button className="hidden md:block">
                    {item.buttonCaption}
                  </Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 md:left-12" />
      <CarouselNext className="right-0 md:right-12" />
    </Carousel>
  );
}
