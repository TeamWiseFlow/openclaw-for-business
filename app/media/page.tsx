// 自媒体矩阵页
export default function MediaPage() {
  const platforms = [
    { name: "微信公众号", handle: "无空归来", icon: "💬", link: "#", desc: "产品动态、行业洞察" },
    { name: "小红书", handle: "大兄弟666", icon: "📕", link: "https://www.xiaohongshu.com/user/profile/大兄弟666", desc: "AI 应用分享、搞钱思路" },
    { name: "知乎", handle: "大兄弟666", icon: "💡", link: "https://www.zhihu.com/people/大兄弟666", desc: "专业问答、行业分析" },
    { name: "B站", handle: "无空归来", icon: "📺", link: "https://space.bilibili.com/无空归来", desc: "深度教程、技术分享" },
    { name: "抖音", handle: "Alice_amazing", icon: "🎵", link: "https://www.douyin.com/user/Alice_amazing", desc: "短视频讲解、产品演示" },
    { name: "Twitter / X", handle: "@Shanghaibi31603", icon: "🐦", link: "https://twitter.com/Shanghaibi31603", desc: "英文社区互动" },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            自媒体矩阵
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            我们在各平台的官方账号，关注获取最新产品动态和行业干货
          </p>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-surface border border-white/5 hover:border-primary/30 transition-all"
            >
              <div className="text-3xl mb-4">{platform.icon}</div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">
                {platform.name}
              </h3>
              <p className="text-sm text-primary/70 mb-2">{platform.handle}</p>
              <p className="text-sm text-text-secondary">{platform.desc}</p>
            </a>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12 text-sm text-text-muted">
          <p>更多平台持续增加中</p>
        </div>
      </div>
    </div>
  );
}
