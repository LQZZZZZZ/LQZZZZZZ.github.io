import type { Metadata } from "next";
import InterestingNav from "../../../InterestingNav";
import SiteHeader from "../../../SiteHeader";

export const metadata: Metadata = {
  title: "Learning to Ask Why a Paper Should Exist · Qizhe Li",
  description: "A bilingual reflection on deadlines, research taste, and learning to see the value of a research question.",
};

export default function BlogPost() {
  return (
    <main>
      <SiteHeader innerPage />
      <InterestingNav />
      <article className="bilingual-post">
        <header className="post-header">
          <p className="eyebrow">Daily Sharing · Blog</p>
          <h1>Learning to Ask Why a Paper Should Exist</h1>
          <p className="post-title-zh" lang="zh-CN">学着追问：一篇论文为什么应该存在</p>
          <time dateTime="2026-08-02">August 2, 2026</time>
        </header>

        <div className="language-columns">
          <section lang="en" aria-labelledby="english-version">
            <h2 id="english-version">English</h2>
            <p>I just submitted a paper. At the very last moment before the deadline, I failed to upload the final version. The good news is that the missing update was only one sentence. The bad news is that the sentence sits right in the middle of the abstract...</p>
            <p>During this revision, five or six professors and fellow students kindly read the paper for me. Their comments made me feel, very directly, how differently people can see the same work through the lens of research taste.</p>
            <p>From the bottom up, the questions moved from “Does the equation hold?” to “Are the problem, challenge, and method logically connected?” and finally to “Even if the task is perfectly well defined, why is it worth doing?”</p>
            <p>I am still somewhere in the second stage. I tend to think that a paper becomes a good paper once it is correct, fluent, visually polished, and wrapped in a coherent story. I am still some distance away from thinking deeply about the value of the work itself.</p>
            <p>There are two reasons. First, I do not yet have enough experience. Second, my thinking still lacks both depth and breadth. I often remain confined to the small plot of ground directly in front of me, instead of stepping back to ask where this research sits in the broader landscape, what it changes, and what substantive value it creates.</p>
            <p>The ability to pose a question includes deciding what object to question, how to formulate the question, and which question is worth asking.</p>
            <p>The ability to formulate assumptions matters just as much. The assumptions of a study form its foundation: they carry every premise on which the necessity of the research rests.</p>
            <p>I still have a long way to go. Read more, and think more.</p>
          </section>

          <section lang="zh-CN" aria-labelledby="chinese-version">
            <h2 id="chinese-version">中文</h2>
            <p>刚投出去一篇论文，DDL 最后一刻没有把最终版上传成功。好消息是只更新了一句话；坏消息是，这句话在摘要正中间……</p>
            <p>这一篇修改过程中，给五六位老师同学帮忙看，感受到不同的 research taste 的视角差异。</p>
            <p>自底向上，从“公式是否成立”到“问题—挑战—方法之间是否连贯”，再到“即使任务完全正确，它为什么值得做？”</p>
            <p>而我还停留在第二阶段。似乎“写对了，写流畅了，包装故事讲通顺了，美观了”，就是一篇不错的论文，距离思考这个工作的“价值”还有一定距离。</p>
            <p>这背后的原因：一是经历和经验欠缺；二是思考的深度和广度都还不够。思考的内容局限在当下的一亩三分地，没能从全局的视角思考这个研究处于什么位置、改变了什么，以及它的实质价值。</p>
            <p>“提出问题”的能力，涵盖了针对什么对象提出问题、如何提出问题，以及提出什么问题。</p>
            <p>“提出假设”的能力同样重要。一项研究的假设前提构成这个工作的地基，承载着研究必要性成立的所有前提。</p>
            <p>还需要修炼呀～多读，多思考～</p>
          </section>
        </div>
        <a className="post-back" href="/interesting/daily/">← Back to Daily Sharing</a>
      </article>
    </main>
  );
}
