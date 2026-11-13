import type { Metadata } from "next";
import InterestingNav from "../../../InterestingNav";

export const metadata: Metadata = {
  title: "What Makes a Good Presentation? · Qizhe Li",
  description: "A bilingual note on self-contained slides, asking the right questions, and anticipating an audience's response.",
};

export default function BlogPost() {
  return (
    <main>
      <InterestingNav />
      <article className="bilingual-post">
        <header className="post-header">
          <p className="eyebrow">Sharing Calendar · Blog</p>
          <h1>What Makes a Good Presentation?</h1>
          <p className="post-title-zh" lang="zh-CN">什么是好的 presentation？</p>
          <time dateTime="2026-08-12">August 12, 2026</time>
        </header>

        <div className="language-columns">
          <section lang="en" aria-labelledby="english-version">
            <h2 id="english-version">English</h2>
            <p>At our weekly meetings, I have been noting down some useful advice from my supervisor on communicating ideas, whether in a paper or an oral presentation.</p>
            <ol>
              <li>
                <p><strong>Good slides should be self-contained.</strong> The slides themselves should convey about 80% of the information. The speaker can then use the remaining 20% to clarify, connect, and add nuance.</p>
              </li>
              <li>
                <p><strong>Before learning how to solve a problem, learn how to ask one.</strong> This may sound counterintuitive, but effective communication begins by taking the audience&apos;s or reader&apos;s perspective. At each point, ask: “If I were reading or listening to this, what would I want to know next? What might I expect to see?”</p>
              </li>
              <li>
                <p><strong>A skilled speaker pauses, observes, and adjusts.</strong> They check whether the audience is following and create moments of interaction: “At this point, you may be wondering about **. Next, we will show how we addressed **.” By repeatedly predicting the audience&apos;s response and meeting their expectations, the speaker creates a rhythm that is easy to follow.</p>
              </li>
            </ol>
          </section>

          <section lang="zh-CN" aria-labelledby="chinese-version">
            <h2 id="chinese-version">中文</h2>
            <p>每周例会时，我会从导师那里记录下一些关于“表达”的小技巧——既包括论文写作，也包括口头报告。</p>
            <ol>
              <li>
                <p><strong>好的 PPT 应该是 self-contained 的。</strong>只看页面内容，就应该能够获得大约 80% 的信息；剩下的 20%，才由讲述来补充、串联和深化。</p>
              </li>
              <li>
                <p><strong>在学习如何解决问题之前，首先要学会如何提出问题。</strong>这听起来有些反直觉，但表达应当从观众或读者的角度出发。在每个节点问自己：“如果我读到或听到这里，接下来最想知道什么？我会期待看到什么？”</p>
              </li>
              <li>
                <p><strong>厉害的 speaker 会停下来观察，并根据反馈调整。</strong>他们会判断对方是否听懂，也会主动抛出互动：“讲到这里，大家可能会对 ** 产生疑问；接下来，我们将说明如何解决 **。”在不断预测观众反应、回应观众预期的循环中，逐渐形成让人愿意跟下去的节奏。</p>
              </li>
            </ol>
          </section>
        </div>
        <a className="post-back" href="/interesting/daily/">← Back to Sharing Calendar</a>
      </article>
    </main>
  );
}
