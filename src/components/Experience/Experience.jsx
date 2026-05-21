import { AnimatedSection } from '../AnimatedSection.jsx';
import { experiences } from '../../data/portfolioData.jsx';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <AnimatedSection id="experiencia" className="section">
      <div className="sectionHeader">
        <p>Recorrido profesional</p>
        <h2>Experiencia</h2>
      </div>

      <div className={styles.timeline}>
        {experiences.map((item) => (
          <article className={styles.item} key={`${item.company}-${item.period}`}>
            <div className={styles.meta}>
              <span>{item.period}</span>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
            </div>

            <ul className={styles.tasks}>
              {item.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>

            <div className="tags" aria-label="Tecnologías utilizadas">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
