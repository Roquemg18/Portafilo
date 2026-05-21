import { AnimatedSection } from '../AnimatedSection.jsx';
import { education, stats } from '../../data/portfolioData.jsx';
import styles from './About.module.css';

export function About() {
  const featuredEducation = education.find((item) => item.featured);
  const secondaryEducation = education.filter((item) => !item.featured);

  return (
    <AnimatedSection id="sobre-mi" className="section">
      <div className="sectionHeader">
        <p>Perfil</p>
        <h2>Sobre mí</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.profile}>
          <div className={styles.copy}>
            <p>
              Soy un Software Developer con experiencia en frontend y backend. He
              trabajado en proyectos utilizando Python, C++, JavaScript, React y
              Node.js, así como en la configuración y mantenimiento de bases de
              datos NoSQL y SQL. Formado en Coder House como Full Stack Developer
              y actualmente cursando Ingeniería en Computación en la Universidad
              Nacional de Río Negro.
            </p>
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.side} aria-label="Resumen y educación">
          <div className={styles.education}>
            <span className={styles.educationLabel}>Formación principal</span>
            <h3>Educación universitaria</h3>

            {featuredEducation && (
              <div className={styles.featuredEducation}>
                <strong>{featuredEducation.title}</strong>
                <span>{featuredEducation.institution}</span>
                <small>{featuredEducation.period}</small>
              </div>
            )}

            <ul>
              {secondaryEducation.map((item) => (
                <li key={`${item.title}-${item.institution}`}>
                  <strong>{item.title}</strong>
                  <span>{item.institution}</span>
                  <small>{item.period}</small>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </AnimatedSection>
  );
}
