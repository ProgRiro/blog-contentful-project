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
            width: 120px;
            height: 140px;
            border-radius: 50%;
            background: radial-gradient(
              circle,
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0)
            );
          }
        `}
      </style>
    </>
  );
};
