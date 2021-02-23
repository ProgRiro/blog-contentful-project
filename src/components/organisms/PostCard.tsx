export const config = { amp: true };

import { Author } from "@/components/molecules";

export const PostCard: React.FC = () => {
  return (
    <>
      <div className="postCardContainer">
        <amp-img
          width="auto"
          height="280px"
          src="https://blog.zoom.us/wp-content/uploads/2020/11/iStock-1162009698-scaled.jpg"
          alt="a cool image"
        />
        <Author authorName="ProgRiro" avatarSrc="/progriro.jpg" />
        <div className="postCardTextContainer">
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
          <small className="date">2021/03/11</small>
        </div>
      </div>
      <style jsx>
        {`
          .postCardContainer {
            width: 100%;
            padding-bottom: 15px;
            box-shadow: 0 3px 6px -2px rgb(0 10 60 / 20%);
            border-radius: 10px;
            border-top: solid 10px gray;
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.2s;
          }
          .postCardContainer:hover {
            box-shadow: 0 6px 12px -4px rgb(0 27 68 / 20%);
          }
          .postCardTextContainer {
            margin: 0 20px;
            text-align: center;
          }
          .date {
            display: block;
            text-align: right;
          }
        `}
      </style>
    </>
  );
};
