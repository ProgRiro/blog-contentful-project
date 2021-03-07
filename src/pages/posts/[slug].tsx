export const config = { amp: true };

import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { Loader } from "@/components/molecules";
import { PostBody, PostHeader } from "@/components/organisms";
import { PostLayout } from "@/components/templates";
import { CMS_NAME } from "@/lib/constants";
import { getAllPostsWithSlug, getPosts } from "@/lib";

interface PostGetStaticProps {
  post: any;
  morePosts: any[];
  preview: boolean;
}

const Post: React.FC<PostGetStaticProps> = ({ post, morePosts, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
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
              {post.title} | {CMS_NAME}
            </title>
            <meta property="og:image" content={post.coverImage.url} />
          </Head>
          <PostHeader
            title={post.title}
            date={post.date}
            coverImageUrl={post.coverImage.url}
            authorName={post.author.name}
            authorPictureUrl={post.author.picture.url}
          />
          <PostBody content={post.content} />
        </article>
      )}
    </PostLayout>
  );
};

export default Post;

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
  const data = await getPosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
    revalidate: 300,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }: any) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
};
