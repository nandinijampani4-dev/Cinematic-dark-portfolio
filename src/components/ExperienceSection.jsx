import { useState } from 'react'
import styles from './ExperienceSection.module.css'

const themeVar = { rose:'--rose', mint:'--mint', lav:'--lav', peach:'--peach', sky:'--sky', butter:'--butter' }

export default function ExperienceSection({ clients }) {
  const [open, setOpen] = useState(null)

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Career</p>
          <h2 className={styles.heading}>Work Experience</h2>
        </div>

        <div className={styles.list}>
          {clients.map((c, i) => {
            const accent = `var(${themeVar[c.theme] || '--lav'})`
            const isOpen = open === c.id
            return (
              <div
                key={c.id}
                className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}
                style={{ '--accent': accent, animationDelay: `${i * 0.08}s` }}
              >
                {/* Row */}
                <button
                  className={styles.row}
                  onClick={() => setOpen(isOpen ? null : c.id)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.dot}>{c.initials}</div>
                  <div className={styles.meta}>
                    <span className={styles.clientName}>
                      {c.name}
                      {c.subtitle && <span className={styles.sub}> · {c.subtitle}</span>}
                    </span>
                    <span className={styles.role}>{c.role} · {c.location}</span>
                  </div>
                  <span className={styles.tenure}>{c.tenure}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevOpen : ''}`}>›</span>
                </button>

                {/* Summary always visible under row */}
                <p className={styles.summary}>{c.summary}</p>

                {/* Expanded */}
                <div className={`${styles.body} ${isOpen ? styles.bodyOpen : ''}`}>
                  <div className={styles.bodyInner}>
                    <p className={styles.respTitle}>Responsibilities</p>
                    <ul className={styles.respList}>
                      {c.responsibilities.map((r, j) => (
                        <li key={j}>
                          <span className={styles.bullet} />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.envRow}>
                      <span className={styles.envLabel}>Stack</span>
                      <div className={styles.envTags}>
                        {c.environment.map((e, j) => (
                          <span key={j} className={styles.envTag}>{e}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
