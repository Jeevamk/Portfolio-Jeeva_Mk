// ✏️ All portfolio content lives here. Edit this file and the site updates.

export interface Link { label: string; url: string }

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  photo: string;
  intro: string;
  summary: string[];
  available: boolean;
  links: Link[];
  badges: { value: string; label: string }[];
}

export interface Highlight { title: string; text: string }

export interface ProjectPoint { title: string; text: string }

export interface Project {
  id: string;
  name: string;
  description: string;
  period: string;
  stack: string[];
  points: ProjectPoint[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  projects: Project[];
}

export interface SkillGroup { group: string; items: string[] }

export interface Award { title: string; org: string; year: string; text: string }

export interface Education { course: string; school: string; location: string; period: string }

export const profile: Profile = {
  name: 'Jeeva MK',
  title: 'Software Engineer',
  subtitle: 'Full Stack Developer',
  location: 'Calicut, Kerala',
  email: 'jeevamkdev@gmail.com',
  phone: '+91 75103 28839',
  photo: '/jeeva.jpg',
  intro:
    'I build scalable backend services and the React apps on top of them, with a soft spot for queues, workflows and fault-tolerant jobs.',
  summary: [
    'Software Engineer with 2+ years of full-stack experience and a strong backend focus, building scalable services with Node.js, NestJS, React.js, Next.js and MongoDB.',
    'I work with message-driven microservices (RabbitMQ, BullMQ), workflow automation, concurrency control and fault-tolerant job processing, along with manual and automated testing.',
    'I am the primary point of contact for platform security vulnerabilities, and currently Project Coordinator for Lead Engine, a large-scale LinkedIn and email automation platform.',
  ],
  available: true,
  // TODO: replace with your real profile URLs
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-profile' },
    { label: 'GitHub', url: 'https://github.com/your-username' },
  ],
  badges: [
    { value: '2+ yrs', label: 'Full-stack experience' },
    { value: 'Sprint Champion', label: 'Award, 2026' },
  ],
};

