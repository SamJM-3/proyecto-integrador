const styles = {
  footer: {
    backgroundColor: '#1A1F2E',
    color: '#8A9BB0',
    marginTop: 'auto',
    padding: '32px 40px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '16px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  dot: {
    width: '26px',
    height: '26px',
    borderRadius: '6px',
    backgroundColor: '#C0392B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
  },
  brandName: {
    fontFamily: "'Sora', sans-serif",
    fontSize: '14px',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  copy: {
    fontSize: '13px',
    color: '#8A9BB0',
  },
  stack: {
    display: 'flex',
    gap: '8px',
  },
  chip: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#8A9BB0',
    fontSize: '11px',
    padding: '4px 10px',
    borderRadius: '6px',
  },
}

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>
          <div style={styles.dot}>🩸</div>
          <span style={styles.brandName}>DonorTrack</span>
        </div>

        <span style={styles.copy}>
          © {year} — Proyecto Integrador · Programación II
        </span>

        <div style={styles.stack}>
          {['React', 'Vite', 'Python', 'PostgreSQL'].map(tech => (
            <span key={tech} style={styles.chip}>{tech}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
