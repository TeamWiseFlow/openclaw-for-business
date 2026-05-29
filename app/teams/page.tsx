import Link from "next/link";
import CrewLineup from "@/components/crew/CrewLineup";
import { allCrewTeams } from "@/app/data/crew";

// AI 团队页
export default function TeamsPage() {
  const purchasableTeams = allCrewTeams.filter((t) => t.badge === "可雇佣");
  const upcomingTeams = allCrewTeams.filter((t) => t.upcoming);

  return (
    <div className="pt-24 pb-20">
      {/* Crew lineup hero */}
      <CrewLineup />

      <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 mt-8">
        {/* Purchasable Teams */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            当前可雇佣
          </h2>

          {purchasableTeams.length === 0 && (
            <p className="text-text-muted text-sm">暂无可用团队，敬请期待</p>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {purchasableTeams.map((team) => (
              <div
                key={team.id}
                className="rounded-xl bg-surface border border-white/5 p-8 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{team.label}</h3>
                    <p className="text-base text-white/60 mt-1">{team.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                    {team.badge}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-white mb-3">团队角色</h4>
                <div className="space-y-3 mb-6">
                  {team.members.map((member) => (
                    <div key={member.id} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <div>
                        <span className="text-white text-sm font-medium">{member.name}</span>
                        <span className="text-text-secondary text-sm"> — {member.role}</span>
                        <p className="text-xs text-text-muted mt-0.5">{member.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5" />
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        {upcomingTeams.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-warning inline-block" />
              即将上线
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingTeams.map((team) => (
                <div
                  key={team.id}
                  className="rounded-xl bg-surface border border-white/5 p-6 opacity-60"
                >
                  <h3 className="text-lg text-white font-semibold mb-2">{team.label}</h3>
                  <p className="text-sm text-white/50">{team.subtitle}</p>
                  <div className="flex items-center gap-1 mt-4">
                    {team.members.map((m) => (
                      <span key={m.id} className="text-lg text-white/15">
                        ?
                      </span>
                    ))}
                    <span className="text-xs text-text-muted ml-2">
                      {team.members.length} 个角色即将揭晓
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
