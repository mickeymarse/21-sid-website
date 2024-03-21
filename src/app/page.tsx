import { getStoryblokApi, StoryblokComponent } from '@storyblok/react/rsc';

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Story: {data.story.name}</h1>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

export async function fetchData() {
  // Check sbParams type error
  let sbParams: any = { version: 'draft' };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: 'no-store' });
}
