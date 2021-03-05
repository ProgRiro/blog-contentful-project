export const config = { amp: true };

import { Hero, Title } from "@/components/atoms";
import { Footer, Meta } from "@/components/organisms";

interface Props {
  title?: string;
}

export const PageLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Meta />
      <div className="container">
        <Hero />
        {title && <Title>{title}</Title>}
        {children}
        <Footer />
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
