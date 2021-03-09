export const config = { amp: true };

export const Title: React.FC = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>
        {`
          h1 {
            color: #6c2735;
            font-size: 40px;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};
