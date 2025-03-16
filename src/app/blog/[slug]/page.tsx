import { Params } from "@/interfaces/post";
import { getPost, isValidSlug } from "@/lib/posts-api";
import { Converter } from "showdown";
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
    const converter = new Converter();
    const text = "# hello, markdown!";
    const html = converter.makeHtml(post.content);

    return (
      <div className="m-4">
        <div className="justify-between flex">
          <h3>{post.title}</h3>
          {post.date}
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}
