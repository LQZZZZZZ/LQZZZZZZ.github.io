import VisitorCounter from "./VisitorCounter";

const scholarUrl =
  "https://scholar.google.com/citations?user=2XdjuasAAAAJ&hl=zh-CN";
const githubUrl = "https://github.com/LQZZZZZZ";

type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  scholar: string;
  paper: string;
  code?: string;
  tag: string;
};

const uncertaintyPapers: Paper[] = [
  {
    title:
      "An efficient global optimization algorithm combining revised expectation improvement criteria and Kriging",
    authors: "Z. Liu, H. Huang, X. Xu, M. Xiong, Q. Li",
    venue: "Engineering Optimization",
    year: "2024",
    tag: "Global optimization",
    abstract:
      "This work revises the expected-improvement criterion to better balance exploration and exploitation in Kriging-based optimization. The resulting REGO algorithm uses sample-distribution information to avoid premature convergence and demonstrates robust global-search performance on numerical problems and an airfoil design case.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:d1gkVwhDpl0C",
    paper: "https://doi.org/10.1080/0305215X.2023.2170367",
  },
  {
    title:
      "An enhanced framework for Morris by combining with a sequential sampling strategy",
    authors: "Q. Li, H. Huang, S. Xie, L. Chen, Z. Liu",
    venue: "International Journal for Uncertainty Quantification",
    year: "2023",
    tag: "Sensitivity analysis",
    abstract:
      "A sequential Morris framework is introduced to reduce the cost of sample-based sensitivity analysis. Progressive Latin hypercube sampling preserves space-filling properties as new starting points are added, while an adaptive stopping rule avoids unnecessary model evaluations.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:u-x6o8ySG0sC",
    paper: "https://doi.org/10.1615/Int.J.UncertaintyQuantification.2022044335",
  },
  {
    title: "A data-driven PC-Kriging method considering correlated variables",
    authors: "Y. Li, Q. Li, H. Huang",
    venue: "International Conference on Algorithms, Computing and Artificial Intelligence",
    year: "2023",
    tag: "Surrogate modeling",
    abstract:
      "This paper develops a data-driven polynomial-chaos Kriging method for systems with correlated inputs. Adaptive Lasso selects a compact polynomial basis before it is embedded in a Kriging model, improving global approximation accuracy and sample efficiency across changing correlation structures.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:qjMakFHDy7sC",
    paper: "https://doi.org/10.1145/3644523.3644637",
  },
  {
    title:
      "Data-Driven Global Sensitivity Analysis Using the Arbitrary Polynomial Chaos Expansion Model",
    authors: "Q. Li, H. Huang",
    venue: "IEEE International Conference on System Reliability and Safety",
    year: "2022",
    tag: "Global sensitivity",
    abstract:
      "A global sensitivity-analysis workflow is built on arbitrary polynomial chaos expansion for cases where input distributions are only partially known. Sobol indices are estimated through the learned surrogate and Monte Carlo sampling, extending sensitivity analysis to more realistic data-limited settings.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:9yKSN-GCB0IC",
    paper: "https://doi.org/10.1109/ICSRS56243.2022.10067257",
  },
];

