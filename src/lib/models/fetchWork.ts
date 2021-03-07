import { fetchGraphQL } from ".";
import { getWorksResponseInterface, WORKS_GRAPHQL_FIELDS } from "@/lib";

const extractWork = (fetchResponse: any): getWorksResponseInterface => {
  return fetchResponse?.data?.workCollection?.items?.[0];
};

const extractWorkEntries = (
  fetchResponse: any
): getWorksResponseInterface[] => {
  return fetchResponse?.data?.workCollection?.items;
};

export const getPreviewWorkBySlug = async (slug: string) => {
  const entry = await fetchGraphQL(
    `
    query {
        workCollection(where: {slug: "${slug}"}, preview: true, limit: 1) {
            items {
                ${WORKS_GRAPHQL_FIELDS}
            }
        }
    }
    `,
    true
  );
  return extractWork(entry);
};

export const getAllWorksWithSlug = async () => {
  const entries = await fetchGraphQL(
    `
    query {
        workCollection(where: { slug_exists: true }, order: date_DESC) {
            items {
            ${WORKS_GRAPHQL_FIELDS}
            }
        }
    }
    `
  );
  return extractWorkEntries(entries);
};

export const getAllWorksForHome = async (preview: boolean) => {
  const entries = await fetchGraphQL(
    `query {
        workCollection(order: date_DESC, preview: ${
          preview ? "true" : "false"
        }) {
            items {
            ${WORKS_GRAPHQL_FIELDS}
            }
        }
    }`,
    preview
  );
  return extractWorkEntries(entries);
};

export const getWorks = async (
  slug: string,
  preview: boolean
): Promise<{
  work: getWorksResponseInterface;
  moreWorks: getWorksResponseInterface[];
}> => {
  const entry = await fetchGraphQL(
    `
    query {
        workCollection(where: {slug: "${slug}"}, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
            ${WORKS_GRAPHQL_FIELDS}
            }
        }
    }
    `,
    preview
  );
  const entries = await fetchGraphQL(
    `
    query {
        workCollection(where: {slug_not_in:
            "${slug}"}, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
            items {
                ${WORKS_GRAPHQL_FIELDS}
            }
        }
    }
        `,
    preview
  );
  return {
    work: extractWork(entry),
    moreWorks: extractWorkEntries(entries),
  };
};
