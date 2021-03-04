export const config = { amp: true };

export const AuthorName: React.FC = ({ children }) => {
  return (
    <>
      <small>{children}</small>
      <style jsx>
        {`
          small {
            color: gray;
          }
        `}
      </style>
    </>
  );
};
