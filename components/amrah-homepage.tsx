'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BarChart3, CalendarCheck2, ChevronDown, FileText, Menu, ShieldCheck, Sparkles, UsersRound, X } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMRAH%20LOGO-ZTuK36HkrpTmsPsNz3gS0ukKw8K9vo.jpeg'

const capabilities = [
  { icon: UsersRound, title: 'Employee management', text: 'Bring employee records, documents, teams and lifecycle workflows into one clear view.', href: '/platform/employee-management' },
  { icon: CalendarCheck2, title: 'Attendance & leave', text: 'Make requests, approvals, balances and attendance summaries easier to coordinate.', href: '/platform/attendance-leave' },
  { icon: FileText, title: 'Recruitment & ATS', text: 'Create visibility across requisitions, candidates, interviews and pipeline stages.', href: '/platform/recruitment' },
  { icon: BarChart3, title: 'Workforce analytics', text: 'Turn workforce information into reporting concepts leaders can understand.', href: '/platform/analytics' },
]

function DashboardPreview() {
  return (
    <div className="dashboard-shell" aria-label="Illustrative AMRAH dashboard preview">
      <div className="dashboard-top"><span className="window-dot teal" /><span className="window-dot navy" /><span className="window-dot pale" /><span className="dashboard-label">AMRAH workspace</span><span className="avatar">JD</span></div>
      <div className="dashboard-body">
        <aside><div className="side-mark">A</div><span className="side-active" /><span /><span /><span /><span /></aside>
        <div className="dashboard-content">
          <div className="dash-heading"><div><p className="eyebrow">MONDAY, 24 JUNE 2024</p><h3>Good morning, Jordan</h3></div><button className="dash-button">+ Add employee</button></div>
          <div className="metric-grid"><div><span>Total employees</span><strong>248</strong><small className="up">↗ 8.4%</small></div><div><span>Open positions</span><strong>18</strong><small>Across 6 teams</small></div><div><span>On leave today</span><strong>12</strong><small>5% of workforce</small></div></div>
          <div className="dash-lower"><div className="chart-card"><div className="card-heading"><span>Headcount overview</span><span className="select-pill">Last 6 months⌄</span></div><div className="chart"><i /><i /><i /><i /><i /><i /><div className="chart-line" /></div><div className="months"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div></div><div className="activity-card"><div className="card-heading"><span>Quick view</span><span className="dots">•••</span></div><div className="activity-row"><b className="mini teal-bg">✓</b><span>Leave approvals<strong>8 awaiting action</strong></span></div><div className="activity-row"><b className="mini navy-bg">↗</b><span>Recruitment pipeline<strong>24 active candidates</strong></span></div><div className="activity-row"><b className="mini gold-bg">!</b><span>Review cycle<strong>12 due this week</strong></span></div></div></div>
          <p className="demo-note"><Sparkles size={13} /> Illustrative demonstration data</p>
        </div>
      </div>
    </div>
  )
}

