export const config = { amp: true };

import Head from "next/head";
import { Meta } from "@/components/organisms";

export const PostLayout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};
