export const config = { amp: true };

import Head from "next/head";

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>ProgRiro Blog</title>
        </Head>
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
