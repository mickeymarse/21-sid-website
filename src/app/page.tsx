
import Gallery from "@/components/Gallery";
import InstaCarousel from "@/components/InstaCarousel";



export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-16 justify-items-center  py-[50px]">
      <Gallery />
      <InstaCarousel />
    </main>
  );

}
