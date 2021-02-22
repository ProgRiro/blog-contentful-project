export const config = { amp: true };

export const AuthorName: React.FC = ({ children }) => {
  return (
    <>
      <small>{children}</small>
      <style jsx>
        {`
          color: gray;
          margin-left: 10px;
        `}
      </style>
    </>
  );
};
