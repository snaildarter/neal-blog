import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neal's Blog — 大鹏攻略 · 写作 · 认知",
  description:
    "我是 Neal，程序员，住在大鹏。这里是我对世界的记录——大鹏本地攻略、写作方法论、认知碎片。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
