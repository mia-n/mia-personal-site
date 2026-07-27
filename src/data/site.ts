// Central place for site-wide identity and links.
// Edit these values to make the site yours.

export interface SocialLink {
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  role: string
  tagline: string
  email: string
  location: string
  socials: SocialLink[]
}

export const siteConfig: SiteConfig = {
  name: 'Mia DeCuir',
  role: 'Software Engineer',
  tagline: 'I build thoughtful software and write about it.',
  email: 'mia@decuir.info',
  location: 'Remote',
  socials: [
    { label: 'GitHub', href: 'https://github.com/mia-n' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Email', href: 'mailto:mia@decuir.info' },
  ],
}
