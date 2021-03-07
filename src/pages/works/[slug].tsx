export const config = { amp: true };

import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { Loader } from "@/components/molecules";
import { PostBody, PostHeader } from "@/components/organisms";
import { PostLayout } from "@/components/templates";
import { CMS_NAME } from "@/lib/constants";
import { getAllWorksWithSlug, getWorks } from "@/lib";

interface WorkGetStaticProps {
  work: any;
  moreWorks: any[];
  preview: boolean;
}

const Work: React.FC<WorkGetStaticProps> = ({ work, moreWorks, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !work) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <PostLayout>
      {router.isFallback ? (
        <Loader />
      ) : (
        <article>
          <Head>
            <title>
              {work.title} | {CMS_NAME}
            </title>
            <meta property="og:image" content={work.coverImage.url} />
          </Head>
          <PostHeader
            title={work.title}
            date={work.date}
            coverImageUrl={work.coverImage.url}
            authorName={work.author.name}
            authorPictureUrl={work.author.picture.url}
          />
          <PostBody content={work.content} />
        </article>
      )}
    </PostLayout>
  );
};

export default Work;

interface Props {
  params: {
    slug: string;
  };
  preview: boolean;
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}: Props) => {
  const data = await getWorks(params.slug, preview);

  return {
    props: {
      preview,
      work: data?.work ?? null,
      moreWorks: data?.moreWorks ?? null,
    },
    revalidate: 300,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allWorks = await getAllWorksWithSlug();
  return {
    paths: allWorks?.map(({ slug }: any) => `/works/${slug}`) ?? [],
    fallback: true,
  };
};
