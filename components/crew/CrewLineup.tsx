"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { crewMembers, CrewMember } from "@/app/data/crew";

function CharacterSlot({
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
      className="relative flex-1 min-w-0 cursor-pointer select-none"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Portrait container */}
      <div
        className="relative overflow-hidden transition-all duration-400"
        style={{
          aspectRatio: "2 / 3",
          transform: isActive ? "scale(1.06) translateY(-8px)" : "scale(1)",
          opacity: isDimmed ? 0.35 : 1,
          filter: isActive
            ? `drop-shadow(0 0 24px ${member.accentColor}80)`
            : "none",
          transition: "transform 350ms cubic-bezier(0.16,1,0.3,1), opacity 250ms ease, filter 350ms ease",
        }}
      >
        {/* Atmospheric background */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 30%, ${member.accentColor}18 0%, transparent 70%), linear-gradient(to bottom, #0d0d14 0%, #080810 100%)`,
          }}
        />

        {/* Character image or styled placeholder */}
        {!imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 33vw, 16vw"
          />
        ) : (
          /* Placeholder while awaiting media-operator assets */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div
              className="w-16 h-16 rounded-full border-2 opacity-30"
              style={{ borderColor: member.accentColor }}
            />
            <div
              className="w-8 h-20 rounded-full opacity-20"
              style={{ background: member.accentColor }}
            />
          </div>
        )}

        {/* Bottom fade into site background */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#080810] to-transparent" />

        {/* Active highlight line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${member.accentColor}, transparent)`,
            opacity: isActive ? 1 : 0,
          }}
        />
      </div>

      {/* Name plate */}
      <div
        className="text-center pt-2 pb-1 transition-all duration-300"
        style={{ opacity: isDimmed ? 0.25 : 1 }}
      >
        <div
          className="text-xs font-bold tracking-widest uppercase truncate"
          style={{ color: isActive ? member.accentColor : "rgba(255,255,255,0.55)" }}
        >
          {member.name}
        </div>
        <div className="text-[10px] text-white/30 mt-0.5 truncate">{member.role}</div>
      </div>
    </div>
  );
}

export default function CrewLineup() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeMember = crewMembers.find((m) => m.id === activeId);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Deep atmosphere */}
      <div className="absolute inset-0 bg-[#080810]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(99,102,241,0.12),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/30 mb-3">
            你的 AI 员工
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            认识你的团队
          </h2>
          <p className="text-white/40 text-sm">
            后台三人标配支撑，前台角色按需配置——悬停了解每位成员
          </p>
        </div>

        {/* Team divider labels */}
        <div className="flex mb-4 max-w-4xl mx-auto">
          <div className="flex-[3] text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent/60">
              后台支撑（标配）
            </span>
          </div>
          <div className="flex-[3] text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/60">
              前台业务（可选）
            </span>
          </div>
        </div>

        {/* Divider line with gap */}
        <div className="flex max-w-4xl mx-auto mb-6">
          <div className="flex-[3] border-t border-accent/20" />
          <div className="w-6" />
          <div className="flex-[3] border-t border-primary/20" />
        </div>

        {/* Character lineup */}
        <div className="flex items-end gap-2 sm:gap-3 max-w-4xl mx-auto">
          {crewMembers.map((member, i) => (
            <Fragment key={member.id}>
              {i === 3 && (
                <div className="w-px self-stretch bg-white/5 flex-shrink-0" />
              )}
              <CharacterSlot
                member={member}
                isActive={activeId === member.id}
                isDimmed={activeId !== null && activeId !== member.id}
                onHover={() => setActiveId(member.id)}
                onLeave={() => setActiveId(null)}
              />
            </Fragment>
          ))}
        </div>

        {/* Active member description */}
        <div className="h-14 flex items-center justify-center mt-6 max-w-lg mx-auto">
          <p
            className="text-sm text-center transition-all duration-300"
            style={{
              color: activeMember?.accentColor ?? "transparent",
              opacity: activeMember ? 1 : 0,
              transform: activeMember ? "translateY(0)" : "translateY(4px)",
            }}
          >
            {activeMember?.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
