import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import type { PageStoryblok } from '../../../../component-types-sb.d.ts';

const Page = ({ blok }: PageStoryblok) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
