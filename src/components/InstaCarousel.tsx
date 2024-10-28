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
      className='w-[60%] sm:w-[80%] mt-20'
    >
      <CarouselContent className='-ml-1'>
        {images.slice(0, 9).map((image) => (
          <CarouselItem key={image.id} className='pl-1 md:basis-1/2 lg:basis-1/3'>
            <Card>
              <CardContent className='flex items-center justify-center m-6'>
                <Link href={image.permalink} target='_blank' className='relative group'>
                  {image.media_type !== 'VIDEO' ? (
                    <article className='relative w-[300px] h-[300px] overflow-clip'>
                      <Image
                        className='rounded-xl transition-opacity duration-300 group-hover:opacity-50'
                        src={image.media_url}
                        alt='Carousel image from 21 Sid Instagram page'
                        width='300'
                        height='300'
                        priority={true}
                      />
                    </article>
                  ) : (
                    <article className='relative w-[300px] h-[300px] overflow-clip'>
                      <video
                        src={image.media_url}
                        width='300'
                        height='300'
                        title='Carousel image from 21 Sid Instagram page'
                        className='rounded-xl transition-opacity duration-300 group-hover:opacity-50'
                      ></video>
                    </article>
                  )}
                  <p className='absolute inset-0 flex items-center justify-center text-white text-center font-bold text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 rounded-xl px-5'>
                    {image.caption.substring(0, 150) + '...'}
                  </p>
                </Link>
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
