import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "@/interfaces/post";

// creates a file path to the _posts directory
const postsDirectory = join(process.cwd(), "_posts");

// reads the directory and returns an array of file names
export function getPostSlugs() {
  return readdirSync(postsDirectory);
}

// reads the contents of a file and returns the front matter and content
//   organized as an object {slug: string, content: content, data: everything else }
export function getPost(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as Post;
}

// returns an array of all posts sorted by date
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPost(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
