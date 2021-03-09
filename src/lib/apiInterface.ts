export interface getPostResponseInterface {
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
    coverIcon?: string;
    date: string;
    author: {
      name: string;
      picture: {
        url: string;
      };
    };
  };
}

export interface getWorksResponseInterface {
  works: {
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
