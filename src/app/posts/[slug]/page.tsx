import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="max-w-2xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="text-sm text-neutral-500 hover:text-amber-400 transition-colors"
        >
          ← 返回
        </Link>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        <article>
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p className="text-neutral-500 text-sm mb-8">{post.date}</p>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </main>

      <footer className="max-w-2xl mx-auto px-4 py-8 text-center text-xs text-neutral-700">
        天天开心呀！爱笑的人运气不会太差！
      </footer>
    </div>
  );
}
