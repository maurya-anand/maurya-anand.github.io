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
} from "react-icons/fa";
import {
  SiGnu,
  SiGnubash,
  SiJavascript,
  SiPerl,
  SiR,
  SiMysql,
  SiDjango,
  SiBootstrap,
  SiD3Dotjs,
  SiJquery,
  SiPlotly,
  SiChartdotjs,
  SiConfluence,
  SiGithub,
  SiMarkdown,
  SiRedmine,
  SiAnaconda,
  SiPypi,
  SiGithubactions,
  SiJenkins,
  SiGit,
  SiSubversion,
  SiGooglecloud,
} from "react-icons/si";
import { PiBracketsCurlyBold, PiNotebook } from "react-icons/pi";
import { GiDna1, GiAtom } from "react-icons/gi";
import { BiLineChart } from "react-icons/bi";
import {
  TbTopologyComplex,
  TbServerBolt,
  TbTopologyStar,
  TbRocket,
} from "react-icons/tb";
import "./Skills.css";

const skillsData = [
  {
    category: "Bioinformatics",
    skills: [
      "Short-read (Illumina) & long-read (PacBio, ONT) data analysis (WGS, WES, RNA-seq)",
      "Germline/Somatic Variant Calling",
      "Pipeline development and automation",
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
  "Germline/Somatic Variant Calling": <BiLineChart />,
  "Pipeline development and automation": <TbRocket />,

  Make: <SiGnu />,
  Nextflow: <TbTopologyComplex />,
  WDL: <PiBracketsCurlyBold />,

  Bootstrap: <SiBootstrap />,
  "D3.js": <SiD3Dotjs />,
  Django: <SiDjango />,
  "Django Rest Framework": <SiDjango />,
  HighCharts: <SiChartdotjs />,
  jQuery: <SiJquery />,
  "Perl CGI": <SiPerl />,
  Plotly: <SiPlotly />,
  React: <FaReact />,

  Bash: <SiGnubash />,
  JavaScript: <SiJavascript />,
  Perl: <SiPerl />,
  Python: <FaPython />,
  R: <SiR />,
  SQL: <SiMysql />,

  Confluence: <SiConfluence />,
  "GitHub Projects": <SiGithub />,
  Markdown: <SiMarkdown />,
  Quarto: <PiNotebook />,
  Redmine: <SiRedmine />,

  Docker: <FaDocker />,
  Apptainer: <FaBoxOpen />,
  Mamba: <SiAnaconda />,
  Conda: <SiAnaconda />,
  UV: <FaBolt />,
  Pip: <SiPypi />,

  GCP: <SiGooglecloud />,
  "Terra.bio": <FaGlobe />,
  "Verily Workbench": <FaFlask />,
  TRE: <FaLock />,
  PBS: <TbServerBolt />,
  SLURM: <TbTopologyStar />,

  Git: <SiGit />,
  SVN: <SiSubversion />,
  "GitHub Actions": <SiGithubactions />,
  Jenkins: <SiJenkins />,
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
