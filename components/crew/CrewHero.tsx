"use client";

import Image from "next/image";
import Link from "next/link";
import { allCrewTeams } from "@/app/data/crew";

export default function CrewHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_50%,rgba(255,119,89,0.06),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/25 mb-3">
            你的 AI 员工
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            认识你的团队
          </h2>
          <p className="text-white/35 text-sm max-w-xl mx-auto">
            幕后基座 + 前台战队，灵活组合，按需配置
          </p>
        </div>

        {/* Full-width lineup image */}
        <div className="relative w-full mb-10 -mx-2 sm:mx-0" style={{ aspectRatio: "32/9" }}>
          <Image
            src="/crew/crew-lineup.webp"
            alt="AI 数字员工团队全家福"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
        </div>

        {/* Quick glance badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {allCrewTeams.map((team) => (
            <div
              key={team.id}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border"
              style={{
                background: team.upcoming
                  ? "rgba(255,255,255,0.02)"
                  : team.badge === "标配"
                    ? "rgba(245,158,11,0.06)"
                    : "rgba(255,119,89,0.06)",
                borderColor: team.upcoming
                  ? "rgba(255,255,255,0.06)"
                  : team.badge === "标配"
                    ? "rgba(245,158,11,0.15)"
                    : "rgba(255,119,89,0.15)",
              }}
            >
              <span
                className="font-medium"
                style={{
                  color: team.upcoming
                    ? "rgba(255,255,255,0.3)"
                    : team.badge === "标配"
                      ? "#F59E0B"
                      : "#ff7759",
                }}
              >
                {team.label}
              </span>
              <span className="text-white/20">
                {team.members.length}人
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/teams"
            className="inline-block px-6 py-2.5 rounded-full border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/25 transition-all"
          >
            详细了解每位 AI 员工 →
          </Link>
        </div>
      </div>
    </section>
  );
}
