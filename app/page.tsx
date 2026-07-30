const scholarUrl =
  "https://scholar.google.com/citations?user=2XdjuasAAAAJ&hl=zh-CN";
const githubUrl = "https://github.com/LQZZZZZZ";

const researchAreas = [
  {
    icon: "✦",
    title: "Personalized AI Agents",
    cn: "个性化智能体",
    description:
      "探索能够理解长期目标、偏好与情境的智能体，让模型从一次性回答走向持续、可信的协作。",
    tags: ["Personalization", "Long-term Memory", "Human–AI Interaction"],
  },
  {
    icon: "⌁",
    title: "Agents for Telecom",
    cn: "通信智能体",
    description:
      "面向复杂通信系统的自主推理、工具使用与任务编排，关注可靠性、可解释性与真实场景落地。",
    tags: ["Telecommunications", "Tool Use", "Reliable AI"],
  },
  {
    icon: "◌",
    title: "AI for Research",
    cn: "智能科研基础设施",
    description:
      "构建支持文献理解、实验设计、数据分析和学术表达的可复用工作流，缩短从想法到证据的距离。",
    tags: ["AI for Science", "Research Workflow", "Evaluation"],
  },
];

const demos = [
  {
    label: "DEMO 01",
    title: "Personalized Agent",
    cn: "个性化智能体原型",
    description: "长期交互、用户目标理解与可控协作体验。",
    color: "pink",
  },
  {
    label: "DEMO 02",
    title: "Telecom Agent",
    cn: "通信任务智能体",
    description: "任务拆解、工具调用、证据回溯与可靠执行。",
    color: "purple",
  },
  {
    label: "DEMO 03",
    title: "Research Copilot",
    cn: "科研工作流助手",
    description: "文献检索、实验复现、分析与写作的一体化流程。",
    color: "blue",
  },
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#about" aria-label="Qizhe Li 首页">
          Qizhe<span>Li</span>
        </a>
        <nav className="tabs" aria-label="页面导航">
          <a className="active" href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#demos">Demos</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="top-links">
          <a href={scholarUrl} target="_blank" rel="noreferrer" aria-label="Google Scholar">
            Scholar
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
            GitHub
          </a>
        </div>
      </header>

      <section className="hero" id="about">
        <div className="hero-glow glow-one" aria-hidden="true" />
        <div className="hero-glow glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="hello"><span>✦</span> Hello, I&apos;m</p>
          <h1>
            Qizhe <em>Li</em>
          </h1>
          <p className="role">AI RESEARCHER · INTELLIGENT AGENTS</p>
          <p className="bio">
            我的研究聚焦于<span>个性化智能体</span>、<span>通信智能体</span>与
            <span>智能科研基础设施</span>。我希望让 AI 不仅能回答问题，更能理解人、
            可靠推理，并在真实世界中持续协作。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#research">
              Explore my research <span aria-hidden="true">↓</span>
            </a>
            <a className="button secondary" href={scholarUrl} target="_blank" rel="noreferrer">
              Google Scholar <ExternalArrow />
            </a>
          </div>
          <div className="mini-stats" aria-label="研究关键词">
            <div><strong>03</strong><span>Research themes</span></div>
            <div><strong>AI</strong><span>Agents &amp; systems</span></div>
            <div><strong>∞</strong><span>Curiosity</span></div>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img
              src="/profile.jpg"
              alt="李启哲的生活照"
              width="1296"
              height="1345"
            />
          </div>
          <div className="portrait-sticker sticker-top">
            <span>NOW</span>
            <strong>Exploring agents</strong>
          </div>
          <div className="portrait-sticker sticker-bottom">
            <span className="pulse" aria-hidden="true" />
            Open to collaboration
          </div>
          <span className="doodle doodle-one" aria-hidden="true">✦</span>
          <span className="doodle doodle-two" aria-hidden="true">✿</span>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-intro">
          <p className="section-kicker">01 · CURRENT RESEARCH</p>
          <h2>
            Questions I&apos;m
            <br />
            <em>thinking about</em>
          </h2>
          <p>
            从理解个体到服务复杂系统，我关注智能体如何在长期、开放且高要求的环境中工作。
          </p>
        </div>
        <div className="research-grid">
          {researchAreas.map((area, index) => (
            <article className={`research-card card-${index + 1}`} key={area.title}>
              <div className="card-top">
                <span className="research-icon" aria-hidden="true">{area.icon}</span>
                <span className="card-number">0{index + 1}</span>
              </div>
              <h3>{area.title}</h3>
              <p className="cn-title">{area.cn}</p>
              <p className="description">{area.description}</p>
              <div className="tag-list">
                {area.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section publications-section" id="publications">
        <div className="publication-shell">
          <div className="section-intro compact">
            <p className="section-kicker">02 · PUBLICATIONS</p>
            <h2>Published work</h2>
            <p>
              完整论文、引用数据与最新发表成果可在我的 Google Scholar 页面查看。
            </p>
            <a className="text-link" href={scholarUrl} target="_blank" rel="noreferrer">
              View all on Google Scholar <ExternalArrow />
            </a>
          </div>
          <a
            className="scholar-card"
            href={scholarUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="打开李启哲的 Google Scholar 主页"
          >
            <div className="scholar-orbit" aria-hidden="true">
              <span>G</span>
            </div>
            <div>
              <p>GOOGLE SCHOLAR PROFILE</p>
              <h3>论文列表与引用</h3>
              <span>scholar.google.com</span>
            </div>
            <ExternalArrow />
          </a>
        </div>
        <div className="publication-note">
          <span aria-hidden="true">✦</span>
          <p>
            论文卡片区域已准备好。下一步可根据你提供的代表作清单，添加论文标题、作者、
            venue、PDF、代码与项目主页。
          </p>
        </div>
      </section>

      <section className="section demos-section" id="demos">
        <div className="section-intro demo-intro">
          <p className="section-kicker">03 · RESEARCH DEMOS</p>
          <h2>
            Research,
            <br />
            <em>in motion</em>
          </h2>
          <p>用原型和视频展示研究如何从一个想法变成可体验、可验证的系统。</p>
        </div>
        <div className="demo-grid">
          {demos.map((demo) => (
            <article className={`demo-card demo-${demo.color}`} key={demo.label}>
              <div className="demo-visual">
                <div className="demo-ui">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="play" aria-hidden="true"><i /></div>
                <span className="coming-soon">VIDEO COMING SOON</span>
              </div>
              <div className="demo-copy">
                <p>{demo.label}</p>
                <h3>{demo.title}</h3>
                <span>{demo.cn}</span>
                <p className="description">{demo.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-flower" aria-hidden="true">✿</div>
        <p className="section-kicker">04 · LET&apos;S CONNECT</p>
        <h2>
          Curious minds create
          <br />
          <em>better futures.</em>
        </h2>
        <p>
          欢迎围绕智能体、通信 AI 与科研基础设施交流想法、合作研究或共同构建 Demo。
        </p>
        <div className="contact-actions">
          <a className="button dark" href={githubUrl} target="_blank" rel="noreferrer">
            Follow on GitHub <ExternalArrow />
          </a>
          <a className="button light" href={scholarUrl} target="_blank" rel="noreferrer">
            Google Scholar <ExternalArrow />
          </a>
        </div>
        <footer>
          <span>QIZHE LI · ACADEMIC PROFILE</span>
          <a href="#about">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
