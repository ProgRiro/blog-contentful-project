export const config = { amp: true };

import Head from "next/head";

import { PageLayout } from "@/components/templates";
import { PostCard } from "@/components/organisms";
import { CMS_NAME } from "@/lib/constants";

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <div className="gridPostsContainer">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
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
