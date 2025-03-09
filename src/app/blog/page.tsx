import { Post } from "@/interfaces/post";
import { getAllPosts, getPostSlugs } from "@/lib/posts-api";
import Link from "next/link";

export default async function Page() {
  // const posts = await getPosts();
  const slugs = getPostSlugs();
  const posts = getAllPosts();

  // console.log(posts);

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
