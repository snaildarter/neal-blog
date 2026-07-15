import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-2">
          Neal&apos;s Blog
        </h1>
        <p className="text-neutral-500 text-sm">
          程序员，住在大鹏。写本地攻略、写作方法论、认知碎片。
        </p>
        <p className="text-neutral-600 text-xs mt-1">
          <a href="/llms.txt" className="underline hover:text-neutral-400">llms.txt</a>
          {" · "}
          <a href="https://github.com/snaildarter" className="underline hover:text-neutral-400">GitHub</a>
        </p>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="group">
                <h2 className="text-lg font-semibold mb-1 group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-neutral-500 text-sm mb-2">{post.date}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {post.summary}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="max-w-2xl mx-auto px-4 py-8 text-center text-xs text-neutral-700">
        天天开心呀！爱笑的人运气不会太差！
      </footer>
    </div>
  );
}
