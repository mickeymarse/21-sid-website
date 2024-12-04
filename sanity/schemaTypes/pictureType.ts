import {defineField, defineType} from 'sanity'

export const pictureType = defineType({
  name: 'picture',
  title: 'Picture ',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField(    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },),
      defineField({
        name: 'image',
        type: 'image',
      }),  
  ],
})
