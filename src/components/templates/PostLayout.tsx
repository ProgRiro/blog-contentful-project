export const config = { amp: true };

import { Hero } from "@/components/atoms";
import { Footer } from "@/components/organisms";

export const PostLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="container">
        <Hero />
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
