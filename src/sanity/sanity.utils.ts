import { createClient, groq } from 'next-sanity';
import { Project } from '../../types/Project'
import clientConfig from './config/client-config';

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
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]`
  )
}

export async function getHomeIntro(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == "homepage-introduction"]`
  )
}