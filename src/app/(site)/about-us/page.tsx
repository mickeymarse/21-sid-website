import Image from 'next/image';
import { aboutUsDataBlur } from '@/lib/aboutUsDataBlur';
import { getContent, getImage } from "../../../sanity/sanity.utils";
import { PortableText } from "@portabletext/react";

export default async function About() {
  const aboutUs = await getContent('about-us');
  const aboutUsImage = await getImage('about-us-image');

  return (
    <section className='flex flex-col items-center gap-5 my-12'>
      <h3 className='text-3xl font-bold mb-10'>About Us</h3>
      <Image
        src={aboutUsImage.imageUrl}
        width={750}
        height={500}
        alt={aboutUsImage.imageAlt || ""}
        placeholder={aboutUsDataBlur}
      ></Image>
      <br />
      <span className='mx-5 max-w-[750px] text-xl line text-justify leading-relaxed'>
      <PortableText
        value={aboutUs.Content}
      />
      </span>
    </section>
  );
};
