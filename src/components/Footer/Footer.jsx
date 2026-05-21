import { socialLinks } from '../../data/portfolioData.jsx';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Diseñado y construido por Roque Molina · 2026</p>
      <div className={styles.links} aria-label="Links sociales">
        {socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  );
}
