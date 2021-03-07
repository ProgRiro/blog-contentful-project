export const config = { amp: true };

import { Hero } from "@/components/atoms";
import { NavMenu } from ".";

export const Header = () => {
  return (
    <>
      <div className="header">
        <Hero />
        <NavMenu />
      </div>
      <style jsx>
        {`
          .header {
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 5px double #6c2735;
          }
        `}
      </style>
    </>
  );
};
