export const config = { amp: true };

export const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <small>Footer</small>
      </footer>
      <style jsx>
        {`
          footer {
            margin: 3em 0;
            position: relative;
            padding: 0.5em 1.5em;
            border-top: solid 2px black;
            border-bottom: solid 2px black;
            text-align: center;
          }
          footer:before,
          footer:after {
            content: "";
            position: absolute;
            top: -10px;
            width: 2px;
            height: -webkit-calc(100% + 20px);
            height: calc(100% + 20px);
            background-color: black;
          }
          footer:before {
            left: 10px;
          }
          footer:after {
            right: 10px;
          }
        `}
      </style>
    </>
  );
};