export function AmrahHomepage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)
  return <main className="amrah-site">
    <div className="announcement"><span>Human resources intelligence, designed for clarity.</span><Link href="/platform">Explore the platform <ArrowRight size={14} /></Link></div>
    <header className="site-header"><Link href="/" className="brand"><img src={logoUrl} alt="AMRAH — Advanced Management & Recruitment Automation Hub" /></Link><button className="mobile-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button><nav className={menuOpen ? 'nav open' : 'nav'}><div className="nav-dropdown"><button onClick={() => setPlatformOpen(!platformOpen)} aria-expanded={platformOpen}>Platform <ChevronDown size={15} /></button>{platformOpen && <div className="dropdown-menu">{['Employee management','Attendance & leave','Recruitment & ATS','Performance management','Workforce analytics','Automation & AI'].map((item, i) => <Link key={item} href={capabilities[i % capabilities.length]?.href ?? '/platform'}>{item}</Link>)}</div>}</div><Link href="/solutions">Solutions</Link><Link href="/industries">Industries</Link><Link href="/pricing">Pricing</Link><Link href="/resources">Resources</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/login" className="login-link">Log in</Link><Link href="/book-demo" className="button button-small">Book a demo <ArrowRight size={15} /></Link></nav></header>
    <section className="hero section-wrap"><div className="hero-copy"><div className="kicker"><span /> HUMAN RESOURCES INTELLIGENCE PLATFORM</div><h1>Your people.<br /><em>Your processes.</em><br />One intelligent platform.</h1><p>Transform the way you manage people, streamline HR operations, and build high-performing workplaces with AMRAH.</p><div className="hero-actions"><Link href="/book-demo" className="button">Book a demo <ArrowRight size={17} /></Link><Link href="/platform" className="text-link">Explore the platform <span>↗</span></Link></div><div className="hero-proof"><div className="proof-icons"><span>HR</span><span>OP</span><span>TA</span></div><span>Built for teams who put people first</span></div></div><div className="hero-visual"><div className="glow" /><DashboardPreview /></div></section>
    <section className="trust-strip"><div className="section-wrap trust-inner"><span className="trust-label">ONE CONNECTED VIEW OF</span><span>People operations</span><span>Recruitment workflows</span><span>Workforce insights</span><span>HR automation</span></div></section>
    <section className="section-wrap intro-section"><div className="section-heading"><div><p className="eyebrow">A BETTER WAY TO WORK</p><h2>Make HR feel less fragmented.</h2></div><p>AMRAH is designed to help organizations organize HR information, connect people-related workflows and improve visibility across the employee journey.</p></div><div className="capability-grid">{capabilities.map(({ icon: Icon, title, text, href }) => <Link href={href} className="capability-card" key={title}><div className="icon-wrap"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><span className="card-arrow">↗</span></Link>)}</div></section>
    <section className="dark-section"><div className="section-wrap workflow"><div className="workflow-copy"><p className="eyebrow teal-text">THE INTENDED EXPERIENCE</p><h2>From scattered tasks to a clearer rhythm.</h2><p>Connect the moments that matter across your people operations — with an experience built around context, not complexity.</p><Link href="/platform" className="button button-light">See how it works <ArrowRight size={16} /></Link></div><div className="steps"><div className="step active"><span>01</span><div><h3>Organize HR information</h3><p>Give teams a reliable foundation for employee and organizational data.</p></div></div><div className="step"><span>02</span><div><h3>Connect people workflows</h3><p>Bring approvals, recruitment and performance processes together.</p></div></div><div className="step"><span>03</span><div><h3>See what needs attention</h3><p>Use reporting concepts that help leaders move with more context.</p></div></div></div></div></section>
    <section className="section-wrap cta-section"><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>The intelligence behind great workplaces.</h2><p>Explore the AMRAH vision or start a conversation about what your organization needs next.</p></div><div className="cta-actions"><Link href="/book-demo" className="button">Book a demo <ArrowRight size={17} /></Link><Link href="/contact" className="outline-button">Get in touch</Link></div></section>
    <footer className="site-footer"><div className="section-wrap footer-grid"><div><img src={logoUrl} alt="AMRAH" className="footer-logo" /><p>Human resources intelligence for better workplaces.</p></div><div><h4>Platform</h4><Link href="/platform">Overview</Link><Link href="/platform/employee-management">Employee management</Link><Link href="/platform/recruitment">Recruitment & ATS</Link><Link href="/platform/analytics">Workforce analytics</Link></div><div><h4>Company</h4><Link href="/about">About</Link><Link href="/resources">Resources</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link></div><div><h4>Start a conversation</h4><p>Have questions about the AMRAH vision?</p><Link href="/book-demo" className="footer-cta">Book a demo <ArrowRight size={15} /></Link></div></div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} AMRAH. Proposed product experience.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/security">Security</Link></div></div></footer>
  </main>
}
