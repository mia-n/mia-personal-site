import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'
import { getAllPosts, formatDate } from '../lib/posts'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div className="stack-lg">
      <section className="hero">
        <p className="eyebrow">{siteConfig.role}</p>
        <h1 className="hero-name">
          <img
            src="/images/home-avatar.jpg"
            alt=""
            className="hero-avatar"
          />
          {siteConfig.name}
        </h1>
        <p className="lead">{siteConfig.tagline}</p>
        <div className="hero-actions">
          <Link to="/resume" className="button">
            View resume
          </Link>
          <Link to="/blog" className="button button-ghost">
            Read the blog
          </Link>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="stack">
          <div className="section-head">
            <h2>Recent writing</h2>
            <Link to="/blog" className="section-link">
              All posts →
            </Link>
          </div>
          <ul className="post-list">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="post-card">
                  <span className="post-date">{formatDate(post.date)}</span>
                  <span className="post-title">{post.title}</span>
                  {post.description && (
                    <span className="post-desc">{post.description}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
