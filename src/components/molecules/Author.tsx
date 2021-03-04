export const config = { amp: true };

import { AuthorName, Avatar } from "@/components/atoms";

interface Props {
  authorName: string;
  avatarSrc: string;
}

export const Author: React.FC<Props> = ({ authorName, avatarSrc }) => {
  return (
    <>
      <div className="authorContainer">
        <Avatar src={avatarSrc} />
        <AuthorName>{authorName}</AuthorName>
      </div>
      <style jsx>
        {`
          .authorContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 20px;
            position: absolute;
            top: 200px;
            right: 0;
          }
        `}
      </style>
    </>
  );
};
