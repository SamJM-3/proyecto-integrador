import { useState } from 'react'

const navLinks = [
  { label: 'Inicio',      href: '#' },
  { label: 'Donantes',    href: '#' },
  { label: 'Donaciones',  href: '#' },
  { label: 'Hospitales',  href: '#' },
  { label: 'Solicitudes', href: '#' },
]

const styles = {
  nav: {
    backgroundColor: '#1A1F2E',
    padding: '0 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  dot: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    backgroundColor: '#C0392B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
  },
  brandText: {
    fontFamily: "'Sora', sans-serif",
    fontSize: '16px',
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: '-0.3px',
  },
  brandSub: {
    fontSize: '10px',
    color: '#8A9BB0',
    fontWeight: '400',
    display: 'block',
    marginTop: '-2px',
  },
  links: {
    display: 'flex',
    gap: '4px',
    listStyle: 'none',
  },
  link: {
    color: '#8A9BB0',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    padding: '6px 14px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  linkActive: {
    color: '#FFFFFF',
    backgroundColor: 'rgba(192,57,43,0.15)',
  },
  badge: {
    backgroundColor: '#C0392B',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: '600',
    padding: '6px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'background-color 0.2s ease',
  },
}

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Inicio')
  const [hoverBtn, setHoverBtn] = useState(false)

  return (
    <nav style={styles.nav}>
      <a style={styles.brand} href="#">
        <div style={styles.dot}>🩸</div>
        <div>
          <span style={styles.brandText}>DonorTrack</span>
          <span style={styles.brandSub}>Sistema de Donantes de Sangre</span>
        </div>
      </a>

      <ul style={styles.links}>
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={{
                ...styles.link,
                ...(activeLink === label ? styles.linkActive : {}),
              }}
              onClick={() => setActiveLink(label)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        style={{
          ...styles.badge,
          backgroundColor: hoverBtn ? '#A93226' : '#C0392B',
        }}
        onMouseEnter={() => setHoverBtn(true)}
        onMouseLeave={() => setHoverBtn(false)}
      >
        + Nueva Donación
      </button>
    </nav>
  )
}

export default Navbar
