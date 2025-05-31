import Gallery from "@/components/Gallery";
import { getContent } from "../../sanity/sanity.utils";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { CafeMenu } from "@/components/CafeMenu";

export default async function Home() {
  const homeIntro = await getContent('homepage-introduction');

  const homepageIntroductionStyle: Partial<PortableTextReactComponents> = {
    block: {
      normal: ({ children }) => (
        <p className="flex flex-wrap text-center max-w-xl text-slate-800 mb-10 -mt-10">
          {children}
        </p>
      ),
    },
  };

  return (
    <main className="flex flex-col items-center justify-center py-[50px]">
      <PortableText
        value={homeIntro.Content}
        components={homepageIntroductionStyle}
      />
      <CafeMenu />
      <Gallery />
    </main>
  );
}
