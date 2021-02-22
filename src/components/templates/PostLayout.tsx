export const config = { amp: true };

import Head from "next/head";

export const PostLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>ProgRiro Blog</title>
      </Head>
      {children}
    </>
  );
};
