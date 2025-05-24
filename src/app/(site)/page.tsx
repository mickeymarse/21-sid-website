
import Gallery from '@/components/Gallery';
import { getHomeIntro } from "../../sanity/sanity.utils"
import { PortableText, PortableTextReactComponents } from '@portabletext/react';


export default async function Home() {

  const homeIntro = await getHomeIntro();

  const components: Partial<PortableTextReactComponents> = {
    block: {
    normal: ({children}) => <p className='flex flex-wrap text-center max-w-xl text-slate-800 mb-10 -mt-10' >{children}</p>,
  },
};

  return (
    <main className='flex flex-col items-center justify-center py-[50px]'>
      {homeIntro.map((hi) => (
          <PortableText key={hi.slug} value={hi.Content} components={components}/>
  ))
}

      <Gallery />
    </main>
  );
}
