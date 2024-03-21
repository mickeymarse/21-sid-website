import { storyblokEditable } from '@storyblok/react/rsc';
import type { TeaserStoryblok } from '../../../../component-types-sb.d.ts';

const Teaser = ({ blok }: TeaserStoryblok) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
