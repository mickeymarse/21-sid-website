import { storyblokEditable } from '@storyblok/react/rsc';
import type { FeatureStoryblok } from '../../../../component-types-sb.d.ts';

const Feature = ({ blok }: FeatureStoryblok) => <div {...storyblokEditable(blok)}>{blok.name}</div>;

export default Feature;
