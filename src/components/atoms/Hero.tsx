export const config = { amp: true };

import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h1>ProgRiro Blog</h1>
        </a>
      </Link>
      <style jsx>
        {`
          a {
            color: #000;
            text-decoration: none;
          }
          h1 {
            color: #6c2735;
            font-size: 30px;
            margin-top: 1.5em;
            margin-bottom: 20px;
            position: relative;
            padding: 0.5em 1.5em;
            border-top: solid 2px #6c2735;
            border-bottom: solid 2px #6c2735;
            text-align: center;
          }
          h1:before,
          h1:after {
            content: "";
            position: absolute;
            top: -10px;
            width: 2px;
            height: -webkit-calc(100% + 20px);
            height: calc(100% + 20px);
            background-color: #6c2735;
          }
          h1:before {
            left: 10px;
          }
          h1:after {
            right: 10px;
          }
        `}
      </style>
    </>
  );
};
