import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

      {/* 主要内容区域 */}
      <main className="container mx-auto px-4 py-12">
        {/* 页面标题区域 */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">From The Blog</h1>
        <p className="text-center text-gray-600 mb-12">Keep up with news about Zed.</p>

        {/* 博客文章网格布局 - 三列显示 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* 博客文章卡片1 - Zeta预测功能 */}
          <Link href="/posts/zed-predicts-next-edit" className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 p-4">
              <pre className="text-sm font-mono overflow-hidden">
                {"// Example code"}
                const nextEdit = predict();
              </pre>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Zed now predicts your next edit with Zeta</h2>
              <p className="text-gray-600 mb-4">A tool that anticipates your next move.</p>
              <p className="text-sm text-gray-500">Published on 02/13/2025</p>
            </div>
          </Link>

          {/* 博客文章卡片2 - 主题功能 */}
          <Link href="/posts/add-color-to-life" className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 p-4">
              <pre className="text-sm font-mono overflow-hidden">
                {"// Theme preview"}
                theme.setColor(&quot;primary&quot;);
              </pre>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Add some color to your life</h2>
              <p className="text-gray-600 mb-4">You can now use icon themes to change the look.</p>
              <p className="text-sm text-gray-500">Published on 02/05/2025</p>
            </div>
          </Link>

          {/* 博客文章卡片3 - DeepSeek集成 */}
          <Link href="/posts/deepseek-r1-for-coding" className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 p-4">
              <pre className="text-sm font-mono overflow-hidden">
                {"// DeepSeek integration"}
                ai.suggest(code);
              </pre>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">How is DeepSeek-R1 for Coding?</h2>
              <p className="text-gray-600 mb-4">Try it now in Zed.</p>
              <p className="text-sm text-gray-500">Published on 01/27/2025</p>
            </div>
          </Link>
        </div>

        {/* 分类导航和文章列表区域 */}
        <div className="flex gap-8">
          {/* 左侧分类导航栏 */}
          <div className="w-64 shrink-0">
            <div className="sticky top-4">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">CATEGORIES</h2>
              {/* 分类导航菜单 */}
              <nav className="space-y-2">
                <a href="#" className="block px-4 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  All Posts
                </a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  Featured Posts
                </a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  Zed Decoded
                </a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  Zed Weekly
                </a>
              </nav>
            </div>
          </div>

          {/* 文章列表区域 */}
          <div className="flex-1 space-y-4">
            {/* 文章1 - 带有特色标签和多作者头像 */}
            <Link href="/posts/zed-predicts-next-edit" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                {/* 作者头像组 */}
                <div className="flex -space-x-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold hover:text-blue-600">Zed now predicts your next edit with Zeta, our new open model</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>02/13/2025</span>
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">Featured</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-gray-500">
                <span>02/13/2025</span>
              </div>
            </Link>

            {/* 文章2 - 单作者文章 */}
            <Link href="/posts/add-color-to-life" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=3" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold hover:text-blue-600">Add some color to your life, with icon themes</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>02/05/2025</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-gray-500">
                <span>02/05/2025</span>
              </div>
            </Link>

            {/* 文章3 - 单作者文章 */}
            <Link href="/posts/deepseek-r1-for-coding" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold hover:text-blue-600">How is DeepSeek-R1 for Coding? Try it right now!</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>01/27/2025</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-gray-500">
                <span>01/27/2025</span>
              </div>
            </Link>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold hover:text-blue-600">How is DeepSeek-R1 for Coding? Try it right now!</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>01/27/2025</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-gray-500">
                <span>01/27/2025</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold hover:text-blue-600">How is DeepSeek-R1 for Coding? Try it right now!</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>01/27/2025</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-gray-500">
                <span>01/27/2025</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold hover:text-blue-600">How is DeepSeek-R1 for Coding? Try it right now!</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>01/27/2025</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-gray-500">
                <span>01/27/2025</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold hover:text-blue-600">How is DeepSeek-R1 for Coding? Try it right now!</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>01/27/2025</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-gray-500">
                <span>01/27/2025</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold hover:text-blue-600">How is DeepSeek-R1 for Coding? Try it right now!</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>01/27/2025</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-gray-500">
                <span>01/27/2025</span>
              </div>
            </div>
          </div>
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
