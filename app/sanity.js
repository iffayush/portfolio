import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "ijjy6ogt",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2025-02-07", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content or accessing previewDrafts perspective
});

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
