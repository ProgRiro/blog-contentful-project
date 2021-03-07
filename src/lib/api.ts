import { getPostResponseInterface } from "./apiInterface";
import { ABOUT_GRAPHQL_FIELDS, POST_GRAPHQL_FIELDS } from "./graphqlSchema";

const fetchGraphQL = async (
  query: string,
  preview = false
): Promise<getPostResponseInterface[]> => {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((res) => res.json());
};

// Post

const extractPost = (fetchResponse: any): getPostResponseInterface => {
  return fetchResponse?.data?.postCollection?.items?.[0];
};

const extractPostEntries = (fetchResponse: any): getPostResponseInterface[] => {
  return fetchResponse?.data?.postCollection?.items;
};

export const getPreviewPostBySlug = async (slug: string) => {
  const entry = await fetchGraphQL(
    `
    query {
        postCollection(where: {slug: "${slug}"}, preview: true, limit: 1) {
            items {
                ${POST_GRAPHQL_FIELDS}
            }
        }
    }
    `,
    true
  );
  return extractPost(entry);
};

export const getAllPostsWithSlug = async () => {
  const entries = await fetchGraphQL(
    `
    query {
        postCollection(where: { slug_exists: true }, order: date_DESC) {
            items {
            ${POST_GRAPHQL_FIELDS}
            }
        }
    }
    `
  );
  return extractPostEntries(entries);
};

export const getAllPostsForHome = async (preview: boolean) => {
  const entries = await fetchGraphQL(
    `query {
        postCollection(order: date_DESC, preview: ${
          preview ? "true" : "false"
        }) {
            items {
            ${POST_GRAPHQL_FIELDS}
            }
        }
    }`,
    preview
  );
  return extractPostEntries(entries);
};

export const getPosts = async (
  slug: string,
  preview: boolean
): Promise<{
  post: getPostResponseInterface;
  morePosts: getPostResponseInterface[];
}> => {
  const entry = await fetchGraphQL(
    `
    query {
        postCollection(where: {slug: "${slug}"}, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
            ${POST_GRAPHQL_FIELDS}
            }
        }
    }
    `,
    preview
  );
  const entries = await fetchGraphQL(
    `
    query {
        postCollection(where: {slug_not_in:
            "${slug}"}, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
            items {
                ${POST_GRAPHQL_FIELDS}
            }
        }
    }
        `,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
};

// About

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
    `
  );
  return extractAbout(entry);
};
