import { Link } from 'react-router-dom'
import { getAllPosts, formatDate } from '../lib/posts'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="stack-lg">
      <header className="stack-sm">
        <h1>Blog</h1>
        <p className="lead">Notes on engineering, projects, and whatever else.</p>
      </header>

      {posts.length === 0 ? (
        <p className="muted">No posts yet — check back soon.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="post-card">
                <span className="post-date">{formatDate(post.date)}</span>
                <span className="post-title">{post.title}</span>
                {post.description && (
                  <span className="post-desc">{post.description}</span>
                )}
                {post.tags.length > 0 && (
                  <span className="tag-list inline">
                    {post.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
