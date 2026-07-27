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
  tagline: 'I write software and fight gravity.',
  email: 'mia@decuir.info',
  location: 'Currently based in Bonn, Germany',
  socials: [
    { label: 'GitHub', href: 'https://github.com/mia-n' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mia-decuir/' },
    { label: 'Email', href: 'mailto:mia@decuir.info' },
  ],
}
