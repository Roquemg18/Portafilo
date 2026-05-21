import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import cvPdf from '../../assets/Roque_Molina_CV.pdf';
import { personal, socialLinks } from '../../data/portfolioData.jsx';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.badge}>
            <span aria-hidden="true" />
            Disponible para nuevas oportunidades
          </div>

          <p className={styles.kicker}>{personal.role}</p>
          <h1>{personal.name}</h1>
          <p className={styles.description}>
            Software Developer con experiencia en frontend y backend, trabajando
            con Python, C++, JavaScript, React, Node.js y bases de datos SQL y
            NoSQL.
          </p>

          <div className={styles.actions}>
            <a className="buttonPrimary" href={cvPdf} download="Roque_Molina_CV.pdf">
              <FiDownload aria-hidden="true" />
              Descargar CV
            </a>
            <a className="buttonSecondary" href="#contacto">
              <FiMail aria-hidden="true" />
              Contactar
            </a>
          </div>

          <div className={styles.socials} aria-label="Links sociales">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
