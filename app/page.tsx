import ResearchTimeline from "./ResearchTimeline";
import SiteHeader from "./SiteHeader";
import { scholarUrl } from "./research-data";

const githubUrl = "https://github.com/LQZZZZZZ";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="profile-section" id="about">
        <div className="profile-primary">
          <div className="profile-copy">
            <p className="eyebrow">Academic profile</p>
            <h1>Qizhe Li</h1>
            <p className="role-line">
              Ph.D. Student in Computer and Information Engineering
            </p>
            <p className="lead">
              I am currently a CIE Ph.D. student at CUHK-Shenzhen, mainly
              exploring AI for user experience in wireless communications. I
              am also the kind of Ph.D. student who occasionally dreams of
              doing absolutely nothing. Collaborations and conversations are
              always welcome.
            </p>
            <div className="profile-links">
              <a href={scholarUrl} target="_blank" rel="noreferrer">
                Google Scholar <Arrow />
              </a>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
              <a href="mailto:qizheli@link.cuhk.edu.cn">
                qizheli@link.cuhk.edu.cn <Arrow />
              </a>
            </div>
          </div>
          <figure className="profile-photo">
            <img src="/profile.jpg" alt="Qizhe Li" width="1296" height="1345" />
            <figcaption>CUHK-Shenzhen · since 2024</figcaption>
          </figure>
        </div>

        <div className="profile-history" aria-label="Education and experience">
          <div className="history-label">
            <p className="eyebrow">Background</p>
            <p>A path from mathematics and uncertainty to intelligent network systems.</p>
          </div>
          <ol>
            <li>
              <span className="institution-logo">
                <img
                  src="https://www.cuhk.edu.cn/sites/webmaster.prod1.dpsite04.cuhk.edu.cn/files/zh-hans_logo.png"
                  alt=""
                />
              </span>
              <time>2024 — Present</time>
              <div>
                <strong>Ph.D., Computer and Information Engineering</strong>
                <span>The Chinese University of Hong Kong, Shenzhen</span>
              </div>
            </li>
            <li>
              <span className="institution-logo institution-logo-sribd">
                <img
                  src="https://www.sribd.cn/sites/default/files/styles/crop_freeform/public/2020-12/%E7%BD%91%E7%AB%99logo%E7%99%BD%E5%AD%97.png?itok=arFa1TrK"
                  alt=""
                />
              </span>
              <time>Since 2024</time>
              <div>
                <strong>Visiting Student</strong>
                <span>Shenzhen Research Institute of Big Data</span>
              </div>
            </li>
            <li>
              <span className="institution-logo">
                <img
                  src="https://commons.wikimedia.org/wiki/Special:Redirect/file/ICBC%20China%20logo.svg"
                  alt=""
                />
              </span>
              <time>2023 — 2024</time>
              <div>
                <strong>Financial Technology Manager</strong>
                <span>ICBC Software Development Center, Guangzhou</span>
              </div>
            </li>
            <li>
              <span className="institution-logo">
                <img
                  src="https://cdn.urongda.com/images/normal/medium/sun-yat-sen-university-logo-1024px.png"
                  alt=""
                />
              </span>
              <time>2020 — 2023</time>
              <div>
                <strong>M.Sc., Mathematics</strong>
                <span>Sun Yat-sen University</span>
              </div>
            </li>
            <li>
              <span className="institution-logo">
                <img
                  src="https://www.ecjtu.edu.cn/images/20/06/06/1mjdfx5pym/xiaohui20210811.png"
                  alt=""
                />
              </span>
              <time>2015 — 2019</time>
              <div>
                <strong>B.Sc., Information and Computing Science</strong>
                <span>East China Jiaotong University</span>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-heading">
          <p className="eyebrow">Research threads</p>
          <h2>Two questions, one evolving trajectory</h2>
          <p>
            The two directions are connected by a common concern: how to learn
            reliably when data, labels, and prior knowledge are incomplete.
          </p>
        </div>
        <div className="research-threads">
          <article>
            <div className="thread-index">
              <span>01</span>
              <small>Current</small>
            </div>
            <div>
              <h3>AI for Networks</h3>
              <p>
                Label-efficient, knowledge-guided, and agentic methods for
                accurate and explainable diagnosis in operational mobile
                networks.
              </p>
              <ul>
                <li>QoE diagnosis</li>
                <li>Agentic reasoning</li>
                <li>Data + knowledge</li>
              </ul>
            </div>
          </article>
          <article>
            <div className="thread-index">
              <span>02</span>
              <small>Foundation</small>
            </div>
            <div>
              <h3>Uncertainty Quantification</h3>
              <p>
                Data-driven surrogate modeling, global sensitivity analysis,
                and efficient optimization for engineered systems with limited
                or correlated observations.
              </p>
              <ul>
                <li>Surrogate modeling</li>
                <li>Sensitivity analysis</li>
                <li>Global optimization</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section timeline-section" id="timeline">
        <div className="timeline-heading">
          <div className="section-heading">
            <p className="eyebrow">Research timeline</p>
            <h2>Work in reverse chronological order</h2>
            <p>
              Drag the timeline to move through the work. Overview figures are
              reproduced from the corresponding papers when source assets are
              available.
            </p>
          </div>
          <a href={scholarUrl} target="_blank" rel="noreferrer">
            Full publication record <Arrow />
          </a>
        </div>
        <ResearchTimeline />
      </section>

      <section className="everything-teaser">
        <p className="eyebrow">Beyond formal publications</p>
        <div>
          <h2>Everything is Research</h2>
          <p>
            Small systems and side questions: an automated literature agent,
            video-based tennis movement research, and other experiments that do
            not belong in the publication timeline.
          </p>
          <a href="/everything/">
            Open the project notebook <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer>
        <div>
          <p>Qizhe Li</p>
          <span>AI for Wireless Networking</span>
        </div>
        <div className="footer-links">
          <a href={scholarUrl} target="_blank" rel="noreferrer">Scholar</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href="#about">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
