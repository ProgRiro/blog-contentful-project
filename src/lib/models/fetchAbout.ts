import { fetchGraphQL } from ".";
import { ABOUT_GRAPHQL_FIELDS } from "@/lib";

const extractAbout = (fetchResponse: any) => {
  return fetchResponse?.data?.aboutCollection?.items?.[0];
};

export const getAbout = async (preview: boolean) => {
  const entry = await fetchGraphQL(
    `
      query {
        aboutCollection(preview: ${preview ? "true" : "false"}) {
          items {
            ${ABOUT_GRAPHQL_FIELDS}
          }
        }
      }
    `,
    preview
  );
  return extractAbout(entry);
};
