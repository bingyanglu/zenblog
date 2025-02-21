import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  return {
    title: `${slug} - ZenBlog`,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return (
    <div className="min-h-screen bg-white">
      {/* 页面头部区域 - 包含导航栏和主要操作按钮 */}
      <header className="border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* 左侧Logo和导航链接区域 */}
          <div className="flex items-center space-x-8">
            {/* Logo图片 */}
            <Image
              src="/next.svg"
              alt="Logo"
              width={80}
              height={20}
              className="dark:invert"
            />
            {/* 导航菜单 - 在中等屏幕以上显示 */}
            <div className="hidden md:flex space-x-6">
              <a href="/releases" className="text-gray-600 hover:text-gray-900">Releases</a>
              <a href="/extensions" className="text-gray-600 hover:text-gray-900">Extensions</a>
              <a href="/docs" className="text-gray-600 hover:text-gray-900">Docs</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="/resources" className="text-gray-600 hover:text-gray-900">Resources</a>
            </div>
          </div>
          {/* 右侧操作按钮区域 */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Talk to us</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Download
            </button>
          </div>
        </nav>
      </header>

      {/* 文章主体内容区域 */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
          </div>
          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{resolvedParams.slug}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800" />
                  <span>作者名称</span>
                </div>
                <time>2024年2月20日</time>
              </div>
            </header>
            <div className="prose dark:prose-invert max-w-none">
              <h1>深入理解现代前端开发：从基础到最佳实践</h1>
              
              <p>在当今快速发展的Web开发领域，前端技术栈的选择和使用变得越来越重要。本文将深入探讨现代前端开发的各个方面，从基础概念到实践经验，为开发者提供一个全面的技术指南。</p>

              <h2>1. 现代前端开发的基石</h2>
              
              <p>前端开发已经从简单的HTML和CSS发展成为一个复杂的生态系统。以下是一些核心概念：</p>
              
              <ul>
                <li>声明式UI框架（React、Vue、Angular）</li>
                <li>类型系统（TypeScript）</li>
                <li>构建工具（Vite、Webpack、Turbopack）</li>
                <li>包管理器（npm、yarn、pnpm）</li>
              </ul>
            </div>
          </article>
        </div>
      </main>

      {/* 底部导航区域 */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 产品栏目 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="/download" className="text-gray-600 hover:text-blue-600">Download</a></li>
                <li><a href="/releases" className="text-gray-600 hover:text-blue-600">Releases</a></li>
                <li><a href="/extensions" className="text-gray-600 hover:text-blue-600">Extensions</a></li>
                <li><a href="/docs" className="text-gray-600 hover:text-blue-600">Docs</a></li>
                <li><a href="/github" className="text-gray-600 hover:text-blue-600">GitHub</a></li>
                <li><a href="/status" className="text-gray-600 hover:text-blue-600">Status</a></li>
                <li><a href="/roadmap" className="text-gray-600 hover:text-blue-600">Roadmap</a></li>
              </ul>
            </div>

            {/* 资源栏目 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="/blog" className="text-gray-600 hover:text-blue-600">Blog</a></li>
                <li><a href="/community" className="text-gray-600 hover:text-blue-600">Community Links</a></li>
                <li><a href="/discussions" className="text-gray-600 hover:text-blue-600">Discussions</a></li>
                <li><a href="/faq" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
                <li><a href="/cla" className="text-gray-600 hover:text-blue-600">CLA</a></li>
                <li><a href="/merch" className="text-gray-600 hover:text-blue-600">Merch</a></li>
              </ul>
            </div>

            {/* 公司栏目 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-600 hover:text-blue-600">About</a></li>
                <li><a href="/values" className="text-gray-600 hover:text-blue-600">Values</a></li>
                <li><a href="/team" className="text-gray-600 hover:text-blue-600">Team</a></li>
                <li><a href="/jobs" className="text-gray-600 hover:text-blue-600">Jobs</a></li>
                <li><a href="/brand" className="text-gray-600 hover:text-blue-600">Brand</a></li>
              </ul>
            </div>

            {/* 社交媒体栏目 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Social</h3>
              <ul className="space-y-3">
                <li><a href="/twitter" className="text-gray-600 hover:text-blue-600">Twitter</a></li>
                <li><a href="/bluesky" className="text-gray-600 hover:text-blue-600">Bluesky</a></li>
                <li><a href="/youtube" className="text-gray-600 hover:text-blue-600">YouTube</a></li>
                <li><a href="/discord" className="text-gray-600 hover:text-blue-600">Discord</a></li>
                <li><a href="/reddit" className="text-gray-600 hover:text-blue-600">Reddit</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}