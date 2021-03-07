export const config = { amp: true };

import { Header, Footer, Meta } from "@/components/organisms";

export const PostLayout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="container">
        <Header />
        {children}
        <Footer />
        <style jsx>{`
          .container {
            width: 90%;
            margin: 0 auto;
          }
        `}</style>
      </div>
    </>
  );
};
