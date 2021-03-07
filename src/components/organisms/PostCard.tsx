export const config = { amp: true };

import Link from "next/link";

const links = ["posts", "works"] as const;
type links = typeof links[number];

interface Props {
  data: {
    title: string;
    slug: string;
    content: {
      json: object;
    };
    excerpt: string;
    coverImage: {
      url: string;
    };
    date: string;
    author: {
      name: string;
      picture: {
        url: string;
      };
    };
  };
  to: links;
}

export const PostCard: React.FC<Props> = ({ data, to }) => {
  const published = new Date(data.date);

  return (
    <>
      <Link as={`/${to}/${data.slug}`} href={`/${to}/[slug]`}>
        <a>
          <div className="dataCardContainer">
            <amp-img
              width="300"
              height="200"
              src={data.coverImage.url}
              layout="responsive"
              alt={`${data.title}-cover-image`}
            />
            <div className="dataCardTextContainer">
              <h3 className="title">{data.title}</h3>
              <p className="excerpt">{data.excerpt}</p>
              <small className="date">{published.toLocaleDateString()}</small>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>
        {`
          a {
            text-decoration: none;
            color: #000;
          }
          .dataCardContainer {
            width: 100%;
            padding-bottom: 15px;
            box-shadow: 0 3px 6px -2px rgb(0 10 60 / 20%);
            border-radius: 2px;
            border-top: double 5px #6c2735;
            border-bottom: double 5px #6c2735;
            background-color: #fff;
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.2s;
          }
          .dataCardContainer:hover {
            box-shadow: 0 6px 12px -4px rgb(0 27 68 / 20%);
          }
          .dataCardTextContainer {
            margin: 0 20px;
            text-align: center;
          }
          .title {
            margin-top: 25px;
            margin-bottom: 0;
          }
          .author {
            position: absolute;
            bottom: 48px;
            right: 0;
          }
          .excerpt {
            margin: 10px auto;
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
