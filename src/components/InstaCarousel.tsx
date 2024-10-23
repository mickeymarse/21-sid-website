import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ImageData {
  id: string;
  download_url: string;
}

async function getImages() {
  const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5', {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export default async function InstaCarousel() {
  const images: ImageData[] = await getImages();

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className='w-[60%] sm:w-[80%]'
    >
      <CarouselContent className='-ml-1'>
        {images.map((image) => (
          <CarouselItem key={image.id} className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <Card>
              <CardContent className='flex items-center justify-center m-6'>
                <Image
                  className='h-auto max-w-full rounded-xl'
                  src={image.download_url}
                  alt='Carousel image'
                  width={500}
                  height={500}
                  priority={true}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
