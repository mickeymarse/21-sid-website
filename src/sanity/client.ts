import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "xy9ox2qq",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}