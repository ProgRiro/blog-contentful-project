export const config = { amp: true };

export const Hero: React.FC = () => {
  return (
    <>
      <h1>ProgRiro Blog</h1>
      <style jsx>
        {`
          h1 {
            font-size: 60px;
            text-align: center;
            border: solid 8px black;
          }
        `}
      </style>
    </>
  );
};
