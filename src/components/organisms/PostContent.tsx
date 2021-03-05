export const config = { amp: true };

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export const PostContent = ({ content }: any) => {
  return (
    <div>
      <ReactMarkdown plugins={[gfm]} source={content} />
    </div>
  );
};
