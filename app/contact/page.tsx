import Image from "next/image";
import Link from "next/link";

// 联系我们页
export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            联系我们
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            聊聊你的业务，我们帮你定制最合适的 AI 团队方案
          </p>
          <p className="text-base text-primary/80 max-w-2xl mx-auto mt-3 leading-relaxed">
            线上自助开通 AI 团队功能正在紧急开发中，目前如有需求，欢迎扫描下方掌柜企业微信二维码沟通。或者欢迎使用我们的
            <Link href="https://github.com/TeamWiseFlow/wiseflow" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">开源版本</Link>
            自行部署（完全免费），
            <Link href="https://atomgit.com/wiseflow/wiseflow" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">国内镜像</Link>
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="p-10 rounded-xl bg-surface border border-white/5 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-white mb-4">掌柜的企业微信</h3>
            <div className="text-sm text-text-secondary leading-relaxed mb-4">
              微信扫码添加掌柜的，咨询任何问题<br />
              <span className="text-text-muted text-xs">（添加后由 AI 客服接待）</span>
            </div>
            <Image
              src="/wechat-qr.png"
              alt="掌柜企业微信二维码"
              width={240}
              height={240}
              className="rounded-lg border border-white/5"
              unoptimized
            />
          </div>
        </div>

        {/* Company Info */}
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-white/5">
          <div className="text-center text-sm text-text-muted space-y-1">
            <p>上海猫木匠信息科技有限公司</p>
            <p>统一社会信用代码：91310106MAEUNE4767</p>
          </div>
        </div>
      </div>
    </div>
  );
}
