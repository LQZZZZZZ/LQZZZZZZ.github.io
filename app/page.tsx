const researchAreas = [
  {
    index: "01",
    title: "Personalized AI Agents",
    cn: "个性化智能体",
    description:
      "探索能够理解长期目标、偏好与情境的智能体，让模型从一次性回答走向持续、可信的协作。",
    tags: ["Personalization", "Human–AI Interaction", "Long-term Memory"],
  },
  {
    index: "02",
    title: "Agents for Telecom",
    cn: "通信智能体",
    description:
      "面向复杂通信系统的自主推理、工具使用与任务编排，关注可靠性、可解释性及真实环境中的落地。",
    tags: ["Telecommunications", "Tool Use", "Reliable AI"],
  },
  {
    index: "03",
    title: "Research Infrastructure",
    cn: "智能科研基础设施",
    description:
      "构建支持文献理解、实验设计、数据分析和学术表达的可复用工作流，缩短从想法到证据的距离。",
    tags: ["AI for Science", "Workflow Design", "Evaluation"],
  },
];

const publications = [
  {
    year: "20XX",
    type: "RESEARCH PAPER",
    title: "论文题目待补充",
    authors: "作者、会议 / 期刊与年份将在此展示",
    note: "可添加 PDF、代码与项目主页链接",
  },
  {
    year: "20XX",
    type: "CONFERENCE PAPER",
    title: "论文题目待补充",
    authors: "作者、会议 / 期刊与年份将在此展示",
    note: "可标记共同一作、通讯作者或奖项",
  },
  {
    year: "20XX",
    type: "PREPRINT",
    title: "正在推进的工作",
    authors: "研究摘要、合作者与预印本信息",
    note: "可链接 arXiv、GitHub 或项目页面",
  },
];

const demos = [
  {
    number: "01",
    title: "Personalized Agent",
    cn: "个性化智能体原型",
    description: "展示智能体如何在长期交互中理解用户目标并形成连续、可控的协作体验。",
    meta: "VIDEO LINK · 待接入",
    tone: "lime",
  },
  {
    number: "02",
    title: "Telecom Agent",
    cn: "通信任务智能体",
    description: "展示面向通信场景的任务拆解、工具调用、证据回溯与可靠执行。",
    meta: "VIDEO LINK · 待接入",
    tone: "violet",
  },
  {
    number: "03",
    title: "Research Copilot",
    cn: "科研工作流助手",
    description: "从文献检索到实验复现与写作，演示一套可审计、可复用的科研协作流程。",
    meta: "VIDEO LINK · 待接入",
    tone: "orange",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回首页">
          QZ<span>.</span>
        </a>
        <nav aria-label="主导航">
          <a href="#research">研究</a>
          <a href="#publications">论文</a>
          <a href="#demos">Demo</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="small-cta" href="#publications">
          查看成果 <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          Researching intelligent agents
        </div>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">QIZHE LI · ACADEMIC PROFILE</p>
            <h1>
              Designing agents
              <br />
              that <em>understand</em>,
              <br />
              reason &amp; act.
            </h1>
          </div>
          <aside className="hero-aside">
            <p className="intro-cn">
              你好，我是<span>李启哲</span>。
            </p>
            <p>
              我的研究关注个性化智能体、通信智能体与智能科研基础设施，致力于让 AI
              从“会回答”走向“能协作”。
            </p>
            <div className="hero-links">
              <a href="#research">研究方向</a>
              <a href="#demos">观看 Demo</a>
            </div>
          </aside>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">
            <span>AI</span>
            <small>AGENTS</small>
          </div>
          <span className="orbit-label label-one">UNDERSTAND</span>
          <span className="orbit-label label-two">REASON</span>
          <span className="orbit-label label-three">ACT</span>
        </div>
        <div className="hero-footer">
          <span>BASED IN CHINA · WORKING GLOBALLY</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CURRENT FOCUS · 研究方向</p>
            <h2>Building the next layer of intelligent collaboration.</h2>
          </div>
          <p className="section-count">03 / RESEARCH THEMES</p>
        </div>
        <div className="research-list">
          {researchAreas.map((area) => (
            <article className="research-card" key={area.index}>
              <div className="research-number">{area.index}</div>
              <div>
                <h3>{area.title}</h3>
                <p className="cn-title">{area.cn}</p>
              </div>
              <p className="research-description">{area.description}</p>
              <div className="tag-list">
                {area.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section publications-section" id="publications">
        <div className="section-heading light-heading">
          <div>
            <p className="eyebrow">SELECTED WORK · 代表论文</p>
            <h2>Ideas, evidence, and systems.</h2>
          </div>
          <p className="section-count">PUBLICATIONS</p>
        </div>
        <div className="publication-list">
          {publications.map((paper, index) => (
            <article className="publication-row" key={`${paper.type}-${index}`}>
              <div className="paper-year">{paper.year}</div>
              <div className="paper-main">
                <p className="paper-type">{paper.type}</p>
                <h3>{paper.title}</h3>
                <p>{paper.authors}</p>
              </div>
              <p className="paper-note">{paper.note}</p>
              <span className="paper-link" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
        <div className="content-note">
          <span>✦</span>
          <p>
            这里已为正式论文信息预留版式。提供论文清单后，可补充作者、发表 venue、
            年份、摘要及 PDF / Code 链接。
          </p>
        </div>
      </section>

      <section className="section demos-section" id="demos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">RESEARCH IN MOTION · 科研 DEMO</p>
            <h2>See the research working.</h2>
          </div>
          <p className="section-count">WATCH · EXPLORE · TEST</p>
        </div>
        <div className="demo-grid">
          {demos.map((demo) => (
            <article className={`demo-card ${demo.tone}`} key={demo.number}>
              <div className="demo-screen">
                <div className="demo-topline">
                  <span>DEMO / {demo.number}</span>
                  <span>QZ LAB</span>
                </div>
                <div className="play-button" aria-hidden="true">
                  <span />
                </div>
                <div className="scan-lines" aria-hidden="true" />
                <span className="demo-coming">VIDEO COMING SOON</span>
              </div>
              <div className="demo-copy">
                <p className="paper-type">{demo.meta}</p>
                <h3>{demo.title}</h3>
                <p className="cn-title">{demo.cn}</p>
                <p>{demo.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">COLLABORATE · 联系合作</p>
        <div className="contact-grid">
          <h2>
            Let&apos;s turn ambitious
            <br />
            questions into <em>working systems.</em>
          </h2>
          <div className="contact-copy">
            <p>
              欢迎围绕智能体、通信 AI 与科研基础设施交流合作。邮箱、Google Scholar、
              GitHub 与个人简历链接将在这里集中展示。
            </p>
            <a href="#top" className="contact-button">
              返回首页 <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
        <footer>
          <span>QIZHE LI · ACADEMIC PROFILE</span>
          <span>© 2026 · BUILT FOR RESEARCH</span>
        </footer>
      </section>
    </main>
  );
}
