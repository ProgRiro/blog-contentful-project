export const config = { amp: true };

import { AboutHeader, PostBody } from "@/components/organisms";
import { PageLayout } from "@/components/templates";
import { getAbout } from "@/lib";

const About = ({ about }: any) => {
  return (
    <PageLayout title="💡 About 💡">
      <AboutHeader />
      <PostBody content={about.content} />
    </PageLayout>
  );
};

export default About;

export const getStaticProps = async ({ preview = true }) => {
  const about = (await getAbout(preview)) ?? [];
  return {
    props: {
      about,
    },
  };
};
