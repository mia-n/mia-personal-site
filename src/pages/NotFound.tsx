import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="stack notfound">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="muted">
        The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="button">
        Go home
      </Link>
    </div>
  )
}
