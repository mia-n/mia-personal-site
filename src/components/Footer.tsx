import { siteConfig } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <nav className="footer-links" aria-label="Social">
          {siteConfig.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
