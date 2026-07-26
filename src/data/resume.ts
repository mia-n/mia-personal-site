// Structured resume data. Editing this file updates the /resume page.
// Keep it as plain data so it stays easy to maintain and could later be
// exported to JSON, a PDF, or an API without touching UI code.

export interface Experience {
  company: string
  role: string
  start: string
  end: string
  location?: string
  highlights: string[]
}

export interface Education {
  school: string
  credential: string
  start: string
  end: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Resume {
  summary: string
  experience: Experience[]
  education: Education[]
  skills: SkillGroup[]
}

export const resume: Resume = {
  summary:
    'Software engineer with a focus on building reliable, well-crafted web applications. Placeholder summary — replace with your own.',
  experience: [
    {
      company: 'Example Corp',
      role: 'Senior Software Engineer',
      start: '2023',
      end: 'Present',
      location: 'Remote',
      highlights: [
        'Led development of a customer-facing feature used by thousands of users.',
        'Improved application performance and reduced page load times.',
        'Mentored engineers and helped establish code review practices.',
      ],
    },
    {
      company: 'Startup Inc',
      role: 'Software Engineer',
      start: '2020',
      end: '2023',
      location: 'Remote',
      highlights: [
        'Built and shipped core product features across the stack.',
        'Collaborated with design and product to ship iteratively.',
      ],
    },
  ],
  education: [
    {
      school: 'University',
      credential: 'B.S. in Computer Science',
      start: '2016',
      end: '2020',
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Vite', 'CSS', 'Accessibility'],
    },
    {
      category: 'Backend & Tools',
      items: ['Node.js', 'PostgreSQL', 'Git', 'CI/CD'],
    },
  ],
}
