# OpenClaw for Business — 官网

面向企业的 AI 数字员工团队托管服务官网。

## 项目结构

```
app/
├── layout.tsx          # 全局布局（导航栏 + 页脚）
├── page.tsx            # 首页
├── teams/page.tsx      # AI 团队
├── pricing/page.tsx    # 价格方案
├── cases/page.tsx      # 客户案例
├── media/page.tsx      # 自媒体矩阵
└── contact/page.tsx    # 联系我们
components/
├── Navbar.tsx          # 顶部导航
├── Footer.tsx          # 底部页脚
└── GitHubStarsBadge.tsx # GitHub 星标组件
```

## 本地开发

```bash
cd ~/projects/openclaw-for-business
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000)

## 技术栈

- Next.js 15 (App Router)
- Tailwind CSS 4
- React 19
- TypeScript

## 视觉规范

详见 `website-ofb/design-guide.md`（位于 workspace 目录）
