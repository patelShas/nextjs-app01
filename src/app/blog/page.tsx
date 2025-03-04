import { getPostSlugs } from "@/lib/posts-api";

export default async function Page() {
  // const posts = await getPosts();
  const posts = [{ id: 1 }, { id: 2 }];
  console.log(getPostSlugs());

  return (
    <ul>
      {posts.map((post: { id: any }) => (
        <li key={post.id}>abracadabra</li>
      ))}
    </ul>
  );
}
