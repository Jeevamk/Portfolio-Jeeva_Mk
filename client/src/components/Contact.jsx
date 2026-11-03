import { useActionState } from 'react';
import { sendMessage } from '../api';

// React 19: the form submits through an action, and useActionState tracks the result
async function submitMessage(_prev, formData) {
  const body = Object.fromEntries(formData);
  try {
    const res = await sendMessage(body);
    return { ok: true, text: res.message, values: {} };
  } catch (err) {
    return { ok: false, text: err.message, values: body };
  }
}

export default function Contact({ profile }) {
  const [state, formAction, pending] = useActionState(submitMessage, { text: '', values: {} });
  const v = state.values;

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact-panel">
        <div className="contact-info">
          <h2 id="contact-title">Let’s work together</h2>
          <p>Hiring, building something, or just want to talk queues and workflows? Send a message and I’ll reply by email.</p>
          <dl>
            <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></dd></div>
            <div><dt>Location</dt><dd>{profile.location}</dd></div>
          </dl>
          <ul className="social">
            {profile.links.map((l) => (
              <li key={l.label}><a href={l.url} target="_blank" rel="noreferrer">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <form className="form" action={formAction}>
          <label>
            Name
            <input name="name" defaultValue={v.name} autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" defaultValue={v.email} autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" defaultValue={v.message} required minLength={10} />
          </label>
          <button type="submit" className="btn btn-primary" disabled={pending}>
            {pending ? 'Sending…' : 'Send message'}
          </button>
          <p role="status" className={`form-status ${state.ok ? 'ok' : 'err'}`}>{state.text}</p>
        </form>
        </div>
      </div>
    </section>
  );
}
