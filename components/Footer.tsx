import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold text-white mb-3">
              <span className="text-primary">OFB</span> OpenClaw for Business
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Wiseflow — 让 AI 时代红利惠及每一个人。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">快速导航</h4>
            <ul className="space-y-2">
              <li><a href="/teams" className="text-sm text-text-secondary hover:text-white transition-colors">AI 团队</a></li>
              <li><a href="/pricing" className="text-sm text-text-secondary hover:text-white transition-colors">价格方案</a></li>
              <li><a href="/cases" className="text-sm text-text-secondary hover:text-white transition-colors">客户案例</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">联系我们</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>商务邮箱：zm.zhao@foxmail.com</li>
              <li>© {new Date().getFullYear()} 上海猫木匠信息科技有限公司</li>
            </ul>
          </div>
        </div>

        {/* 备案信息 */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          <a href="/privacy" className="text-xs text-text-muted hover:text-white transition-colors">隐私政策</a>
          <a href="/terms" className="text-xs text-text-muted hover:text-white transition-colors">服务条款</a>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted hover:text-white transition-colors"
          >
            沪ICP备2025145497号-7
          </a>
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=31010602010265"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-white transition-colors"
          >
            <Image
              src="/beian-mps.png"
              alt="公安网备"
              width={16}
              height={16}
              className="inline-block"
            />
            沪公网安备31010602010265号
          </a>
        </div>
      </div>
    </footer>
  );
}
