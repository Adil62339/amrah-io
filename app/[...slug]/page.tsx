import Link from 'next/link'
import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { notFound } from 'next/navigation'

const routes = {
  platform: ['Platform', 'One connected view of your people operations.', 'Explore the AMRAH platform across employee management, attendance, recruitment, performance and workforce analytics.'],
  'platform/employee-management': ['Employee management', 'A clearer foundation for every employee moment.', 'Organize people information, documents, teams and lifecycle workflows in one place.'],
  'platform/attendance-leave': ['Attendance & leave', 'Make time away easier to coordinate.', 'Create visibility across requests, balances, approvals and attendance summaries.'],
  'platform/recruitment': ['Recruitment & ATS', 'Move candidates forward with context.', 'Bring requisitions, candidate stages, interviews and hiring workflows into a shared view.'],
  'platform/performance': ['Performance management', 'Make growth conversations more consistent.', 'Support review cycles, goals and feedback with a clearer people process.'],
  'platform/analytics': ['Workforce analytics', 'See the signals behind your workforce.', 'Turn workforce information into reporting concepts leaders can understand.'],
  'platform/automation-ai': ['Automation & AI', 'Reduce repetitive work without losing context.', 'Design future-ready HR workflows around automation, review and responsible human oversight.'],
  solutions: ['Solutions', 'HR operations that fit how your organization works.', 'AMRAH connects the workflows that matter across the employee journey.'],
  industries: ['Industries', 'People operations for growing teams.', 'Explore a flexible foundation for organizations building more consistent HR processes.'],
  about: ['About AMRAH', 'The intelligence behind great workplaces.', 'AMRAH is a proposed human resources intelligence platform focused on clarity, connection and better workplace decisions.'],
  resources: ['Resources', 'Practical thinking for better people operations.', 'Insights and guidance for teams planning a more connected HR experience.'],
  partners: ['Partners', 'Build better people operations together.', 'Partner with AMRAH to help organizations bring more clarity to the employee journey.'],
  privacy: ['Privacy', 'Privacy by design starts with clarity.', 'This marketing site does not collect or store employee records. Production HRIS functionality will require documented data governance and privacy controls.'],
  terms: ['Terms', 'Terms for the AMRAH website.', 'AMRAH is currently presented as a proposed product experience. Product terms will be published before any paid service launches.'],
  cookies: ['Cookies', 'A straightforward approach to cookies.', 'This site uses essential browser functionality. Optional analytics are only loaded in production.'],
  security: ['Security', 'Security is a requirement, not a claim.', 'A production AMRAH HRIS will require authentication, tenant isolation, role permissions, audit logs, backups and documented incident response.'],
  accessibility: ['Accessibility', 'Designed to be clearer for everyone.', 'We aim to support keyboard navigation, readable contrast, semantic structure and reduced-motion preferences across the site.'],
} as const

export function generateStaticParams() { return Object.keys(routes).map(slug => ({ slug: slug.split('/') })) }

export default async function MarketingPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const key = slug.join('/') as keyof typeof routes
  if (!routes[key]) notFound()
  const [eyebrow, title, description] = routes[key]
  const isLegal = ['privacy', 'terms', 'cookies', 'security', 'accessibility'].includes(key)
  return <main className="inner-page"><section className="inner-hero section-wrap"><p className="eyebrow">{eyebrow.toUpperCase()}</p><h1>{title}</h1><p>{description}</p><div className="inner-actions"><Link className="button" href={isLegal ? '/' : '/book-demo'}>{isLegal ? 'Back to homepage' : 'Book a demo'} <ArrowRight size={16} /></Link><Link className="text-link" href="/platform">Explore the platform ↗</Link></div></section><section className="inner-content section-wrap"><div className="content-card"><ShieldCheck size={26} /><h2>Built around responsible progress.</h2><p>AMRAH is intentionally presented as a proposed product experience. The public website does not claim live HR records, customer statistics, certifications or production integrations.</p><ul><li><Check size={16} /> Clear workflows for people teams</li><li><Check size={16} /> Accessible, responsive product design</li><li><Check size={16} /> Backend capabilities added only when implemented</li></ul></div><div className="content-aside"><p className="eyebrow">NEXT STEP</p><h2>Start with a conversation.</h2><p>Tell us what your organization needs to make HR operations more connected.</p><Link href="/contact" className="outline-button">Get in touch</Link></div></section></main>
}
