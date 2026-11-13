import { newsItems, type NewsItem } from "./news-data";
import ResearchTimeline from "./ResearchTimeline";
import ContactCard from "./ContactCard";
import "./home.css";

const experience = [
  {
    period: "2015–2019",
    institution: "East China Jiaotong University",
    label: "ECJTU",
    role: "B.Sc. · Information & Computing Science",
    logo: "/institutions/east-china-jiaotong-university.png",
    logoClass: "",
  },
  {
    period: "2020–2023",
    institution: "Sun Yat-sen University",
    label: "Sun Yat-sen University",
    role: "M.Sc. · Mathematics",
    logo: "/institutions/sun-yat-sen-university.png",
    logoClass: "",
  },
  {
    period: "2023–2024",
    institution: "ICBC Software Development Center, Guangzhou",
    label: "ICBC · Guangzhou",
    role: "Financial Technology Manager",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/ICBC_China_logo.svg",
    logoClass: "experience-logo-icbc",
  },
  {
    period: "2024–Present",
    institution: "The Chinese University of Hong Kong, Shenzhen",
    label: "CUHK-Shenzhen",
    role: "Ph.D. · Computer & Information Engineering",
    logo: "/institutions/cuhk-shenzhen.png",
    logoClass: "experience-logo-cuhk",
  },
  {
    period: "Since 2024",
    institution: "Shenzhen Research Institute of Big Data",
    label: "SRIBD",
    role: "Joint Ph.D. Training · SRIBD & SICIAM",
    logo: "/institutions/sribd.png",
    logoClass: "experience-logo-sribd",
  },
  {
    period: "Nov. 2026–Present",
    institution: "Huawei",
    label: "Huawei",
    role: "Intern",
    logo: "/institutions/huawei.svg",
    logoClass: "experience-logo-huawei",
  },
];

function NewsEmphasis({ text }: { text: string }) {
  return text.split(/(QoEReasoner|DK-Root|SemiRoot|First Prize|passed Phase 1|IEEE INFOCOM|AAAI|accepted(?: for publication)?|granted)/g)
    .map((part, index) => index % 2 ? <strong key={index}>{part}</strong> : part);
}

