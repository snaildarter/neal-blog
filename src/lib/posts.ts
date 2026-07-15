import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  html: string;
}

const postsDir = path.join(process.cwd(), "content/posts");

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = filenames
    .map((filename) => getPostByFilenameSync(filename))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const filename = `${slug}.md`;
  return getPostByFilenameSync(filename);
}

function getPostByFilenameSync(filename: string): Post | null {
  try {
    const fullPath = path.join(postsDir, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const html = marked.parse(content) as string;

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title || "",
      date: data.date || "",
      summary: data.summary || "",
      content,
      html,
    };
  } catch {
    return null;
  }
}
