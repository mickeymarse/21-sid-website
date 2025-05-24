import { PortableTextBlock } from "sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Project = {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  name: string;
  slug: string;
  image: SanityImageSource;
  url: string;
  Content: PortableTextBlock[];
};

export type ProjectImage = {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  name: string;
  slug: string;
  imageAlt: string;
  imageUrl: string;
};
