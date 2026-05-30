// 客户案例页
export default function CasesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            客户案例
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            看看创业者如何用 AI 团队从 0 到 1
          </p>
        </div>

        {/* Coming Soon Placeholder */}
        <div className="max-w-xl mx-auto text-center py-20">
          <div className="text-6xl mb-6">🏆</div>
          <h2 className="text-xl font-semibold text-white mb-3">
            精选案例即将上线
          </h2>
          <p className="text-text-secondary leading-relaxed">
            我们正在整理首批客户案例，包含行业背景、痛点分析、方案部署和效果数据。
            敬请期待！
          </p>
        </div>
      </div>
    </div>
  );
}
