import { ContactForm } from '@/components/contact-form'
export const metadata = { title: 'Book a Demo | AMRAH', description: 'Request an AMRAH product conversation.' }
export default function BookDemoPage() { return <main className="form-page section-wrap"><div><p className="eyebrow">SEE AMRAH IN CONTEXT</p><h1>Book a demo.</h1><p>Share a little about your team and we&apos;ll shape the conversation around your priorities.</p></div><ContactForm demo /></main> }
