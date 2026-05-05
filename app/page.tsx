import Link from "next/link";
import GitHubStarsBadge from "@/components/GitHubStarsBadge";
import CrewLineup from "@/components/crew/CrewLineup";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight animate-fade-in-up">
            雇佣一支 7×24 小时<br />
            为你盈利的 AI 数字员工团队
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up-delay-1">
            基于 GitHub 8.2K star 多智能体项目 wiseflow
          </p>
          <div className="flex justify-center animate-fade-in-up-delay-1">
            <GitHubStarsBadge />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium text-base hover:opacity-90 transition-opacity"
            >
              立即咨询
            </Link>
            <Link
              href="/teams"
              className="px-8 py-3.5 rounded-full border border-white/10 text-text-secondary hover:text-white hover:border-white/20 transition-all"
            >
              了解 AI 团队 →
            </Link>
          </div>
        </div>
      </section>

      {/* What is OFB */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              不是买软件，而是<strong className="text-primary">雇佣团队</strong>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              OpenClaw for Business 为您提供完整的 AI 数字员工托管服务。
              我们部署、运维、保障您的 AI 团队 7×24 小时运转——
              从内容引流到销售转化，全流程自动化，无需任何技术背景。
            </p>
          </div>
        </div>
      </section>

      {/* Crew Lineup */}
      <CrewLineup />

      {/* Why Choose Us */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              为什么选择我们
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "7×24 全天候",
                desc: "AI 团队不间断运转，白天黑夜持续为您服务",
                icon: "🕐",
              },
              {
                title: "自主协作",
                desc: "多智能体自主互助，遇问题自动调用 IT 排查修复",
                icon: "🧠",
              },
              {
                title: "开箱即用",
                desc: "无需技术背景，我们托管一切——部署、运维、保障",
                icon: "🚀",
              },
              {
                title: "按需定制",
                desc: "前台角色灵活配置，匹配您的业务需求",
                icon: "⚡",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-16 lg:px-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            准备好为您的业务组建 AI 团队了吗？
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            联系我们，了解如何定制最适合您的 AI 数字员工团队
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium text-base hover:opacity-90 transition-opacity"
          >
            联系我们 →
          </Link>
        </div>
      </section>
    </div>
  );
}
