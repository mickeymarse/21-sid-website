
import Gallery from '@/components/Gallery';
//import InstaCarousel from "@/components/InstaCarousel";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center py-[50px]'>
      <p className='flex flex-wrap text-center max-w-xl text-slate-800 mb-10 -mt-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <Gallery />
      {/* <InstaCarousel /> */}
    </main>
  );
}
