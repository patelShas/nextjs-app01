import { Post } from "@/interfaces/post";
import { getAllPosts, getPostSlugs } from "@/lib/posts-api";

export default async function Page() {
  // const posts = await getPosts();
  const slugs = getPostSlugs();
  const posts = getAllPosts();

  // console.log(posts);

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.slug}>{post.title}</li>
      ))}
    </ul>
  );
}
