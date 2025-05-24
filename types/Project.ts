import { PortableTextBlock } from "sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: SanityImageSource;
  url: string;
  Content: PortableTextBlock[];
};

export type ProjectImage = {
  imageAlt: string;
  imageUrl: string;
};
