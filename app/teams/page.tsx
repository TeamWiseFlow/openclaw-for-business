import Link from "next/link";
import CrewLineup from "@/components/crew/CrewLineup";
import { allCrewTeams } from "@/app/data/crew";

// AI 团队页
export default function TeamsPage() {
  const purchasableTeams = allCrewTeams.filter((t) => t.badge === "可雇佣");

  return (
    <div className="pt-24 pb-20">
      {/* Crew lineup hero */}
      <CrewLineup />

      <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 mt-8">
        {/* Purchasable Teams */}
        {purchasableTeams.map((team) => (
          <div key={team.id} className="mb-16">
            <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              {team.label}
            </h2>
            <p className="text-sm text-white/50 mb-6">{team.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.members.map((member) => (
                <Link
                  key={member.id}
                  href="/contact"
                  className={`block rounded-xl bg-surface border border-white/5 p-6 hover:border-primary/30 transition-all ${member.upcoming ? "opacity-70" : ""}`}
                >
                  <div className="flex items-start gap-2 mb-3">
                    <h3 className="text-lg font-bold text-white flex-1">{member.name}</h3>
                    {member.upcoming && (
                      <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium bg-warning/10 text-warning whitespace-nowrap">
                        即将发布
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/60 mb-2">{member.role}</p>
                  <p className="text-xs text-text-muted">{member.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}

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
