import Link from "next/link";

// 服务条款页
export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-16 lg:px-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">服务条款</h1>
        <p className="text-text-muted text-sm mb-12">
          最近更新日期：2026 年 6 月 25 日
        </p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <p>
              本服务条款（以下简称&ldquo;本条款&rdquo;）构成你与上海猫木匠信息科技有限公司（以下简称&ldquo;我们&rdquo;）之间就使用 openclaw-for-business.com 及其提供的 Wiseflow / OpenClaw for Business 相关服务（以下简称&ldquo;本服务&rdquo;）所达成的协议。请仔细阅读本条款，使用本服务即表示你已阅读并同意受其约束。
            </p>
          </section>

          <Section title="一、服务说明">
            <p>本服务提供基于多智能体系统的 AI 团队解决方案，包含开源版本与托管服务。开源版本基于 Wiseflow 项目，可由你自行部署；托管服务由我们提供运维保障。具体服务内容、价格与功能范围以本网站相关页面及双方约定为准。</p>
          </Section>

          <Section title="二、账户与使用">
            <ul className="space-y-2 list-disc pl-5">
              <li>你应确保所提供的信息真实、准确、完整，并对账户下的所有活动负责；</li>
              <li>你不得将账户转让、出借或共享给第三方；</li>
              <li>你承诺在法律法规允许的范围内使用本服务，不得将本服务用于任何违法、侵权或损害他人权益的目的。</li>
            </ul>
          </Section>

          <Section title="三、开源版本">
            <p>开源版本遵循其对应的开源许可证授权。你在使用、修改、分发开源版本时应遵守相应许可证条款。开源版本由你自行部署与运维，我们不对其运行效果、数据安全及衍生责任承担保证责任，具体以开源项目声明为准。</p>
          </Section>

          <Section title="四、付费服务">
            <p>如你购买托管或其他付费服务，应按约定支付费用。付费服务的具体内容、价格、期限与退款规则以双方签订的协议或订单为准。除法律另有规定或我们另有承诺外，已支付费用一般不予退还。</p>
          </Section>

          <Section title="五、知识产权">
            <p>本网站的文案、设计、图标、Logo 等内容，以及我们提供的托管服务相关软件的知识产权归我们或其权利人所有，未经书面许可不得复制、转载或用于其他商业目的。开源部分的知识产权遵循其对应的开源许可证。</p>
          </Section>

          <Section title="六、使用规范">
            <p>使用本服务时，你不得实施下列行为：</p>
            <ul className="space-y-2 list-disc pl-5 mt-3">
              <li>对本服务进行逆向工程、反编译或试图获取源代码（开源部分除外）；</li>
              <li>对本服务实施或试图实施恶意攻击、爬取、刷量、干扰等行为；</li>
              <li>利用本服务生成、传播违法或侵权内容；</li>
              <li>其他可能损害我们、其他用户或第三方合法权益的行为。</li>
            </ul>
          </Section>

          <Section title="七、服务变更与终止">
            <p>我们可能根据业务发展对本服务进行更新、调整或停止部分功能，并将通过合理方式予以通知。若你违反本条款，我们有权限制、暂停或终止向你提供本服务，并保留追究相关责任的权利。</p>
          </Section>

          <Section title="八、免责声明">
            <p>本服务以&ldquo;现状&rdquo;提供，我们在法律允许的最大范围内不对服务的可用性、准确性、及时性或适用性作出明示或默示的保证。对于因使用或无法使用本服务而导致的任何直接或间接损失，我们不承担责任，但法律另有规定的除外。</p>
          </Section>

          <Section title="九、隐私保护">
            <p>我们对你个人信息的处理遵循我们的&ldquo;<Link href="/privacy" className="text-primary hover:underline">隐私政策</Link>&rdquo;，该政策构成本条款的组成部分，请一并阅读。</p>
          </Section>

          <Section title="十、争议解决">
            <p>本条款的订立、效力、解释与争议解决均适用中华人民共和国法律。因本条款或本服务产生的争议，双方应首先友好协商解决；协商不成的，任何一方均可向我们住所地有管辖权的人民法院提起诉讼。</p>
          </Section>

          <Section title="十一、条款更新">
            <p>我们可能不时更新本条款。更新后我们将在本网站显著位置公示。自公示之日起，更新后的条款即对你产生约束力。若你不同意更新后的条款，你可停止使用本服务。</p>
          </Section>

          <Section title="十二、联系我们">
            <p>如对本条款有任何疑问，请通过以下方式联系我们：</p>
            <ul className="space-y-2 list-disc pl-5 mt-3">
              <li>运营主体：上海猫木匠信息科技有限公司</li>
              <li>商务邮箱：zm.zhao@foxmail.com</li>
              <li>咨询通道：本网站&ldquo;<Link href="/contact" className="text-primary hover:underline">联系我们</Link>&rdquo;页面</li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <div className="text-base">{children}</div>
    </section>
  );
}
