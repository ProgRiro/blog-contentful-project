export const config = { amp: true };

import { IconButton } from ".";

export const Icons = () => {
  return (
    <div className="icons">
      <IconButton icon="github" link="github" width={30} />
      <IconButton icon="twitter" link="twitter" width={30} />
      <style jsx>
        {`
          .icons {
            display: flex;
            justify-content: space-around;
            margin: 15px auto;
            width: calc(50px * 2); // number of IconButton
          }
        `}
      </style>
    </div>
  );
};
