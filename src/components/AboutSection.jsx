import styles from './AboutSection.module.css'

export default function AboutSection({ profile, skills }) {
  const themeVar = { rose:'--rose', mint:'--mint', lav:'--lav', peach:'--peach', sky:'--sky', butter:'--butter' }

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>About Me</p>
          <h2 className={styles.heading}>Building things<br/><em>that matter</em></h2>
          <p className={styles.bio}>{profile.summary}</p>
          <div className={styles.stats}>
            {[['8+','Years Experience'],['5','Clients Served'],['4','Projects on GitHub']].map(([n,l]) => (
              <div key={l} className={styles.stat}>
                <span className={styles.statNum}>{n}</span>
                <span className={styles.statLabel}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.eyebrow}>Tech Stack</p>
          <div className={styles.skillGrid}>
            {skills.map((s, i) => (
              <span
                key={i}
                className={styles.tag}
                style={{
                  '--t': `var(${themeVar[s.theme] || '--lav'})`,
                  animationDelay: `${i * 0.03}s`,
                }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
