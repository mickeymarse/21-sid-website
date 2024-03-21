import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import type { GridStoryblok } from '../../../../component-types-sb.d.ts';

const Grid = ({ blok }: GridStoryblok) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
