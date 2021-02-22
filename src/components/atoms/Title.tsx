export const config = { amp: true };

export const Title: React.FC = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>
        {`
          h1 {
            font-size: 50px;
          }
        `}
      </style>
    </>
  );
};
