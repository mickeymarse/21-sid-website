import Image from "next/image";
import { getGalleryImages } from "@/sanity/sanity.utils";

export default async function Gallery() {
  const galleryImages = await getGalleryImages();

  return (
    <article className="grid grid-cols-2 md:gap-2 p-8 md:-pt-16">
      {galleryImages.map((image, idx) => (
        <section key={image.slug} className="grid md:gap-4">
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
