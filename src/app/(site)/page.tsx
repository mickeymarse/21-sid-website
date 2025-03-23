
import Gallery from '@/components/Gallery';
import InstaCarousel from "@/components/InstaCarousel";
import { getProjects } from "../../sanity/sanity.utils"

export default async function Home() {

  const projects = await getProjects();

  return (
    <main className='flex flex-col items-center justify-center py-[50px]'>
      <p className='flex flex-wrap text-center max-w-xl text-slate-800 mb-10 -mt-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {projects.map((project) => (
          <p key={project._id}>{project.name}</p>
  ))
}

      <Gallery />
      {/* <InstaCarousel /> */}
    </main>
  );
}
