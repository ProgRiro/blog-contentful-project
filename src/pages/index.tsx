export const config = { amp: true };

import Head from "next/head";

import { PageLayout } from "@/components/templates";
import { PostCard } from "@/components/organisms";
import { CMS_NAME } from "@/lib/constants";
import { getAllPostsForHome, getPostResponseInterface } from "@/lib";

const Home = ({
  preview,
  allPosts,
}: {
  preview: boolean;
  allPosts: getPostResponseInterface[];
}) => {
  return (
    <PageLayout title="👋 Hi there! 👋">
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <div className="gridPostsContainer">
        {allPosts.length > 0 &&
          allPosts.map((post: any, index) => (
            <PostCard key={index} data={post} to="posts" />
          ))}
      </div>
      <style jsx>
        {`
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
};

export default Home;

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
