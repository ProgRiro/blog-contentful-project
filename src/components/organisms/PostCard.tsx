export const config = { amp: true };

import Link from "next/link";
import { Author } from "@/components/molecules";

interface Props {
  post: {
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
}

export const PostCard: React.FC<Props> = ({ post }) => {
  const published = new Date(post.date);

  return (
    <>
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        <a>
          <div className="postCardContainer">
            <amp-img
              width="300"
              height="200"
              src={post.coverImage.url}
              layout="responsive"
              alt={`${post.title}-cover-image`}
            />
            <div className="author">
              <Author
                authorName={post.author.name}
                avatarSrc={post.author.picture.url}
              />
            </div>
            <div className="postCardTextContainer">
              <h3 className="title">{post.title}</h3>
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
          .title {
            margin-top: 30px;
          }
          .author {
            position: absolute;
            bottom: 48px;
            right: 0;
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
