export interface CrewMember {
  id: string;
  name: string;
  role: string;
  desc: string;
  team: "backend" | "frontend";
  image: string;
  accentColor: string;
}

export const crewMembers: CrewMember[] = [
  {
    id: "main-agent",
    name: "Main Agent",
    role: "调度中心",
    desc: "统一管理和协调所有智能体，是整支团队的神经中枢",
    team: "backend",
    image: "/crew/main-agent.png",
    accentColor: "#F59E0B",
  },
  {
    id: "hrbp",
    name: "HRBP",
    role: "成长优化师",
    desc: "智能体持续改进，扫描反馈驱动团队迭代升级",
    team: "backend",
    image: "/crew/hrbp.png",
    accentColor: "#10B981",
  },
  {
    id: "it-engineer",
    name: "IT Engineer",
    role: "技术运维",
    desc: "系统配置、故障排查、自动修复，让团队永远在线",
    team: "backend",
    image: "/crew/it-engineer.png",
    accentColor: "#3B82F6",
  },
  {
    id: "sales-cs",
    name: "Sales CS",
    role: "销售客服",
    desc: "促进成交、记录客户信息、发起收款",
    team: "frontend",
    image: "/crew/sales-cs.png",
    accentColor: "#F97316",
  },
  {
    id: "bd",
    name: "BD",
    role: "商务拓展",
    desc: "人脉分析、批量触达、主动开拓新客户",
    team: "frontend",
    image: "/crew/bd.png",
    accentColor: "#8B5CF6",
  },
  {
    id: "social-media",
    name: "自媒体运营",
    role: "内容运营师",
    desc: "内容创作、多平台自动发布、引流转化",
    team: "frontend",
    image: "/crew/social-media.png",
    accentColor: "#EC4899",
  },
];

export const backendCrew = crewMembers.filter((m) => m.team === "backend");
export const frontendCrew = crewMembers.filter((m) => m.team === "frontend");
