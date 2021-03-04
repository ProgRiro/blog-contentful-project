export const config = { amp: true };

import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { Icon, Icons } from "@/components/atoms";

export const Links = {
  github: "https://github.com/ProgRiro",
  twitter: "https://twitter.com/progriro",
};
export type Links = keyof typeof Links;

interface Props extends FontAwesomeIconProps {
  icon: Icons;
  link: Links;
}

export const IconButton: React.FC<Props> = ({ icon, link, ...rest }) => {
  return (
    <>
      <a href={Links[link]} target="_blank">
        <Icon icon={icon} {...rest} />
      </a>
      <style jsx>
        {`
          a {
            color: #000;
          }
        `}
      </style>
    </>
  );
};
