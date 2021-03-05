import ReactMarkdown from "react-markdown";

export const PostContent = ({ content }: any) => {
  return (
    <div>
      <ReactMarkdown source={content} />
    </div>
  );
};
