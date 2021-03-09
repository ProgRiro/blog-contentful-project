export const config = { amp: true };

import { Icons } from "@/components/molecules";
import { COPYRIGHT_YEAR } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <Icons />
        <small>© {COPYRIGHT_YEAR} ProgRiro All rights reserved.</small>
      </footer>
      <style jsx>
        {`
          footer {
            color: #6c2735;
            margin: 3em 0;
            position: relative;
            padding: 0.5em 1.5em;
            border-top: solid 2px #6c2735;
            border-bottom: solid 2px #6c2735;
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
            background-color: #6c2735;
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
