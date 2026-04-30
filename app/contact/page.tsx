import Image from "next/image";

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
            聊聊您的业务需求，我们帮您定制最合适的 AI 数字员工团队方案
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 商务合作 */}
          <div className="p-8 rounded-xl bg-surface border border-white/5">
            <h3 className="text-xl font-bold text-white mb-4">商务合作</h3>
            <div className="space-y-3 text-text-secondary">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-xs text-text-muted mb-0.5">商务邮箱</div>
                  <a href="mailto:zm.zhao@foxmail.com" className="text-sm text-primary hover:underline">
                    zm.zhao@foxmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 企业微信 */}
          <div className="p-8 rounded-xl bg-surface border border-white/5">
            <h3 className="text-xl font-bold text-white mb-4">掌柜的企业微信</h3>
            <div className="space-y-3 text-text-secondary">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-3.5-2-3.5 2v-4H6a2 2 0 01-2-2v-6a2 2 0 012-2h2V4l3.5 2L13 4v4z" />
                </svg>
                <div>
                  <div className="text-sm leading-relaxed">
                    扫码添加掌柜，统一对外客服<br />
                    <span className="text-text-muted text-xs">（添加后由 AI 客服接待）</span>
                  </div>
                  <Image
                    src="/wechat-qr.png"
                    alt="掌柜企业微信二维码"
                    width={128}
                    height={128}
                    className="mt-3 rounded-lg border border-white/5"
                    unoptimized
                  />
                </div>
              </div>
            </div>
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
