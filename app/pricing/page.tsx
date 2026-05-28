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
      highlighted: false,
    },
    {
      name: "专业版",
      desc: "适合成长型企业",
      price: "——",
      period: "待定",
      features: [
        "1 支 AI 团队（可定制）",
        "前台角色数量不限",
        "后台支撑团队全量包含",
        "优先运维响应",
        "7×24 技术支持",
        "月度运营报告",
        "专属客户成功经理",
      ],
      cta: "联系咨询",
      highlighted: true,
    },
    {
      name: "企业版",
      desc: "适合大型组织",
      price: "——",
      period: "按需报价",
      features: [
        "多支 AI 团队并行",
        "完全定制化角色配置",
        "独立资源隔离",
        "SLA 保障协议",
        "7×24 专属技术团队",
        "周度运营报告",
        "深度定制与集成",
      ],
      cta: "联系咨询",
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
                  ? "bg-gradient-to-b from-primary/10 to-surface border-2 border-primary/40 scale-105"
                  : "bg-surface border border-white/5"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                  推荐
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
                href="/contact"
                className={`block text-center py-3 rounded-full text-sm font-medium transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-primary-light text-white hover:opacity-90"
                    : "border border-white/10 text-text-secondary hover:text-white hover:border-white/20"
                }`}
              >
                {plan.cta}
              </Link>
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
