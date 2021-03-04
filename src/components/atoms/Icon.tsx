export const config = { amp: true };

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Icons = {
  github: faGithub,
  twitter: faTwitter,
};
export type Icons = keyof typeof Icons;

interface Props extends FontAwesomeIconProps {
  icon: Icons;
}

export const Icon: React.FC<Props> = ({ icon, ...rest }) => {
  return <FontAwesomeIcon icon={Icons[icon]} {...rest} />;
};
