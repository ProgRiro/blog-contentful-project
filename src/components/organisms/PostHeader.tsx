export const config = { amp: true };

import { AuthorIntroduce } from ".";

interface Props {
  title: string;
  date: string;
  coverImageUrl: string;
  coverIcon?: string;
  authorName: string;
  authorPictureUrl: string;
}

export const PostHeader: React.FC<Props> = ({
  title,
  date,
  coverImageUrl,
  coverIcon,
  authorName,
  authorPictureUrl,
}) => {
  const published = new Date(date);
  return (
    <div>
      <div className="header">
        <div className="headerLeft">
          <div className="titleAndPublished">
            <h1 className="title">{title}</h1>
            <amp-timeago
              height="30"
              width="200"
              layout="fixed"
              datetime={date}
              locale="en"
            >
              {published.toLocaleDateString()}
            </amp-timeago>
          </div>
          {coverIcon ? (
            <div className="iconEyeCatch">{coverIcon}</div>
          ) : (
            <amp-img
              width="300"
              height="200"
              src={coverImageUrl}
              layout="responsive"
              alt={`${title}-cover-image`}
              className="ampImg"
            />
          )}
        </div>
        <div className="headerRight">
          <AuthorIntroduce
            authorName={authorName}
            authorPictureUrl={authorPictureUrl}
          />
        </div>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .titleAndPublished {
            text-align: center;
            margin-bottom: 20px;
          }
          .title {
            font-size: 35px;
            margin: 0;
          }
          .iconEyeCatch {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            font-size: 4em;
          }
          .headerLeft {
            width: 70%;
          }
          .headerRight {
            width: 22%;
          }
          .ampImg {
            border: 5px double #6c2735;
          }
          @media screen and (max-width: 1024px) {
            .headerLeft {
              width: 100%;
            }
            .headerRight {
              display: none;
            }
          }
          @media screen and (max-width: 480px) {
            .headerLeft {
              width: 100%;
            }
            .headerRight {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};
