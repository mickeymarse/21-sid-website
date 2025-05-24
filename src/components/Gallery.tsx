import Image from "next/image";
import { getGalleryImages } from "@/sanity/sanity.utils";

export default async function Gallery() {
  const galleryImages = await getGalleryImages();
  console.log(galleryImages);

  return (
    <article className="grid grid-cols-2 gap-4 p-8 -pt-16">
      {galleryImages.map((image, idx) => (
        <section key={image.slug} className="grid gap-4">
          <Image
            className={`h-auto max-w-full rounded-lg ${idx % 2 != 0 ? "pt-6 ml-4" : ""}`}
            src={image.imageUrl}
            alt={image.imageAlt || ""}
            width={500}
            height={500}
          />
        </section>
      ))}
    </article>
  );
}
