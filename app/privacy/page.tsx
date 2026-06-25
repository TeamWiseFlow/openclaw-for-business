import Link from "next/link";

// 隐私政策页
export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-16 lg:px-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">隐私政策</h1>
        <p className="text-text-muted text-sm mb-12">
          最近更新日期：2026 年 6 月 25 日
        </p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <p>
              上海猫木匠信息科技有限公司（以下简称&ldquo;我们&rdquo;）运营 openclaw-for-business.com（以下简称&ldquo;本网站&rdquo;）。我们深知个人信息对你而言至关重要，本政策说明我们如何收集、使用、存储、共享和保护你的个人信息，以及你享有的权利。
            </p>
            <p className="mt-4">
              本政策依据《中华人民共和国个人信息保护法》《中华人民共和国网络安全法》《中华人民共和国数据安全法》等法律法规制定。使用本网站即表示你已阅读并同意本政策。
            </p>
          </section>

          <Section title="一、我们收集的信息">
            <ul className="space-y-2 list-disc pl-5">
              <li>你主动提供的信息：当你通过表单、咨询或企业微信联系我们时，我们会收到你填写的姓名、联系方式、公司名称及留言内容。</li>
              <li>自动收集的信息：当你访问本网站时，我们可能通过日志和 Cookie 收集访问时间、IP 地址、浏览器类型、设备信息及访问页面等，用于网站运维与安全防护。</li>
              <li>我们不收集你的身份证号、银行卡号等敏感个人信息，除非法律法规另有要求。</li>
            </ul>
          </Section>

          <Section title="二、我们如何使用信息">
            <ul className="space-y-2 list-disc pl-5">
              <li>响应你的咨询与需求，提供产品介绍、报价及售后服务；</li>
              <li>分析网站访问行为，改进网站功能、内容与用户体验；</li>
              <li>保障网站安全，识别并防范风险、欺诈与攻击；</li>
              <li>履行法律法规义务，配合监管或司法调查。</li>
            </ul>
            <p className="mt-4">我们不会将你的信息用于本政策未载明的其他目的。如需变更使用目的，我们会再次征得你的同意。</p>
          </Section>

          <Section title="三、信息的存储与共享">
            <p>你的个人信息存储于中华人民共和国境内的服务器。在未征得你同意的前提下，我们不会向任何第三方共享你的个人信息，但下列情况除外：</p>
            <ul className="space-y-2 list-disc pl-5 mt-3">
              <li>与为你提供服务的关联方或合作方共享（仅限必要范围）；</li>
              <li>为履行法定义务，向监管、司法或行政机关提供；</li>
              <li>经你另行同意的其他情形。</li>
            </ul>
            <p className="mt-4">我们仅在实现处理目的所必需的最短期限内保留你的信息，超出期限后将予以删除或匿名化处理。</p>
          </Section>

          <Section title="四、Cookie 与同类技术">
            <p>本网站使用 Cookie 记住你的偏好设置并分析访问行为。你可通过浏览器设置管理或禁用 Cookie。禁用后部分功能可能无法正常使用，但不影响你浏览本网站主要内容。</p>
          </Section>

          <Section title="五、信息安全">
            <p>我们采取合理的技术与管理措施保护你的信息安全，包括但不限于访问控制、加密传输、安全审计与应急响应。但请理解，互联网传输不存在绝对安全，我们不对非因我们原因导致的信息泄露承担责任。</p>
          </Section>

          <Section title="六、你的权利">
            <p>依据相关法律法规，你享有以下权利：</p>
            <ul className="space-y-2 list-disc pl-5 mt-3">
              <li>查阅、复制你的个人信息；</li>
              <li>请求更正、补充不准确或不完整的信息；</li>
              <li>请求删除已无必要或处理目的已实现的信息；</li>
              <li>撤回你此前给予的同意；</li>
              <li>对个人信息处理提出投诉或举报。</li>
            </ul>
            <p className="mt-4">行使上述权利请通过本政策末尾的联系方式与我们沟通，我们将在 15 个工作日内予以核实并响应。</p>
          </Section>

          <Section title="七、未成年人保护">
            <p>本网站面向一般公众，不面向未满 14 周岁的未成年人提供服务。若你是未成年人，请在监护人陪同下使用本网站并阅读本政策。我们不会主动收集未成年人个人信息，若发现误收集将予以删除。</p>
          </Section>

          <Section title="八、政策更新">
            <p>本政策可能随业务发展或法律法规变化而更新。更新后我们将在本网站显著位置公示。若变更涉及对你权利的重大影响，我们将另行通过合理方式通知你。</p>
          </Section>

          <Section title="九、联系我们">
            <p>如对本政策有任何疑问、建议或权利行使请求，请通过以下方式联系我们：</p>
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
