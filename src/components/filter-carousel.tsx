"use client";

import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface IFilterCarouseProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect: (value: string | null) => void;
  data?: {
    value: string;
    label: string;
  }[];
}

const FilterCarousel = ({
  value,
  onSelect,
  data,
  isLoading,
}: IFilterCarouseProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
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

  return (
    <div className="relative w-full">
      {/* left fade */}
      <span
        className={cn(
          "absolute left-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none",
          current === 1 && "hidden"
        )}
      />

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="px-12 relative"
      >
        <CarouselContent className="-ml-3">
          {!isLoading && (
            <CarouselItem
              className="pl-3 basis-auto"
              onClick={() => onSelect(null)}
            >
              <Badge
                variant={!value ? "default" : "secondary"}
                className="rounded-lg px-3 py-1 cursor-pointer whitespace-normal text-sm"
              >
                ALL
              </Badge>
            </CarouselItem>
          )}
          {isLoading &&
            Array.from({ length: 14 }).map((_, i) => (
              <Skeleton
                className="rounded-lg px-3 py-1 h-full text-sm w-[100px] font-semibold mx-1"
                key={i}
              >
                &nbsp;
              </Skeleton>
            ))}

          {!isLoading &&
            data?.map((item) => (
              <CarouselItem key={item.value} className="pl-3 basis-auto">
                <Badge
                  variant={value === item.value ? "default" : "secondary"}
                  className="rounded-lg px-3 py-1 cursor-pointer whitespace-normal text-sm"
                  onClick={() => onSelect(item.value)}
                >
                  {item.label}
                </Badge>
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>

      {/* right fade */}
      <span
        className={cn(
          "absolute right-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none",
          current === count && "hidden"
        )}
      />
    </div>
  );
};

export default FilterCarousel;
