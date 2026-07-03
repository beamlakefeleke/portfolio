import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, SendIcon, CheckCircleIcon } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

// Specific error messages, not "Oops!"
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    if (error.message.includes('network') || error.message.includes('fetch')) {
      return 'Network error — check your connection and try again.';
    }
    if (error.message.includes('template') || error.message.includes('service')) {
      return 'Mail service configuration error. Email me directly at bamlakefele@gmail.com.';
    }
  }
  return 'Message failed to send. You can reach me directly at bamlakefele@gmail.com.';
}

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    emailjs
      .send(
        'service_pk0ogjj',
        'template_c2t4gk4',
        {
          from_name: form.name,
          to_name: 'Bamlake Feleke',
          from_email: form.email,
          to_email: 'bamlakefele@gmail.com',
          message: form.message,
        },
        'N2LA5PqhAJ_7oc_Wn'
      )
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        setStatus('error');
        setErrorMsg(getErrorMessage(err));
      });
  };

  const inputClass =
    'w-full themed-bg border themed-border rounded-sm px-4 py-3 text-sm font-body themed-text placeholder-muted/40 focus:outline-none focus:border-amber transition-colors duration-150';

  return (
    <section className="py-28 relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <p className="reveal text-xs font-mono text-amber uppercase tracking-widest mb-4">
          Contact
        </p>
        <h2 className="reveal font-display text-5xl md:text-6xl text-paper leading-tight mb-6">
          Let's talk
        </h2>
        <p className="reveal text-sm text-muted font-body mb-16 max-w-md leading-relaxed">
          Open to fulltime roles and selected freelance projects. If you have something specific
          in mind, drop the details and I'll come back to you within a day.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact links */}
          <div className="lg:col-span-2 reveal space-y-4">
            <a
              href="mailto:bamlakefele@gmail.com"
              className="flex items-center gap-4 p-4 border border-muted/20 rounded-sm hover:border-amber group transition-colors"
            >
              <MailIcon className="w-5 h-5 text-muted group-hover:text-amber transition-colors shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-muted uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-sm font-body text-paper">bamlakefele@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+251939616044"
              className="flex items-center gap-4 p-4 border border-muted/20 rounded-sm hover:border-amber group transition-colors"
            >
              <PhoneIcon className="w-5 h-5 text-muted group-hover:text-amber transition-colors shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-muted uppercase tracking-wider mb-0.5">Phone</p>
                <p className="text-sm font-body text-paper">+251 939 616 044</p>
              </div>
            </a>

            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/in/bamlake-feleke-37a279264"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 border border-muted/20 rounded-sm hover:border-amber group transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-5 h-5 text-muted group-hover:text-amber transition-colors" />
                <span className="text-xs font-mono text-muted group-hover:text-paper transition-colors">LinkedIn</span>
              </a>
              <a
                href="https://github.com/beamlakefeleke"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 border border-muted/20 rounded-sm hover:border-amber group transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-5 h-5 text-muted group-hover:text-amber transition-colors" />
                <span className="text-xs font-mono text-muted group-hover:text-paper transition-colors">GitHub</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start gap-3 p-8 border border-green-500/30 bg-green-500/5 rounded-sm"
              >
                <CheckCircleIcon className="w-8 h-8 text-green-400" />
                <h3 className="font-display text-2xl text-paper">Message sent.</h3>
                <p className="text-sm text-muted font-body">
                  I'll read it today and reply within 24 hours. Check your spam folder if you don't hear back.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs font-mono text-amber hover:text-paper transition-colors"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-muted uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-muted uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-muted uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you working on?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error state — specific, not generic */}
                {status === 'error' && (
                  <p className="text-sm font-body text-red-400 border border-red-400/20 bg-red-400/5 px-4 py-3 rounded-sm" role="alert">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-amber text-ink font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-paper transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <SendIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
