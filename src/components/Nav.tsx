import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import SolarSystem from './SolarSystem'
import { siteConfig } from '../data/site'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/resume', label: 'Resume' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <NavLink to="/" className="brand" end>
          {siteConfig.name}
        </NavLink>
        <nav className="nav-links" aria-label="Primary">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {label}
            </NavLink>
          ))}
          <ThemeToggle />
          <SolarSystem />
        </nav>
      </div>
    </header>
  )
}
