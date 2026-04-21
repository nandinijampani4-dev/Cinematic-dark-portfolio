import styles from './ContactSection.module.css'

export default function ContactSection({ profile, education }) {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Get In Touch</p>
          <h2 className={styles.heading}>Let's work<br/><em>together</em></h2>
          <p className={styles.sub}>Open to full-time roles, contract work, and interesting collaborations in .NET, React, cloud, or healthcare tech.</p>

          <div className={styles.links}>
            <a href={`mailto:${profile.email}`} className={styles.contactLink}>
              <span className={styles.linkIcon}>✉</span>
              <div>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.linkVal}>{profile.email}</span>
              </div>
            </a>
            <a href={`tel:${profile.phone}`} className={styles.contactLink}>
              <span className={styles.linkIcon}>📞</span>
              <div>
                <span className={styles.linkLabel}>Phone</span>
                <span className={styles.linkVal}>{profile.phone}</span>
              </div>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <span className={styles.linkIcon}>🔗</span>
              <div>
                <span className={styles.linkLabel}>LinkedIn</span>
                <span className={styles.linkVal}>Nandini Jampani</span>
              </div>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={styles.contactLink}>
              <span className={styles.linkIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </span>
              <div>
                <span className={styles.linkLabel}>GitHub</span>
                <span className={styles.linkVal}>Nandini-Jampani</span>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.eyebrow}>Education</p>
          <div className={styles.eduList}>
            {education.map((e, i) => (
              <div key={i} className={styles.eduCard}>
                <span className={styles.eduIcon}>🎓</span>
                <div>
                  <p className={styles.eduDegree}>{e.degree}</p>
                  <p className={styles.eduLoc}>{e.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <a href={`mailto:${profile.email}`} className={styles.ctaBtn}>
              Send a message →
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.footerName}>{profile.name}</span>
        <span className={styles.footerCopy}>© {new Date().getFullYear()} · Built with React + Vite</span>
      </div>
    </section>
  )
}
