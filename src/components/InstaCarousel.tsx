import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

export interface ImageData {
  data: Data[];
}

export interface Data {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  media_type: string;
  permalink: string;
}

async function getImages(): Promise<ImageData> {
  const response = await fetch(
    'https://graph.instagram.com/v20.0/17841407396810214/media?fields=id,caption,media_url,timestamp,media_type,permalink',
    {
      next: {
        revalidate: 3600,
      },
      headers: {
        Authorization: `Bearer ${process.env.INSTAGRAM_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export default async function InstaCarousel() {
  const imagesData: ImageData = await getImages();
  const images: Data[] = imagesData.data;

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className='w-[60%] sm:w-[80%] mt-10'
    >
      <CarouselContent className='-ml-1'>
        {images.slice(0, 15).map(
          (image) =>
            image.media_type === 'IMAGE' && (
              <CarouselItem key={image.id} className='pl-1 md:basis-1/2 lg:basis-1/3'>
                <Card>
                  <CardContent className='flex items-center justify-center m-6'>
                    <Link href={image.permalink} target='_blank' className='relative group'>
                      <Image
                        className='h-auto max-w-full rounded-xl transition-opacity duration-300 group-hover:opacity-50'
                        src={image.media_url}
                        alt='Carousel image'
                        width={350}
                        height={350}
                        priority={true}
                      />
                      <p className='absolute inset-0 flex items-center justify-center text-white text-center font-bold text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 rounded-xl px-5'>
                        {image.caption.substring(0, 250) + '...'}
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
