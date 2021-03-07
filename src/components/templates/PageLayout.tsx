export const config = { amp: true };

import { Title } from "@/components/atoms";
import { Header, Footer } from "@/components/organisms";

interface Props {
  title?: string;
}

export const PageLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="container">
      <Header />
      {title && <Title>{title}</Title>}
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
