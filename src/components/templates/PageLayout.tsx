export const config = { amp: true };

import Head from "next/head";

import { Hero, Title } from "@/components/atoms";

interface Props {
  title?: string;
}

export const PageLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>{title} | ProgRiro Blog</title>
        </Head>
        <Hero />
        <Title>{title}</Title>
        {children}
        <style jsx>{`
          .container {
            width: 80%;
            margin: 0 auto;
          }
        `}</style>
      </div>
    </>
  );
};
