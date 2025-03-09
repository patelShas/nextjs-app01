import { Params } from "@/interfaces/post";
import { getPost, isValidSlug } from "@/lib/posts-api";

/** So you can remember what the Post type looks like 
 * export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  excerpt: string;
  content: string;
};
 */
export default async function Page(props: Params) {
  const params = await props.params;

  if (isValidSlug(params.slug) === false) {
    return <p>Sorry, post not found. You should probably head back.</p>;
  } else {
    const post = getPost(params.slug);
    return (
      <div>
        <h1>{post.title}</h1>
        {post.coverImage && <img src={post.coverImage} alt={post.title} />}
        <p>{post.date}</p>
        <p>{post.content}</p>
      </div>
    );
  }
}
