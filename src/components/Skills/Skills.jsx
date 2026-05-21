import { motion } from 'framer-motion';
import { AnimatedSection } from '../AnimatedSection.jsx';
import { skills } from '../../data/portfolioData.jsx';
import styles from './Skills.module.css';

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    >
      <div className={styles.logoBox}>
        {skill.logo ? (
          <img src={skill.logo} alt={`Logo de ${skill.name}`} loading="lazy" />
        ) : (
          <Icon aria-label={`Logo de ${skill.name}`} />
        )}
      </div>
      <h3>{skill.name}</h3>
    </motion.article>
  );
}

export function Skills() {
  return (
    <AnimatedSection id="skills" className="section">
      <div className="sectionHeader">
        <p>Stack técnico</p>
        <h2>Skills</h2>
      </div>

      <div className={styles.groups}>
        <div className={styles.group}>
          <h3>Frontend</h3>
          <div className={styles.grid}>
            {skills.frontend.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <h3>Backend</h3>
          <div className={styles.grid}>
            {skills.backend.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
