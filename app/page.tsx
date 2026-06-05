import Link from "next/link";
import GitHubStarsBadge from "@/components/GitHubStarsBadge";
import CrewHero from "@/components/crew/CrewHero";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight animate-fade-in-up">
            你的第一支 AI 团队
          </h1>

          <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Wiseflow — 基于 OpenClaw 的 Multi-Agent 系统。<br className="hidden sm:inline" />开源免费，帮你把经验和方法跑成一门生意。
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

      {/* 你专注方向，AI 负责执行 */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              你专注方向，<strong className="text-primary">AI 负责执行</strong>
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              创业起步，最耗心力的往往不是战略和方向——而是那些必须做、却极其琐碎的事：写内容、发文章、找客户、回咨询、做设计、盯财税。
            </p>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mt-4">
              这些事情一件都不能少，但每一件都在消耗你最宝贵的时间。
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mt-4">
              Wiseflow 为你提供一支 <strong>7×24 在线的 AI 团队</strong>，替你完成这些执行层的工作。而你，只需要做决策、定方向。
            </p>
          </div>
        </div>
      </section>

      {/* Crew Lineup — full image hero */}
      <CrewHero />

      {/* Why Choose Wiseflow */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              为什么选择 Wiseflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "告别孤军奋战",
                desc: "创业初期，缺人、缺钱、缺时间。Wiseflow 给你一支不请假、不离职的 AI 团队，7×24 在线，替你扛起执行层的工作。",
                icon: "🛡️",
              },
              {
                title: "聚焦核心决策",
                desc: "写稿、找客户、做设计、回咨询——这些事 AI 团队全包了。你专注于思考方向、打磨产品、做只有你能做的决策。",
                icon: "🎯",
              },
              {
                title: "零成本启动",
                desc: "开源版永久免费。不需要先投入一大笔钱，现在就可以开始。有一个想法？告诉 AI，让它替你快速落地验证。",
                icon: "🚀",
              },
              {
                title: "永远开源",
                desc: "代码完全开放，社区驱动。你不必担心被锁定、被涨价。我们不追求你永远用下去——等你发展壮大，自然会有更适合的产品。",
                icon: "🔓",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-background border border-white/5 hover:border-white/10 transition-all"
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
          <p className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-relaxed">
            准备好拥有你的第一支 AI 团队<span className="whitespace-nowrap">了吗？</span>{" "}
            <span className="text-text-secondary font-normal text-base sm:text-lg">
              开源版永久免费，零成本即可开始。需要托管服务或更多功能？也可以联系我们。
            </span>
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
