export const config = { amp: true };

import Link from "next/link";
import { Button, colors } from "@/components/atoms";

interface Props {
  to: string;
  color: colors;
}

export const LinkButton: React.FC<Props> = ({ children, to, color }) => {
  return (
    <Link href={to}>
      <a rel="noopener">
        <Button color={color}>{children}</Button>
      </a>
    </Link>
  );
};
