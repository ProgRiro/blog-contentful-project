export const config = { amp: true };

import React from "react";
import { Avatar } from "@/components/atoms";
import { Icons } from "@/components/molecules";

interface Props {
  authorName: string;
  authorPictureUrl: string;
}

export const AuthorIntroduce: React.FC<Props> = ({
  authorName,
  authorPictureUrl,
}) => {
  return (
    <div className="authorIntroduce">
      <h3>Author</h3>
      <Avatar src={authorPictureUrl} />
      <small>{authorName}</small>
      <amp-bodymovin-animation
        layout="fixed"
        width="180"
        height="180"
        src="https://assets10.lottiefiles.com/packages/lf20_l7PTM0.json"
        loop="true"
      />
      <h3>Other Links</h3>
      <Icons />
      <style jsx>
        {`
          .authorIntroduce {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};
