export const config = { amp: true };

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export const PostBody = ({ content }: any) => {
  return (
    <div className="postContent">
      <ReactMarkdown plugins={[gfm]} source={content} />
      <style jsx>
        {`
          .postContent {
            width: 90%;
            margin: 50px auto;
          }
        `}
      </style>
    </div>
  );
};
