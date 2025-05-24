import { createClient, groq } from "next-sanity";
import { Project, ProjectImage } from "../../types/Project";
import clientConfig from "./config/client-config";

// export async function getProjects(): Promise<Project[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "project"]{
//     _id,
//     _createdAt,
//     name,
//     "slug": slug.current,
//     "image": image.asset->url,
//     url,
//     content,
//     }`
//   )
// }

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "project"]`);
}

export async function getHomeIntro(): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == "homepage-introduction"][0]`
  );
}

export async function getImage(): Promise<ProjectImage> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == "homepage-introduction"][0]{  "imageAlt": image.alt,
  "imageUrl": image.asset->url}`
  );
}
