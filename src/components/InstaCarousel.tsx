"use client";

import * as React from "react";
import Image from "next/image";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Define the Image interface
interface ImageData {
  id: string;
  download_url: string;
}

export default function InstaCarousel() {
  const [images, setImages] = React.useState<ImageData[]>([]);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get<ImageData[]>(
        "https://picsum.photos/v2/list?page=1&limit=5"
      );
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when the component mounts
  React.useEffect(() => {
    fetchData();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-[60%] sm:w-[80%]"
    >
      <CarouselContent className="-ml-1">
        {images.map((image) => (
          <CarouselItem key={image.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border-none">
                <CardContent className="flex items-center justify-center p-6">
                  <Image
                    className="h-auto max-w-full rounded-xl drop-shadow-xl"
                    src={image.download_url}
                    alt=""
                    width={500}
                    height={500}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
