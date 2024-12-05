import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';


const PICTURES_QUERY = defineQuery(`*[
  _type == "picture"
  && defined(image)
]{_id, name, slug, image}`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function Gallery() {
  const { data: pictures } = await sanityFetch({ query: PICTURES_QUERY });

  return (

    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {pictures.map((picture: any) => (
        <li className="p-4 rounded-lg" key={picture._id}>

              <Image
                src={urlFor(picture.image)?.url() || 'https://via.placeholder.com/550x310'}
                alt={picture.name || 'Picture'}
                width={850}
                height={610}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
        </li>
      ))}
    </ul>
  );
}