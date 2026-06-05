export interface CrewMember {
  id: string;
  name: string;
  role: string;
  desc: string;
  image: string;
  accentColor: string;
  /** 即将发布的角色，显示「即将发布」角标 */
  upcoming?: boolean;
}

export interface CrewTeam {
  id: string;
  label: string;
  subtitle: string;
  badge?: string;
  members: CrewMember[];
}

// --- 内部支撑（标配，启用自带，无需购买） ---

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

// --- 自动化获客团队 ---

const bd: CrewMember = {
  id: "bd",
  name: "Business Developer",
  role: "商务拓展",
  desc: "人脉分析、批量触达、主动开拓新客户",
  image: "/crew/bd.webp",
  accentColor: "#8B5CF6",
};

const mediaOperator: CrewMember = {
  id: "media-operator",
  name: "Selfmedia Operator",
  role: "自媒体运营",
  desc: "内容创作、多平台自动发布、引流转化",
  image: "/crew/social-media.webp",
  accentColor: "#EC4899",
};

const videoProducer: CrewMember = {
  id: "video-producer",
  name: "Video Producer",
  role: "视频制作",
  desc: "脚本生成、配音合成、视频剪辑合成",
  image: "/crew/video-producer.webp",
  accentColor: "#6366F1",
};

const salesCs: CrewMember = {
  id: "sales-cs",
  name: "Sales-CS",
  role: "销售客服",
  desc: "促进成交、管理客户信息、发起收款",
  image: "/crew/sales-cs.webp",
  accentColor: "#F97316",
};

// --- 保障与支撑团队 ---

/** 投资人关系 — 复用原 Main Agent（幕僚长）形象 */
const ir: CrewMember = {
  id: "ir",
  name: "IR",
  role: "投资人关系",
  desc: "商业模式优化、搜索投资人、生成 BP、项目申报、知识产权申报",
  image: "/crew/main-agent.webp",
  accentColor: "#F59E0B",
  upcoming: true,
};

const designer: CrewMember = {
  id: "designer",
  name: "Designer",
  role: "平面设计师",
  desc: "品牌整体设计、网页/落地页原型设计、APP 界面设计",
  image: "/crew/designer.webp",
  accentColor: "#06B6D4",
};

/** 财税专员 — 即将发布 */
const taxSpecialist: CrewMember = {
  id: "tax-specialist",
  name: "Tax Specialist",
  role: "财税专员",
  desc: "发票管理、税务申报、财务报表",
  image: "/crew/tax-specialist.webp",
  accentColor: "#DC2626",
  upcoming: true,
};

// --- 团队列表 ---

export const allCrewTeams: CrewTeam[] = [
  {
    id: "support",
    label: "内部支撑团队",
    subtitle: "幕后基座，保障全链路稳定运行——每支团队自动配备，无需额外购买",
    badge: "标配",
    members: [hrbp, itEngineer],
  },
  {
    id: "acquisition",
    label: "自动化获客团队",
    subtitle: "从发现客户到促成成交，全流程自动化。你的 AI 团队 7×24 在线，替你跑通获客的每一步。",
    badge: "可雇佣",
    members: [bd, mediaOperator, videoProducer, salesCs],
  },
  {
    id: "support-team",
    label: "保障与支撑团队",
    subtitle: "让业务合规、让品牌出彩、让财务清晰。你的 AI 后勤团队，保障业务稳健运行。",
    badge: "可雇佣",
    members: [ir, designer, taxSpecialist],
  },
];

/** 拉平取所有实际成员（含即将发布，不含占位） */
export const allRealCrew: CrewMember[] = [
  hrbp, itEngineer,
  bd, mediaOperator, videoProducer, salesCs,
  ir, designer, taxSpecialist,
];

/** 内部支撑 crew */
export const supportCrew = [hrbp, itEngineer];
/** 前台业务 crew */
export const businessCrew = [bd, mediaOperator, videoProducer, salesCs, ir, designer, taxSpecialist];
