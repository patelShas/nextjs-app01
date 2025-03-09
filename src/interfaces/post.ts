export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt: string;
  content: string;
};

export type Params = {
  params: Promise<{
    slug: string;
  }>;
};
