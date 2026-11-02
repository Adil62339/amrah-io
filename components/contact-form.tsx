'use client'

import { FormEvent, useState } from 'react'

export function ContactForm({ demo = false }: { demo?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 500)
  }
  if (status === 'success') return <div className="form-success" role="status"><h2>Thanks for reaching out.</h2><p>Your message has been captured for this prototype. A live submission service must be connected before messages are delivered.</p></div>
  return <form className="contact-form" onSubmit={submit} noValidate><label>Name<input name="name" required autoComplete="name" /></label><label>Work email<input name="email" type="email" required autoComplete="email" /></label>{demo && <label>Organization<input name="organization" required autoComplete="organization" /></label>}<label>{demo ? 'What would you like to discuss?' : 'How can we help?'}<textarea name="message" required rows={5} /></label>{status === 'error' && <p className="form-error" role="alert">Please check the fields and try again.</p>}<button className="button" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : demo ? 'Request a demo' : 'Send message'}</button><p className="form-note">Prototype form — no email is sent until a server-side submission provider is configured.</p></form>
}
