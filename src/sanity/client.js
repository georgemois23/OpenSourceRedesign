import { createClient } from '@sanity/client';

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = process.env.REACT_APP_SANITY_DATASET;
const apiVersion = process.env.REACT_APP_SANITY_API_VERSION;

if (!projectId || !dataset || !apiVersion) {
  throw new Error('Missing Sanity environment variables in React frontend');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
