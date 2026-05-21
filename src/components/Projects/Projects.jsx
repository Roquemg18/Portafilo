import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { AnimatedSection } from '../AnimatedSection.jsx';
import { projects } from '../../data/portfolioData.jsx';
import styles from './Projects.module.css';

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return undefined;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <AnimatedSection id="proyectos" className="section">
      <div className="sectionHeader">
        <p>Trabajo seleccionado</p>
        <h2>Proyectos</h2>
      </div>

      <div className={styles.carousel}>
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {projects.map((project) => {
              const Icon = project.icon;
              const DemoIcon = project.demoIcon;

              return (
                <div className={styles.slide} key={project.title}>
                  <motion.article
                    className={styles.card}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.category}>
                        <Icon aria-hidden="true" />
                        {project.category}
                      </span>
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className={`tags ${styles.tags}`}>
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className={styles.links}>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub aria-hidden="true" />
                        GitHub
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          {DemoIcon ? <DemoIcon aria-hidden="true" /> : null}
                          Demo
                        </a>
                      )}
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.controls}>
          <button type="button" onClick={scrollPrev} aria-label="Proyecto anterior">
            <FiArrowLeft aria-hidden="true" />
          </button>
          <div className={styles.dots}>
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === selectedIndex ? styles.dotActive : ''}
                onClick={() => scrollTo(index)}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={scrollNext} aria-label="Proyecto siguiente">
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
