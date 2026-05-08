"use client";

import { useState } from "react";
import Image from "next/image";
import { allCrewTeams, CrewMember, CrewTeam } from "@/app/data/crew";

function MysteryCard({
  member,
  isActive,
  isDimmed,
  onHover,
  onLeave,
}: {
  member: CrewMember;
  isActive: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="flex-shrink-0 w-36 sm:w-44 cursor-pointer select-none"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="relative rounded-lg overflow-hidden border transition-all duration-300"
        style={{
          aspectRatio: "2 / 3",
          borderColor: isActive ? "rgba(120,113,108,0.4)" : "rgba(255,255,255,0.06)",
          transform: isActive ? "scale(1.05) translateY(-4px)" : "scale(1)",
          boxShadow: isActive
            ? "0 0 32px rgba(120,113,108,0.25), 0 8px 24px rgba(0,0,0,0.5)"
            : "0 4px 12px rgba(0,0,0,0.3)",
          background: isActive
            ? "linear-gradient(135deg, #1e1e28 0%, #14141c 100%)"
            : "linear-gradient(135deg, #1a1a24 0%, #0d0d14 100%)",
          opacity: isDimmed ? 0.4 : 1,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span
            className="text-4xl sm:text-5xl font-bold transition-all duration-300"
            style={{ color: isActive ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)" }}
          >
            ?
          </span>
          <span
            className="text-xs transition-all duration-300"
            style={{ color: isActive ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.2)" }}
          >
            即将揭晓
          </span>
        </div>

        {/* Accent glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(120,113,108,0.5), transparent)",
            opacity: isActive ? 1 : 0,
          }}
        />
      </div>
      <div className="text-center mt-2">
        <div
          className="text-xs font-bold tracking-wide transition-colors duration-300"
          style={{ color: isActive ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)" }}
        >
          ???
        </div>
        <div
          className="text-[10px] transition-colors duration-300"
          style={{ color: isActive ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)" }}
        >
          即将揭晓
        </div>
      </div>
    </div>
  );
}

function CrewCard({
  member,
  isActive,
  isDimmed,
  onHover,
  onLeave,
}: {
  member: CrewMember;
  isActive: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-36 sm:w-44 cursor-pointer select-none"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="relative rounded-lg overflow-hidden border transition-all duration-300"
        style={{
          aspectRatio: "2 / 3",
          borderColor: isActive ? `${member.accentColor}60` : "rgba(255,255,255,0.06)",
          transform: isActive ? "scale(1.05) translateY(-4px)" : "scale(1)",
          boxShadow: isActive
            ? `0 0 32px ${member.accentColor}30, 0 8px 24px rgba(0,0,0,0.5)`
            : "0 4px 12px rgba(0,0,0,0.3)",
          background: "linear-gradient(180deg, #14141c 0%, #0a0a10 100%)",
          opacity: isDimmed ? 0.4 : 1,
        }}
      >
        {!imgError && member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            onError={() => setImgError(true)}
            sizes="176px"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div
              className="w-12 h-12 rounded-full border-2 opacity-25"
              style={{ borderColor: member.accentColor }}
            />
            <div
              className="w-6 h-20 rounded-full opacity-15"
              style={{ background: member.accentColor }}
            />
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a10] to-transparent" />

        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${member.accentColor}80, transparent)`,
            opacity: isActive ? 1 : 0,
          }}
        />
      </div>

      <div className="text-center mt-2">
        <div
          className="text-xs sm:text-sm font-bold tracking-wide truncate transition-colors duration-300"
          style={{ color: isActive ? member.accentColor : "rgba(255,255,255,0.7)" }}
        >
          {member.name}
        </div>
        <div className="text-[10px] sm:text-xs text-white/25 mt-0.5">{member.role}</div>
      </div>
    </div>
  );
}

function TeamRow({
  team,
  activeId,
  onHover,
  onLeave,
}: {
  team: CrewTeam;
  activeId: string | null;
  onHover: (id: string) => void;
  onLeave: () => void;
}) {
  return (
    <div className="mb-8">
      {/* Team header — centered */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <h3 className="text-sm font-semibold text-white/80">{team.label}</h3>
        {team.badge && (
          <span
            className="px-2 py-0.5 rounded text-[10px] font-medium"
            style={{
              background:
                team.badge === "标配" ? "rgba(245,158,11,0.12)" : "rgba(99,102,241,0.12)",
              color: team.badge === "标配" ? "#F59E0B" : "#6366F1",
            }}
          >
            {team.badge}
          </span>
        )}
        {team.upcoming && (
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-white/25">
            即将上线
          </span>
        )}
        <span className="text-[11px] text-white/20 hidden sm:inline">{team.subtitle}</span>
      </div>

      {/* Subtitle on its own line for mobile */}
      <p className="text-[11px] text-white/20 text-center mb-4 sm:hidden">{team.subtitle}</p>

      {/* Cards row — centered */}
      <div className="flex gap-3 sm:gap-4 justify-center">
        {team.members.map((member) => (
          team.upcoming ? (
            <MysteryCard
              key={member.id}
              member={member}
              isActive={activeId === member.id}
              isDimmed={activeId !== null && activeId !== member.id}
              onHover={() => onHover(member.id)}
              onLeave={onLeave}
            />
          ) : (
            <CrewCard
              key={member.id}
              member={member}
              isActive={activeId === member.id}
              isDimmed={activeId !== null && activeId !== member.id}
              onHover={() => onHover(member.id)}
              onLeave={onLeave}
            />
          )
        ))}
      </div>
    </div>
  );
}

export default function CrewLineup() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const allMembers = allCrewTeams.flatMap((t) => t.members);
  const activeMember = allMembers.find((m) => m.id === activeId);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#080810]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,rgba(99,102,241,0.08),transparent)]" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/25 mb-3">
            你的 AI 员工
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            认识你的团队
          </h2>
          <p className="text-white/35 text-sm max-w-xl mx-auto">
            幕后基座 + 前台战队，灵活组合，按需配置
          </p>
        </div>

        {/* Active member description bar */}
        <div className="h-8 flex items-center justify-center mb-4">
          <p
            className="text-xs sm:text-sm text-center transition-all duration-300"
            style={{
              color: activeMember?.accentColor ?? "transparent",
              opacity: activeMember ? 1 : 0,
              transform: activeMember ? "translateY(0)" : "translateY(2px)",
            }}
          >
            {activeMember?.desc}
          </p>
        </div>

        {/* Team rows */}
        {allCrewTeams.map((team) => (
          <TeamRow
            key={team.id}
            team={team}
            activeId={activeId}
            onHover={setActiveId}
            onLeave={() => setActiveId(null)}
          />
        ))}
      </div>
    </section>
  );
}
