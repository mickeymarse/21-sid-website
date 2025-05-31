import Image from 'next/image';
import { aboutUsDataBlur } from '@/lib/aboutUsDataBlur';
import { getContent } from "../../../sanity/sanity.utils";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

export default async function About() {
  const aboutUs = await getContent('about-us');

  return (
    <section className='flex flex-col items-center gap-5 my-12'>
      <h3 className='text-3xl font-bold mb-10'>About Us</h3>
      <Image
        src='/flash.webp'
        width={750}
        height={500}
        alt='A blur memeber of staff running behind the counter. On their back, we see a white wall with the 21 Sid logo.'
        placeholder={aboutUsDataBlur}
      ></Image>
      <br />
      <span className='max-w-[750px] prose prose-lg font-medium'>
      <PortableText
        value={aboutUs.Content}
      />
      </span>
    </section>
  );
};
