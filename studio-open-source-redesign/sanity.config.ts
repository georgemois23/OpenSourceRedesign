import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'


const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET


console.log('Project ID:', projectId, 'Dataset:', dataset);

if (!projectId || !dataset) {
  throw new Error('Missing Sanity projectId or dataset in the environment variables'+ ' ' + projectId + ' ' + dataset);
}

export default defineConfig({
  name: 'default',
  title: 'open-source-redesign',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
