export const config = { amp: true };

import { PageLayout } from "@/components/templates";
import { Button } from "@/components/atoms";

const About = () => {
  const imgs = [
    "https://amp.dev/static/samples/img/image1.jpg",
    "https://amp.dev/static/samples/img/image1.jpg",
    "https://amp.dev/static/samples/img/image1.jpg",
  ];

  return (
    <PageLayout title="About">
      <p style={{ color: "blue" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, soluta
        natus! Maiores quam sit provident impedit temporibus quisquam excepturi
        vel minus nostrum molestiae culpa a, officia nihil ut voluptatum
        asperiores.
      </p>
      <Button color="primary">Click</Button>
      {imgs.map((img, index) => (
        <amp-img
          key={index}
          width="300px"
          height="300px"
          src={img}
          alt="a cool image"
          // layout=''
        />
      ))}
      <style jsx>{`
        p {
          color: red;
          // font-size: 50px;
          text-align: center;
        }
        a {
          color: blue;
          font-size: 60px;
        }
      `}</style>
    </PageLayout>
  );
};

export default About;