function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="home-news-list">
      {items.map((item) => (
        <li key={item.id}>
          <time dateTime={item.month}>{item.month.replace("-", ".")}</time>
          <span>{" "}{item.id.endsWith("accepted") ? "🎉 " : ""}<NewsEmphasis text={item.summary} />
            {item.title && <> <span className="news-paper-title">“<NewsEmphasis text={item.title} />”</span></>}
            {item.detail && <>{item.detail === "." ? "" : " "}<NewsEmphasis text={item.detail} /></>}
            {item.link && <> <a href={item.link.href} target="_blank" rel="noreferrer">[{item.link.label}]</a></>}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <h1 className="visually-hidden">Qizhe Li — Academic Homepage</h1>
      <section className="home-about" id="about" aria-label="About me">
        <dl className="home-intro">
          <div className="intro-row">
            <dt><span aria-hidden="true">🎓</span> Education:</dt>
            <dd>
              <p>I am a Ph.D. student in Computer and Information Engineering at The Chinese University of Hong Kong,
                Shenzhen, advised by <a href="https://sites.google.com/view/guangxuzhu/home" target="_blank" rel="noreferrer">Prof. Guangxu Zhu</a>.{' '}
                My Ph.D. training is jointly provided by CUHK-Shenzhen, the Shenzhen Research Institute of Big Data (SRIBD),
                and the Shenzhen International Center for Industrial and Applied Mathematics (SICIAM).</p>
            </dd>
          </div>
          <div className="intro-row">
            <dt><span aria-hidden="true">🔬</span> Research:</dt>
            <dd>
              <p>I work on <span className="intro-keyword">intelligent networks and AI-RAN</span>, exploring how machine learning,{' '}
                <span className="intro-keyword">large language models and agents</span> can advance wireless network intelligence.{' '}
                My earlier work focused on uncertainty quantification, sensitivity analysis, and surrogate-based optimization.
                I also review for communications conferences and journals. <a href="#awards">Service details →</a></p>
            </dd>
          </div>
          <div className="intro-row">
            <dt><span aria-hidden="true">🎾</span> Beyond Research:</dt>
            <dd><p>Outside research, I enjoy playing tennis and photography.</p></dd>
          </div>
          <div className="intro-row">
            <dt><span aria-hidden="true">🤝</span> Contact:</dt>
            <dd><p>I am happy to connect, exchange ideas, and collaborate on intelligent networks and AI-driven systems.{' '}
              <a className="intro-contact" href="#contact">Get in touch <span aria-hidden="true">→</span></a></p></dd>
          </div>
        </dl>
      </section>

      <section className="home-section" id="news" aria-labelledby="news-title">
        <h2 id="news-title">🔥 News</h2>
        <NewsList items={newsItems} />
      </section>

      <section className="home-section home-publications" id="publications" aria-labelledby="publications-title">
        <div className="section-title-row">
          <h2 id="publications-title">📝 Publications</h2>
          <a href="/publications/">All publications →</a>
        </div>
        <ResearchTimeline />
      </section>

      <section className="home-section" id="education" aria-labelledby="education-title">
        <h2 id="education-title">🎓 Education &amp; Experience</h2>
        <ol className="experience-list">
          {[...experience].reverse().map((item) => (
            <li key={item.institution}>
              <div className={`experience-logo ${item.logoClass}`}><img src={item.logo} alt="" loading="lazy" /></div>
              <div><h3>{item.institution}</h3><p>{item.role}</p></div>
              <time>{item.period}</time>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-section" id="awards" aria-labelledby="awards-title">
        <h2 id="awards-title">🏅 Service &amp; Honors</h2>
        <div className="service-honors-group">
          <h3>Academic Service</h3>
          <dl className="reviewing-details">
            <div><dt>Conference Reviewer</dt><dd><ul>
              <li>IEEE WCNC 2024</li>
              <li>IEEE PIMRC 2025</li>
              <li>IEEE ICC 2026</li>
            </ul></dd></div>
            <div><dt>Journal Reviewer</dt><dd><ul>
              <li>Journal of Nanjing University of Posts and Telecommunications</li>
              <li>Journal of Electronics &amp; Information Technology</li>
              <li>IEEE Journal on Selected Areas in Communications (JSAC) — 2026 special issue on agentic AI</li>
            </ul></dd></div>
          </dl>
        </div>
        <div className="service-honors-group">
          <h3>Honors &amp; Awards</h3>
        <ul className="awards-list">
          <li><strong>Ph.D. Scholarship (Gold Award)</strong>, Shenzhen Research Institute of Big Data</li>
          <li><strong>First Prize</strong>, 2026 Greater Bay Area Graduate Research Forum <span className="award-year">(Oct. 2026)</span></li>
          <li><strong>First-Class Graduate Scholarship</strong>, Sun Yat-sen University <span className="award-year">(2021–2023, consecutive academic years)</span></li>
          <li><strong>Xu Zhongwei Scholarship</strong>, Sun Yat-sen University</li>
          <li><strong>Third Prize, Graduate Division</strong>, 12th MathorCup University Mathematical Modeling Challenge</li>
          <li><strong>Second Prize</strong>, 2nd National College Mathematics Ability Challenge</li>
        </ul>
        </div>
      </section>

      <ContactCard />

      <details className="research-taste">
        <summary>Research Taste</summary>
        <p>Which problems are merely technically feasible—and which ones truly matter?</p>
        <p>Which incremental change actually alters the nature of the problem?</p>
        <p>Which question could allow a reviewer to puncture the whole argument?</p>
        <p>So what? · Why now? · Why is the existing solution insufficient? · What changes after your method succeeds?</p>
      </details>
      <footer><span>© 2026 Qizhe Li</span><a href="/interesting/">Something Interesting →</a></footer>
    </main>
  );
}
