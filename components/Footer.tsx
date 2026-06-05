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
      </div>
    </footer>
  );
}
