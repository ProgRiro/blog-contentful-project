export const config = { amp: true };

import { Header, Footer } from "@/components/organisms";

export const PostLayout: React.FC = ({ children }) => {
  return (
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
  );
};
