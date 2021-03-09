import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body {
            font-family: "Noto Sans", "M PLUS Rounded 1c", sans-serif;
            background-color: #f2efe4;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
