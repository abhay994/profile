import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blogs/*.md',
      schema: z.object({
        date: z.string()
      })
    })
  }
})

