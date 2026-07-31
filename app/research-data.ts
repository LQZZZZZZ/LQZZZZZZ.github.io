export type ResearchArea =
  | "AI for Networks"
  | "Uncertainty Quantification";

export type ResearchWork = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  area: ResearchArea;
  tag: string;
  abstract: string;
  scholar: string;
  paper: string;
  code?: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
};

export const scholarUrl =
  "https://scholar.google.com/citations?user=2XdjuasAAAAJ&hl=en";

export const researchWorks: ResearchWork[] = [
  {
    id: "qoe-reasoner",
    title:
      "QoEReasoner: An Agentic Reasoning Framework for Automated and Explainable QoE Diagnosis in RANs",
    authors: "Q. Li, H. Chen, S. Dai, Z. Li, Z. Hu, X. Li, G. Zhu, Q. Shi",
    venue: "arXiv preprint",
    year: 2026,
    area: "AI for Networks",
    tag: "Agentic diagnosis",
    abstract:
      "QoEReasoner is an end-to-end agentic system for explainable RAN diagnosis. Deterministic tools convert KPIs into evidence, a domain knowledge base constrains causal propagation, and a stateful planner coordinates anomaly detection and root localization.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:W7OEmFMy1HYC",
    paper: "https://arxiv.org/abs/2606.01925",
    image: "/research/qoe-reasoner-overview.png",
    imageAlt: "System overview of the QoEReasoner diagnostic framework",
    imageCaption: "System overview from the paper.",
  },
  {
    id: "dk-root",
    title:
      "DK-Root: A Joint Data-and-Knowledge-Driven Framework for Root Cause Analysis of QoE Degradations in Mobile Networks",
    authors:
      "Q. Li, H. Chen, J. Li, S. Chai, X. Li, Y. Hou, X. Shao, F. Li, K. Han, G. Zhu",
    venue: "IEEE Transactions on Networking",
    year: 2026,
    area: "AI for Networks",
    tag: "Root-cause analysis",
    abstract:
      "DK-Root combines weak operational rules with scarce expert labels for mobile-network QoE diagnosis. Contrastive pretraining mitigates rule noise, conditional diffusion supplies task-faithful augmentation, and expert-guided fine-tuning sharpens the final classifier.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:IjCSPb-OGe4C",
    paper: "https://doi.org/10.1109/TON.2026.3705395",
    code: "https://github.com/LQZZZZZZ/DK_Root",
    image: "/research/dk-root-overview.png",
    imageAlt: "Three-stage overview of the DK-Root framework",
    imageCaption: "Method overview from the paper.",
  },
  {
    id: "semi-root",
    title:
      "SemiRoot: A Semi-Supervised Deep Learning Framework for Root-Cause Analysis of QoE Degradations in Mobile Networks",
    authors: "Q. Li, H. Chen, S. Fu, Z. Zou, G. Zhu",
    venue: "IEEE ICC Workshops",
    year: 2026,
    area: "AI for Networks",
    tag: "Semi-supervised learning",
    abstract:
      "SemiRoot addresses label scarcity through a two-stage semi-supervised framework. Rule-guided contrastive learning structures the representation space before a small set of expert labels calibrates the decision boundaries.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:YsMSGLbcyi4C",
    paper: "https://doi.org/10.1109/ICCWorkshops63917.2026.11586658",
    image: "/research/semiroot-overview.png",
    imageAlt: "Overview of the two-stage SemiRoot framework",
    imageCaption: "Framework overview from the paper.",
  },
  {
    id: "s-ppr",
    title:
      "S-PPR: A Semantic-aware Personalized PageRank Framework for Academic Author Recommendation",
    authors: "Y. Li, Q. Li, Z. Miao",
    venue: "IEEE ACAI",
    year: 2025,
    area: "AI for Networks",
    tag: "Graph intelligence",
    abstract:
      "S-PPR augments Personalized PageRank with semantic information for academic collaborator discovery, combining co-authorship frequency with title-embedding similarity in graph transitions and personalization.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:Y0pCki6q_DkC",
    paper: "https://doi.org/10.1109/ACAI68217.2025.11406693",
    image: "/research/sppr-overview.png",
    imageAlt: "Overview of the semantic-aware Personalized PageRank pipeline",
    imageCaption: "Algorithm overview from the paper.",
  },
  {
    id: "rego",
    title:
      "An efficient global optimization algorithm combining revised expectation improvement criteria and Kriging",
    authors: "Z. Liu, H. Huang, X. Xu, M. Xiong, Q. Li",
    venue: "Engineering Optimization",
    year: 2024,
    area: "Uncertainty Quantification",
    tag: "Global optimization",
    abstract:
      "This work revises expected improvement to better balance exploration and exploitation in Kriging-based optimization. REGO uses sample-distribution information to avoid premature convergence while retaining efficient global search.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:d1gkVwhDpl0C",
    paper: "https://doi.org/10.1080/0305215X.2023.2170367",
    image: "/research/rego-method.png",
    imageAlt: "Method sketch showing the exploration and exploitation balance in REGO",
    imageCaption: "Editorial method sketch based on the paper.",
  },
  {
    id: "morris",
    title:
      "An enhanced framework for Morris by combining with a sequential sampling strategy",
    authors: "Q. Li, H. Huang, S. Xie, L. Chen, Z. Liu",
    venue: "International Journal for Uncertainty Quantification",
    year: 2023,
    area: "Uncertainty Quantification",
    tag: "Sensitivity analysis",
    abstract:
      "A sequential Morris framework reduces the cost of sample-based sensitivity analysis. Progressive Latin hypercube sampling preserves space-filling properties while an adaptive stopping rule avoids unnecessary model evaluations.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:u-x6o8ySG0sC",
    paper:
      "https://doi.org/10.1615/Int.J.UncertaintyQuantification.2022044335",
    image: "/research/morris-method.png",
    imageAlt: "Method sketch of progressive sampling and the Morris stopping criterion",
    imageCaption: "Editorial method sketch based on the paper.",
  },
  {
    id: "pc-kriging",
    title: "A data-driven PC-Kriging method considering correlated variables",
    authors: "Y. Li, Q. Li, H. Huang",
    venue:
      "International Conference on Algorithms, Computing and Artificial Intelligence",
    year: 2023,
    area: "Uncertainty Quantification",
    tag: "Surrogate modeling",
    abstract:
      "This paper develops a data-driven polynomial-chaos Kriging method for systems with correlated inputs. Adaptive Lasso selects a compact polynomial basis before it is embedded in a Kriging model.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:qjMakFHDy7sC",
    paper: "https://doi.org/10.1145/3644523.3644637",
    image: "/research/pc-kriging-method.png",
    imageAlt: "Method sketch of data-driven PC-Kriging with correlated inputs",
    imageCaption: "Editorial method sketch based on the paper.",
  },
  {
    id: "apce",
    title:
      "Data-Driven Global Sensitivity Analysis Using the Arbitrary Polynomial Chaos Expansion Model",
    authors: "Q. Li, H. Huang",
    venue: "IEEE International Conference on System Reliability and Safety",
    year: 2022,
    area: "Uncertainty Quantification",
    tag: "Global sensitivity",
    abstract:
      "A global sensitivity-analysis workflow is built on arbitrary polynomial chaos expansion for cases where input distributions are only partially known, extending Sobol analysis to more realistic data-limited settings.",
    scholar:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2XdjuasAAAAJ&citation_for_view=2XdjuasAAAAJ:9yKSN-GCB0IC",
    paper: "https://doi.org/10.1109/ICSRS56243.2022.10067257",
    image: "/research/apce-method.png",
    imageAlt: "Method sketch of arbitrary polynomial chaos expansion for sensitivity analysis",
    imageCaption: "Editorial method sketch based on the paper.",
  },
];
