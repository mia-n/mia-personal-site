import { Link, useParams } from 'react-router-dom'
import { getPost, formatDate } from '../lib/posts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <div className="stack">
        <h1>Post not found</h1>
        <p className="muted">
          That post doesn’t exist. <Link to="/blog">Back to the blog</Link>.
        </p>
      </div>
    )
  }

  return (
    <article className="stack post">
      <p>
        <Link to="/blog" className="section-link">
          ← All posts
        </Link>
      </p>
      <header className="stack-sm">
        <h1>{post.title}</h1>
        <p className="muted">{formatDate(post.date)}</p>
        {post.tags.length > 0 && (
          <div className="tag-list">
            {post.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </header>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
