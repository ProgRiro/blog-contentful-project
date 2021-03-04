export const config = { amp: true };

import Head from "next/head";

import { PageLayout } from "@/components/templates";
import { Avatar, AuthorName } from "@/components/atoms";
import { Author } from "@/components/molecules";
import { PostCard } from "@/components/organisms";

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="gridPostsContainer_column2">
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
          .gridPostsContainer_column2 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2em 1.8em;
          }
        `}
      </style>
    </PageLayout>
  );
}
