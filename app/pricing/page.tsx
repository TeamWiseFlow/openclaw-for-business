import Link from "next/link";

// 价格方案页
export default function PricingPage() {
  const plans = [
    {
      name: "基础版",
      desc: "适合小团队起步",
      price: "——",
      period: "待定",
      features: [
        "1 支 AI 团队（业务承载与转化）",
        "标准前台角色配置",
        "后台支撑团队全量包含",
        "基础运维保障",
        "工作日工单支持",
      ],
      cta: "联系咨询",
      ctaHref: "/contact",
      highlighted: false,
    },
    {
      name: "开源版",
      desc: "基于 Wiseflow 5.5 系列，在你的设备上部署你的第一支 AI 团队",
      badge: "永远免费",
      price: "¥0",
      period: "",
      features: [
        "7 个 AI Crew 全量可用（商务拓展 / 自媒体运营 / 销售客服 / 设计师 / HRBP / IT Engineer / 投资人关系*）",
        "完全开源，承诺永远免费",
        "社区支持（GitHub Discussion + 微信群）",
      ],
      cta: "访问 GitHub →",
      ctaHref: "https://github.com/TeamWiseFlow/wiseflow",
      mirrorLink: "https://atomgit.com/wiseflow/wiseflow",
      highlighted: true,
      footnotes: [
        "*开源版软件免费，需自行准备硬件、大模型调用费用及电费、网费等。",
        "*投资人关系即将发布。",
      ],
    },
    {
      name: "专业版 / 企业版",
      desc: "适合成长型及大型组织",
      price: "——",
      period: "按需报价",
      features: [
        "1 支 AI 团队（可定制）",
        "前台角色数量不限",
        "后台支撑团队全量包含",
        "优先运维响应 + 7×24 技术支持",
        "专属客户成功经理",
        "深度定制与集成",
      ],
      cta: "联系咨询",
      ctaHref: "/contact",
      highlighted: false,
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            价格方案
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            托管服务，含主机、大模型、运维全包。按团队规模与定制程度定价。
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 relative ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/10 to-surface border-2 border-primary/40 md:scale-105"
                  : "bg-surface border border-white/5"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-text-secondary mb-6">{plan.desc}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-text-secondary text-sm ml-1">/ {plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                target={plan.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={plan.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`block text-center py-3 rounded-full text-sm font-medium transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-primary-light text-white hover:opacity-90"
                    : "border border-white/10 text-text-secondary hover:text-white hover:border-white/20"
                }`}
              >
                {plan.cta}
              </Link>

              {"mirrorLink" in plan && (
                <p className="text-xs text-text-muted text-center mt-3">
                  国内镜像：<Link href={plan.mirrorLink!} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary hover:underline">{plan.mirrorLink!}</Link>
                </p>
              )}

              {"footnotes" in plan && (
                <div className="mt-4 space-y-1">
                  {plan.footnotes!.map((note) => (
                    <p key={note} className="text-xs text-text-muted leading-relaxed">{note}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12 text-sm text-text-muted">
          <p>具体价格根据 AI 团队规模、前台角色数量和定制程度浮动</p>
          <p className="mt-1">欢迎 <Link href="/contact" className="text-primary hover:underline">联系我们</Link> 获取详细报价</p>
        </div>
      </div>
    </div>
  );
}
