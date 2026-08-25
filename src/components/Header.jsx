import { FaEnvelope, FaLinkedin, FaGithub, FaOrcid } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import "./Header.css";

const Header = () => (
  <header className="header card">
    <div className="header-main">
      <h1 className="header-name">Anand Maurya</h1>
      <span className="header-title">Bioinformatics Scientist</span>
      <p className="header-summary">
        I work at the{" "}
        <a
          href="https://uol.de/anand-maurya"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Oldenburg
        </a>
        's Core Facility Genomics and Bioinformatics, where I lead
        bioinformatics operations, including building and
        maintaining pipelines for long-read and short-read NGS data. I also
        work as a bioinformatician at{" "}
        <a
          href="https://www.klinikum-oldenburg.de/genetik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klinikum Oldenburg
        </a>
        's University Institute of Medical Genetics, where I contribute to
        the development and maintenance of the
        clinical genomics platform used in clinical variant interpretation.
      </p>
      <p className="header-summary">
        Before Oldenburg, I was at the{" "}
        <a
          href="https://www.imcm.ox.ac.uk/about/team/anand-maurya"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Oxford
        </a>
        's Oxford-GSK Institute for Molecular and Computational Medicine. I
        led pipeline development for the group's cloud-based research
        platform. The work covered
        long-read variant calling, proteomic machine learning workflows, and
        clinical-grade whole-genome analysis, in support of neurodegenerative
        disease research.
      </p>
      <p className="header-summary">
        As a Research Scholar at Adam Mickiewicz University in Poznań, my research
        was on non-coding RNAs. I built a pipeline for automated exploration
        of NCBI Sequence Read Archive datasets using nucleotide sequences as
        queries. I also built full-stack web applications for exploring
        snoRNA and tRNA expression data.
      </p>
      <p className="header-summary">
        Earlier, in Bangalore, India, I worked in clinical cancer genomics
        diagnostics. I built the variant annotation and neoepitope
        prioritization pipelines used across the lab's clinical reporting
        workflow.
      </p>
    </div>
    <div className="header-contact">
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <a
          href="mailto:anandmaurya@hotmail.com"
          className="has-tooltip"
          data-tooltip="Email"
        >
          anandmaurya@hotmail.com
        </a>
      </div>
      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a
          href="https://www.linkedin.com/in/anand-maurya-"
          target="_blank"
          rel="noopener noreferrer"
          className="has-tooltip"
          data-tooltip="LinkedIn"
        >
          anand-maurya-
        </a>
      </div>
      <div className="contact-item">
        <FaGithub className="contact-icon" />
        <div className="github-links">
          <a
            href="https://github.com/maurya-anand"
            target="_blank"
            rel="noopener noreferrer"
            className="has-tooltip"
            data-tooltip="GitHub"
          >
            maurya-anand
          </a>
          <span>/</span>
          <a
            href="https://github.com/anand-imcm"
            target="_blank"
            rel="noopener noreferrer"
            className="has-tooltip"
            data-tooltip="GitHub"
          >
            anand-imcm
          </a>
        </div>
      </div>
      <div className="contact-item">
        <FaOrcid className="contact-icon" />
        <a
          href="https://orcid.org/0000-0002-6204-2164"
          target="_blank"
          rel="noopener noreferrer"
          className="has-tooltip"
          data-tooltip="ORCID"
        >
          orcid.org/0000-0002-6204-2164
        </a>
      </div>
      <div className="contact-item">
        <SiGooglescholar className="contact-icon" />
        <a
          href="https://scholar.google.com/citations?hl=en&user=mZBdRukAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="has-tooltip"
          data-tooltip="Google Scholar"
        >
          scholar.google.com
        </a>
      </div>
    </div>
  </header>
);

export default Header;