const networkPapers: Paper[] = [
  {
    title:
      "DK-Root: A Joint Data-and-Knowledge-Driven Framework for Root Cause Analysis of QoE Degradations in Mobile Networks",
    authors:
      "Q. Li, H. Chen, J. Li, S. Chai, X. Li, Y. Hou, X. Shao, F. Li, K. Han, G. Zhu",
    venue: "IEEE Transactions on Networking",
    year: "2026",
    tag: "Root-cause analysis",
    abstract:
      "DK-Root combines weak operational rules with scarce expert labels for mobile-network QoE diagnosis. Contrastive pretraining mitigates rule noise, class-conditional diffusion supplies task-faithful augmentation, and expert-guided fine-tuning achieves strong results on real operator data with substantially fewer annotations.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:IjCSPb-OGe4C",
    paper: "https://doi.org/10.1109/TON.2026.3705395",
    code: "https://github.com/LQZZZZZZ/DK_Root",
  },
  {
    title:
      "QoEReasoner: An Agentic Reasoning Framework for Automated and Explainable QoE Diagnosis in RANs",
    authors: "Q. Li, H. Chen, S. Dai, Z. Li, Z. Hu, X. Li, G. Zhu, Q. Shi",
    venue: "arXiv preprint",
    year: "2026",
    tag: "Agentic diagnosis",
    abstract:
      "QoEReasoner is an end-to-end agentic system for explainable RAN diagnosis. Deterministic tools convert KPIs into evidence, a domain knowledge base constrains causal propagation, and a stateful planner coordinates anomaly detection and root localization, improving accuracy while reducing diagnostic time.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:W7OEmFMy1HYC",
    paper: "https://arxiv.org/abs/2606.01925",
  },
  {
    title:
      "SemiRoot: A Semi-Supervised Deep Learning Framework for Root-Cause Analysis of QoE Degradations in Mobile Networks",
    authors: "Q. Li, H. Chen, S. Fu, Z. Zou, G. Zhu",
    venue: "IEEE ICC Workshops",
    year: "2026",
    tag: "Semi-supervised learning",
    abstract:
      "SemiRoot addresses label scarcity in mobile-network diagnosis through a two-stage semi-supervised framework. Rule-guided contrastive learning first structures the representation space, after which a small set of expert labels calibrates decision boundaries for label-efficient root-cause analysis.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:YsMSGLbcyi4C",
    paper: "https://doi.org/10.1109/ICCWorkshops63917.2026.11586658",
  },
  {
    title:
      "S-PPR: A Semantic-aware Personalized PageRank Framework for Academic Author Recommendation",
    authors: "Y. Li, Q. Li, Z. Miao",
    venue: "IEEE ACAI",
    year: "2025",
    tag: "Graph intelligence",
    abstract:
      "S-PPR augments Personalized PageRank with semantic information for academic collaborator discovery. It combines co-authorship frequency with title-embedding similarity in both teleportation and graph transitions, producing recommendations that better align with a researcher's interests.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:Y0pCki6q_DkC",
    paper: "https://doi.org/10.1109/ACAI68217.2025.11406693",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function PaperCard({ paper }: { paper: Paper }) {
  return (
    <article className="paper-card">
      <div className="paper-meta">
        <span>{paper.year}</span>
        <span>{paper.tag}</span>
      </div>
      <h3>{paper.title}</h3>
      <p className="authors">{paper.authors}</p>
      <p className="venue">{paper.venue}</p>
      <div className="abstract">
        <span>Abstract</span>
        <p>{paper.abstract}</p>
      </div>
      <div className="paper-links">
        <a href={paper.scholar} target="_blank" rel="noreferrer">
          Google Scholar <Arrow />
        </a>
        <a href={paper.paper} target="_blank" rel="noreferrer">
          Paper <Arrow />
        </a>
        {paper.code && (
          <a className="code-link" href={paper.code} target="_blank" rel="noreferrer">
            Open-source code <Arrow />
          </a>
        )}
      </div>
    </article>
  );
}

function PublicationGroup({
  index,
  title,
  description,
  papers,
}: {
  index: string;
  title: string;
  description: string;
  papers: Paper[];
}) {
  return (
    <div className="publication-group">
      <div className="group-heading">
        <p>{index}</p>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <span>{papers.length} papers</span>
      </div>
      <div className="paper-grid">
        {papers.map((paper) => (
          <PaperCard key={paper.title} paper={paper} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#about" aria-label="Qizhe Li homepage">
          Qizhe Li
        </a>
        <nav className="tabs" aria-label="Page navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#background">Background</a>
        </nav>
        <VisitorCounter />
      </header>

      <section className="hero" id="about">
        <div className="hero-copy">
          <p className="eyebrow">ACADEMIC PROFILE</p>
          <h1>Qizhe Li</h1>
          <p className="role-line">
            Ph.D. Student in Computer and Information Engineering
          </p>
          <p className="lead">
            I study how reliable learning and reasoning can help us understand
            complex systems.
          </p>
          <p className="bio">
            My research sits at the intersection of trustworthy learning and
            intelligent networks. I began with uncertainty quantification,
            surrogate modeling, and global sensitivity analysis; I now build
            data-, knowledge-, and agent-driven methods for diagnosing complex
            mobile networks.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#publications">
              Explore publications
            </a>
            <a className="button secondary" href={scholarUrl} target="_blank" rel="noreferrer">
              Google Scholar <Arrow />
            </a>
            <a className="text-button" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
          </div>
        </div>
        <div className="portrait-column">
          <div className="portrait">
            <img src="/profile.jpg" alt="Qizhe Li" width="1296" height="1345" />
          </div>
          <p>Ph.D. Student · CUHK-Shenzhen</p>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-heading">
          <p className="eyebrow">RESEARCH</p>
          <h2>Two connected research directions</h2>
          <p>
            From characterizing uncertainty in engineered systems to building
            reliable intelligence for real-world communication networks.
          </p>
        </div>
        <div className="focus-grid">
          <article className="focus-card">
            <span>01</span>
            <h3>Uncertainty Quantification</h3>
            <p>
              Data-driven surrogate models, global sensitivity analysis, and
              efficient optimization for complex systems with limited or
              correlated observations.
            </p>
            <div>
              <span>Surrogate modeling</span>
              <span>Sensitivity analysis</span>
              <span>Global optimization</span>
            </div>
          </article>
          <article className="focus-card lavender">
            <span>02</span>
            <h3>AI for Networks</h3>
            <p>
              Label-efficient, knowledge-guided, and agentic methods that make
              mobile-network diagnosis more accurate, explainable, and useful
              in operation.
            </p>
            <div>
              <span>QoE diagnosis</span>
              <span>Agentic reasoning</span>
              <span>Data + knowledge</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section publications-section" id="publications">
        <div className="section-heading publication-heading">
          <div>
            <p className="eyebrow">SELECTED PUBLICATIONS</p>
            <h2>Research, organized by field</h2>
          </div>
          <a href={scholarUrl} target="_blank" rel="noreferrer">
            Complete profile on Google Scholar <Arrow />
          </a>
        </div>
        <PublicationGroup
          index="01"
          title="Uncertainty Quantification"
          description="Efficient models and analyses for uncertainty, sensitivity, and optimization."
          papers={uncertaintyPapers}
        />
        <PublicationGroup
          index="02"
          title="AI for Networks"
          description="Learning and reasoning systems for explainable network intelligence."
          papers={networkPapers}
        />
      </section>

      <section className="section open-section">
        <div>
          <p className="eyebrow">OPEN RESEARCH</p>
          <h2>DK-Root is available on GitHub.</h2>
          <p>
            The public repository contains the implementation of our joint
            data-and-knowledge-driven framework for mobile-network QoE
            root-cause analysis.
          </p>
        </div>
        <a
          className="button primary"
          href="https://github.com/LQZZZZZZ/DK_Root"
          target="_blank"
          rel="noreferrer"
        >
          View source code <Arrow />
        </a>
      </section>

      <section className="section background-section" id="background">
        <div className="section-heading">
          <p className="eyebrow">BACKGROUND</p>
          <h2>Education &amp; experience</h2>
        </div>
        <div className="timeline">
          <article>
            <span>2024 — Present</span>
            <div>
              <h3>Ph.D. in Computer and Information Engineering</h3>
              <p>The Chinese University of Hong Kong, Shenzhen</p>
            </div>
          </article>
          <article>
            <span>2023 — 2024</span>
            <div>
              <h3>Financial Technology Manager</h3>
              <p>ICBC Software Development Center, Guangzhou</p>
            </div>
          </article>
          <article>
            <span>2020 — 2023</span>
            <div>
              <h3>M.Sc. in Mathematics</h3>
              <p>Sun Yat-sen University</p>
            </div>
          </article>
          <article>
            <span>2015 — 2019</span>
            <div>
              <h3>B.Sc. in Information and Computing Science</h3>
              <p>East China Jiaotong University</p>
            </div>
          </article>
        </div>
      </section>

      <footer>
        <div>
          <p>Qizhe Li</p>
          <span>Trustworthy learning · Intelligent networks</span>
        </div>
        <div className="footer-links">
          <a href={scholarUrl} target="_blank" rel="noreferrer">
            Scholar
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#about">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