export const highlights: Highlight[] = [
  {
    title: 'End-to-end ownership of Lead Engine',
    text: 'Defined all product features, prepared the complete technical and feature documentation, and drove delivery from requirements through development, testing and release.',
  },
  {
    title: 'Campaign execution engine',
    text: 'Owned execution across every action type, including loop-safe rerouting with backward history rewind and progress recovery that resumes workflow nodes after dispatch failures.',
  },
  {
    title: 'Concurrency-safe InMail credits',
    text: 'Built a credit system with locking, daily-limit enforcement and one-by-one queue processing.',
  },
  {
    title: 'Messaging from scratch',
    text: 'Set up RabbitMQ, BullMQ and Fluentd logging for the We-Link API platform, including queue bindings and consumer subscriptions.',
  },
  {
    title: 'Role-based access control',
    text: 'Designed RBAC and per-key API permissions, enforced end to end across backend APIs and frontend screens.',
  },
  {
    title: 'Multi-iframe chat SDK',
    text: 'Built a JavaScript SDK for the Sappy chat widget, coordinating launcher, notification and chat frames over postMessage.',
  },
  {
    title: 'Faster endpoints',
    text: 'Built template-based workflow execution and replaced per-profile lookups with batch fetching to speed up Lead Engine.',
  },
  {
    title: 'Security vulnerability management',
    text: 'Led vulnerability handling for We-Connect, working with external bug bounty hunters and internal teams through to resolution.',
  },
];

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Cloudstack Automation Pvt Ltd.',
    location: 'Calicut, Kerala',
    period: 'Aug 2024 – Present',
    projects: [
      {
        id: 'lead-engine',
        name: 'We-Connect Lead Engine',
        description: 'Workflow-based LinkedIn and email campaign automation platform.',
        period: '2026 – Present',
        stack: ['NestJS', 'TypeScript', 'BullMQ', 'Redis', 'MongoDB', 'MySQL', 'REST APIs'],
        points: [
          { title: 'Project coordination & feature ownership', text: 'Led end-to-end feature planning and execution, defined all features, wrote the complete technical documentation and coordinated sprints in Trello.' },
          { title: 'Campaign execution engine', text: 'Owned node execution, bot action dispatch, delays, campaign status transitions, loop-safe rerouting with backward history rewind and progress recovery after dispatch failures.' },
          { title: 'Template-based workflow execution', text: 'Built execution for campaigns created from predefined workflow templates, letting users launch ready-made multi-step outreach flows.' },
          { title: 'AI support agent endpoints', text: 'Built the APIs behind the AI assistant that writes and refines personalized replies, detects positive or negative responses, scores and qualifies leads, and personalizes outreach with a live preview.' },
          { title: 'Node & campaign profile management', text: 'Built tracking for every workflow step, including automated lead research and qualification, with eligibility checks, pause and resume per lead, and automatic retries.' },
          { title: 'Concurrency & queue processing', text: 'Built a concurrency-safe InMail credit system with locking, daily-limit enforcement and one-by-one BullMQ processing, plus retries that separate retryable from non-retryable errors.' },
          { title: 'Performance optimization', text: 'Replaced per-profile lookups with batch profile fetching and served AI-assist fields directly from the database, reducing response times.' },
          { title: 'Lead enrichment & data import', text: 'Built bulk and type-based email enrichment with credit tracking, and CSV lead import with automatic column mapping.' },
          { title: 'Testing & QA', text: 'Tested and validated workflow behavior before release, including cross-browser testing on BrowserStack.' },
        ],
      },
      {
        id: 'warehouse',
        name: 'Warehouse',
        description: 'IP and proxy management service.',
        period: '2025 – 2026',
        stack: ['NestJS Microservices', 'RabbitMQ', 'Redis', 'MongoDB'],
        points: [
          { title: 'IP lifecycle management', text: 'Built IP allocation, rotation, termination and quarantine, with a cron job that releases quarantined IPs automatically.' },
          { title: 'Bulk IP management', text: 'Built bulk IP import with IP-range expansion, duplicate handling, validation and excluded-range filtering.' },
          { title: 'Proxy selection & fallback', text: 'Built provider selection with fallback across Bright Data data center, ISP and internal proxies, with Slack alerts when no suitable IPs are available.' },
        ],
      },
      {
        id: 'sappy',
        name: 'Sappy',
        description: 'Customer support chat platform.',
        period: '2025',
        stack: ['Node.js', 'React', 'JavaScript SDK', 'Webpack', 'i18next'],
        points: [
          { title: 'Backend APIs', text: 'Built REST APIs for live chat, ticketing, user conversations, notifications and Help Center integrations.' },
          { title: 'Embeddable widget SDK', text: 'Built a multi-iframe JavaScript SDK coordinating launcher, notification and chat frames over postMessage, with notification stacking and unread counts.' },
          { title: 'Customization & localization', text: 'Exposed 20+ script-side options (theming, tabs, operating hours, AI agent and team conversations) and added multi-language support with automatic language detection.' },
        ],
      },
      {
        id: 'simpliq',
        name: 'Simpliq',
        description: 'Settings and account APIs.',
        period: '2025',
        stack: ['NestJS', 'MongoDB'],
        points: [
          { title: 'Settings APIs', text: 'Built REST endpoints for user profiles, profile image upload, notification preferences, team permissions, and AI, LinkedIn-limit, schedule and integration settings.' },
        ],
      },
      {
        id: 'we-link',
        name: 'We-Link API',
        description: 'API platform with microservices and workflow automation.',
        period: '2024 – 2025',
        stack: ['NestJS', 'React', 'Redux Toolkit', 'RabbitMQ', 'BullMQ', 'Redis', 'n8n'],
        points: [
          { title: 'Microservices & messaging', text: 'Set up RabbitMQ publishers and consumers, BullMQ with Redis and Fluentd log transport from scratch, with a global response middleware and centralized error handling.' },
          { title: 'Role-based access control', text: 'Designed RBAC for team members and per-key API permissions, enforced across backend APIs and the dashboard, reports and settings screens.' },
          { title: 'Authentication & notifications', text: 'Built OTP-based sign-up and password reset with JWT and Passport, a webhook consumer and queue-based email notifications.' },
          { title: 'Workflow automation', text: 'Integrated n8n workflows connecting We-Link with internal services and external platforms.' },
          { title: 'Frontend & testing', text: 'Built team and API key management in React with search, filters and validation, and wrote unit tests for the core settings modules.' },
        ],
      },
      {
        id: 'security',
        name: 'We-Connect Platform Security',
        description: 'Ongoing security ownership.',
        period: '2024 – Present',
        stack: ['Vulnerability management', 'Bug bounty'],
        points: [
          { title: 'Vulnerability management', text: 'Primary point of contact for security vulnerabilities; validated reports from external bug bounty hunters and coordinated resolution with internal teams.' },
        ],
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'NestJS', 'Microservices', 'RESTful APIs', 'Swagger', 'Cron Jobs'] },
  { group: 'Frontend', items: ['React.js', 'Next.js', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'Ant Design', 'Bootstrap 5', 'Formik', 'Yup', 'Chart.js', 'i18next', 'EJS'] },
  { group: 'Messaging & queues', items: ['RabbitMQ', 'BullMQ', 'Socket.io', 'Webhooks'] },
  { group: 'Databases', items: ['MongoDB', 'Mongoose', 'Aggregation Pipelines', 'Redis', 'MySQL', 'TypeORM'] },
  { group: 'Security & auth', items: ['JWT', 'Passport.js', 'NextAuth.js', 'bcrypt', 'RBAC'] },
  { group: 'Testing', items: ['Vitest', 'React Testing Library', 'Manual Testing', 'BrowserStack', 'Postman'] },
  { group: 'Tools & DevOps', items: ['Git', 'GitLab', 'Docker', 'Nginx', 'PM2', 'Vite', 'Webpack', 'AWS S3', 'Winston', 'Fluentd', 'Trello'] },
  { group: 'Integrations & automation', items: ['n8n', 'Slack API', 'Bright Data', 'AI Service Integration', 'Third-Party APIs'] },
];

export const awards: Award[] = [
  { title: 'Sprint Champion', org: 'Cloudstack Automation Pvt Ltd.', year: '2026', text: 'Recognized for outstanding contribution and impact during the sprint.' },
  { title: 'Perfect Sync', org: 'Cloudstack Automation Pvt Ltd.', year: '2025', text: 'For the best inter-departmental collaboration.' },
];

export const education: Education[] = [
  { course: 'MERN Stack Development', school: 'Self Stack', location: 'Calicut, Kerala', period: 'Jun 2023 – Aug 2024' },
  { course: 'B.Sc. in Physics', school: 'University of Calicut', location: 'Calicut, Kerala', period: '2022' },
];
