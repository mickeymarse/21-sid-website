import { createClient, groq } from "next-sanity";
import { Project, ProjectImage } from "../../types/Project";
import clientConfig from "./config/client-config";

const CACHE_OPTIONS = { next: { revalidate: 300 } }; // 5 minutes

const client = createClient(clientConfig);

async function fetchWithCache<T>(query: string, params = {}) {
  return client.fetch<T>(query, params, CACHE_OPTIONS);
}

export async function getGalleryImages(): Promise<ProjectImage[]> {
  return fetchWithCache<ProjectImage[]>(
    groq`*[
  _type == "project" &&
  string::startsWith(slug.current, "gallery-image")
]{
  _id,
  _createdAt,
  _updatedAt,
  name,
  "slug": slug.current,
  "imageAlt": image.alt,
  "imageUrl": image.asset->url
}`
  );
}

export async function getImage(content: string): Promise<ProjectImage> {
  return fetchWithCache<ProjectImage>(
    groq`*[_type == "project" && slug.current == "${content}"][0]
    {
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      "imageAlt": image.alt,
      "imageUrl": image.asset->url
    }`
  );
}

export async function getContent(content: string): Promise<Project> {
  return fetchWithCache<Project>(
    groq`*[_type == "project" && slug.current == "${content}"][0]`
  );
}
