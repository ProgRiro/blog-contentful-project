export const config = { amp: true };

import Head from "next/head";

import { PageLayout } from "@/components/templates";
import { PostCard } from "@/components/organisms";
import { CMS_NAME } from "@/lib";
import { getAllWorksForHome, getWorksResponseInterface } from "@/lib";

const Works = ({
  preview,
  allWorks,
}: {
  preview: boolean;
  allWorks: getWorksResponseInterface[];
}) => {
  return (
    <PageLayout title="📚 Works 📚">
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <div className="gridWorksContainer">
        {allWorks.length > 0 &&
          allWorks.map((work: any, index) => (
            <PostCard key={index} data={work} to="works" />
          ))}
      </div>
      <style jsx>
        {`
          .gridWorksContainer {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2em 1.8em;
          }
          @media screen and (max-width: 1024px) {
            .gridWorksContainer {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media screen and (max-width: 480px) {
            .gridWorksContainer {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </PageLayout>
  );
};

export default Works;

export const getStaticProps = async ({ preview = true }) => {
  const allWorks = (await getAllWorksForHome(preview)) ?? [];
  return {
    props: {
      preview,
      allWorks,
    },
    revalidate: 300,
  };
};
