import { readdirSync } from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return readdirSync(postsDirectory);
}
