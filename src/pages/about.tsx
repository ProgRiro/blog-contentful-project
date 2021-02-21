export const config = { amp: true };

const About = () => {
  const imgs = [
    "https://amp.dev/static/samples/img/image1.jpg",
    "https://amp.dev/static/samples/img/image1.jpg",
    "https://amp.dev/static/samples/img/image1.jpg",
  ];

  return (
    <>
      <h3>About Page</h3>
      {imgs.map((img) => (
        <amp-img
          width="300"
          height="300"
          src={img}
          alt="a cool image"
          layout="responsive"
        />
      ))}
    </>
  );
};

export default About;
