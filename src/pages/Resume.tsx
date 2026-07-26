import { siteConfig } from '../data/site'
import { resume } from '../data/resume'

export default function Resume() {
  return (
    <article className="stack-lg">
      <header className="stack-sm">
        <h1>{siteConfig.name}</h1>
        <p className="lead">{siteConfig.role}</p>
        <p className="muted">
          {siteConfig.location} ·{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
        <p>{resume.summary}</p>
      </header>

      <section className="stack">
        <h2>Experience</h2>
        {resume.experience.map((job) => (
          <div key={`${job.company}-${job.start}`} className="entry">
            <div className="entry-head">
              <h3>
                {job.role} · <span className="muted">{job.company}</span>
              </h3>
              <span className="entry-dates">
                {job.start} – {job.end}
              </span>
            </div>
            {job.location && <p className="muted small">{job.location}</p>}
            <ul className="bullets">
              {job.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="stack">
        <h2>Education</h2>
        {resume.education.map((ed) => (
          <div key={ed.school} className="entry">
            <div className="entry-head">
              <h3>{ed.school}</h3>
              <span className="entry-dates">
                {ed.start} – {ed.end}
              </span>
            </div>
            <p className="muted">{ed.credential}</p>
          </div>
        ))}
      </section>

      <section className="stack">
        <h2>Skills</h2>
        <div className="skills-grid">
          {resume.skills.map((group) => (
            <div key={group.category} className="skill-group">
              <h3>{group.category}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
