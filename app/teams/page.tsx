import Link from "next/link";

// AI 团队页
export default function TeamsPage() {
  const currentTeams = [
    {
      name: "自动化获客团队",
      status: "可雇佣",
      desc: "全自动完成「内容引流 → 主动拓客 → 销售转化」完整链路",
      roles: [
        { name: "Sales CS", desc: "销售型客服，促进成交、记录客户信息" },
        { name: "BD", desc: "商务拓展，人脉分析、批量触达" },
        { name: "自媒体运营", desc: "内容创作、多平台发布、引流" },
      ],
      customizable: "Sales CS 数量、产品线划分、行业话术均可定制",
    },
  ];

  const upcomingTeams = [
    { name: "智能财务团队", desc: "自动化记账、报税、财务报表" },
    { name: "HR 管理团队", desc: "简历筛选、面试安排、入职流程自动化" },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            可雇佣的 AI 团队
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            每支团队均包含后台支撑团队（Main Agent + HRBP + IT Engineer），前台角色可按需配置
          </p>
        </div>

        {/* Current Teams */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            当前可雇佣
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentTeams.map((team) => (
              <div
                key={team.name}
                className="rounded-xl bg-surface border border-white/5 p-8 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{team.name}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                    {team.status}
                  </span>
                </div>
                <p className="text-text-secondary mb-6">{team.desc}</p>

                <h4 className="text-sm font-semibold text-white mb-3">团队角色</h4>
                <div className="space-y-3 mb-6">
                  {team.roles.map((role) => (
                    <div key={role.name} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <div>
                        <span className="text-white text-sm font-medium">{role.name}</span>
                        <span className="text-text-secondary text-sm ml-2">{role.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-text-muted">
                    🛠️ 可定制：{team.customizable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-warning inline-block" />
            即将上线
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingTeams.map((team) => (
              <div
                key={team.name}
                className="rounded-xl bg-surface border border-white/5 p-6 opacity-60"
              >
                <h3 className="text-white font-semibold mb-2">{team.name}</h3>
                <p className="text-sm text-text-secondary">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            没有找到匹配您业务的团队？联系我们，支持完全定制
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium hover:opacity-90 transition-opacity"
          >
            定制你的 AI 团队 →
          </Link>
        </div>
      </div>
    </div>
  );
}
