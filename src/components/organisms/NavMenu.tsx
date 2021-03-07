export const config = { amp: true };

import { LinkButton } from "@/components/molecules";

export const NavMenu = () => {
  return (
    <>
      <div className="navMenu">
        <LinkButton to="/" color="primary">
          Home
        </LinkButton>
        <LinkButton to="/about" color="primary">
          About
        </LinkButton>
        <LinkButton to="/works" color="primary">
          Works
        </LinkButton>
      </div>
      <style jsx>
        {`
          .navMenu {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};
