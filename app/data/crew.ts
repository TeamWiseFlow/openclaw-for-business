export interface CrewMember {
  id: string;
  name: string;
  role: string;
  desc: string;
  image: string;
  accentColor: string;
}

export interface CrewTeam {
  id: string;
  label: string;
  subtitle: string;
  badge?: string;
  /** 如果是即将上线的团队，成员用占位 ? 卡片 */
  upcoming?: boolean;
  members: CrewMember[];
}

// --- 内部支撑（标配，启用自带，无需购买） ---

const mainAgent: CrewMember = {
  id: "main-agent",
  name: "Main Agent",
  role: "幕僚长",
  desc: "对内 crew 的神经中枢，任务路由分发、生命周期管理，执行兜底任务",
  image: "/crew/main-agent.webp",
  accentColor: "#F59E0B",
};

const hrbp: CrewMember = {
  id: "hrbp",
  name: "HRBP",
  role: "成长优化师",
  desc: "持续扫描反馈，驱动对外 crew 迭代升级，管理外部 crew 的招募与优化",
  image: "/crew/hrbp.webp",
  accentColor: "#10B981",
};

const itEngineer: CrewMember = {
  id: "it-engineer",
  name: "IT Engineer",
  role: "技术运维",
  desc: "系统配置、故障排查、自动修复，版本升级，保障全团队永远在线",
  image: "/crew/it-engineer.webp",
  accentColor: "#3B82F6",
};

// --- 业务承载与转化团队 ---

const salesCs: CrewMember = {
  id: "sales-cs",
  name: "Sales CS",
  role: "销售客服",
  desc: "售前咨询、产品答疑、购买引导、客户画像维护，推动成交转化",
  image: "/crew/sales-cs.webp",
  accentColor: "#F97316",
};

const bd: CrewMember = {
  id: "bd",
  name: "BD",
  role: "商务拓展",
  desc: "潜在客户探索（全平台主动发现商机）、商业情报采集（竞对/政策监控）、商务材料制作（PPT/方案书/社交线索等）",
  image: "/crew/bd.webp",
  accentColor: "#8B5CF6",
};

// --- 自动化获客团队 ---

const mediaOperator: CrewMember = {
  id: "media-operator",
  name: "自媒体运营",
  role: "内容运营师",
  desc: "内容创作、多平台自动发布、引流转化，驱动业务的内容营销",
  image: "/crew/social-media.webp",
  accentColor: "#EC4899",
};

const designer: CrewMember = {
  id: "designer",
  name: "Designer",
  role: "设计体系构建师",
  desc: "内置 15 套品牌设计系统（Stripe/Apple/BMW 等），一键匹配风格，从零构建完整网页、APP 界面与品牌视觉体系",
  image: "/crew/designer.webp",
  accentColor: "#06B6D4",
};

const videoProducer: CrewMember = {
  id: "video-producer",
  name: "Video Producer",
  role: "视频制作",
  desc: "脚本生成、配音、视频合成，四条制作线覆盖技术动画到宣传短片",
  image: "/crew/video-producer.webp",
  accentColor: "#6366F1",
};

// --- 团队列表 ---

export const allCrewTeams: CrewTeam[] = [
  {
    id: "support",
    label: "内部支撑",
    subtitle: "幕后基座，保障全链路稳定运行——每支对外团队自动配备，无需额外购买",
    badge: "标配",
    members: [mainAgent, hrbp, itEngineer],
  },
  {
    id: "acquisition",
    label: "业务承载与转化",
    subtitle: "线上BD + 商业情报获取 + 销售型客服",
    badge: "可雇佣",
    members: [bd, salesCs],
  },
  {
    id: "brand-media",
    label: "自动化获客",
    subtitle: "从网站设计到全平台内容运营，以品牌推广与获客为中心",
    badge: "可雇佣",
    members: [designer, mediaOperator, videoProducer],
  },
  {
    id: "finance-strategy",
    label: "CFO 团队",
    subtitle: "智能分析+精准决策，让每一分钱都花在刀刃上",
    upcoming: true,
    members: [
      { id: "fs-mystery-1", name: "???", role: "即将揭晓", desc: "", image: "", accentColor: "#78716C" },
      { id: "fs-mystery-2", name: "???", role: "即将揭晓", desc: "", image: "", accentColor: "#78716C" },
      { id: "fs-mystery-3", name: "???", role: "即将揭晓", desc: "", image: "", accentColor: "#78716C" },
    ],
  },
];

/** 拉平取所有实际成员（不含神秘占位） */
export const allRealCrew: CrewMember[] = [
  mainAgent, hrbp, itEngineer,
  salesCs, bd,
  mediaOperator, designer, videoProducer,
];

/** 内部支撑 crew */
export const supportCrew = [mainAgent, hrbp, itEngineer];
/** 前台业务 crew */
export const businessCrew = [salesCs, bd, mediaOperator, designer, videoProducer];
