import { useState, useEffect } from 'react'
import styles from './HeroSection.module.css'

const SLIDES = [
  { num: '01', label: 'Full Stack Developer', accent: 'var(--lav)' },
  { num: '02', label: 'API & Cloud Engineer', accent: 'var(--mint)' },
  { num: '03', label: 'Healthcare Tech Specialist', accent: 'var(--rose)' },
  { num: '04', label: 'React / Angular Expert', accent: 'var(--sky)' },
  { num: '05', label: 'ML & AI Enthusiast', accent: 'var(--peach)' },
  { num: '06', label: 'Agile Practitioner', accent: 'var(--butter)' },
]

export default function HeroSection({ profile }) {
  const [slide, setSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const go = (dir) => {
    setTransitioning(true)
    setTimeout(() => {
      setSlide(s => (s + dir + SLIDES.length) % SLIDES.length)
      setTransitioning(false)
    }, 250)
  }

  useEffect(() => {
    const t = setInterval(() => go(1), 4000)
    return () => clearInterval(t)
  }, [])

  const cur = SLIDES[slide]

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero} style={{ '--cur-accent': cur.accent }}>
      {/* Ambient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      {/* Vertical rule right */}
      <div className={styles.sideRule} />

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.leftBar} />
        <div className={styles.nameBlock}>
          <p className={`${styles.roleLabel} ${transitioning ? styles.fadeOut : styles.fadeIn}`}>
            {cur.label}
          </p>
          <h1 className={styles.name}>
            <span>Nandini</span>
            <span className={styles.lastName}>Jampani</span>
          </h1>
          <div className={styles.actions}>
            <button className={styles.contactBtn} onClick={() => scrollTo('contact')}>
              Contact
            </button>
            <button className={styles.ghostBtn} onClick={() => scrollTo('projects')}>
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Slide counter */}
      <div className={styles.counter}>
        <span className={`${styles.curNum} ${transitioning ? styles.fadeOut : styles.fadeIn}`}>
          {cur.num}
        </span>
        <span className={styles.totalNum}>/ {String(SLIDES.length).padStart(2,'0')}</span>
        <div className={styles.counterControls}>
          <button onClick={() => go(-1)} aria-label="prev">‹</button>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${((slide + 1) / SLIDES.length) * 100}%` }}
            />
          </div>
          <button onClick={() => go(1)} aria-label="next">›</button>
        </div>
        <button className={styles.viewProfile} onClick={() => scrollTo('about')}>
          View Profile
        </button>
      </div>

      {/* Social bar */}
      <div className={styles.socialBar}>
        <span className={styles.socialLabel}>Social</span>
        <a href="https://www.linkedin.com/in/nandini-j-73762ab7/" target="_blank" rel="noreferrer">LinkedIn</a>
        <span className={styles.sep}>|</span>
        <a href="https://github.com/Nandini-Jampani" target="_blank" rel="noreferrer">GitHub</a>
        <span className={styles.sep}>|</span>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}
