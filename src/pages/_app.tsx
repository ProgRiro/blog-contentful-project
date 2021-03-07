import type { AppProps } from "next/app";

import { Meta } from "@/components/organisms";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
