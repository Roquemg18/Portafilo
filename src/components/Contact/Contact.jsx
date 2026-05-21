import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload, FiMapPin } from 'react-icons/fi';
import { AnimatedSection } from '../AnimatedSection.jsx';
import cvPdf from '../../assets/Roque_Molina_CV.pdf';
import { personal } from '../../data/portfolioData.jsx';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <AnimatedSection id="contacto" className="section">
      <div className={styles.card}>
        <div className="sectionHeader">
          <p>Contacto</p>
          <h2>Hablemos</h2>
        </div>

        <p className={styles.text}>
          Estoy abierto a nuevas oportunidades, colaboraciones y proyectos donde
          pueda aportar desde el desarrollo de software.
        </p>

        <a className={styles.email} href={`mailto:${personal.email}`}>
          {personal.email}
        </a>

        <div className={styles.actions}>
          <a className="buttonSecondary" href={personal.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn aria-hidden="true" />
            LinkedIn
          </a>
          <a className="buttonSecondary" href={personal.github} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a className="buttonPrimary" href={cvPdf} download="Roque_Molina_CV.pdf">
            <FiDownload aria-hidden="true" />
            Descargar CV
          </a>
        </div>

        <div className={styles.location}>
          <FiMapPin aria-hidden="true" />
          {personal.location}
        </div>
      </div>
    </AnimatedSection>
  );
}
