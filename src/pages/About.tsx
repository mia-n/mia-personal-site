import { siteConfig } from '../data/site'

export default function About() {
  return (
    <article className="stack-lg prose">
      <img
        src="/images/about-photo.jpg"
        alt="Mia wearing a headset in the cockpit of a small airplane"
        style={{ display: 'block', margin: '0 auto', maxWidth: '320px' }}
      />
      <h1>About</h1>
      <p>
        I'm Mia. I've been a professional software engineer for a while, mostly working on large-scale maintainable platforms. I've done a lot of infra work too.
      </p>
      <p>
        In my personal life I play roller derby, fly planes, and watch birds.
      </p>
      <p>
        You can reach me at{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>, or find
        me on the links in the footer.
      </p>
    </article>
  )
}
