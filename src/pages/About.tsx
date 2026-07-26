import { siteConfig } from '../data/site'

export default function About() {
  return (
    <article className="stack-lg prose">
      <h1>About</h1>
      <p>
        Hi, I’m {siteConfig.name}. This is a placeholder about page — replace
        this copy with your own story: what you work on, what you care about,
        and what you’re looking to do next.
      </p>
      <p>
        You can reach me at{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>, or find
        me on the links in the footer.
      </p>
    </article>
  )
}
