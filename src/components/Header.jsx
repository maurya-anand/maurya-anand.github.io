import { FaEnvelope, FaLinkedin, FaGithub, FaOrcid } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import "./Header.css";

const Header = () => (
  <header className="header card">
    <div className="header-main">
      <h1 className="header-name">Anand Maurya</h1>
      <span className="header-title">Bioinformatics Scientist</span>
      <p className="header-summary">
        I've spent over a decade in bioinformatics. I work at the{" "}
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
        clinical genomics platform used for variant interpretation.
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
        long-read variant calling, a machine learning workflow for biomarker
        discovery, and whole-genome variant analysis, supporting various
        ongoing research projects in neurodegenerative disorders.
      </p>
      <p className="header-summary">
        As a Research Scholar at Adam Mickiewicz University in Poznań, my research
        was on non-coding RNAs. I developed a method to automatically
        explore sequencing data in NCBI SRA using nucleotide sequences as
        queries. I also built full-stack web applications for exploring
        snoRNA and tRNA expression data.
      </p>
      <p className="header-summary">
        Earlier, I started my career at Genotypic Technology in India,
        analysing clinical whole-exome sequencing data for genetic disease
        diagnosis. I then moved to MedGenome Labs Ltd., a CAP-accredited
        diagnostics lab, where I worked with external clients on research
        projects, and with clinicians and genome analysts on clinical
        variant interpretation. I developed the lab's in-house variant
        annotation database, automated its ML-based neo-epitope
        prioritisation pipeline, and carried out routine clinical data
        analysis.
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
