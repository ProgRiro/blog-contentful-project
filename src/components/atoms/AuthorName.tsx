export const config = { amp: true };

export const AuthorName: React.FC = ({ children }) => {
  return (
    <>
      <small>{children}</small>
      <style jsx>
        {`
          small {
            color: gray;
            font-weight: bold;
            margin-left: 10px;
          }
        `}
      </style>
    </>
  );
};
