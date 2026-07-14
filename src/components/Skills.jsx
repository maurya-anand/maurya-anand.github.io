import React from "react";
import {
  FaTools,
  FaProjectDiagram,
  FaServer,
  FaCloud,
  FaDatabase,
  FaCode,
  FaPython,
  FaDocker,
  FaReact,
  FaCogs,
  FaCodeBranch,
  FaGlobe,
  FaTerminal,
  FaBoxOpen,
  FaLock,
  FaBolt,
  FaFlask,
  FaJenkins,
  FaGitAlt,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaMarkdown,
  FaConfluence,
  FaRProject,
  FaChartBar,
  FaChartLine,
  FaBook,
  FaBug,
  FaBox,
  FaNetworkWired,
  FaRocket,
} from "react-icons/fa";
import { GiDna1, GiAtom } from "react-icons/gi";
import "./Skills.css";

const skillsData = [
  {
    category: "Bioinformatics",
    skills: [
      "Short-read (Illumina) & long-read (PacBio, ONT) data analysis (WGS, WES, RNA-seq)",
      "Pipeline development and automation",
      "Germline/Somatic Variant Calling",
    ],
    icon: <GiAtom />,
  },
  {
    category: "Programming Languages",
    skills: ["Python", "R", "Bash", "JavaScript", "SQL", "Perl"],
    icon: <FaTerminal />,
  },
  {
    category: "Workflow Management",
    skills: ["Nextflow", "WDL", "Make"],
    icon: <FaCogs />,
  },
  {
    category: "Containerization & Package Management",
    skills: ["Docker", "Apptainer", "Mamba", "Conda", "UV", "Pip"],
    icon: <FaDocker />,
  },
  {
    category: "Cloud, TRE & HPC Platforms",
    skills: ["GCP", "Terra.bio", "Verily Workbench", "SLURM", "PBS"],
    icon: <FaServer />,
  },
  {
    category: "Version Control & CI/CD",
    skills: ["Git", "GitHub Actions", "Jenkins", "SVN"],
    icon: <FaCodeBranch />,
  },
  {
    category: "Web Development",
    skills: [
      "React",
      "Django",
      "Django Rest Framework",
      "D3.js",
      "Plotly",
      "HighCharts",
      "Bootstrap",
    ],
    icon: <FaGlobe />,
  },
  {
    category: "Project Management & Documentation",
    skills: ["GitHub Projects", "Confluence", "Quarto", "Markdown", "Redmine"],
    icon: <FaProjectDiagram />,
  },
];

const skillIcons = {
  "Short-read (Illumina) & long-read (PacBio, ONT) data analysis (WGS, WES, RNA-seq)": <GiDna1 />,
  "Germline/Somatic Variant Calling": <FaChartLine />,
  "Pipeline development and automation": <FaRocket />,

  Make: <FaTools />,
  Nextflow: <FaProjectDiagram />,
  WDL: <FaCode />,

  Bootstrap: <FaBootstrap />,
  "D3.js": <FaChartBar />,
  Django: <FaPython />,
  "Django Rest Framework": <FaCode />,
  HighCharts: <FaChartBar />,
  jQuery: <FaCode />,
  Plotly: <FaChartBar />,
  React: <FaReact />,

  Bash: <FaTerminal />,
  JavaScript: <FaJs />,
  Perl: <FaCode />,
  Python: <FaPython />,
  R: <FaRProject />,
  SQL: <FaDatabase />,

  Confluence: <FaConfluence />,
  "GitHub Projects": <FaGithub />,
  Markdown: <FaMarkdown />,
  Quarto: <FaBook />,
  Redmine: <FaBug />,

  Docker: <FaDocker />,
  Apptainer: <FaBoxOpen />,
  Mamba: <FaBox />,
  Conda: <FaBox />,
  UV: <FaBolt />,
  Pip: <FaBox />,

  GCP: <FaCloud />,
  "Terra.bio": <FaGlobe />,
  "Verily Workbench": <FaFlask />,
  TRE: <FaLock />,
  PBS: <FaServer />,
  SLURM: <FaNetworkWired />,

  Git: <FaGitAlt />,
  SVN: <FaCodeBranch />,
  "GitHub Actions": <FaGithub />,
  Jenkins: <FaJenkins />,
};

const Skills = () => (
  <section className="section-container">
    <h2 className="centered-header">Skills</h2>
    <div className="skills-list">
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category card">
          <div className="category-header">
            <div className="category-icon">{category.icon}</div>
            <h3>{category.category}</h3>
          </div>
          <div className="skills-tags">
            {category.skills.map((skill, idx) => {
              const icon = skillIcons[skill];
              return (
                <span
                  key={idx}
                  className={`skill-tag${icon ? " skill-tag--with-icon" : ""}`}
                >
                  {icon && <span className="skill-icon">{icon}</span>}
                  <span>{skill}</span>
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
