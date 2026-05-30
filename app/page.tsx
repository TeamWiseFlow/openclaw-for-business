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
            你的第一支团队，何必是人类
          </h1>

          <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Wiseflow — 基于 OpenClaw 的 Multi-Agent（多智能体）系统，专为创业起步期打造。
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
              创业者的<strong className="text-primary">第一支团队</strong>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              创业起步，最难的从来不是没有方向——而是那些<strong>不得不做、但又不性感的事</strong>：写稿、发内容、找客户、回咨询、搞设计、商业调研、信息搜集、财务报税、做ppt……
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mt-4">
              这些事每一件都不能少，但每一件都在消耗你最宝贵的时间和心力。
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mt-4">
              Wiseflow 给你一支 <strong>7×24 在线的 AI 团队</strong>，替你扛起这一切。你，只管去追逐那星辰大海！
            </p>
          </div>
        </div>
      </section>

      {/* Crew Lineup — full image hero */}
      <CrewHero />

      {/* Why Choose Us */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              创业者的第一支团队，为什么可以交给 AI
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "告别孤军奋战",
                desc: "创业者是世界上最孤独的群体。缺钱、缺人、缺影响力，一个人扛着所有事，失败率还高得吓人。现在你有了第一支 AI 团队——不请假、不摸鱼、不离职，7×24 在线替你扛。",
                icon: "🛡️",
              },
              {
                title: "聚焦只有你能做的事",
                desc: "写稿、发内容、找客户、回咨询、财务报税、做ppt……这些事情非做不可，但不该由你做。AI 团队全包了。你去思考方向、打磨产品、追逐星辰大海。",
                icon: "🎯",
              },
              {
                title: "更低成本，更快试错",
                desc: "有一个想法？告诉 AI，它替你多角度思考、快速落地、跑数据、收集反馈。行就加码，不行就换——创业的本质就是试错，AI 让你的试错成本降到极致。",
                icon: "🚀",
              },
              {
                title: "承诺永远开源免费",
                desc: "开源版永久免费，随时可用。我们不追求你永远用下去——等你发展到 100 人、千万销售额，自然会有更适合的产品。我们只服务起步时最难的这一段。",
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            准备好拥有你的第一支团队了吗？
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            先试试开源版，零成本体验。需要托管服务？也可以联系我们。
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
