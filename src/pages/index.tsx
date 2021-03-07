export const config = { amp: true };

import Head from "next/head";

import { PageLayout } from "@/components/templates";
import { PostCard } from "@/components/organisms";
import { CMS_NAME } from "@/lib/constants";
import { getAllPostsForHome } from "@/lib/api";
import { getPostResponseInterface } from "@/lib/apiInterface";

export default function Home({
  preview,
  allPosts,
}: {
  preview: boolean;
  allPosts: getPostResponseInterface[];
}) {
  return (
    <PageLayout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <div className="gridPostsContainer">
        {allPosts.length > 0 &&
          allPosts.map((post: any, index) => (
            <PostCard key={index} post={post} />
          ))}
      </div>
      <style jsx>
        {`
          body {
            background-color: gray;
          }
          .gridPostsContainer {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2em 1.8em;
          }
          @media screen and (max-width: 1024px) {
            .gridPostsContainer {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media screen and (max-width: 480px) {
            .gridPostsContainer {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </PageLayout>
  );
}

export const getStaticProps = async ({ preview = true }) => {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: {
      preview,
      allPosts,
    },
    revalidate: 300,
  };
};
