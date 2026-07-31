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
            <ul className="profile-intro">
              <li>
                I am currently a CIE Ph.D. student at CUHK-Shenzhen, exploring
                AI for user experience in wireless communications.
              </li>
              <li>
                I enjoy exploring unfamiliar ideas and asking why things work
                the way they do.
              </li>
              <li>Outside research, I enjoy playing tennis and photography.</li>
              <li>
                I am always happy to connect, exchange ideas, and collaborate.
              </li>
            </ul>
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

      <footer>
        <div>
          <p>Qizhe Li</p>
          <span>AI for Wireless Networking</span>
        </div>
        <div className="footer-links">
          <a href={scholarUrl} target="_blank" rel="noreferrer">Scholar</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href="/publications/">Publications</a>
          <a href="/patents/">Patents</a>
        </div>
      </footer>
    </main>
  );
}
