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
  start?: string
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
    'Backend generalist with infrastructure experience and a Staff-level track record across high-growth product and platform engineering. Deep expertise in building for long-term maintainability, and a consistent passion for improving the developer experience — both through the systems I build and the practices I help establish.',
  experience: [
    {
      company: 'Taskrabbit',
      role: 'Staff Software Engineer',
      start: 'August 2023',
      end: 'April 2026',
      location: 'Remote',
      highlights: [
        'Engineering Technical Leader for the "Demand Services" Platform team, partnering with Software Architects to own technical direction and implementation roadmap for the next-generation platform.',
        'Co-lead a wholesale platform redesign — migrating from a legacy Ruby monolith to a distributed, event-driven architecture built on TypeScript and NestJS — giving the business a foundation that can scale to new products without the structural constraints that were slowing the team down.',
        'Pioneered AI-assisted, spec-driven development practices with my team; the resulting velocity gains have made it a model being watched across the broader engineering org.',
        'Previously Engineering Technical Leader for External Partnerships; authored the MVP plan that scoped the initial API integration narrowly enough to hit a tight product deadline while building the right foundation for future expansion.',
        'Built a net-new team from scratch; onboarding practices developed for the team were adopted more broadly across the engineering organization.',
        'Mentored multiple engineers through to promotion.',
      ],
    },
    {
      company: 'Untapped Labs',
      role: 'Senior Software Engineer',
      start: 'May 2022',
      end: 'July 2023',
      location: 'Remote',
      highlights: [
        'Technical lead on a business-critical sourcing feature that automatically surfaced relevant candidates to recruiters, coordinating across the full engineering department to ship it on time.',
        'Replaced a ORM-driven database only search API with a hybrid ElasticSearch system, delivering meaningfully faster and more relevant results at scale.',
        'Initiated and led the decomposition of a monolithic Python backend into containerized microservices, designing and shipping the first service as the reference implementation for the team to follow.',
        'Designed and built full deployment infrastructure on AWS using Terraform, Kubernetes, and Docker Compose, including a cross-service data pipeline via SNS+SQS.',
        'Raised the bar on maintainability across all new development: introduced automated code profiling thresholds and structured peer review guidelines that became org-wide standards.',
        'Mentored junior engineers with a focus on career growth and knowledge distribution; member of on-call rotation.',
      ],
    },
    {
      company: 'Salesforce (Heroku)',
      role: 'Senior Member of Technical Staff',
      start: 'May 2019',
      end: 'April 2022',
      location: 'Remote',
      highlights: [
        'Core contributor to the next-generation Heroku platform on Kubernetes, while keeping existing Ruby on Rails and Go infrastructure stable and supported.',
        'Owned the redevelopment of a critical middleware API giving developers programmatic access to Kubernetes cluster orchestration; prioritized maintainability as a first-class concern to reduce long-term operational burden.',
        "Embedded with Heroku's Web Services teams to spread infrastructure knowledge while delivering the APIs powering Salesforce Functions — a net-new product built on the Heroku platform.",
        'Co-led integration and end-to-end testing for Salesforce Functions; served on-call for both the infrastructure team and the Web Services family of teams.',
      ],
    },
    {
      company: 'Deft',
      role: 'Senior Software Engineer',
      start: 'January 2019',
      end: 'March 2019',
      location: 'Remote',
      highlights: [
        'Delivered full-stack consulting across application development, infrastructure as code, and CI/CD pipeline design.',
        'Built internal tooling infrastructure and integrated a Rails application with GitHub Webhooks to automate key parts of the development workflow.',
      ],
    },
    {
      company: 'Midtown Consulting Group',
      role: 'Senior Software Engineer',
      start: 'October 2017',
      end: 'December 2018',
      location: 'Remote',
      highlights: [
        'Contracted to Bank of America; built a web application that streamlined small-business onboarding for card payment acceptance, reducing friction in a previously manual process.',
        'Led the Angular 5/6 front-end from the ground up and drove a significant refactor of the Java backend, improving performance and setting a higher maintainability baseline.',
        'Implemented end-to-end security and authorization across the stack, including session management and Google Recaptcha v3.',
      ],
    },
    {
      company: 'The Home Depot',
      role: 'Senior Software Engineer',
      start: 'August 2016',
      end: 'October 2017',
      location: 'Atlanta, GA',
      highlights: [
        'Helped build the special-order and Pro-Customer POS system that replaced a legacy application responsible for $17B in annual revenue.',
        'Full-stack contribution across an AngularJS frontend, Java microservice backend, and DevOps; designed and shipped CI/CD pipelines in compliance with SOX requirements.',
      ],
    },
    {
      company: 'State Farm',
      role: 'Web Developer',
      start: 'May 2015',
      end: 'August 2016',
      location: 'Atlanta, GA',
      highlights: [
        'Developed and supported two high-volume customer-facing applications handling secure data with accessibility requirements.',
        "Improved test coverage on a legacy application to increase the team's ability to ship changes safely.",
      ],
    },
  ],
  education: [
    {
      school: 'Purdue University',
      credential: 'B.S. Computer Science',
      end: '2015',
    },
  ],
  skills: [
    {
      category: 'Technical Skills',
      items: [
        'AI-Assisted Development',
        'Augment',
        'AWS',
        'Bash',
        'C',
        'CircleCI',
        'Docker',
        'ElasticSearch',
        'Git',
        'GitHub',
        'Go',
        'IntelliJ IDEA',
        'Java',
        'JavaScript',
        'Jira',
        'Kafka',
        'Kubernetes',
        'MongoDB',
        'MySQL',
        'NestJS',
        'Node',
        'npm',
        'OpenSearch',
        'Postgres',
        'Python',
        'React',
        'Ruby on Rails',
        'Rust',
        'SQS',
        'Spec Driven Development',
        'Terraform',
        'TypeScript',
        'VS Code',
      ],
    },
  ],
}
