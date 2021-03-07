import Document, { Html, Head, Main, NextScript } from "next/document";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000" />
          <meta
            name="description"
            content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&family=Noto+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <style jsx global>{`
            body {
              font-family: "Noto Sans", "M PLUS Rounded 1c", sans-serif;
              background-color: #f2efe4;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
