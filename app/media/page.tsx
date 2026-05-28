import Image from "next/image";

// 自媒体矩阵页
export default function MediaPage() {
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

        {/* Group 1: 创始人的独家分享 */}
        <div className="max-w-3xl mx-auto mb-14">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            创始人的独家分享
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch gap-6">
            {/* 微信公众号 — left, wide long-strip image */}
            <div className="sm:w-1/2 flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-surface border border-white/5">
              <Image
                src="/wechat_official_color.webp"
                alt="无空归来微信公众号"
                width={855}
                height={312}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
              <span className="text-sm font-semibold text-white">微信公众号</span>
              <span className="text-xs text-primary/80">无空归来</span>
            </div>

            {/* Twitter + 知乎 — right, stacked */}
            <div className="sm:w-1/2 flex flex-col gap-6">
              <a
                href="https://twitter.com/Shanghaibi31603"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center gap-4 p-6 rounded-xl bg-surface border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/40 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-white/70 group-hover:text-primary transition-colors" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.35 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">Twitter / X</span>
                  <p className="text-xs text-text-muted mt-0.5">@Shanghaibi31603</p>
                </div>
              </a>

              <a
                href="https://www.zhihu.com/people/lingzezhao"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center gap-4 p-6 rounded-xl bg-surface border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/40 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-white/70 group-hover:text-primary transition-colors" fill="currentColor">
                    <path d="M5.721 0C2.561 0 0 2.561 0 5.721v12.558C0 21.439 2.561 24 5.721 24h12.558C21.439 24 24 21.439 24 18.279V5.721C24 2.561 21.439 0 18.279 0H5.721zm2.029 5.52h6.5c.32 0 .58.26.58.58v.52c0 .32-.26.58-.58.58h-2.12v6.04c0 .32-.26.58-.58.58h-.52c-.32 0-.58-.26-.58-.58V7.2H7.75c-.32 0-.58-.26-.58-.58v-.52c0-.32.26-.58.58-.58zm-2.68 3.84h2.28c.32 0 .58.26.58.58v.28c0 .32-.26.58-.58.58H5.07v2.44c0 .32-.26.58-.58.58h-.28c-.32 0-.58-.26-.58-.58V9.94c0-.32.26-.58.58-.58zm8.16 0h2.28c.32 0 .58.26.58.58v3.88c0 .32-.26.58-.58.58h-.28c-.32 0-.58-.26-.58-.58V10.8h-1.42c-.32 0-.58-.26-.58-.58v-.28c0-.32.26-.58.58-.58z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">知乎</span>
                  <p className="text-xs text-text-muted mt-0.5">lingzezhao</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Group 2: 官方账号 */}
        <div className="max-w-4xl mx-auto mb-14">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            官方账号
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface border border-white/5 text-center">
              <div className="text-3xl mb-3">📢</div>
              <h3 className="text-white font-semibold mb-1">官方公众号</h3>
              <p className="text-sm text-text-muted">敬请期待</p>
            </div>
            <div className="p-6 rounded-xl bg-surface border border-white/5 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-white font-semibold mb-1">官方邮箱</h3>
              <p className="text-sm text-text-muted">敬请期待</p>
            </div>
            <div className="p-6 rounded-xl bg-surface border border-white/5 text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-white font-semibold mb-1">官方社区</h3>
              <p className="text-sm text-text-muted">敬请期待</p>
            </div>
          </div>
        </div>

        {/* Group 3: 短视频账号矩阵 */}
        <div className="max-w-4xl mx-auto mb-14">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            短视频账号矩阵
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface border border-white/5 text-center">
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="text-white font-semibold mb-1">抖音</h3>
              <p className="text-sm text-text-muted">敬请期待</p>
            </div>
            <div className="p-6 rounded-xl bg-surface border border-white/5 text-center">
              <div className="text-3xl mb-3">📺</div>
              <h3 className="text-white font-semibold mb-1">B站</h3>
              <p className="text-sm text-text-muted">敬请期待</p>
            </div>
            <div className="p-6 rounded-xl bg-surface border border-white/5 text-center">
              <div className="text-3xl mb-3">📕</div>
              <h3 className="text-white font-semibold mb-1">小红书</h3>
              <p className="text-sm text-text-muted">敬请期待</p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="max-w-3xl mx-auto text-center pt-10 border-t border-white/5">
          <p className="text-sm text-text-secondary leading-relaxed">
            以上所有账号均由 <strong className="text-white">OpenClaw-for-Business AI Crew 团队</strong> 进行运维，包括内容生产与发布。
          </p>
        </div>
      </div>
    </div>
  );
}
