import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'organizer',
      title: 'Organized By',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Brief summary for event preview (max 160 characters)',
      validation: (rule) => [
        rule.max(160).warning('Should be less than 160 characters')
      ],
    }),
    defineField({
      name: 'body',
      title: 'Event Description',
      type: 'array',
      of: [
        { type: 'block' },  
        { type: 'image' }   
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Event Location',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Location Name',
          type: 'string',
          description: 'e.g. "University of Macedonia, Building A"',
          validation: Rule => Rule.required()
        },
        {
          name: 'mapsLink',
          title: 'Google Maps Link',
          type: 'url',
          description: 'Full URL to Google Maps location',
          validation: Rule => Rule.uri({
            scheme: ['https'],
            allowRelative: false,
            allowCredentials: false
          })
        },
        {
          name: 'address',
          title: 'Physical Address',
          type: 'string',
          description: 'Full address for display purposes'
        }
      ]}),
    defineField({
      name: 'images',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
})