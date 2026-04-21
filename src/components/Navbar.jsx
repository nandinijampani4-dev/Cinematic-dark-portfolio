import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['Home', 'About', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.dot} />
        Portfolio
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map((l, i) => (
          <li key={l} style={{ animationDelay: `${i * 0.07}s` }}>
            <button onClick={() => scrollTo(l)} className={styles.link}>
              {l}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
