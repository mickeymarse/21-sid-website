import React from "react";
import Image from "next/image";


export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 -pt-8">
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
